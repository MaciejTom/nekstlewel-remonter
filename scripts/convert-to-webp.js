const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../public/images/remonter');

async function convertToWebP(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  try {
    const info = await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const newSize = info.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`);

    // Delete original after successful conversion
    // fs.unlinkSync(inputPath);

    return { original: originalSize, webp: newSize };
  } catch (err) {
    console.error(`✗ Error converting ${inputPath}:`, err.message);
    return null;
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let totalOriginal = 0;
  let totalWebP = 0;

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const subResult = await processDirectory(fullPath);
      totalOriginal += subResult.original;
      totalWebP += subResult.webp;
    } else {
      const result = await convertToWebP(fullPath);
      if (result) {
        totalOriginal += result.original;
        totalWebP += result.webp;
      }
    }
  }

  return { original: totalOriginal, webp: totalWebP };
}

async function main() {
  console.log('Converting images to WebP...\n');

  const result = await processDirectory(imageDir);

  const originalMB = (result.original / 1024 / 1024).toFixed(2);
  const webpMB = (result.webp / 1024 / 1024).toFixed(2);
  const savings = ((result.original - result.webp) / result.original * 100).toFixed(1);

  console.log(`\n========================================`);
  console.log(`Total: ${originalMB} MB → ${webpMB} MB (${savings}% savings)`);
  console.log(`========================================`);
}

main();
