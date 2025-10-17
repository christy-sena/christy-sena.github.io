import fs from 'fs'
import path from 'path'
import { chromium } from 'playwright'

const outDir = path.resolve(process.cwd(), 'public')
const bg = '#004225'
const invertedBg = '#ffffff'
const invertedText = '#004225'

const tasks = [
  { name: 'favicon-16.png', size: 16, text: 'S' },
  { name: 'favicon-32.png', size: 32, text: 'S' },
  { name: 'favicon-128.png', size: 128, text: 'Sena' },
  { name: 'favicon-180.png', size: 180, text: 'Sena' }
]

function htmlFor(size, text) {
  // font-size tuned per size for visual balance
  const fontSize = Math.round(size * (text.length > 1 ? 0.32 : 0.6))
  return `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap" rel="stylesheet">
      <style>
        html,body{height:100%;padding:0;margin:0}
        .icon{width:${size}px;height:${size}px;background:${bg};display:flex;align-items:center;justify-content:center}
        .label{font-family:'Cormorant Garamond', serif;color:#fff;font-weight:700;font-size:${fontSize}px;line-height:1}
      </style>
    </head>
    <body>
      <div class="icon" id="icon">
        <div class="label">${text}</div>
      </div>
    </body>
  </html>`
}

async function renderAll() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

  const browser = await chromium.launch({ args: ['--no-sandbox'] })
  try {
    for (const t of tasks) {
      // original (green background / white text)
      const page = await browser.newPage({ viewport: { width: t.size, height: t.size } })
      const html = htmlFor(t.size, t.text)
      await page.setContent(html, { waitUntil: 'networkidle' })
      const el = await page.$('#icon')
      const outPath = path.join(outDir, t.name)
      await el.screenshot({ path: outPath })
      console.log('Wrote', outPath)
      await page.close()

      // inverted (white background / green text)
      const pageInv = await browser.newPage({ viewport: { width: t.size, height: t.size } })
      const fontSize = Math.round(t.size * (t.text.length > 1 ? 0.32 : 0.6))
      const htmlInv = `<!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap" rel="stylesheet">
            <style>
              html,body{height:100%;padding:0;margin:0}
              .icon{width:${t.size}px;height:${t.size}px;background:${invertedBg};display:flex;align-items:center;justify-content:center}
              .label{font-family:'Cormorant Garamond', serif;color:${invertedText};font-weight:700;font-size:${fontSize}px;line-height:1}
            </style>
          </head>
          <body>
            <div class="icon" id="icon">
              <div class="label">${t.text}</div>
            </div>
          </body>
        </html>`
      await pageInv.setContent(htmlInv, { waitUntil: 'networkidle' })
      const elInv = await pageInv.$('#icon')
      const outPathInv = path.join(outDir, t.name.replace('.png', '-inverted.png'))
      await elInv.screenshot({ path: outPathInv })
      console.log('Wrote', outPathInv)
      await pageInv.close()
    }
  } finally {
    await browser.close()
  }
}

renderAll().catch(err => {
  console.error(err)
  process.exit(1)
})
