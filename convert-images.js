const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const artifactsDir = 'C:\\Users\\sivap\\.gemini\\antigravity\\brain\\822bfca2-2dad-4ef3-b02b-371fdbd7549c';
const outputDir = path.join(__dirname, 'public', 'images');

// Find the generated images by prefix
const files = fs.readdirSync(artifactsDir);

const imageMap = {
  'hero_construction': 'hero.webp',
  'fire_equipment': 'fire-equipment.webp',
  'safety_equipment': 'safety-equipment.webp',
  'housekeeping_sanitary': 'housekeeping-sanitary.webp',
  'stationery_solutions': 'stationery-solutions.webp',
  'electrical_materials': 'electrical-materials.webp',
  'construction_works': 'construction-works.webp',
  'interior_works': 'interior-works.webp',
};

async function convertAll() {
  for (const [prefix, outputName] of Object.entries(imageMap)) {
    const sourceFile = files.find(f => f.startsWith(prefix) && f.endsWith('.png'));
    if (!sourceFile) {
      console.log(`SKIP: No file found for prefix ${prefix}`);
      continue;
    }
    const inputPath = path.join(artifactsDir, sourceFile);
    const outputPath = path.join(outputDir, outputName);
    
    // Hero gets landscape crop, category images get square crop
    if (prefix === 'hero_construction') {
      await sharp(inputPath)
        .resize(1920, 800, { fit: 'cover', position: 'center' })
        .webp({ quality: 80 })
        .toFile(outputPath);
    } else {
      await sharp(inputPath)
        .resize(800, 800, { fit: 'cover', position: 'center' })
        .webp({ quality: 80 })
        .toFile(outputPath);
    }
    
    const stats = fs.statSync(outputPath);
    console.log(`OK: ${prefix} -> ${outputName} (${Math.round(stats.size / 1024)}KB)`);
  }
}

convertAll().then(() => console.log('Done!')).catch(console.error);
