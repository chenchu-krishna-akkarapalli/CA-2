const fs = require('fs');
const report = JSON.parse(fs.readFileSync('scratch/lighthouse-report.json', 'utf8'));

console.log("=== Category Scores ===");
for (const [key, category] of Object.entries(report.categories)) {
  console.log(`${category.title}: ${Math.round(category.score * 100)}/100`);
}

console.log("\n=== Failing Audits with category mapping ===");
for (const [catKey, cat] of Object.entries(report.categories)) {
  console.log(`\nCategory: ${cat.title} (${Math.round(cat.score * 100)}/100)`);
  for (const auditRef of cat.auditRefs) {
    const audit = report.audits[auditRef.id];
    if (audit && audit.score !== null && audit.score < 1 && audit.scoreDisplayMode !== 'notApplicable' && audit.scoreDisplayMode !== 'informative') {
      console.log(`  - [${Math.round(audit.score * 100)}%] ${audit.title} (id: ${audit.id}, weight: ${auditRef.weight})`);
      if (audit.displayValue) console.log(`      Value: ${audit.displayValue}`);
      if (audit.explanation) console.log(`      Explanation: ${audit.explanation}`);
    }
  }
}
