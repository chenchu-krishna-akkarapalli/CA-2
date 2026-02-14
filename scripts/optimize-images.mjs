import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = 'public';
const APP_DIR = 'app';
const UNUSED_DIR = 'public/_unused';

// Ensure _unused directory exists
if (!fs.existsSync(UNUSED_DIR)) {
    fs.mkdirSync(UNUSED_DIR, { recursive: true });
}

function getAllFiles(dir, exts = []) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.next' && file !== '.git' && file !== '_unused') {
                results = results.concat(getAllFiles(filePath, exts));
            }
        } else {
            if (exts.length === 0 || exts.includes(path.extname(file).toLowerCase())) {
                results.push(filePath);
            }
        }
    });
    return results;
}

// Function to optimize an image
async function optimizeImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const basename = path.basename(filePath, ext);
    const dir = path.dirname(filePath);

    if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) return;

    console.log(`Optimizing: ${filePath}`);

    // Create responsive sizes
    const sizes = [320, 640, 960, 1280];
    const formats = ['avif', 'webp'];

    for (const width of sizes) {
        for (const format of formats) {
            const outPath = path.join(dir, `${basename}-${width}w.${format}`);
            if (fs.existsSync(outPath)) continue; // Skip if already exists

            try {
                let pipeline = sharp(filePath).resize({ width, withoutEnlargement: true });

                if (format === 'avif') {
                    pipeline = pipeline.avif({ quality: 50, effort: 4 }); // Effort 4 for speed/size balance
                } else {
                    pipeline = pipeline.webp({ quality: 75, effort: 4 });
                }

                await pipeline.toFile(outPath);

                // Check size < 150KB
                const stats = fs.statSync(outPath);
                if (stats.size > 150 * 1024) {
                    console.warn(`⚠️  ${outPath} is still large: ${(stats.size / 1024).toFixed(2)}KB`);
                }
            } catch (err) {
                console.error(`Error processing ${filePath} -> ${format} ${width}w:`, err);
            }
        }
    }

    // Also optimize original to WebP/AVIF if not already done, keeping original name but new ext
    for (const format of formats) {
        const outPath = path.join(dir, `${basename}.${format}`);
        if (fs.existsSync(outPath) && outPath !== filePath) continue;

        try {
            if (outPath !== filePath) {
                let pipeline = sharp(filePath);
                if (format === 'avif') {
                    pipeline = pipeline.avif({ quality: 80 });
                } else {
                    pipeline = pipeline.webp({ quality: 80 });
                }
                await pipeline.toFile(outPath);
            }
        } catch (err) {
            console.error(`Error converting ${filePath} to ${format}:`, err);
        }
    }
}

async function main() {
    console.log('Scanning for images...');

    // Find all images in public
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.avif'];
    const allImages = getAllFiles(PUBLIC_DIR, imageExtensions);

    // Find all source files
    const sourceExtensions = ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss'];
    const sourceFiles = [
        ...getAllFiles('app', sourceExtensions),
        ...getAllFiles('components', sourceExtensions),
        ...getAllFiles('data', sourceExtensions)
    ];

    console.log(`Found ${allImages.length} images.`);
    console.log(`Found ${sourceFiles.length} source files to scan.`);

    // Read all source content for searching
    const sourceContents = sourceFiles.map(f => fs.readFileSync(f, 'utf8'));

    const unusedImages = [];
    const usedImages = [];

    for (const imgPath of allImages) {
        const filename = path.basename(imgPath);
        // Normalize relative path specific to 'public/' removal for cleaner searching
        // public/assets/img.png -> /assets/img.png
        const relativePath = imgPath.replace(/^public/, '').replace(/\\/g, '/');

        let isUsed = false;

        // Search for filename OR relative path
        for (const content of sourceContents) {
            if (content.includes(filename) || content.includes(relativePath)) {
                isUsed = true;
                break;
            }
        }

        if (isUsed) {
            usedImages.push(imgPath);
        } else {
            unusedImages.push(imgPath);
        }
    }

    console.log(`\nFound ${unusedImages.length} potentially unused images.`);

    // Move unused
    for (const img of unusedImages) {
        // Create flattened name to avoid collision in _unused
        const flatname = img.replace(/^public[\\/]/, '').replace(/[\\/]/g, '_');
        const dest = path.join(UNUSED_DIR, flatname);

        console.log(`Moving unused: ${img} -> ${dest}`);
        try {
            fs.renameSync(img, dest);
        } catch (e) {
            console.error(`Failed to move ${img}:`, e);
        }
    }

    console.log(`\nOptimizing ${usedImages.length} used images...`);

    for (const img of usedImages) {
        // Skip optimizing SVGs for now with sharp (it handles raster)
        if (path.extname(img) === '.svg') continue;
        await optimizeImage(img);
    }

    console.log('Done.');
}

main().catch(console.error);
