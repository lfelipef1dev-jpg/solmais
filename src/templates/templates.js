/* SolMais — Templates compartilhados
   Head, header, footer, breadcrumb, cards, layout */

/* ---------- Helpers ---------- */
function escapeHtml(s) {
  if (s === null || s === undefined) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function formatBRL(v) {
  return 'R$ ' + Number(v).toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function formatKWh(v) {
  return Number(v).toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + ' kWh';
}

function formatNum(v, decimals) {
  return Number(v).toLocaleString('pt-BR', { minimumFractionDigits: decimals || 0, maximumFractionDigits: decimals || 0 });
}

/* ---------- Icons ---------- */
const ICONS = {
  sun: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  panel: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M3 8h18M3 12h18M9 4v12M15 4v12M12 16v4M8 20h8"/></svg>',
  bolt: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  chart: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  home: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  grid: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  doc: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  support: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  settings: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  alert: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  check: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
  clock: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  arrow: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  cash: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  card: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
  refresh: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  leaf: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
  search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  logout: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  pin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  download: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'
};

/* ---------- Head ---------- */
function renderHead(opts) {
  const store = opts.store;
  const title = opts.title ? opts.title + ' | ' + store.name : store.name + ' — ' + store.tagline;
  const desc = opts.description || store.description;
  const canonical = store.url.replace(/\/$/, '') + (opts.canonical && opts.canonical !== '/' ? opts.canonical.replace(/\.html$/, '') : '/');
  const noindex = opts.noindex ? '<meta name="robots" content="noindex, nofollow">' : '<meta name="robots" content="index, follow">';
  const ogType = opts.ogType || 'website';
  const ogImage = opts.ogImage || (store.url.replace(/\/$/, '') + '/og-image.png');
  const cssFiles = (opts.cssFiles || ['base.css', 'components.css', 'pages.css']).map(f => '<link rel="stylesheet" href="styles/' + f + '">').join('\n  ');
  const structuredData = opts.structuredData ? (Array.isArray(opts.structuredData) ? opts.structuredData : [opts.structuredData]).map(s => '<script type="application/ld+json">' + JSON.stringify(s) + '</script>').join('\n  ') : '';
  const preload = opts.preload ? '<link rel="preload" as="image" href="' + opts.preload + '" fetchpriority="high">' : '';

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(desc)}">
  ${noindex}
  <link rel="canonical" href="${canonical}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(desc)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:type" content="${ogType}">
  <meta property="og:site_name" content="${escapeHtml(store.name)}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:locale" content="pt_BR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(desc)}">
  <meta name="twitter:image" content="${ogImage}">
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  <link rel="icon" href="favicon.png" type="image/png" sizes="1254x1254">
  ${preload}
  ${cssFiles}
  ${structuredData}
</head>`;
}

/* ---------- Announcement ---------- */
function renderAnnouncement(store) {
  return `<div class="announcement-bar">
  <div class="container">
    <span class="demo-badge">${ICONS.alert} Plataforma demonstrativa — dados ficticios</span>
  </div>
</div>`;
}

/* ---------- Header ---------- */
function renderHeader(store, nav, opts) {
  const active = opts.active || '';
  const navItems = nav.map(item =>
    '<li><a href="' + item.href + '"' + (item.slug === active ? ' class="active"' : '') + '>' + escapeHtml(item.label) + '</a></li>'
  ).join('');

  return `<header class="site-header">
  <div class="container header-inner">
    <a href="index.html" class="logo" aria-label="${escapeHtml(store.name)}">
      <img src="brand/solmais-logo.png" alt="SolMais" width="160" height="53" class="logo-img" />
    </a>
    <nav class="main-nav" aria-label="Navegacao principal">
      <ul class="nav-list">${navItems}</ul>
    </nav>
    <div class="header-actions">
      <a href="conta.html" class="btn btn-ghost btn-sm" aria-label="Area do cliente">${ICONS.user}</a>
      <a href="simulador.html" class="btn btn-primary btn-sm">${ICONS.bolt} Simular</a>
      <button class="nav-toggle" aria-label="Abrir menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;
}

/* ---------- Footer ---------- */
function renderFooter(store) {
  const cols = [
    { title: 'Plataforma', links: store.footerLinks.plataforma },
    { title: 'Conteudo', links: store.footerLinks.conteudo },
    { title: 'Institucional', links: store.footerLinks.institucional }
  ];
  const colHtml = cols.map(col =>
    '<div class="footer-col"><h4>' + escapeHtml(col.title) + '</h4><ul>' +
    col.links.map(l => '<li><a href="' + l.href + '">' + escapeHtml(l.label) + '</a></li>').join('') +
    '</ul></div>'
  ).join('');

  return `<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <img src="brand/solmais-logo.png" alt="SolMais" width="150" height="50" class="logo-img logo-img-footer" />
        <p class="footer-desc">${escapeHtml(store.tagline)}.</p>
        <p class="footer-demo">${escapeHtml(store.demoNotice)}</p>
      </div>
      ${colHtml}
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 ${escapeHtml(store.name)} — Demonstracao. Dados ficticios. Nao constitui proposta comercial.</p>
    </div>
  </div>
</footer>`;
}

/* ---------- Breadcrumb ---------- */
function renderBreadcrumb(items) {
  const list = items.map((item, i) => {
    const isLast = i === items.length - 1;
    return '<li' + (isLast ? ' aria-current="page"' : '') + '>' +
      (item.href && !isLast ? '<a href="' + item.href + '">' + escapeHtml(item.label) + '</a>' : escapeHtml(item.label)) +
      '</li>';
  }).join('');
  return '<nav class="breadcrumb" aria-label="Navegacao"><ol class="breadcrumb-list">' + list + '</ol></nav>';
}

function renderBreadcrumbSchema(items, storeUrl) {
  const base = storeUrl.replace(/\/$/, '');
  const itemListElement = items.map((item, i) => {
    const url = item.href ? base + '/' + item.href.replace(/^https?:\/\/[^/]+/, '').replace(/\.html$/, '') : '';
    return {
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(url ? { item: url } : {})
    };
  });
  return { '@type': 'BreadcrumbList', itemListElement };
}

/* ---------- Schema @graph helper (Fase 4.8) ---------- */
function renderGraphSchema(entities, store) {
  const base = store.url.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@graph': entities.map(e => {
      if (!e['@id']) e['@id'] = base;
      return e;
    })
  };
}

