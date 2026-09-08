const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const OUTDIR = path.join(__dirname, 'screenshots');
const BASE = 'https://solmais.expostacker.com.br';
const VIEWPORT = { width: 1440, height: 900 };
const MOBILE = { width: 390, height: 844 };

const PAGES = [
  { slug: 'index', url: `${BASE}/` },
  { slug: 'como-funciona', url: `${BASE}/como-funciona.html` },
  { slug: 'simulador', url: `${BASE}/simulador.html` },
  { slug: 'monitoramento', url: `${BASE}/monitoramento.html` },
  { slug: 'projetos', url: `${BASE}/projetos.html` },
  { slug: 'projeto-residencial-santos-demo', url: `${BASE}/projeto-residencial-santos-demo.html` },
  { slug: 'projeto-comercial-sao-vicente-demo', url: `${BASE}/projeto-comercial-sao-vicente-demo.html` },
  { slug: 'projeto-condominio-praia-grande-demo', url: `${BASE}/projeto-condominio-praia-grande-demo.html` },
  { slug: 'projeto-residencial-guaruja-demo', url: `${BASE}/projeto-residencial-guaruja-demo.html` },
  { slug: 'projeto-rural-cubatao-demo', url: `${BASE}/projeto-rural-cubatao-demo.html` },
  { slug: 'conta', url: `${BASE}/conta.html` },
  { slug: 'sobre', url: `${BASE}/sobre.html` },
  { slug: 'contato', url: `${BASE}/contato.html` },
  { slug: 'faq', url: `${BASE}/faq.html` },
  { slug: 'comparador', url: `${BASE}/comparador.html` },
];

(async () => {
  const browser = await chromium.launch();
  for (const p of PAGES) {
    const context = await browser.newContext({ viewport: VIEWPORT });
    const page = await context.newPage();
    await page.goto(p.url, { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.join(OUTDIR, `${p.slug}-desktop.png`) });
    await page.setViewportSize(MOBILE);
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(OUTDIR, `${p.slug}-mobile.png`) });
    await context.close();
    console.log('OK', p.slug);
  }
  await browser.close();
  console.log('Done', PAGES.length, 'pages');
})();
