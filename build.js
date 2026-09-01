/* SolMais 2.0 — Build
   Le dados JSON, renderiza paginas, copia assets, gera sitemap e robots */

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'out');
const SRC = path.join(__dirname, 'src');

/* ---------- Carregar dados ---------- */
function loadData() {
  const dataDir = path.join(SRC, 'data');
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
  const data = {};
  files.forEach(f => {
    const key = f.replace(/\.json$/, '');
    data[key] = JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8'));
  });
  return data;
}

/* ---------- Carregar templates ---------- */
const T = require(path.join(SRC, 'templates', 'templates.js'));

/* ---------- Carregar paginas ---------- */
const pageDir = path.join(SRC, 'pages');
const pageFiles = fs.readdirSync(pageDir).filter(f => f.endsWith('.js'));
const renderers = pageFiles.map(f => require(path.join(pageDir, f)));

/* ---------- Gerar sitemap ---------- */
function generateSitemap(pages, data) {
  const base = data.store.url.replace(/\/$/, '');
  const today = new Date().toISOString().split('T')[0];
  const seen = new Set();
  const urls = pages
    .filter(p => !p.noindex)
    .map(p => {
      const fname = p.filename.replace(/\.html$/, '');
      const loc = fname === 'index' ? base + '/' : base + '/' + fname;
      if (seen.has(loc)) return null;
      seen.add(loc);
      return '  <url>\n    <loc>' + loc + '</loc>\n    <lastmod>' + today + '</lastmod>\n  </url>';
    })
    .filter(Boolean)
    .join('\n');
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + '\n</urlset>';
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), xml);
}

/* ---------- Build ---------- */
function build() {
  // Limpar out
  if (fs.existsSync(OUT)) {
    fs.rmSync(OUT, { recursive: true, force: true });
  }
  fs.mkdirSync(OUT, { recursive: true });

  const data = loadData();
  console.log('Dados carregados:', Object.keys(data).join(', '));

  // Renderizar todas as paginas
  let allPages = [];
  renderers.forEach(renderer => {
    const pages = renderer.render(data, T);
    if (Array.isArray(pages)) {
      pages.forEach(p => {
        fs.writeFileSync(path.join(OUT, p.filename), p.html);
        console.log('  \u2713 ' + p.filename);
        allPages.push(p);
      });
    } else if (pages) {
      fs.writeFileSync(path.join(OUT, pages.filename), pages.html);
      console.log('  \u2713 ' + pages.filename);
      allPages.push(pages);
    }
  });

  // Copiar assets
  copyDir(path.join(__dirname, 'fonts'), path.join(OUT, 'fonts'));
  copyDir(path.join(__dirname, 'img'), path.join(OUT, 'img'));
  copyDir(path.join(SRC, 'styles'), path.join(OUT, 'styles'));
  copyDir(path.join(SRC, 'scripts'), path.join(OUT, 'scripts'));

  // Copiar arquivos raiz
  ['favicon.svg', '_headers'].forEach(f => {
    const src = path.join(__dirname, f);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(OUT, f));
  });

  // Sitemap e robots
  generateSitemap(allPages, data);
  const robots = 'User-agent: *\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nSitemap: ' + data.store.url.replace(/\/$/, '') + '/sitemap.xml\n';
  fs.writeFileSync(path.join(OUT, 'robots.txt'), robots);
  console.log('  \u2713 sitemap.xml, robots.txt');

  const count = fs.readdirSync(OUT, { recursive: true }).filter(f => !fs.statSync(path.join(OUT, f), { throwIfNoEntry: false })?.isDirectory()).length;
  console.log('Build concluido \u2014 ' + count + ' arquivos em out/');
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach(f => {
    const s = path.join(src, f);
    const d = path.join(dest, f);
    if (fs.statSync(s).isDirectory()) {
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  });
}

build();
