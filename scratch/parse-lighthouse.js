const fs = require('fs');

const report = JSON.parse(fs.readFileSync('scratch/lighthouse-report.json', 'utf8'));

console.log("==========================================");
console.log("       LIGHTHOUSE SCORES (CURRENT)        ");
console.log("==========================================");

for (const [key, category] of Object.entries(report.categories)) {
  const score = Math.round(category.score * 100);
  console.log(`${category.title.padEnd(20)}: ${score}/100`);
}

console.log("\n==========================================");
console.log("         FAILED / IMPERFECT AUDITS        ");
console.log("==========================================");

for (const [key, audit] of Object.entries(report.audits)) {
  if (audit.score !== null && audit.score < 1 && audit.scoreDisplayMode !== 'notApplicable' && audit.scoreDisplayMode !== 'informative') {
    console.log(`\n[${audit.score * 100}%] ${audit.title} (${audit.id})`);
    if (audit.displayValue) {
      console.log(`  Display Value: ${audit.displayValue}`);
    }
    if (audit.explanation) {
      console.log(`  Explanation: ${audit.explanation}`);
    }
    if (audit.details && audit.details.items && audit.details.items.length > 0) {
      console.log(`  Items (${audit.details.items.length}):`, JSON.stringify(audit.details.items.slice(0, 5), null, 2));
    }
  }
}
