// 사용법: NODE_PATH=<playwright 가 설치된 node_modules> node render.cjs <portfolio.html 절대경로> <출력 pdf> <페이지 png 폴더>
const { chromium } = require('playwright');
(async () => {
  const [html, pdfOut, pngDir] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 2 });
  await p.goto('file://' + html, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.emulateMedia({ media: 'print' });
  // 페이지 넘침 검사: .page 안 자식이 folio 위(바닥 14mm)까지 내려오면 경고
  const over = await p.evaluate(() => [...document.querySelectorAll('.page')].map((pg, i) => {
    const limit = pg.getBoundingClientRect().bottom - 14 * 3.7795;
    let max = 0;
    pg.querySelectorAll('*:not(.folio):not(.folio *)').forEach(el => { const r = el.getBoundingClientRect(); if (r.height) max = Math.max(max, r.bottom); });
    return { page: i + 1, spareMm: Math.round((limit - max) / 3.7795 * 10) / 10 };
  }));
  console.log(JSON.stringify(over));
  const pages = await p.$$('.page');
  for (let i = 0; i < pages.length; i++) await pages[i].screenshot({ path: `${pngDir}/p${i + 1}.png` });
  await p.pdf({ path: pdfOut, format: 'A4', printBackground: true, preferCSSPageSize: true });
  await b.close();
})();
