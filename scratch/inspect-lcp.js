const fs = require('fs');
const report = JSON.parse(fs.readFileSync('scratch/lighthouse-report.json', 'utf8'));

const lcp = report.audits['largest-contentful-paint'];
const lcpEl = report.audits['largest-contentful-paint-element'];
const lcpDisc = report.audits['lcp-discovery-insight'];

console.log("LCP Audit:", lcp);
console.log("LCP Element:", JSON.stringify(lcpEl, null, 2));
console.log("LCP Discovery:", JSON.stringify(lcpDisc, null, 2));
