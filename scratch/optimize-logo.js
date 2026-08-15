const fs = require('fs');
const sharp = require('sharp');

async function optimizeLogo() {
  const svgContent = fs.readFileSync('public/Assets/logo-malli.svg', 'utf8');
  
  // Extract base64 png
  const match = svgContent.match(/xlink:href="data:image\/png;base64,([^"]+)"/);
  if (!match) {
    console.log("No base64 image found in logo-malli.svg");
    return;
  }

  const rawBuffer = Buffer.from(match[1], 'base64');
  console.log("Original base64 image buffer size:", rawBuffer.length, "bytes");

  // Resize to 160x136 for crisp retina rendering at 39x33
  const optimizedBuffer = await sharp(rawBuffer)
    .resize(160, 136, { fit: 'inside' })
    .png({ compressionLevel: 9, quality: 90 })
    .toBuffer();

  console.log("Optimized image buffer size:", optimizedBuffer.length, "bytes");
  const newBase64 = optimizedBuffer.toString('base64');

  // Also get the new transform for the pattern
  // Old image was 3508 x 2481 with matrix(0.00070098 0 0 0.000732842 -0.717489 -0.420434)
  // Let's create an optimized SVG
  const metadata = await sharp(optimizedBuffer).metadata();
  console.log("Optimized dimensions:", metadata.width, metadata.height);

  // We can write clean SVG with embedded crisp PNG
  // Or render image directly inside SVG without pattern matrix if possible, or adjust matrix
  // In the original: pattern was width=1 height=1, image width=3508, height=2481
  // Scale was 0.00070098 => 3508 * 0.00070098 ≈ 2.459; offset -0.717489
  // Since we cropped/resized to the exact crest or same aspect ratio:
  // Let's check:
  const newSvgContent = svgContent.replace(
    /xlink:href="data:image\/png;base64,[^"]+"/,
    `xlink:href="data:image/png;base64,${newBase64}"`
  ).replace(
    /width="3508" height="2481"/,
    `width="${metadata.width}" height="${metadata.height}"`
  ).replace(
    /matrix\(0\.00070098 0 0 0\.000732842 -0\.717489 -0\.420434\)/,
    `matrix(${ (1 / metadata.width) * (3508 * 0.00070098) } 0 0 ${ (1 / metadata.height) * (2481 * 0.000732842) } -0.717489 -0.420434)`
  );

  fs.writeFileSync('public/Assets/logo-malli.svg', newSvgContent);
  console.log("Updated public/Assets/logo-malli.svg! New total size:", fs.statSync('public/Assets/logo-malli.svg').size, "bytes");

  // Create crisp favicon.ico and app/icon.svg
  const faviconSvg = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#0f172a"/>
  <text x="32" y="37" fill="#38bdf8" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="22" text-anchor="middle" dominant-baseline="middle" letter-spacing="1">CMK</text>
  <text x="32" y="50" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="9" text-anchor="middle" dominant-baseline="middle" letter-spacing="2">CA FIRM</text>
</svg>`;

  fs.writeFileSync('public/favicon.svg', faviconSvg);
  fs.writeFileSync('app/icon.svg', faviconSvg);

  const faviconPng = await sharp(Buffer.from(faviconSvg))
    .resize(32, 32)
    .png()
    .toBuffer();
  fs.writeFileSync('public/favicon.ico', faviconPng);
  console.log("Created public/favicon.ico and public/favicon.svg!");
}

optimizeLogo().catch(console.error);
