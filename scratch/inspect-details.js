const fs = require('fs');
const report = JSON.parse(fs.readFileSync('scratch/lighthouse-report.json', 'utf8'));

const auditIds = [
  'color-contrast',
  'label-content-name-mismatch',
  'errors-in-console',
  'inspector-issues',
  'third-party-cookies',
  'lcp-discovery-insight',
  'render-blocking-insight'
];

for (const id of auditIds) {
  const audit = report.audits[id];
  console.log(`\n=================== ${id} ===================`);
  console.log('Score:', audit?.score);
  console.log('DisplayValue:', audit?.displayValue);
  if (audit?.details?.items) {
    console.log('Items:', JSON.stringify(audit.details.items, null, 2));
  }
}
