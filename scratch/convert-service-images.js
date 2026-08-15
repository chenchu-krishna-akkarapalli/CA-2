const sharp = require('sharp');
const fs = require('fs');

async function convertServiceImages() {
  const images = [
    'Image (Advisory Services)',
    'Image (Audit & Assurance)',
    'Image (Taxation)'
  ];

  for (const name of images) {
    const inputPath = `public/Assets/Images/${name}.png`;
    const avifPath = `public/Assets/Images/${name}.avif`;
    const webpPath = `public/Assets/Images/${name}.webp`;

    if (fs.existsSync(inputPath)) {
      await sharp(inputPath)
        .resize(776, 384, { fit: 'cover' })
        .avif({ quality: 85, effort: 6 })
        .toFile(avifPath);

      await sharp(inputPath)
        .resize(776, 384, { fit: 'cover' })
        .webp({ quality: 85, effort: 6 })
        .toFile(webpPath);

      console.log(`Converted ${name}:`);
      console.log(`  PNG:  ${fs.statSync(inputPath).size} bytes`);
      console.log(`  AVIF: ${fs.statSync(avifPath).size} bytes`);
      console.log(`  WebP: ${fs.statSync(webpPath).size} bytes`);
    }
  }
}

convertServiceImages().catch(console.error);
