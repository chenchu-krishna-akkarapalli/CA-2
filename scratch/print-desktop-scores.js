const fs = require('fs');
const report = JSON.parse(fs.readFileSync('scratch/lighthouse-report-desktop.json', 'utf8'));

console.log("=== DESKTOP LIGHTHOUSE SCORES ===");
for (const [key, category] of Object.entries(report.categories)) {
  console.log(`${category.title.padEnd(20)}: ${Math.round(category.score * 100)}/100`);
}
