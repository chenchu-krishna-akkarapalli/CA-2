const fs = require('fs');
const report = JSON.parse(fs.readFileSync('scratch/lighthouse-report.json', 'utf8'));

const cc = report.audits['color-contrast'];
console.log('Total color contrast failures:', cc.details.items.length);
cc.details.items.forEach((item, i) => {
  console.log(`\n#${i+1}: ${item.node.nodeLabel} | selector: ${item.node.selector}`);
  console.log('   Snippet:', item.node.snippet);
  console.log('   Explanation:', item.node.explanation);
});
