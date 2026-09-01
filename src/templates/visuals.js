/* SolMais — Sistema Visual Premium
   SVGs arquitetonicos, fluxo energetico, renders de equipamentos,
   layouts de telhado, mapas, graficos premium e OG images.

   Direcao: PREMIUM ENERGY-TECH + ARCHITECTURAL + SOFTWARE
*/

function escapeHtml(s) {
  if (s === null || s === undefined) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* ========== 1. HERO ARQUITETONICO ==========
   Casa contemporanea com paineis solares, ceu cinematografico */
function heroArchitectural(opts) {
  opts = opts || {};
  const w = opts.width || 1200;
  const h = opts.height || 600;
  return `<svg class="hero-arch-svg" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Residencia contemporanea com sistema solar fotovoltaico integrado ao telhado">
  <defs>
    <linearGradient id="sky-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a1628"/>
      <stop offset="35%" stop-color="#142840"/>
      <stop offset="65%" stop-color="#1e3a5f"/>
      <stop offset="100%" stop-color="#2a4a6f"/>
    </linearGradient>
    <linearGradient id="sun-glow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="panel-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e3a5f"/>
      <stop offset="50%" stop-color="#0f2744"/>
      <stop offset="100%" stop-color="#0a1e36"/>
    </linearGradient>
    <linearGradient id="panel-sheen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.15"/>
      <stop offset="50%" stop-color="#60a5fa" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="house-wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
    <linearGradient id="glass-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#1e3a5f" stop-opacity="0.8"/>
    </linearGradient>
    <linearGradient id="ground-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a2a3a"/>
      <stop offset="100%" stop-color="#0a1520"/>
    </linearGradient>
    <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
      <feOffset dx="0" dy="4"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.5"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Ceu -->
  <rect width="${w}" height="${h}" fill="url(#sky-grad)"/>

  <!-- Sol / brilho -->
  <circle cx="${w*0.82}" cy="${h*0.18}" r="60" fill="url(#sun-glow)"/>
  <circle cx="${w*0.82}" cy="${h*0.18}" r="25" fill="#f59e0b" opacity="0.9"/>
  <circle cx="${w*0.82}" cy="${h*0.18}" r="15" fill="#fbbf24" opacity="0.95"/>

  <!-- Montanhas distantes -->
  <path d="M0 ${h*0.55} L${w*0.15} ${h*0.42} L${w*0.3} ${h*0.5} L${w*0.45} ${h*0.38} L${w*0.6} ${h*0.48} L${w*0.75} ${h*0.4} L${w*0.9} ${h*0.46} L${w} ${h*0.42} L${w} ${h*0.6} L0 ${h*0.6} Z" fill="#0f1e30" opacity="0.6"/>
  <path d="M0 ${h*0.6} L${w*0.2} ${h*0.5} L${w*0.4} ${h*0.55} L${w*0.55} ${h*0.48} L${w*0.7} ${h*0.52} L${w*0.85} ${h*0.46} L${w} ${h*0.5} L${w} ${h*0.65} L0 ${h*0.65} Z" fill="#0a1828" opacity="0.8"/>

  <!-- Chao -->
  <rect y="${h*0.78}" width="${w}" height="${h*0.22}" fill="url(#ground-grad)"/>

  <!-- Casa contemporanea - estrutura base -->
  <!-- Volume principal (retangular moderno) -->
  <rect x="${w*0.15}" y="${h*0.45}" width="${w*0.35}" height="${h*0.33}" fill="url(#house-wall)" filter="url(#soft-shadow)"/>

  <!-- Segundo volume (mais baixo, a direita) -->
  <rect x="${w*0.48}" y="${h*0.52}" width="${w*0.22}" height="${h*0.26}" fill="#cbd5e1" filter="url(#soft-shadow)"/>

  <!-- Telhado inclinado com paineis (volume principal) -->
  <!-- Telhado -->
  <polygon points="${w*0.12},${h*0.45} ${w*0.5},${h*0.45} ${w*0.5},${h*0.35} ${w*0.2},${h*0.35}" fill="#1a2a3a"/>
  <!-- Paineis no telhado (grade) -->
  <g transform="translate(${w*0.14} ${h*0.36})">
    ${Array.from({length: 4}).map((_, row) =>
      Array.from({length: 6}).map((_, col) => {
        const px = col * 55;
        const py = row * 18;
        const skew = col * 2;
        return `<g transform="translate(${px} ${py + skew})">
          <rect width="50" height="16" rx="1" fill="url(#panel-grad)" stroke="#2a4a6f" stroke-width="0.5"/>
          <rect width="50" height="16" rx="1" fill="url(#panel-sheen)"/>
          <line x1="12.5" y1="0" x2="12.5" y2="16" stroke="#1a3a5f" stroke-width="0.3"/>
          <line x1="25" y1="0" x2="25" y2="16" stroke="#1a3a5f" stroke-width="0.3"/>
          <line x1="37.5" y1="0" x2="37.5" y2="16" stroke="#1a3a5f" stroke-width="0.3"/>
          <line x1="0" y1="8" x2="50" y2="8" stroke="#1a3a5f" stroke-width="0.3"/>
        </g>`;
      }).join('')
    ).join('')}
  </g>

  <!-- Telhado volume secundario (plano com paineis) -->
  <rect x="${w*0.48}" y="${h*0.49}" width="${w*0.22}" height="${h*0.04}" fill="#1a2a3a"/>
  <g transform="translate(${w*0.49} ${h*0.495})">
    ${Array.from({length: 2}).map((_, row) =>
      Array.from({length: 5}).map((_, col) => {
        const px = col * 48;
        const py = row * 14;
        return `<g transform="translate(${px} ${py})">
          <rect width="44" height="12" rx="1" fill="url(#panel-grad)" stroke="#2a4a6f" stroke-width="0.5"/>
          <rect width="44" height="12" rx="1" fill="url(#panel-sheen)"/>
          <line x1="11" y1="0" x2="11" y2="12" stroke="#1a3a5f" stroke-width="0.3"/>
          <line x1="22" y1="0" x2="22" y2="12" stroke="#1a3a5f" stroke-width="0.3"/>
          <line x1="33" y1="0" x2="33" y2="12" stroke="#1a3a5f" stroke-width="0.3"/>
        </g>`;
      }).join('')
    ).join('')}
  </g>

  <!-- Janelas (vidro grande - arquitetura contemporanea) -->
  <rect x="${w*0.18}" y="${h*0.55}" width="${w*0.08}" height="${h*0.15}" fill="url(#glass-grad)" opacity="0.7"/>
  <rect x="${w*0.28}" y="${h*0.55}" width="${w*0.08}" height="${h*0.15}" fill="url(#glass-grad)" opacity="0.7"/>
  <rect x="${w*0.38}" y="${h*0.55}" width="${w*0.06}" height="${h*0.15}" fill="url(#glass-grad)" opacity="0.6"/>

  <!-- Porta -->
  <rect x="${w*0.45}" y="${h*0.62}" width="${w*0.04}" height="${h*0.16}" fill="#1e293b"/>

  <!-- Janelas volume secundario -->
  <rect x="${w*0.51}" y="${h*0.58}" width="${w*0.06}" height="${h*0.12}" fill="url(#glass-grad)" opacity="0.7"/>
  <rect x="${w*0.59}" y="${h*0.58}" width="${w*0.06}" height="${h*0.12}" fill="url(#glass-grad)" opacity="0.7"/>

  <!-- Linhas arquitetonicas (detalhes) -->
  <line x1="${w*0.15}" y1="${h*0.45}" x2="${w*0.5}" y2="${h*0.45}" stroke="#475569" stroke-width="0.5" opacity="0.5"/>
  <line x1="${w*0.48}" y1="${h*0.52}" x2="${w*0.7}" y2="${h*0.52}" stroke="#475569" stroke-width="0.5" opacity="0.5"/>

  <!-- Inversor na parede (detalhe tecnico) -->
  <g transform="translate(${w*0.52} ${h*0.6})">
    <rect width="18" height="24" rx="2" fill="#1e293b" stroke="#475569" stroke-width="0.5"/>
    <rect x="2" y="3" width="14" height="8" rx="1" fill="#0f172a"/>
    <circle cx="9" cy="18" r="2" fill="#22c55e" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="9" cy="18" r="1" fill="#4ade80"/>
  </g>

  <!-- Linhas de energia (do telhado para o inversor) -->
  <path d="M${w*0.55} ${h*0.5} L${w*0.55} ${h*0.58} L${w*0.53} ${h*0.6}" stroke="#f59e0b" stroke-width="1" opacity="0.4" stroke-dasharray="3 2">
    <animate attributeName="stroke-dashoffset" values="0;-10" dur="1s" repeatCount="indefinite"/>
  </path>

  <!-- Vegetacao sutil (nao exagerar) -->
  <ellipse cx="${w*0.1}" cy="${h*0.79}" rx="30" ry="8" fill="#0f1e1a" opacity="0.6"/>
  <ellipse cx="${w*0.75}" cy="${h*0.79}" rx="25" ry="6" fill="#0f1e1a" opacity="0.6"/>

  <!-- Grade de energia ao fundo (poste sutil) -->
  <line x1="${w*0.92}" y1="${h*0.5}" x2="${w*0.92}" y2="${h*0.78}" stroke="#334155" stroke-width="1" opacity="0.4"/>
  <line x1="${w*0.88}" y1="${h*0.55}" x2="${w*0.96}" y2="${h*0.55}" stroke="#334155" stroke-width="0.5" opacity="0.3"/>

  <!-- Particulas de energia (pontos luminosos) -->
  <circle cx="${w*0.3}" cy="${h*0.3}" r="1.5" fill="#f59e0b" opacity="0.6">
    <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="${w*0.5}" cy="${h*0.25}" r="1" fill="#60a5fa" opacity="0.5">
    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="${w*0.65}" cy="${h*0.32}" r="1.2" fill="#f59e0b" opacity="0.4">
    <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.5s" repeatCount="indefinite"/>
  </circle>
</svg>`;
}

/* ========== 2. FLUXO DE ENERGIA (animado) ==========
   SOL -> PAINEIS -> INVERSOR -> CASA <-> REDE */
function energyFlow(opts) {
  opts = opts || {};
  const animated = opts.animated !== false;
  const dashAnim = animated ? '<animate attributeName="stroke-dashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite"/>' : '';

  return `<svg class="energy-flow-svg" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fluxo de energia: sol gera nos paineis, inversor converte, casa consome e excedente vai para a rede">
  <defs>
    <linearGradient id="flow-sun" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
    <linearGradient id="flow-panel" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#60a5fa"/>
    </linearGradient>
    <linearGradient id="flow-inv" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#22c55e"/><stop offset="100%" stop-color="#4ade80"/>
    </linearGradient>
    <linearGradient id="flow-grid" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>
    <filter id="flow-glow"><feGaussianBlur stdDeviation="3"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>

  <!-- Sol -->
  <g transform="translate(60 100)">
    <circle r="32" fill="url(#flow-sun)" filter="url(#flow-glow)" opacity="0.9"/>
    <circle r="22" fill="#fbbf24"/>
    <g stroke="#f59e0b" stroke-width="2" stroke-linecap="round">
      <line x1="0" y1="-40" x2="0" y2="-48"/><line x1="0" y1="40" x2="0" y2="48"/>
      <line x1="-40" y1="0" x2="-48" y2="0"/><line x1="40" y1="0" x2="48" y2="0"/>
      <line x1="-28" y1="-28" x2="-34" y2="-34"/><line x1="28" y1="28" x2="34" y2="34"/>
      <line x1="-28" y1="28" x2="-34" y2="34"/><line x1="28" y1="-28" x2="34" y2="-34"/>
    </g>
    <text y="65" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="600" font-family="Inter, sans-serif">SOL</text>
  </g>

  <!-- Seta Sol -> Painel -->
  <line x1="100" y1="100" x2="180" y2="100" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4" opacity="0.7">${dashAnim}</line>
  <polygon points="180,96 188,100 180,104" fill="#f59e0b" opacity="0.7"/>

  <!-- Painel -->
  <g transform="translate(220 100)">
    <rect x="-35" y="-25" width="70" height="50" rx="3" fill="#0f2744" stroke="#1e3a5f" stroke-width="1"/>
    <rect x="-32" y="-22" width="64" height="44" rx="2" fill="#1e3a5f" opacity="0.5"/>
    <g stroke="#2a4a6f" stroke-width="0.5">
      <line x1="-32" y1="-11" x2="32" y2="-11"/><line x1="-32" y1="0" x2="32" y2="0"/><line x1="-32" y1="11" x2="32" y2="11"/>
      <line x1="-16" y1="-22" x2="-16" y2="22"/><line x1="0" y1="-22" x2="0" y2="22"/><line x1="16" y1="-22" x2="16" y2="22"/>
    </g>
    <rect x="-32" y="-22" width="64" height="44" rx="2" fill="url(#flow-panel)" opacity="0.1"/>
    <text y="45" text-anchor="middle" fill="#60a5fa" font-size="11" font-weight="600" font-family="Inter, sans-serif">PAINEL</text>
  </g>

  <!-- Seta Painel -> Inversor -->
  <line x1="260" y1="100" x2="340" y2="100" stroke="#3b82f6" stroke-width="2" stroke-dasharray="6 4" opacity="0.7">${dashAnim}</line>
  <polygon points="340,96 348,100 340,104" fill="#3b82f6" opacity="0.7"/>

  <!-- Inversor -->
  <g transform="translate(390 100)">
    <rect x="-30" y="-25" width="60" height="50" rx="4" fill="#1e293b" stroke="#475569" stroke-width="1"/>
    <rect x="-25" y="-20" width="50" height="20" rx="2" fill="#0f172a"/>
    <text x="0" y="-6" text-anchor="middle" fill="#22c55e" font-size="8" font-family="monospace" font-weight="600">3.42 kW</text>
    <circle cx="-15" cy="12" r="3" fill="#22c55e"><animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></circle>
    <circle cx="0" cy="12" r="3" fill="#22c55e" opacity="0.6"><animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/></circle>
    <circle cx="15" cy="12" r="3" fill="#22c55e" opacity="0.4"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/></circle>
    <text y="45" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="600" font-family="Inter, sans-serif">INVERSOR</text>
  </g>

  <!-- Seta Inversor -> Casa -->
  <line x1="425" y1="100" x2="505" y2="100" stroke="#22c55e" stroke-width="2" stroke-dasharray="6 4" opacity="0.7">${dashAnim}</line>
  <polygon points="505,96 513,100 505,104" fill="#22c55e" opacity="0.7"/>

  <!-- Casa -->
  <g transform="translate(555 100)">
    <path d="M-30 -15 L0 -35 L30 -15 L30 20 L-30 20 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
    <rect x="-15" y="-5" width="12" height="18" fill="#1e3a5f" opacity="0.6"/>
    <rect x="5" y="-5" width="12" height="12" fill="#60a5fa" opacity="0.4"/>
    <text y="40" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="600" font-family="Inter, sans-serif">IMÓVEL</text>
  </g>

  <!-- Seta Casa <-> Rede (bidirecional) -->
  <line x1="590" y1="100" x2="670" y2="100" stroke="#6366f1" stroke-width="2" stroke-dasharray="6 4" opacity="0.7">${dashAnim}</line>
  <polygon points="670,96 678,100 670,104" fill="#6366f1" opacity="0.7"/>
  <polygon points="590,96 582,100 590,104" fill="#6366f1" opacity="0.5"/>

  <!-- Rede -->
  <g transform="translate(720 100)">
    <g stroke="#818cf8" stroke-width="1.5" fill="none">
      <line x1="0" y1="-30" x2="0" y2="25"/>
      <line x1="-20" y1="-20" x2="20" y2="-20"/>
      <line x1="-15" y1="-10" x2="15" y2="-10"/>
      <line x1="-10" y1="0" x2="10" y2="0"/>
    </g>
    <circle cx="0" cy="-25" r="3" fill="#818cf8"/>
    <text y="45" text-anchor="middle" fill="#818cf8" font-size="11" font-weight="600" font-family="Inter, sans-serif">REDE</text>
  </g>
</svg>`;
}

/* ========== 3. LAYOUT DO TELHADO (top-view premium) ==========
   Mostra modulos, orientacao, norte, area util */
function roofLayout(opts) {
  opts = opts || {};
  const panels = opts.panels || 10;
  const cols = opts.cols || Math.ceil(panels / 2);
  const rows = Math.ceil(panels / cols);
  const orientation = opts.orientation || 'Norte';
  const roofType = opts.roofType || 'Ceramico';
  const panelW = 40;
  const panelH = 22;
  const gap = 4;
  const roofW = cols * (panelW + gap) + 40;
  const roofH = rows * (panelH + gap) + 60;
  const svgW = Math.max(roofW + 100, 300);
  const svgH = Math.max(roofH + 80, 200);

  return `<svg class="roof-layout-svg" viewBox="0 0 ${svgW} ${svgH}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Layout do telhado com ${panels} modulos fotovoltaicos orientados a ${orientation}, tipo ${roofType}">
  <defs>
    <linearGradient id="roof-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="roof-panel-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e3a5f"/><stop offset="100%" stop-color="#0a1e36"/>
    </linearGradient>
    <linearGradient id="roof-sheen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Fundo -->
  <rect width="${svgW}" height="${svgH}" fill="url(#roof-bg)" rx="8"/>

  <!-- Telhado (area) -->
  <rect x="${(svgW - roofW) / 2}" y="20" width="${roofW}" height="${roofH}" rx="4" fill="#1a2a3a" stroke="#334155" stroke-width="1" stroke-dasharray="4 2"/>

  <!-- Paineis -->
  <g transform="translate(${(svgW - roofW) / 2 + 20} 35)">
    ${Array.from({length: panels}).map((_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = col * (panelW + gap);
      const y = row * (panelH + gap);
      return `<g transform="translate(${x} ${y})">
        <rect width="${panelW}" height="${panelH}" rx="1" fill="url(#roof-panel-grad)" stroke="#2a4a6f" stroke-width="0.5"/>
        <rect width="${panelW}" height="${panelH}" rx="1" fill="url(#roof-sheen)"/>
        <line x1="${panelW/3}" y1="0" x2="${panelW/3}" y2="${panelH}" stroke="#1a3a5f" stroke-width="0.3"/>
        <line x1="${panelW*2/3}" y1="0" x2="${panelW*2/3}" y2="${panelH}" stroke="#1a3a5f" stroke-width="0.3"/>
        <line x1="0" y1="${panelH/2}" x2="${panelW}" y2="${panelH/2}" stroke="#1a3a5f" stroke-width="0.3"/>
      </g>`;
    }).join('')}
  </g>

  <!-- Bussola (Norte) -->
  <g transform="translate(${svgW - 40} ${svgH - 40})">
    <circle r="20" fill="#0f172a" stroke="#334155" stroke-width="1"/>
    <polygon points="0,-14 -4,0 0,-4 4,0" fill="#ef4444"/>
    <polygon points="0,14 -4,0 0,4 4,0" fill="#64748b"/>
    <text y="-22" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="700" font-family="Inter, sans-serif">N</text>
  </g>

  <!-- Info -->
  <text x="15" y="${svgH - 15}" fill="#64748b" font-size="10" font-family="Inter, sans-serif">${panels} modulos — ${orientation} — ${roofType}</text>
</svg>`;
}

/* ========== 4. RENDER ISOMETRICO DO SISTEMA ==========
   Vista 3D isometrica de paineis + inversor + medidor */
function systemRender(opts) {
  opts = opts || {};
  const panels = opts.panels || 10;
  return `<svg class="system-render-svg" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Render isometrico do sistema solar com ${panels} modulos, inversor e medidor">
  <defs>
    <linearGradient id="iso-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a1628"/><stop offset="100%" stop-color="#142840"/>
    </linearGradient>
    <linearGradient id="iso-panel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e3a5f"/><stop offset="100%" stop-color="#0a1e36"/>
    </linearGradient>
    <linearGradient id="iso-ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a2a3a"/><stop offset="100%" stop-color="#0a1520"/>
    </linearGradient>
  </defs>

  <rect width="400" height="250" fill="url(#iso-sky)" rx="8"/>

  <!-- Sol -->
  <circle cx="340" cy="40" r="18" fill="#f59e0b" opacity="0.8"/>
  <circle cx="340" cy="40" r="10" fill="#fbbf24"/>

  <!-- Chao isometrico -->
  <polygon points="50,200 200,160 350,200 200,240" fill="url(#iso-ground)" opacity="0.6"/>

  <!-- Estrutura do telhado (isometrico) -->
  <polygon points="80,170 200,130 320,170 200,210" fill="#1a2a3a" stroke="#334155" stroke-width="0.5"/>

  <!-- Paineis no telhado (isometrico) -->
  <g>
    ${Array.from({length: Math.min(panels, 12)}).map((_, i) => {
      const row = Math.floor(i / 4);
      const col = i % 4;
      const x1 = 100 + col * 30;
      const y1 = 155 + row * 12 - col * 3;
      const x2 = x1 + 25;
      const y2 = y1 - 3;
      const x3 = x2;
      const y3 = y2 + 14;
      const x4 = x1;
      const y4 = y1 + 14;
      return `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}" fill="url(#iso-panel)" stroke="#2a4a6f" stroke-width="0.3"/>
      <polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}" fill="#3b82f6" opacity="0.08"/>
      <line x1="${x1+8}" y1="${y1+1}" x2="${x2-17}" y2="${y2+1}" stroke="#1a3a5f" stroke-width="0.2"/>
      <line x1="${x1+16}" y1="${y1+2}" x2="${x2-9}" y2="${y2+2}" stroke="#1a3a5f" stroke-width="0.2"/>`;
    }).join('')}
  </g>

  <!-- Inversor (na parede lateral) -->
  <g transform="translate(60 180)">
    <rect width="22" height="30" rx="2" fill="#1e293b" stroke="#475569" stroke-width="0.5"/>
    <rect x="2" y="3" width="18" height="10" rx="1" fill="#0f172a"/>
    <text x="11" y="10" text-anchor="middle" fill="#22c55e" font-size="6" font-family="monospace">5kW</text>
    <circle cx="11" cy="22" r="2.5" fill="#22c55e"><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/></circle>
  </g>

  <!-- Medidor -->
  <g transform="translate(330 185)">
    <rect width="20" height="25" rx="2" fill="#1e293b" stroke="#475569" stroke-width="0.5"/>
    <circle cx="10" cy="10" r="5" fill="#0f172a" stroke="#475569" stroke-width="0.3"/>
    <line x1="10" y1="10" x2="13" y2="7" stroke="#22c55e" stroke-width="1"/>
  </g>

  <!-- Linhas de conexao -->
  <path d="M75 195 Q150 210 280 195" stroke="#f59e0b" stroke-width="0.8" fill="none" opacity="0.3" stroke-dasharray="3 2">
    <animate attributeName="stroke-dashoffset" values="0;-10" dur="1.5s" repeatCount="indefinite"/>
  </path>

  <!-- Label -->
  <text x="200" y="245" text-anchor="middle" fill="#64748b" font-size="9" font-family="Inter, sans-serif">${panels} modulos — ${opts.power || '5,5'} kWp — Inversor ${opts.inverter || '5kW'}</text>
</svg>`;
}