/* ---------- Organization schema with sameAs (Fase 4.3) ---------- */
function renderOrganizationSchema(store) {
  const base = store.url.replace(/\/$/, '');
  return {
    '@type': 'Organization',
    '@id': base + '/#organization',
    name: store.name,
    url: base,
    description: store.description,
    email: store.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: store.city,
      addressRegion: store.state,
      addressCountry: 'BR'
    },
    sameAs: store.sameAs || []
  };
}

/* ---------- WebSite schema (Fase 4.2 — somente na home) ---------- */
function renderWebSiteSchema(store) {
  const base = store.url.replace(/\/$/, '');
  return {
    '@type': 'WebSite',
    '@id': base + '/#website',
    name: store.name,
    url: base,
    description: store.description,
    publisher: { '@id': base + '/#organization' }
  };
}

/* ---------- Layout ---------- */
function renderLayout(opts) {
  const store = opts.store;
  const data = opts.data;
  const head = renderHead(opts);
  const announcement = renderAnnouncement(store);
  const header = renderHeader(store, store.nav || [], opts);
  const footer = renderFooter(store);
  const jsFiles = (opts.jsFiles || ['app.js']).map(f => '<script src="scripts/' + f + '" defer></script>').join('\n  ');
  const dataScript = '<script>window.SOLMAIS_STORE = ' + JSON.stringify(store).replace(/</g, '\\u003c') + '; window.SOLMAIS_SYSTEMS = ' + JSON.stringify(data.systems || []).replace(/</g, '\\u003c') + '; window.SOLMAIS_PROJECTS = ' + JSON.stringify(data.projects || []).replace(/</g, '\\u003c') + '; window.SOLMAIS_CUSTOMERS = ' + JSON.stringify(data.customers || []).replace(/</g, '\\u003c') + '; window.SOLMAIS_ALERTS = ' + JSON.stringify(data.alerts || []).replace(/</g, '\\u003c') + '; window.SOLMAIS_TICKETS = ' + JSON.stringify(data.tickets || []).replace(/</g, '\\u003c') + '; window.SOLMAIS_FINANCIAL = ' + JSON.stringify(data.financial || []).replace(/</g, '\\u003c') + '; window.SOLMAIS_ARTICLES = ' + JSON.stringify(data.articles || []).replace(/</g, '\\u003c') + '; window.SOLMAIS_GLOSSARY = ' + JSON.stringify(data.glossary || []).replace(/</g, '\\u003c') + '; window.SOLMAIS_CASES = ' + JSON.stringify(data.cases || []).replace(/</g, '\\u003c') + '; window.SOLMAIS_DOCUMENTS = ' + JSON.stringify(data.documents || []).replace(/</g, '\\u003c') + ';</script>';

  return `${head}
<body>
  <a href="#conteudo" class="skip-link">Pular para o conteudo</a>
  ${announcement}
  ${header}
  <main id="conteudo" role="main">
    ${opts.content}
  </main>
  ${footer}
  ${opts.scripts || ''}
  ${dataScript}
  ${jsFiles}
  <!-- GA4 — Google Analytics 4 (Ordem Tecnica SEO 2026, Fase 5.2) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX', { 'anonymize_ip': true });
  </script>
</body>
</html>`;
}

const V = require('./visuals.js');

module.exports = {
  escapeHtml, formatBRL, formatKWh, formatNum, ICONS,
  renderHead, renderAnnouncement, renderHeader, renderFooter,
  renderBreadcrumb, renderBreadcrumbSchema, renderLayout,
  renderGraphSchema, renderOrganizationSchema, renderWebSiteSchema,
  // Visuais 3.0 — Digital Twin + sistema premium
  digitalTwin: V.digitalTwin,
  cinematicHero: V.cinematicHero,
  roofCAD: V.roofCAD,
  equipmentRender: V.equipmentRender,
  solarCurve: V.solarCurve,
  energyFlow: V.energyFlow,
  areaChart: V.areaChart,
  gauge: V.gauge,
  sparkline: V.sparkline,
  caseHero: V.caseHero,
  mapDemo: V.mapDemo,
  ogImage: V.ogImage,
  pageHero: V.pageHero
};
