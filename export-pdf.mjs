// export-long-pdf.mjs
import { chromium } from 'playwright';

const START_URL = process.env.START_URL || 'http://localhost:5173';
const OUT = process.env.OUTPUT || 'site-long.pdf';
const VIEWPORT_WIDTH = parseInt(process.env.VIEWPORT_WIDTH || '1280', 10);

// Chromium has a max PDF page height (~200 inches ≈ 19200 px @96dpi).
const MAX_INCHES = 200;
const PX_PER_IN = 96;

const cssFixes = `
  /* Kill animations & make colours print as-seen */
  * { animation: none !important; transition: none !important; }
  :root { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  html, body { margin: 0 !important; padding: 0 !important; }
  /* Avoid clipping */
  * { overflow: visible !important; }
  /* Make fixed headers/footers flow with content */
  [style*="position:fixed"], .fixed, .sticky, [class*="sticky"] {
    position: static !important; top:auto !important; bottom:auto !important;
  }
`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Use SCREEN media so your normal styles apply (print media often paginates differently)
  await page.emulateMedia({ media: 'screen' });

  await page.goto(START_URL, { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: cssFixes });

  // Optional: bump viewport so layout matches what you want captured
  await page.setViewportSize({ width: VIEWPORT_WIDTH, height: 1000 });

  // Expand lazy content if needed (e.g., accordions/tabs), or scroll to bottom to trigger lazy-load
  await page.evaluate(async () => {
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise(r => setTimeout(r, 500));
    window.scrollTo(0, 0);
  });

  // Measure full document height
  const docHeightPx = await page.evaluate(() =>
    Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    )
  );

  // Convert to inches and clamp to Chromium max
  const neededInches = docHeightPx / PX_PER_IN;
  const usedInches = Math.min(neededInches, MAX_INCHES);

  // Tell Chromium to make ONE tall page of the needed height
  await page.addStyleTag({
    content: `@page { size: ${VIEWPORT_WIDTH}px ${usedInches * PX_PER_IN}px; margin: 0; }`
  });

  await page.pdf({
    path: OUT,
    printBackground: true,
    preferCSSPageSize: true,     // respect the @page size we just set
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    width: `${VIEWPORT_WIDTH}px`,
    height: `${usedInches * PX_PER_IN}px`,
    scale: 1
  });

  console.log(`Saved ${OUT}`);
  await browser.close();

  if (neededInches > MAX_INCHES) {
    console.warn(
      `⚠️ Page is longer (${neededInches.toFixed(1)}in) than Chromium's max (${MAX_INCHES}in).
Generated the tallest allowed single page. Consider narrowing VIEWPORT_WIDTH or reducing content height.`
    );
  }
})();