/* ========== 5. RENDER DO INVERSOR (hardware) ========== */
function inverterRender() {
  return `<svg class="inverter-render-svg" viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Render do inversor solar SolMais Demo 5kW">
  <defs>
    <linearGradient id="inv-body" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1e293b"/><stop offset="50%" stop-color="#334155"/><stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="inv-screen" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1a2a3a"/>
    </linearGradient>
  </defs>

  <!-- Corpo -->
  <rect x="40" y="20" width="120" height="240" rx="8" fill="url(#inv-body)" stroke="#475569" stroke-width="1"/>

  <!-- Display -->
  <rect x="55" y="40" width="90" height="60" rx="4" fill="url(#inv-screen)" stroke="#1e3a5f" stroke-width="0.5"/>
  <text x="100" y="60" text-anchor="middle" fill="#22c55e" font-size="14" font-family="monospace" font-weight="700">3.42 kW</text>
  <text x="100" y="75" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">PRODUZINDO</text>
  <text x="100" y="92" text-anchor="middle" fill="#64748b" font-size="7" font-family="monospace">18,7 kWh hoje</text>

  <!-- LEDs de status -->
  <g transform="translate(60 120)">
    <circle r="3" fill="#22c55e"><animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></circle>
    <text x="8" y="3" fill="#64748b" font-size="7" font-family="Inter, sans-serif">Power</text>
  </g>
  <g transform="translate(60 135)">
    <circle r="3" fill="#22c55e" opacity="0.7"><animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/></circle>
    <text x="8" y="3" fill="#64748b" font-size="7" font-family="Inter, sans-serif">Grid</text>
  </g>
  <g transform="translate(60 150)">
    <circle r="3" fill="#3b82f6" opacity="0.5"><animate attributeName="opacity" values="0.5;0.8;0.5" dur="1.8s" repeatCount="indefinite"/></circle>
    <text x="8" y="3" fill="#64748b" font-size="7" font-family="Inter, sans-serif">Comms</text>
  </g>

  <!-- Logo SolMais (ficticio) -->
  <text x="100" y="180" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="700" font-family="Sora, sans-serif">SolMais</text>
  <text x="100" y="192" text-anchor="middle" fill="#64748b" font-size="7" font-family="Inter, sans-serif">5kW Demo</text>

  <!-- Conectores inferiores -->
  <g transform="translate(55 210)">
    <rect width="14" height="8" rx="1" fill="#0f172a" stroke="#475569" stroke-width="0.5"/>
    <rect x="20" width="14" height="8" rx="1" fill="#0f172a" stroke="#475569" stroke-width="0.5"/>
    <rect x="40" width="14" height="8" rx="1" fill="#0f172a" stroke="#475569" stroke-width="0.5"/>
    <rect x="60" width="14" height="8" rx="1" fill="#0f172a" stroke="#475569" stroke-width="0.5"/>
  </g>

  <!-- Ventilacao -->
  <g stroke="#0f172a" stroke-width="0.5">
    <line x1="55" y1="235" x2="145" y2="235"/>
    <line x1="55" y1="240" x2="145" y2="240"/>
    <line x1="55" y1="245" x2="145" y2="245"/>
  </g>

  <text x="100" y="270" text-anchor="middle" fill="#475569" font-size="7" font-family="Inter, sans-serif">Equipamento demonstrativo</text>
</svg>`;
}

