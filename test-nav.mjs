import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

// Track CLS
await page.addInitScript(() => {
  window.__cls = 0;
  new PerformanceObserver((list) => {
    for (const e of list.getEntries()) {
      if (!e.hadRecentInput) window.__cls += e.value;
    }
  }).observe({ type: "layout-shift", buffered: true });
});

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

// 1 — Top bar: check bg color
const topBarStyle = await page.evaluate(() => {
  // Look for the location strip div
  const el = document.querySelector(".bg-\\[\\#0f172a\\], [class*='bg-brand-primary']");
  if (!el) {
    // Try by content — find the Chennai link's parent
    const chennaiLink = Array.from(document.querySelectorAll("a")).find(a => a.textContent?.includes("Chennai"));
    if (chennaiLink) {
      const bar = chennaiLink.closest("div.w-full");
      return bar ? window.getComputedStyle(bar).backgroundColor : "bar parent not found";
    }
    return "top bar not found";
  }
  return window.getComputedStyle(el).backgroundColor;
});
console.log("Top bar computed bg:", topBarStyle);

// Check text color in top bar
const topBarTextColor = await page.evaluate(() => {
  const el = Array.from(document.querySelectorAll("span")).find(s => s.textContent?.trim() === "Chennai");
  return el ? window.getComputedStyle(el).color : "Chennai span not found";
});
console.log("Top bar text color (Chennai):", topBarTextColor);

// 2 — Find nav buttons at xl breakpoint (1440px wide)
await page.waitForSelector("button[aria-haspopup='true']", { timeout: 10000 });
const navButtons = await page.locator("button[aria-haspopup='true']").all();
console.log(`Nav dropdown buttons found: ${navButtons.length}`);

for (const btn of navButtons) {
  console.log("  -", await btn.textContent());
}

// 3 — Test mega menu ("Start Business")
const startBizBtn = page.locator("button[aria-haspopup='true']").filter({ hasText: "Start Business" });
const clsBefore = await page.evaluate(() => window.__cls);
console.log("\nCLS before click:", clsBefore.toFixed(4));

await startBizBtn.click();
await page.waitForTimeout(500);

const clsAfter = await page.evaluate(() => window.__cls);
console.log("CLS after 'Start Business' click:", clsAfter.toFixed(4));
console.log("CLS delta:", (clsAfter - clsBefore).toFixed(4));

// Check mega menu is visible and in viewport
const megaMenuInfo = await page.evaluate(() => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  // Find visible large positioned element
  const candidates = Array.from(document.querySelectorAll("[class*='absolute'], [class*='fixed']"))
    .filter(el => {
      const r = el.getBoundingClientRect();
      return r.width > 300 && r.height > 100 && r.top >= 0 && r.top < vh;
    });
  return candidates.map(el => {
    const r = el.getBoundingClientRect();
    return {
      w: Math.round(r.width),
      h: Math.round(r.height),
      left: Math.round(r.left),
      right: Math.round(r.right),
      top: Math.round(r.top),
      overflowsLeft: r.left < 0,
      overflowsRight: r.right > vw,
      vw,
    };
  }).slice(0, 3);
});
console.log("Visible large positioned elements (mega menu):", JSON.stringify(megaMenuInfo, null, 2));

await page.screenshot({ path: "test-mega-open.png" });
console.log("Screenshot: test-mega-open.png");

// 4 — Close and test NRI Services (simple dropdown)
await startBizBtn.click();
await page.waitForTimeout(300);

const nriBtn = page.locator("button[aria-haspopup='true']").filter({ hasText: "NRI" });
const nriCount = await nriBtn.count();
console.log(`\nNRI button found: ${nriCount > 0}`);

if (nriCount > 0) {
  const clsBeforeNRI = await page.evaluate(() => window.__cls);
  await nriBtn.click();
  await page.waitForTimeout(500);
  const clsAfterNRI = await page.evaluate(() => window.__cls);
  console.log("CLS after NRI click:", clsAfterNRI.toFixed(4));
  console.log("CLS delta NRI:", (clsAfterNRI - clsBeforeNRI).toFixed(4));
  await page.screenshot({ path: "test-nri-open.png" });
  console.log("Screenshot: test-nri-open.png");
}

// 5 — Final CLS total
const clsTotal = await page.evaluate(() => window.__cls);
console.log("\n=== FINAL CLS TOTAL:", clsTotal.toFixed(4), "(target < 0.1) ===");
if (clsTotal < 0.1) console.log("PASS: CLS within acceptable range");
else if (clsTotal < 0.25) console.log("WARN: CLS needs improvement (0.1 – 0.25)");
else console.log("FAIL: CLS too high (> 0.25)");

await browser.close();
console.log("\n=== TEST COMPLETE ===");
