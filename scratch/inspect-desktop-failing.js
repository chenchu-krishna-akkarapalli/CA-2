const fs = require('fs');
const report = JSON.parse(fs.readFileSync('scratch/lighthouse-report-desktop.json', 'utf8'));

for (const [key, audit] of Object.entries(report.audits)) {
  if (audit.score !== null && audit.score < 1 && audit.scoreDisplayMode !== 'notApplicable' && audit.scoreDisplayMode !== 'informative') {
    console.log(`- [${Math.round(audit.score * 100)}%] ${audit.title} (${audit.id})`);
    if (audit.displayValue) console.log(`    Value: ${audit.displayValue}`);
  }
}