/* ========== 6. CENA DE INSTALACAO (tecnico + paineis) ========== */
function installationScene(opts) {
  opts = opts || {};
  const phase = opts.phase || 'panels'; // panels, wiring, inspection
  return `<svg class="install-scene-svg" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cena de instalacao profissional de sistema solar fotovoltaica">
  <defs>
    <linearGradient id="inst-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#142840"/><stop offset="100%" stop-color="#1e3a5f"/>
    </linearGradient>
    <linearGradient id="inst-roof" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>

  <rect width="400" height="250" fill="url(#inst-sky)" rx="8"/>

  <!-- Telhado inclinado -->
  <polygon points="50,150 200,80 350,150 350,200 50,200" fill="url(#inst-roof)"/>

  <!-- Telhas (linhas) -->
  <g stroke="#475569" stroke-width="0.5" opacity="0.4">
    ${Array.from({length: 8}).map((_, i) => `<line x1="${60 + i * 8}" y1="${145 - i * 3}" x2="${340 - i * 8}" y2="${145 - i * 3}"/>`).join('')}
  </g>

  <!-- Paineis sendo instalados (alguns no telhado, um sendo posicionado) -->
  <g>
    <!-- Paineis ja instalados -->
    <rect x="80" y="110" width="50" height="28" rx="1" fill="#1e3a5f" stroke="#2a4a6f" stroke-width="0.5" transform="skewY(-8)"/>
    <rect x="140" y="105" width="50" height="28" rx="1" fill="#1e3a5f" stroke="#2a4a6f" stroke-width="0.5" transform="skewY(-8)"/>
    <!-- Painel sendo posicionado (segurando) -->
    <rect x="210" y="100" width="50" height="28" rx="1" fill="#1e3a5f" stroke="#2a4a6f" stroke-width="0.5" opacity="0.8" transform="rotate(-5 235 114)"/>
  </g>

  <!-- Tecnico (silhueta estilizada com EPI) -->
  <g transform="translate(240 120)">
    <!-- Capacete -->
    <ellipse cx="0" cy="-5" rx="10" ry="5" fill="#f59e0b"/>
    <ellipse cx="0" cy="-3" rx="7" ry="3" fill="#fbbf24"/>
    <!-- Cabeca -->
    <circle cx="0" cy="2" r="6" fill="#e2e8f0"/>
    <!-- Corpo (colete EPI) -->
    <rect x="-10" y="8" width="20" height="25" rx="3" fill="#f59e0b" opacity="0.9"/>
    <rect x="-8" y="10" width="16" height="3" fill="#fbbf24" opacity="0.6"/>
    <!-- Bracos (posicionando painel) -->
    <line x1="-8" y1="12" x2="-18" y2="0" stroke="#e2e8f0" stroke-width="4" stroke-linecap="round"/>
    <line x1="8" y1="12" x2="18" y2="-5" stroke="#e2e8f0" stroke-width="4" stroke-linecap="round"/>
    <!-- Pernas -->
    <line x1="-5" y1="33" x2="-8" y2="50" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>
    <line x1="5" y1="33" x2="8" y2="50" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>
  </g>

  <!-- Caixa de ferramentas -->
  <g transform="translate(60 195)">
    <rect width="40" height="20" rx="2" fill="#f59e0b" opacity="0.7"/>
    <rect y="-5" width="40" height="8" rx="2" fill="#d97706"/>
  </g>

  <!-- Estrutura de fixacao (perfil) -->
  <g transform="translate(100 140)" stroke="#64748b" stroke-width="1" fill="none">
    <line x1="0" y1="0" x2="60" y2="-8"/>
    <line x1="0" y1="3" x2="60" y2="-5"/>
  </g>

  <!-- Sol -->
  <circle cx="350" cy="40" r="15" fill="#f59e0b" opacity="0.6"/>
  <circle cx="350" cy="40" r="8" fill="#fbbf24" opacity="0.8"/>

  <text x="200" y="235" text-anchor="middle" fill="#64748b" font-size="8" font-family="Inter, sans-serif">Instalacao profissional com EPI — cena demonstrativa</text>
</svg>`;
}

