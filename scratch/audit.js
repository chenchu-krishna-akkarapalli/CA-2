const { chromium } = require('playwright');

async function runAudit() {
  console.log("=== Starting Landing Page Audit on http://localhost:3456/ ===");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await context.newPage();

  const consoleLogs = [];
  const networkErrors = [];

  page.on('console', msg => {
    consoleLogs.push({ type: msg.type(), text: msg.text() });
  });

  page.on('response', resp => {
    if (resp.status() >= 400) {
      networkErrors.push({ url: resp.url(), status: resp.status() });
    }
  });

  const startTime = Date.now();
  await page.goto('http://localhost:3456/', { waitUntil: 'networkidle' });
  const loadTime = Date.now() - startTime;

  console.log(`\n1. Page Load Time (networkidle): ${loadTime}ms`);
  console.log(`2. Network Errors (${networkErrors.length}):`, networkErrors);
  console.log(`3. Console Logs (${consoleLogs.length}):`, consoleLogs);

  // SEO & Head Elements Audit
  const headAudit = await page.evaluate(() => {
    return {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content,
      viewport: document.querySelector('meta[name="viewport"]')?.content,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      charset: document.characterSet,
      htmlLang: document.documentElement.lang,
      h1Count: document.querySelectorAll('h1').length,
      h1Text: Array.from(document.querySelectorAll('h1')).map(h => h.textContent?.trim()),
      h2Count: document.querySelectorAll('h2').length,
      imagesWithoutAlt: Array.from(document.querySelectorAll('img:not([alt])')).map(img => img.src),
      linksWithoutText: Array.from(document.querySelectorAll('a')).filter(a => !a.innerText?.trim() && !a.getAttribute('aria-label')).map(a => a.href),
      buttonsWithoutLabel: Array.from(document.querySelectorAll('button')).filter(b => !b.innerText?.trim() && !b.getAttribute('aria-label')).length,
      metaThemeColor: document.querySelector('meta[name="theme-color"]')?.content,
      jsonLdCount: document.querySelectorAll('script[type="application/ld+json"]').length,
      manifest: document.querySelector('link[rel="manifest"]')?.href,
    };
  });

  console.log("\n=== SEO & Head Audit ===");
  console.log("Title:", headAudit.title);
  console.log("Description:", headAudit.description);
  console.log("HTML Lang:", headAudit.htmlLang);
  console.log("H1 Count:", headAudit.h1Count, headAudit.h1Text);
  console.log("H2 Count:", headAudit.h2Count);
  console.log("Images Without Alt:", headAudit.imagesWithoutAlt);
  console.log("Links Without Text/Aria:", headAudit.linksWithoutText);
  console.log("Buttons Without Label:", headAudit.buttonsWithoutLabel);
  console.log("JSON-LD Count:", headAudit.jsonLdCount);

  // Performance & Web Vitals
  const webVitals = await page.evaluate(() => {
    return new Promise(resolve => {
      let cls = 0;
      let lcp = 0;
      let fcp = 0;

      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            cls += entry.value;
          }
        }
      }).observe({ type: 'layout-shift', buffered: true });

      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          lcp = entries[entries.length - 1].startTime;
        }
      }).observe({ type: 'largest-contentful-paint', buffered: true });

      const paintEntries = performance.getEntriesByType('paint');
      for (const entry of paintEntries) {
        if (entry.name === 'first-contentful-paint') {
          fcp = entry.startTime;
        }
      }

      setTimeout(() => {
        resolve({
          fcp: Math.round(fcp),
          lcp: Math.round(lcp),
          cls: parseFloat(cls.toFixed(4)),
          domElements: document.querySelectorAll('*').length
        });
      }, 500);
    });
  });

  console.log("\n=== Web Vitals & Performance ===");
  console.log(`FCP: ${webVitals.fcp}ms`);
  console.log(`LCP: ${webVitals.lcp}ms`);
  console.log(`CLS: ${webVitals.cls}`);
  console.log(`Total DOM Elements: ${webVitals.domElements}`);

  // Test Mobile Viewport (iPhone 14 / Pixel 7 size)
  console.log("\n=== Mobile Viewport Audit (390x844) ===");
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 390, height: 844 });
  await mobilePage.goto('http://localhost:3456/', { waitUntil: 'networkidle' });

  const mobileAudit = await mobilePage.evaluate(() => {
    const tapTargets = [];
    const interactiveElements = Array.from(document.querySelectorAll('a, button, input, select, textarea'));
    for (const el of interactiveElements) {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0 && (rect.width < 36 || rect.height < 36)) {
        tapTargets.push({
          tag: el.tagName,
          text: el.textContent?.trim().slice(0, 30),
          width: Math.round(rect.width),
          height: Math.round(rect.height)
        });
      }
    }

    const horizontalScroll = document.documentElement.scrollWidth > window.innerWidth;

    return {
      smallTapTargets: tapTargets,
      hasHorizontalScroll: horizontalScroll,
      bodyWidth: document.body.offsetWidth,
      windowWidth: window.innerWidth
    };
  });

  console.log("Mobile Horizontal Scroll Detected:", mobileAudit.hasHorizontalScroll);
  console.log("Mobile Tap Targets < 36px:", mobileAudit.smallTapTargets.length, mobileAudit.smallTapTargets);

  await browser.close();
  console.log("\n=== Audit Complete ===");
}

runAudit().catch(err => console.error("Audit error:", err));
