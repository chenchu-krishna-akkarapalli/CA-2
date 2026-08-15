const fs = require('fs');
const report = JSON.parse(fs.readFileSync('scratch/lighthouse-report.json', 'utf8'));

console.log("=== Performance Metrics ===");
console.log("FCP:", report.audits['first-contentful-paint']?.displayValue, report.audits['first-contentful-paint']?.numericValue);
console.log("LCP:", report.audits['largest-contentful-paint']?.displayValue, report.audits['largest-contentful-paint']?.numericValue);
console.log("TBT:", report.audits['total-blocking-time']?.displayValue, report.audits['total-blocking-time']?.numericValue);
console.log("CLS:", report.audits['cumulative-layout-shift']?.displayValue, report.audits['cumulative-layout-shift']?.numericValue);
console.log("Speed Index:", report.audits['speed-index']?.displayValue, report.audits['speed-index']?.numericValue);

console.log("\n=== LCP Element ===");
const lcpAudit = report.audits['largest-contentful-paint-element'];
console.log(JSON.stringify(lcpAudit?.details?.items, null, 2));

console.log("\n=== Render Blocking Resources ===");
const rb = report.audits['render-blocking-resources'] || report.audits['render-blocking-insight'];
console.log(JSON.stringify(rb?.details?.items, null, 2));

console.log("\n=== Main Thread Work Breakdown ===");
const mt = report.audits['mainthread-work-breakdown'];
console.log(JSON.stringify(mt?.details?.items, null, 2));

console.log("\n=== Long Tasks / Bootup Time ===");
const boot = report.audits['bootup-time'];
console.log(JSON.stringify(boot?.details?.items, null, 2));