/* ========== 7. MAPA DEMONSTRATIVO ========== */
function mapDemo(opts) {
  opts = opts || {};
  const systems = opts.systems || [];
  return `<svg class="map-demo-svg" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa demonstrativo com localizacoes ficticias dos sistemas">
  <defs>
    <linearGradient id="map-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a1520"/><stop offset="100%" stop-color="#0f1e30"/>
    </linearGradient>
    <filter id="map-glow"><feGaussianBlur stdDeviation="4"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>

  <rect width="400" height="300" fill="url(#map-bg)" rx="8"/>

  <!-- Linhas de costa (estilizada Baixada Santista) -->
  <path d="M50 50 Q120 60 180 80 Q250 70 320 90 L350 120 Q300 140 250 135 Q180 150 120 130 Q80 140 50 120 Z" fill="#0a1e36" stroke="#1e3a5f" stroke-width="0.5" opacity="0.6"/>
  <path d="M50 50 Q120 60 180 80 Q250 70 320 90" stroke="#3b82f6" stroke-width="1" fill="none" opacity="0.3"/>

  <!-- Grid sutil -->
  <g stroke="#1a2a3a" stroke-width="0.3" opacity="0.3">
    ${Array.from({length: 8}).map((_, i) => `<line x1="${i * 50}" y1="0" x2="${i * 50}" y2="300"/>`).join('')}
    ${Array.from({length: 6}).map((_, i) => `<line x1="0" y1="${i * 50}" x2="400" y2="${i * 50}"/>`).join('')}
  </g>

  <!-- Pins dos sistemas -->
  ${systems.map((s, i) => {
    const positions = [{x: 150, y: 100}, {x: 200, y: 110}, {x: 250, y: 120}, {x: 180, y: 140}, {x: 220, y: 160}];
    const pos = positions[i % positions.length];
    const color = s.health?.system === 'normal' ? '#22c55e' : s.health?.system === 'atencao' ? '#f59e0b' : '#ef4444';
    return `<g transform="translate(${pos.x} ${pos.y})">
      <circle r="12" fill="${color}" opacity="0.2" filter="url(#map-glow)">
        <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle r="6" fill="${color}" opacity="0.8"/>
      <circle r="3" fill="${color}"/>
      <text y="-18" text-anchor="middle" fill="${color}" font-size="8" font-family="Inter, sans-serif" font-weight="600">${s.projectId}</text>
    </g>`;
  }).join('')}

  <!-- Legenda -->
  <g transform="translate(15 260)">
    <circle cx="6" cy="0" r="4" fill="#22c55e"/>
    <text x="14" y="3" fill="#64748b" font-size="8" font-family="Inter, sans-serif">Normal</text>
    <circle cx="66" cy="0" r="4" fill="#f59e0b"/>
    <text x="74" y="3" fill="#64748b" font-size="8" font-family="Inter, sans-serif">Atencao</text>
    <circle cx="126" cy="0" r="4" fill="#ef4444"/>
    <text x="134" y="3" fill="#64748b" font-size="8" font-family="Inter, sans-serif">Alerta</text>
  </g>
  <text x="385" y="280" text-anchor="end" fill="#475569" font-size="7" font-family="Inter, sans-serif">Localizacoes demonstrativas</text>
</svg>`;
}

