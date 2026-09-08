const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'out');
const PUBLIC = 'http://localhost:3005';

function getPublicSlugs() {
  return fs.readdirSync(OUT)
    .filter(f => f.endsWith('.html') && f !== '404.html')
    .map(f => f === 'index.html' ? '' : f);
}

test('todas as paginas respondem 200', async ({ page }) => {
  const slugs = getPublicSlugs();
  for (const slug of slugs) {
    const res = await page.request.get(`${PUBLIC}/${slug}`);
    expect(res.status(), `falha em /${slug}`).toBe(200);
  }
});

test('links internos resolvem para arquivos existentes', async ({ page }) => {
  const slugs = getPublicSlugs().filter(s => !s.startsWith('admin-')).slice(0, 15);
  const checked = new Set();
  for (const slug of slugs) {
    await page.goto(`${PUBLIC}/${slug}`);
    const hrefs = await page.locator('a[href]').evaluateAll(links =>
      links.map(a => a.getAttribute('href'))
    );
    for (const href of hrefs) {
      if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel')) continue;
      const abs = new URL(href, `${PUBLIC}/${slug}`).pathname.replace(/^\//, '');
      const file = abs === '' ? 'index.html' : abs.replace(/\/$/, '.html');
      if (checked.has(file)) continue;
      checked.add(file);
      const exists = fs.existsSync(path.join(OUT, file)) || fs.existsSync(path.join(OUT, file + '.html'));
      expect(exists, `link quebrado: ${href} em /${slug}`).toBe(true);
    }
  }
});

test('simulador wizard navega pelas 6 etapas', async ({ page }) => {
  await page.goto(`${PUBLIC}/simulador.html`);
  await expect(page.locator('.wizard-panel[data-panel="1"]')).toBeVisible();

  for (let i = 2; i <= 6; i++) {
    await page.locator('#wizard-next').click();
    await expect(page.locator(`.wizard-panel[data-panel="${i}"]`)).toBeVisible();
  }

  await page.locator('#wizard-next').click();
  await expect(page).toHaveURL(/comparador\.html/);
});

test('monitoramento apresenta dashboard e aviso demonstrativo', async ({ page }) => {
  await page.goto(`${PUBLIC}/monitoramento.html`);
  await expect(page.locator('text=dados fictícios').first()).toBeVisible();
  await expect(page.locator('text=Gerando agora').first()).toBeVisible();
});

test('portal do cliente e admin apresentam avisos demonstrativos', async ({ page }) => {
  await page.goto(`${PUBLIC}/conta.html`);
  await expect(page.locator('text=Plataforma demonstrativa').first()).toBeVisible();
  await page.goto(`${PUBLIC}/admin.html`);
  await expect(page.locator('text=Plataforma demonstrativa').first()).toBeVisible();
});

test('home nao gera erros de console', async ({ page }) => {
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));
  await page.goto(`${PUBLIC}/`);
  await page.waitForTimeout(2500);
  expect(errors, `erros: ${errors.join(', ')}`).toEqual([]);
});