/* ========== 8. SPARKLINE (mini grafico para cards) ========== */
function sparkline(data, opts) {
  opts = opts || {};
  const w = opts.width || 120;
  const h = opts.height || 30;
  const color = opts.color || '#22c55e';
  const fill = opts.fill || 'rgba(34,197,94,0.1)';
  if (!data || data.length === 0) return '';
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return x.toFixed(1) + ',' + y.toFixed(1);
  }).join(' ');
  const areaPoints = '0,' + h + ' ' + points + ' ' + w + ',' + h;
  return `<svg class="sparkline-svg" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grafico de tendencia">
    <polygon points="${areaPoints}" fill="${fill}"/>
    <polyline points="${points}" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

/* ========== 9. AREA CHART (grafico de area premium) ========== */
function areaChart(data, opts) {
  opts = opts || {};
  const w = opts.width || 600;
  const h = opts.height || 200;
  const color = opts.color || '#22c55e';
  const color2 = opts.color2 || '#3b82f6';
  const labels = opts.labels || [];
  const estimated = opts.estimated;
  if (!data || data.length === 0) return '';
  const max = Math.max(...data, ...(estimated || [0])) * 1.1;
  const stepX = w / (data.length - 1);

  const points = data.map((v, i) => {
    const x = i * stepX;
    const y = h - (v / max) * h;
    return x.toFixed(1) + ',' + y.toFixed(1);
  }).join(' ');

  const estPoints = estimated ? estimated.map((v, i) => {
    const x = i * stepX;
    const y = h - (v / max) * h;
    return x.toFixed(1) + ',' + y.toFixed(1);
  }).join(' ') : '';

  return `<svg class="area-chart-svg" viewBox="0 0 ${w} ${h + 25}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grafico de geracao ${opts.label || ''}">
  <defs>
    <linearGradient id="area-grad-${opts.id || '1'}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Grid -->
  <g stroke="#1a2a3a" stroke-width="0.5" opacity="0.5">
    ${Array.from({length: 4}).map((_, i) => `<line x1="0" y1="${(i + 1) * h / 5}" x2="${w}" y2="${(i + 1) * h / 5}"/>`).join('')}
  </g>

  ${estimated ? `
  <!-- Estimado (linha tracejada) -->
  <polyline points="${estPoints}" stroke="${color2}" stroke-width="1.5" stroke-dasharray="4 3" fill="none" opacity="0.5"/>
  ` : ''}

  <!-- Area -->
  <polygon points="0,${h} ${points} ${w},${h}" fill="url(#area-grad-${opts.id || '1'})"/>

  <!-- Linha principal -->
  <polyline points="${points}" stroke="${color}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Pontos -->
  ${data.map((v, i) => {
    const x = i * stepX;
    const y = h - (v / max) * h;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="${color}" stroke="#0a1520" stroke-width="1.5"/>`;
  }).join('')}

  <!-- Labels -->
  ${labels.map((label, i) => {
    if (i % Math.ceil(labels.length / 6) !== 0 && i !== labels.length - 1) return '';
    const x = i * stepX;
    return `<text x="${x.toFixed(0)}" y="${h + 18}" text-anchor="middle" fill="#64748b" font-size="9" font-family="Inter, sans-serif">${label}</text>`;
  }).join('')}
</svg>`;
}

/* ========== 10. DONUT/GAUGE CHART ========== */
function donutChart(value, max, opts) {
  opts = opts || {};
  const w = opts.width || 120;
  const h = opts.height || 120;
  const label = opts.label || '';
  const unit = opts.unit || '%';
  const color = opts.color || '#22c55e';
  const r = 45;
  const cx = w / 2;
  const cy = h / 2;
  const circumference = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  const dashOffset = circumference * (1 - pct);

  return `<svg class="donut-chart-svg" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}: ${value}${unit} de ${max}${unit}">
  <circle cx="${cx}" cy="${cy}" r="${r}" stroke="#1a2a3a" stroke-width="8" fill="none"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" stroke="${color}" stroke-width="8" fill="none"
    stroke-dasharray="${circumference}" stroke-dashoffset="${dashOffset}"
    stroke-linecap="round" transform="rotate(-90 ${cx} ${cy})"/>
  <text x="${cx}" y="${cy - 5}" text-anchor="middle" fill="${color}" font-size="20" font-weight="700" font-family="Sora, sans-serif">${value}${unit}</text>
  <text x="${cx}" y="${cy + 15}" text-anchor="middle" fill="#64748b" font-size="9" font-family="Inter, sans-serif">${label}</text>
</svg>`;
}

/* ========== 11. CASE THUMBNAIL (por tipo de projeto) ========== */
function caseThumbnail(type, opts) {
  opts = opts || {};
  const w = opts.width || 400;
  const h = opts.height || 220;
  const configs = {
    residencial: { sky: '#142840', roof: '#334155', panels: 10, label: 'Residencial' },
    comercial: { sky: '#0a1628', roof: '#1e293b', panels: 33, label: 'Comercial' },
    condominio: { sky: '#1e3a5f', roof: '#475569', panels: 64, label: 'Condominio' },
    rural: { sky: '#1a2a1a', roof: '#3a4a3a', panels: 8, label: 'Rural' },
    compacto: { sky: '#142840', roof: '#334155', panels: 6, label: 'Compacto' },
    galpao: { sky: '#0a1520', roof: '#1a2a3a', panels: 20, label: 'Galpao' }
  };
  const cfg = configs[type] || configs.residencial;

  return `<svg class="case-thumb-svg" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Projeto ${cfg.label} demonstrativo">
  <defs>
    <linearGradient id="ct-sky-${type}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${cfg.sky}"/><stop offset="100%" stop-color="#0a1520"/>
    </linearGradient>
    <linearGradient id="ct-panel-${type}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e3a5f"/><stop offset="100%" stop-color="#0a1e36"/>
    </linearGradient>
  </defs>

  <rect width="${w}" height="${h}" fill="url(#ct-sky-${type})" rx="8"/>

  <!-- Sol -->
  <circle cx="${w * 0.85}" cy="${h * 0.2}" r="20" fill="#f59e0b" opacity="0.5"/>
  <circle cx="${w * 0.85}" cy="${h * 0.2}" r="12" fill="#fbbf24" opacity="0.7"/>

  <!-- Estrutura (varia por tipo) -->
  ${type === 'residencial' ? `
    <polygon points="${w*0.1},${h*0.55} ${w*0.5},${h*0.55} ${w*0.5},${h*0.35} ${w*0.2},${h*0.35}" fill="${cfg.roof}"/>
    <rect x="${w*0.12}" y="${h*0.55}" width="${w*0.36}" height="${h*0.3}" fill="#cbd5e1" opacity="0.8"/>
    <g transform="translate(${w*0.14} ${h*0.37})">
      ${Array.from({length: 4}).map((_, r) => Array.from({length: 6}).map((_, c) => {
        return `<rect x="${c*50}" y="${r*16 + c*2}" width="46" height="14" rx="1" fill="url(#ct-panel-${type})" stroke="#2a4a6f" stroke-width="0.3"/>`;
      }).join('')).join('')}
    </g>
  ` : type === 'comercial' ? `
    <rect x="${w*0.05}" y="${h*0.4}" width="${w*0.9}" height="${h*0.45}" fill="${cfg.roof}"/>
    <rect x="${w*0.05}" y="${h*0.38}" width="${w*0.9}" height="${h*0.04}" fill="#1a2a3a"/>
    <g transform="translate(${w*0.08} ${h*0.39})">
      ${Array.from({length: 3}).map((_, r) => Array.from({length: 11}).map((_, c) => {
        return `<rect x="${c*32}" y="${r*10}" width="30" height="8" rx="1" fill="url(#ct-panel-${type})" stroke="#2a4a6f" stroke-width="0.2"/>`;
      }).join('')).join('')}
    </g>
    <rect x="${w*0.1}" y="${h*0.6}" width="${w*0.15}" height="${h*0.2}" fill="#60a5fa" opacity="0.3"/>
    <rect x="${w*0.3}" y="${h*0.6}" width="${w*0.15}" height="${h*0.2}" fill="#60a5fa" opacity="0.3"/>
  ` : type === 'condominio' ? `
    <rect x="${w*0.05}" y="${h*0.35}" width="${w*0.25}" height="${h*0.5}" fill="${cfg.roof}"/>
    <rect x="${w*0.35}" y="${h*0.3}" width="${w*0.25}" height="${h*0.55}" fill="${cfg.roof}"/>
    <rect x="${w*0.65}" y="${h*0.38}" width="${w*0.3}" height="${h*0.47}" fill="${cfg.roof}"/>
    <g transform="translate(${w*0.07} ${h*0.36})">
      ${Array.from({length: 8}).map((_, r) => Array.from({length: 4}).map((_, c) => {
        return `<rect x="${c*18}" y="${r*5}" width="16" height="4" rx="0.5" fill="url(#ct-panel-${type})" stroke="#2a4a6f" stroke-width="0.2"/>`;
      }).join('')).join('')}
    </g>
    <g transform="translate(${w*0.37} ${h*0.31})">
      ${Array.from({length: 8}).map((_, r) => Array.from({length: 4}).map((_, c) => {
        return `<rect x="${c*18}" y="${r*5}" width="16" height="4" rx="0.5" fill="url(#ct-panel-${type})" stroke="#2a4a6f" stroke-width="0.2"/>`;
      }).join('')).join('')}
    </g>
  ` : type === 'rural' ? `
    <polygon points="${w*0.15},${h*0.5} ${w*0.45},${h*0.5} ${w*0.45},${h*0.3} ${w*0.3},${h*0.3}" fill="${cfg.roof}"/>
    <rect x="${w*0.17}" y="${h*0.5}" width="${w*0.26}" height="${h*0.3}" fill="#94a3b8" opacity="0.6"/>
    <g transform="translate(${w*0.19} ${h*0.32})">
      ${Array.from({length: 2}).map((_, r) => Array.from({length: 4}).map((_, c) => {
        return `<rect x="${c*40}" y="${r*14}" width="36" height="12" rx="1" fill="url(#ct-panel-${type})" stroke="#2a4a6f" stroke-width="0.3"/>`;
      }).join('')).join('')}
    </g>
    <ellipse cx="${w*0.7}" cy="${h*0.75}" rx="50" ry="8" fill="#1a2a1a" opacity="0.5"/>
  ` : type === 'galpao' ? `
    <polygon points="${w*0.05},${h*0.55} ${w*0.5},${h*0.35} ${w*0.95},${h*0.55} ${w*0.95},${h*0.8} ${w*0.05},${h*0.8}" fill="${cfg.roof}"/>
    <g transform="translate(${w*0.1} ${h*0.42})">
      ${Array.from({length: 3}).map((_, r) => Array.from({length: 10}).map((_, c) => {
        return `<rect x="${c*34}" y="${r*8 + c*1}" width="32" height="6" rx="0.5" fill="url(#ct-panel-${type})" stroke="#2a4a6f" stroke-width="0.2"/>`;
      }).join('')).join('')}
    </g>
    <rect x="${w*0.1}" y="${h*0.65}" width="${w*0.15}" height="${h*0.15}" fill="#60a5fa" opacity="0.2"/>
  ` : `
    <polygon points="${w*0.15},${h*0.55} ${w*0.5},${h*0.55} ${w*0.5},${h*0.4} ${w*0.25},${h*0.4}" fill="${cfg.roof}"/>
    <rect x="${w*0.17}" y="${h*0.55}" width="${w*0.31}" height="${h*0.25}" fill="#cbd5e1" opacity="0.7"/>
    <g transform="translate(${w*0.19} ${h*0.42})">
      ${Array.from({length: 2}).map((_, r) => Array.from({length: 3}).map((_, c) => {
        return `<rect x="${c*42}" y="${r*14}" width="38" height="12" rx="1" fill="url(#ct-panel-${type})" stroke="#2a4a6f" stroke-width="0.3"/>`;
      }).join('')).join('')}
    </g>
  `}

  <!-- Demo badge -->
  <rect x="${w - 80}" y="10" width="70" height="18" rx="9" fill="#f59e0b" opacity="0.9"/>
  <text x="${w - 45}" y="22" text-anchor="middle" fill="#0a1520" font-size="9" font-weight="700" font-family="Inter, sans-serif">DEMO</text>

  <text x="15" y="${h - 10}" fill="#64748b" font-size="10" font-family="Inter, sans-serif">${cfg.label} — ${cfg.panels} modulos</text>
</svg>`;
}

/* ========== 12. OG IMAGE (1200x630) ========== */
function ogImage(opts) {
  opts = opts || {};
  const title = opts.title || 'SolMais';
  const subtitle = opts.subtitle || 'Energia solar calculada para a sua realidade';
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="og-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a1520"/><stop offset="50%" stop-color="#142840"/><stop offset="100%" stop-color="#1e3a5f"/>
    </linearGradient>
    <linearGradient id="og-panel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e3a5f"/><stop offset="100%" stop-color="#0a1e36"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#og-bg)"/>

  <!-- Sol -->
  <circle cx="950" cy="150" r="80" fill="#f59e0b" opacity="0.2"/>
  <circle cx="950" cy="150" r="50" fill="#f59e0b" opacity="0.4"/>
  <circle cx="950" cy="150" r="30" fill="#fbbf24"/>

  <!-- Paineis decorativos -->
  <g transform="translate(800 350)">
    ${Array.from({length: 3}).map((_, r) => Array.from({length: 8}).map((_, c) => {
      return `<rect x="${c * 45}" y="${r * 20}" width="40" height="16" rx="1" fill="url(#og-panel)" stroke="#2a4a6f" stroke-width="0.5" opacity="0.6"/>`;
    }).join('')).join('')}
  </g>

  <!-- Logo / Titulo -->
  <text x="80" y="280" fill="#f59e0b" font-size="28" font-weight="700" font-family="Sora, sans-serif">SolMais</text>
  <text x="80" y="340" fill="#e2e8f0" font-size="48" font-weight="700" font-family="Sora, sans-serif">${title}</text>
  <text x="80" y="390" fill="#94a3b8" font-size="24" font-family="Inter, sans-serif">${subtitle}</text>

  <!-- Badge -->
  <rect x="80" y="430" width="280" height="36" rx="18" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="1"/>
  <text x="220" y="453" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="600" font-family="Inter, sans-serif">Plataforma demonstrativa</text>

  <!-- URL -->
  <text x="80" y="570" fill="#475569" font-size="16" font-family="Inter, sans-serif">solmais.expostacker.com.br</text>
</svg>`;
}

/* ========== 13. HERO BANNER POR AREA ========== */
function pageHero(title, subtitle, opts) {
  opts = opts || {};
  const icon = opts.icon || '';
  return `<div class="page-hero">
  <div class="page-hero-bg"></div>
  <div class="page-hero-content">
    ${icon ? `<div class="page-hero-icon">${icon}</div>` : ''}
    <h1>${escapeHtml(title)}</h1>
    <p class="page-hero-subtitle">${escapeHtml(subtitle)}</p>
  </div>
</div>`;
}

module.exports = {
  heroArchitectural, energyFlow, roofLayout, systemRender,
  inverterRender, installationScene, mapDemo,
  sparkline, areaChart, donutChart, caseThumbnail,
  ogImage, pageHero
};
