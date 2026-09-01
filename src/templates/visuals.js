/* SolMais — Sistema Visual 3.0
   DIRECAO DE ARTE: PREMIUM ENERGY-TECH + DIGITAL TWIN + ARCHITECTURAL

   Elemento proprietario: DIGITAL TWIN
   A mesma casa isometrica premium reaparece em Simulacao, Resultado,
   Projeto e Monitoramento — criando identidade visual reconhecivel.

   Paleta:
   - base: off-white #faf9f6 / branco quente
   - texto: grafite #1a1a1a
   - superficies tecnicas: charcoal #1e2330 / graphite #2a2f3e
   - energia: solar amber #f59e0b
   - status positivo: verde tecnico #22c55e
   - azul: somente semantico
*/

function escapeHtml(s) {
  if (s === null || s === undefined) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* ================================================================
   1. DIGITAL TWIN — Casa isometrica premium reutilizavel
   O elemento proprietario do SolMais. Aparece em:
   - Home (hero)
   - Simulador (resultado)
   - Projeto (showcase)
   - Monitoramento (hero do dashboard)
   ================================================================ */
function digitalTwin(opts) {
  opts = opts || {};
  const w = opts.width || 600;
  const h = opts.height || 480;
  const panels = opts.panels || 10;
  const showFlow = opts.showFlow || false;
  const generating = opts.generating || false;
  const id = opts.id || 'twin';
  const theme = opts.theme || 'dark'; // dark | light
  const hotspots = opts.hotspots || false;

  // Cores por tema
  const C = theme === 'light' ? {
    sky1: '#e8edf5', sky2: '#d4dde8', sky3: '#c0ccd9',
    ground: '#b8c4d0', groundDark: '#a0afc0',
    wallLight: '#f0f0ec', wallMid: '#e0e0dc', wallDark: '#c8c8c4',
    roof: '#3a4a5c', roofDark: '#2a3a4c',
    panel: '#1a2a3e', panelSheen: 'rgba(59,130,246,0.12)',
    glass: 'rgba(96,165,250,0.25)', glassDark: 'rgba(30,58,95,0.4)',
    accent: '#f59e0b', accentSoft: 'rgba(245,158,11,0.15)',
    text: '#1a1a1a', textSoft: '#475569',
    shadow: 'rgba(0,0,0,0.15)'
  } : {
    sky1: '#0a0f1a', sky2: '#0f1623', sky3: '#141d2e',
    ground: '#0d1420', groundDark: '#080d16',
    wallLight: '#2a2f3e', wallMid: '#232838', wallDark: '#1a1f2e',
    roof: '#1e2330', roofDark: '#161a26',
    panel: '#0a1525', panelSheen: 'rgba(59,130,246,0.15)',
    glass: 'rgba(96,165,250,0.2)', glassDark: 'rgba(30,58,95,0.5)',
    accent: '#f59e0b', accentSoft: 'rgba(245,158,11,0.2)',
    text: '#e2e8f0', textSoft: '#94a3b8',
    shadow: 'rgba(0,0,0,0.4)'
  };

  // Calcular layout dos paineis (grade 2 colunas x N linhas)
  const panelCols = Math.ceil(panels / 2);
  const panelRows = 2;
  const panelW = 38;
  const panelH = 22;
  const panelGapX = 4;
  const panelGapY = 4;

  // Isometric projection helper (30 graus)
  const iso = (x, y) => `${x - y * 0.5},${y * 0.866}`;

  return `<svg class="digital-twin-svg" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Digital twin: residencia contemporanea com sistema fotovoltaico integrado">
  <defs>
    <linearGradient id="${id}-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${C.sky1}"/>
      <stop offset="60%" stop-color="${C.sky2}"/>
      <stop offset="100%" stop-color="${C.sky3}"/>
    </linearGradient>
    <linearGradient id="${id}-wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${C.wallLight}"/>
      <stop offset="100%" stop-color="${C.wallMid}"/>
    </linearGradient>
    <linearGradient id="${id}-wall-side" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${C.wallMid}"/>
      <stop offset="100%" stop-color="${C.wallDark}"/>
    </linearGradient>
    <linearGradient id="${id}-roof" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${C.roof}"/>
      <stop offset="100%" stop-color="${C.roofDark}"/>
    </linearGradient>
    <linearGradient id="${id}-panel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e3a5f"/>
      <stop offset="50%" stop-color="${C.panel}"/>
      <stop offset="100%" stop-color="#050a15"/>
    </linearGradient>
    <linearGradient id="${id}-panel-sheen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="rgba(96,165,250,0.25)"/>
      <stop offset="50%" stop-color="rgba(96,165,250,0.05)"/>
      <stop offset="100%" stop-color="rgba(59,130,246,0)"/>
    </linearGradient>
    <linearGradient id="${id}-glass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${C.glass}"/>
      <stop offset="100%" stop-color="${C.glassDark}"/>
    </linearGradient>
    <linearGradient id="${id}-ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${C.ground}"/>
      <stop offset="100%" stop-color="${C.groundDark}"/>
    </linearGradient>
    <radialGradient id="${id}-sun-glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="${C.accent}" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="${C.accent}" stop-opacity="0"/>
    </radialGradient>
    <filter id="${id}-shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="12"/>
      <feOffset dx="0" dy="8"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.5"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="${id}-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4"/>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Ceu / background -->
  <rect width="${w}" height="${h}" fill="url(#${id}-sky)"/>

  <!-- Sol com brilho -->
  <circle cx="${w*0.85}" cy="${h*0.15}" r="80" fill="url(#${id}-sun-glow)"/>
  <circle cx="${w*0.85}" cy="${h*0.15}" r="22" fill="${C.accent}" opacity="0.85"/>
  <circle cx="${w*0.85}" cy="${h*0.15}" r="14" fill="#fbbf24" opacity="0.95"/>

  <!-- Linhas de grade sutis (estilo tecnico) -->
  <g opacity="0.04" stroke="${C.text}" stroke-width="0.5">
    ${Array.from({length: 12}).map((_, i) => `<line x1="0" y1="${i * h/12}" x2="${w}" y2="${i * h/12}"/>`).join('')}
    ${Array.from({length: 16}).map((_, i) => `<line x1="${i * w/16}" y1="0" x2="${i * w/16}" y2="${h}"/>`).join('')}
  </g>

  <!-- Chao isometrico -->
  <polygon points="${w*0.1},${h*0.72} ${w*0.9},${h*0.72} ${w*0.95},${h*0.78} ${w*0.05},${h*0.78}" fill="url(#${id}-ground)"/>
  <polygon points="${w*0.05},${h*0.78} ${w*0.95},${h*0.78} ${w*0.92},${h*0.85} ${w*0.08},${h*0.85}" fill="${C.groundDark}" opacity="0.6"/>

  <!-- ===== CASA ISOMETRICA ===== -->
  <!-- A casa e composta por 2 volumes: principal (maior) + anexo -->

  <!-- Sombra da casa no chao -->
  <ellipse cx="${w*0.5}" cy="${h*0.76}" rx="${w*0.32}" ry="${h*0.04}" fill="${C.shadow}" filter="url(#${id}-shadow)"/>

  <!-- Volume principal - face frontal (esquerda) -->
  <polygon points="${w*0.22},${h*0.45} ${w*0.52},${h*0.45} ${w*0.52},${h*0.72} ${w*0.22},${h*0.72}" fill="url(#${id}-wall)"/>

  <!-- Volume principal - face lateral (direita, mais escura) -->
  <polygon points="${w*0.52},${h*0.45} ${w*0.65},${h*0.38} ${w*0.65},${h*0.65} ${w*0.52},${h*0.72}" fill="url(#${id}-wall-side)"/>

  <!-- Volume anexo (mais baixo, a direita) -->
  <polygon points="${w*0.52},${h*0.55} ${w*0.72},${h*0.48} ${w*0.72},${h*0.68} ${w*0.52},${h*0.72}" fill="${C.wallDark}" opacity="0.85"/>

  <!-- Telhado - volume principal (inclinado, face superior) -->
  <polygon points="${w*0.22},${h*0.45} ${w*0.52},${h*0.45} ${w*0.65},${h*0.38} ${w*0.35},${h*0.38}" fill="url(#${id}-roof)"/>

  <!-- Telhado - beirada -->
  <polygon points="${w*0.20},${h*0.45} ${w*0.22},${h*0.45} ${w*0.35},${h*0.38} ${w*0.33},${h*0.38}" fill="${C.roofDark}"/>
  <polygon points="${w*0.35},${h*0.38} ${w*0.65},${h*0.38} ${w*0.67},${h*0.40} ${w*0.37},${h*0.40}" fill="${C.roofDark}" opacity="0.7"/>

  <!-- ===== PAINELS SOLARES NO TELHADO ===== -->
  <!-- Os paineis sao posicionados na face superior do telhado do volume principal -->
  <g transform="translate(${w*0.24} ${h*0.42}) skewY(-15)">
    ${Array.from({length: panelRows}).map((_, row) =>
      Array.from({length: panelCols}).map((_, col) => {
        if (row * panelCols + col >= panels) return '';
        const px = col * (panelW + panelGapX);
        const py = row * (panelH + panelGapY);
        return `<g transform="translate(${px} ${py})" class="twin-panel" data-panel="${row * panelCols + col + 1}">
          <rect width="${panelW}" height="${panelH}" rx="1.5" fill="url(#${id}-panel)" stroke="#2a4a6f" stroke-width="0.5"/>
          <rect width="${panelW}" height="${panelH}" rx="1.5" fill="url(#${id}-panel-sheen)"/>
          <line x1="${panelW*0.25}" y1="0" x2="${panelW*0.25}" y2="${panelH}" stroke="#1a3a5f" stroke-width="0.3"/>
          <line x1="${panelW*0.5}" y1="0" x2="${panelW*0.5}" y2="${panelH}" stroke="#1a3a5f" stroke-width="0.3"/>
          <line x1="${panelW*0.75}" y1="0" x2="${panelW*0.75}" y2="${panelH}" stroke="#1a3a5f" stroke-width="0.3"/>
          <line x1="0" y1="${panelH*0.5}" x2="${panelW}" y2="${panelH*0.5}" stroke="#1a3a5f" stroke-width="0.3"/>
          ${generating ? `<rect width="${panelW}" height="${panelH}" rx="1.5" fill="${C.accent}" opacity="0.08"><animate attributeName="opacity" values="0.05;0.15;0.05" dur="3s" repeatCount="indefinite" begin="${(row*panelCols+col)*0.2}s"/></rect>` : ''}
        </g>`;
      }).join('')
    ).join('')}
  </g>

  <!-- Telhado do anexo (plano, sem paineis) -->
  <polygon points="${w*0.52},${h*0.55} ${w*0.72},${h*0.48} ${w*0.74},${h*0.49} ${w*0.54},${h*0.56}" fill="${C.roof}" opacity="0.8"/>

  <!-- Janelas grandes (arquitetura contemporanea - vidro) -->
  <!-- Janela frontal 1 -->
  <rect x="${w*0.26}" y="${h*0.52}" width="${w*0.06}" height="${h*0.12}" rx="1" fill="url(#${id}-glass)"/>
  <line x1="${w*0.29}" y1="${h*0.52}" x2="${w*0.29}" y2="${h*0.64}" stroke="${C.wallDark}" stroke-width="0.5"/>
  <!-- Janela frontal 2 -->
  <rect x="${w*0.35}" y="${h*0.52}" width="${w*0.06}" height="${h*0.12}" rx="1" fill="url(#${id}-glass)"/>
  <line x1="${w*0.38}" y1="${h*0.52}" x2="${w*0.38}" y2="${h*0.64}" stroke="${C.wallDark}" stroke-width="0.5"/>
  <!-- Porta -->
  <rect x="${w*0.44}" y="${h*0.58}" width="${w*0.04}" height="${h*0.14}" rx="0.5" fill="${C.wallDark}"/>
  <!-- Janela lateral -->
  <polygon points="${w*0.54},${h*0.50} ${w*0.63},${h*0.43} ${w*0.63},${h*0.55} ${w*0.54},${h*0.62}" fill="url(#${id}-glass)" opacity="0.7"/>

  <!-- Inversor na parede lateral (pequeno detalhe tecnico) -->
  <rect x="${w*0.56}" y="${h*0.60}" width="14" height="20" rx="1" fill="${C.roofDark}" stroke="${C.accent}" stroke-width="0.5"/>
  <circle cx="${w*0.56+7}" cy="${h*0.60+6}" r="2" fill="${generating ? '#22c55e' : '#475569'}">
    ${generating ? '<animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite"/>' : ''}
  </circle>

  <!-- Linha de conexao painel -> inversor (sutil) -->
  <path d="M ${w*0.35} ${h*0.42} L ${w*0.56} ${h*0.60}" stroke="${C.accent}" stroke-width="0.8" opacity="0.3" stroke-dasharray="2,2"/>

  <!-- ===== FLUXO ENERGETICO ANIMADO ===== -->
  ${showFlow ? `
  <!-- Sol -> Painels -->
  <g class="flow-sun-panels">
    <path d="M ${w*0.85} ${h*0.15} Q ${w*0.7} ${h*0.25} ${w*0.4} ${h*0.38}" stroke="${C.accent}" stroke-width="2" fill="none" opacity="0.3" stroke-dasharray="4,6">
      <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" repeatCount="indefinite"/>
    </path>
    <circle r="3" fill="${C.accent}" opacity="0.8">
      <animateMotion dur="2s" repeatCount="indefinite" path="M ${w*0.85} ${h*0.15} Q ${w*0.7} ${h*0.25} ${w*0.4} ${h*0.38}"/>
    </circle>
  </g>
  <!-- Painels -> Casa -->
  <g class="flow-panels-house">
    <path d="M ${w*0.35} ${h*0.42} L ${w*0.35} ${h*0.58}" stroke="#22c55e" stroke-width="2" fill="none" opacity="0.3" stroke-dasharray="4,6">
      <animate attributeName="stroke-dashoffset" values="0;-15" dur="1.5s" repeatCount="indefinite"/>
    </path>
    <circle r="3" fill="#22c55e" opacity="0.8">
      <animateMotion dur="1.5s" repeatCount="indefinite" path="M ${w*0.35} ${h*0.42} L ${w*0.35} ${h*0.58}"/>
    </circle>
  </g>
  <!-- Casa -> Rede -->
  <g class="flow-house-grid">
    <path d="M ${w*0.52} ${h*0.72} L ${w*0.78} ${h*0.78}" stroke="#3b82f6" stroke-width="2" fill="none" opacity="0.2" stroke-dasharray="4,6">
      <animate attributeName="stroke-dashoffset" values="0;-15" dur="2s" repeatCount="indefinite"/>
    </path>
    <circle r="2.5" fill="#3b82f6" opacity="0.6">
      <animateMotion dur="2s" repeatCount="indefinite" path="M ${w*0.52} ${h*0.72} L ${w*0.78} ${h*0.78}"/>
    </circle>
  </g>
  ` : ''}

  <!-- ===== HOTSPOTS ===== -->
  ${hotspots ? `
  <g class="twin-hotspots">
    <!-- [01] Modulos -->
    <g class="hotspot" data-id="01" transform="translate(${w*0.32} ${h*0.40})">
      <circle r="14" fill="${C.accent}" opacity="0.15"/>
      <circle r="10" fill="${C.accent}" opacity="0.3"/>
      <circle r="6" fill="${C.accent}"/>
      <text y="3" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">01</text>
    </g>
    <!-- [02] Inversor -->
    <g class="hotspot" data-id="02" transform="translate(${w*0.57} ${h*0.62})">
      <circle r="14" fill="${C.accent}" opacity="0.15"/>
      <circle r="10" fill="${C.accent}" opacity="0.3"/>
      <circle r="6" fill="${C.accent}"/>
      <text y="3" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">02</text>
    </g>
    <!-- [03] Quadro -->
    <g class="hotspot" data-id="03" transform="translate(${w*0.46} ${h*0.65})">
      <circle r="14" fill="#3b82f6" opacity="0.15"/>
      <circle r="10" fill="#3b82f6" opacity="0.3"/>
      <circle r="6" fill="#3b82f6"/>
      <text y="3" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">03</text>
    </g>
    <!-- [04] Rede -->
    <g class="hotspot" data-id="04" transform="translate(${w*0.80} ${h*0.76})">
      <circle r="14" fill="#22c55e" opacity="0.15"/>
      <circle r="10" fill="#22c55e" opacity="0.3"/>
      <circle r="6" fill="#22c55e"/>
      <text y="3" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">04</text>
    </g>
  </g>
  ` : ''}

  <!-- Poste da rede eletrica (canto direito) -->
  <line x1="${w*0.82}" y1="${h*0.55}" x2="${w*0.82}" y2="${h*0.78}" stroke="${C.wallDark}" stroke-width="1.5"/>
  <line x1="${w*0.79}" y1="${h*0.58}" x2="${w*0.85}" y2="${h*0.58}" stroke="${C.wallDark}" stroke-width="1"/>
  <line x1="${w*0.80}" y1="${h*0.61}" x2="${w*0.84}" y2="${h*0.61}" stroke="${C.wallDark}" stroke-width="1"/>

  <!-- Arvores sutis (paisagismo) -->
  <g opacity="0.5">
    <circle cx="${w*0.12}" cy="${h*0.68}" r="12" fill="${theme === 'light' ? '#6b8a6b' : '#1a2a1a'}"/>
    <rect x="${w*0.115}" y="${h*0.68}" width="2" height="10" fill="${C.wallDark}"/>
    <circle cx="${w*0.88}" cy="${h*0.70}" r="10" fill="${theme === 'light' ? '#6b8a6b' : '#1a2a1a'}"/>
    <rect x="${w*0.877}" y="${h*0.70}" width="2" height="8" fill="${C.wallDark}"/>
  </g>
</svg>`;
}

/* ================================================================
   2. HERO CINEMATOGRAFICO — Home
   Casa + widgets integrados sobre a imagem (nao card separado)
   ================================================================ */
function cinematicHero(opts) {
  opts = opts || {};
  const title = opts.title || 'Energia solar sem complicacao';
  const subtitle = opts.subtitle || 'Simule, projete, acompanhe e monitore seu sistema fotovoltaico em uma plataforma unica.';
  const cta = opts.cta || 'Iniciar simulacao';
  const ctaHref = opts.ctaHref || 'simulador.html';
  const secondaryCta = opts.secondaryCta || 'Ver projetos';
  const secondaryHref = opts.secondaryHref || 'projetos.html';

  return `<div class="cinematic-hero">
  <div class="cinematic-hero-visual">
    ${digitalTwin({ width: 900, height: 600, panels: 10, showFlow: true, generating: true, id: 'hero', theme: 'dark' })}
  </div>
  <div class="cinematic-hero-overlay">
    <div class="cinematic-hero-content">
      <span class="cinematic-hero-eyebrow">Plataforma energy-tech</span>
      <h1 class="cinematic-hero-title">${escapeHtml(title)}</h1>
      <p class="cinematic-hero-subtitle">${escapeHtml(subtitle)}</p>
      <div class="cinematic-hero-ctas">
        <a href="${ctaHref}" class="btn btn-primary btn-lg">${escapeHtml(cta)}</a>
        <a href="${secondaryHref}" class="btn btn-ghost-light btn-lg">${escapeHtml(secondaryCta)}</a>
      </div>
    </div>
    <div class="cinematic-hero-widgets">
      <div class="hero-widget">
        <div class="hero-widget-value">5,5 <span class="hero-widget-unit">kWp</span></div>
        <div class="hero-widget-label">Sistema estimado</div>
      </div>
      <div class="hero-widget">
        <div class="hero-widget-value">650 <span class="hero-widget-unit">kWh</span></div>
        <div class="hero-widget-label">Geracao mensal</div>
      </div>
      <div class="hero-widget">
        <div class="hero-widget-value">R$ 480</div>
        <div class="hero-widget-label">Economia estimada</div>
      </div>
    </div>
  </div>
</div>`;
}

/* ================================================================
   3. ROOF LAYOUT CAD — Top-down premium
   Textura, dimensoes, sombra, escala, orientacao
   ================================================================ */
function roofCAD(opts) {
  opts = opts || {};
  const panels = opts.panels || 10;
  const panelCols = opts.panelCols || 5;
  const panelRows = Math.ceil(panels / panelCols);
  const orientation = opts.orientation || 'norte'; // norte | leste | oeste
  const areaUsed = opts.areaUsed || '26 m²';
  const areaTotal = opts.areaTotal || '48 m²';
  const id = opts.id || 'roof';

  const panelW = 60;
  const panelH = 36;
  const gapX = 6;
  const gapY = 6;
  const startX = 80;
  const startY = 70;
  const roofW = panelCols * (panelW + gapX) + 40;
  const roofH = panelRows * (panelH + gapY) + 40;

  return `<svg class="roof-cad-svg" viewBox="0 0 500 380" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Layout tecnico do telhado com ${panels} modulos fotovoltaicos">
  <defs>
    <pattern id="${id}-tile" x="0" y="0" width="12" height="8" patternUnits="userSpaceOnUse">
      <rect width="12" height="8" fill="#1e2330"/>
      <rect width="11" height="7" fill="#2a2f3e" rx="0.5"/>
      <line x1="0" y1="4" x2="12" y2="4" stroke="#1a1f2e" stroke-width="0.3"/>
    </pattern>
    <pattern id="${id}-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <rect width="20" height="20" fill="none"/>
      <line x1="0" y1="0" x2="20" y2="0" stroke="rgba(245,158,11,0.08)" stroke-width="0.5"/>
      <line x1="0" y1="0" x2="0" y2="20" stroke="rgba(245,158,11,0.08)" stroke-width="0.5"/>
    </pattern>
    <linearGradient id="${id}-panel-cad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e3a5f"/>
      <stop offset="100%" stop-color="#0a1525"/>
    </linearGradient>
  </defs>

  <!-- Fundo tecnico -->
  <rect width="500" height="380" fill="#0d1117"/>
  <rect width="500" height="380" fill="url(#${id}-grid)"/>

  <!-- Bussola / orientacao -->
  <g transform="translate(440 50)">
    <circle r="28" fill="none" stroke="#f59e0b" stroke-width="1" opacity="0.5"/>
    <circle r="22" fill="none" stroke="#f59e0b" stroke-width="0.5" opacity="0.3"/>
    <polygon points="0,-22 4,0 0,22 -4,0" fill="#f59e0b" opacity="0.8"/>
    <polygon points="0,-22 4,0 0,0" fill="#fbbf24"/>
    <text y="-30" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="700">N</text>
    <text y="36" text-anchor="middle" fill="#475569" font-size="9">S</text>
    <text x="-32" y="3" text-anchor="middle" fill="#475569" font-size="9">O</text>
    <text x="32" y="3" text-anchor="middle" fill="#475569" font-size="9">L</text>
  </g>

  <!-- Telhado com textura -->
  <rect x="${startX - 20}" y="${startY - 20}" width="${roofW}" height="${roofH}" fill="url(#${id}-tile)" rx="2"/>
  <!-- Borda do telhado -->
  <rect x="${startX - 20}" y="${startY - 20}" width="${roofW}" height="${roofH}" fill="none" stroke="#f59e0b" stroke-width="1" opacity="0.4" rx="2"/>

  <!-- Paineis -->
  ${Array.from({length: panelRows}).map((_, row) =>
    Array.from({length: panelCols}).map((_, col) => {
      if (row * panelCols + col >= panels) return '';
      const px = startX + col * (panelW + gapX);
      const py = startY + row * (panelH + gapY);
      return `<g transform="translate(${px} ${py})">
        <rect width="${panelW}" height="${panelH}" rx="1" fill="url(#${id}-panel-cad)" stroke="#3b82f6" stroke-width="0.5" opacity="0.9"/>
        <rect width="${panelW}" height="${panelH}" rx="1" fill="rgba(96,165,250,0.08)"/>
        <line x1="${panelW*0.25}" y1="0" x2="${panelW*0.25}" y2="${panelH}" stroke="#1a3a5f" stroke-width="0.3"/>
        <line x1="${panelW*0.5}" y1="0" x2="${panelW*0.5}" y2="${panelH}" stroke="#1a3a5f" stroke-width="0.3"/>
        <line x1="${panelW*0.75}" y1="0" x2="${panelW*0.75}" y2="${panelH}" stroke="#1a3a5f" stroke-width="0.3"/>
        <line x1="0" y1="${panelH*0.5}" x2="${panelW}" y2="${panelH*0.5}" stroke="#1a3a5f" stroke-width="0.3"/>
        <text x="${panelW/2}" y="${panelH/2 + 3}" text-anchor="middle" fill="rgba(96,165,250,0.4)" font-size="7" font-family="monospace">${String(row * panelCols + col + 1).padStart(2, '0')}</text>
      </g>`;
    }).join('')
  ).join('')}

  <!-- Linhas de dimensao -->
  <!-- Horizontal (largura) -->
  <g stroke="#f59e0b" stroke-width="0.5" opacity="0.5">
    <line x1="${startX - 20}" y1="${startY - 30}" x2="${startX + roofW - 20}" y2="${startY - 30}"/>
    <line x1="${startX - 20}" y1="${startY - 35}" x2="${startX - 20}" y2="${startY - 25}"/>
    <line x1="${startX + roofW - 20}" y1="${startY - 35}" x2="${startX + roofW - 20}" y2="${startY - 25}"/>
  </g>
  <text x="${startX + roofW/2 - 20}" y="${startY - 34}" text-anchor="middle" fill="#f59e0b" font-size="9" font-family="monospace">12,0 m</text>

  <!-- Vertical (altura) -->
  <g stroke="#f59e0b" stroke-width="0.5" opacity="0.5">
    <line x1="${startX - 30}" y1="${startY - 20}" x2="${startX - 30}" y2="${startY + roofH - 20}"/>
    <line x1="${startX - 35}" y1="${startY - 20}" x2="${startX - 25}" y2="${startY - 20}"/>
    <line x1="${startX - 35}" y1="${startY + roofH - 20}" x2="${startX - 25}" y2="${startY + roofH - 20}"/>
  </g>
  <text x="${startX - 38}" y="${startY + roofH/2 - 20}" text-anchor="middle" fill="#f59e0b" font-size="9" font-family="monospace" transform="rotate(-90 ${startX - 38} ${startY + roofH/2 - 20})">4,0 m</text>

  <!-- Legenda de area -->
  <g transform="translate(20 340)">
    <rect width="8" height="8" fill="url(#${id}-panel-cad)" stroke="#3b82f6" stroke-width="0.5"/>
    <text x="14" y="7" fill="#e2e8f0" font-size="9" font-family="Inter, sans-serif">Area utilizada: ${areaUsed}</text>
    <rect x="120" width="8" height="8" fill="url(#${id}-tile)" stroke="#f59e0b" stroke-width="0.5" opacity="0.5"/>
    <text x="134" y="7" fill="#e2e8f0" font-size="9" font-family="Inter, sans-serif">Area disponivel: ${areaTotal}</text>
  </g>

  <!-- Sombra projetada (sutil) -->
  <ellipse cx="${startX + roofW/2 - 20}" cy="${startY + roofH + 10}" rx="${roofW * 0.4}" ry="8" fill="rgba(0,0,0,0.3)"/>

  <!-- Escala visual -->
  <g transform="translate(380 340)">
    <line x1="0" y1="0" x2="80" y2="0" stroke="#f59e0b" stroke-width="1" opacity="0.6"/>
    <line x1="0" y1="-3" x2="0" y2="3" stroke="#f59e0b" stroke-width="1" opacity="0.6"/>
    <line x1="40" y1="-2" x2="40" y2="2" stroke="#f59e0b" stroke-width="0.5" opacity="0.6"/>
    <line x1="80" y1="-3" x2="80" y2="3" stroke="#f59e0b" stroke-width="1" opacity="0.6"/>
    <text x="0" y="14" fill="#f59e0b" font-size="8" font-family="monospace" opacity="0.6">0</text>
    <text x="40" y="14" text-anchor="middle" fill="#f59e0b" font-size="8" font-family="monospace" opacity="0.6">2m</text>
    <text x="80" y="14" text-anchor="middle" fill="#f59e0b" font-size="8" font-family="monospace" opacity="0.6">4m</text>
  </g>
</svg>`;
}

/* ================================================================
   4. EQUIPAMENTOS — Renders estilo Apple/Tesla
   SolMais Module 550, SolMais Inverter 5K, SolMais Protection Box
   ================================================================ */
function equipmentRender(type, opts) {
  opts = opts || {};
  const id = opts.id || 'eq-' + type;

  if (type === 'module') {
    return `<svg class="equipment-render-svg" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SolMais Module 550 - modulo fotovoltaico">
    <defs>
      <linearGradient id="${id}-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1a1f2e"/>
        <stop offset="100%" stop-color="#0d1117"/>
      </linearGradient>
      <linearGradient id="${id}-frame" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#9ca3af"/>
        <stop offset="100%" stop-color="#4b5563"/>
      </linearGradient>
      <linearGradient id="${id}-cell" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1e3a5f"/>
        <stop offset="50%" stop-color="#0f2744"/>
        <stop offset="100%" stop-color="#050a15"/>
      </linearGradient>
      <linearGradient id="${id}-sheen" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="rgba(96,165,250,0.2)"/>
        <stop offset="50%" stop-color="rgba(96,165,250,0.03)"/>
        <stop offset="100%" stop-color="rgba(59,130,246,0)"/>
      </linearGradient>
    </defs>
    <rect width="300" height="200" fill="url(#${id}-bg)"/>
    <!-- Modulo em perspectiva leve -->
    <g transform="translate(50 30) skewX(-5)">
      <!-- Moldura aluminio -->
      <rect width="200" height="140" rx="3" fill="url(#${id}-frame)"/>
      <!-- Celulas -->
      <rect x="4" y="4" width="192" height="132" rx="1" fill="url(#${id}-cell)"/>
      <!-- Grid de celulas (6x10) -->
      ${Array.from({length: 6}).map((_, r) =>
        Array.from({length: 10}).map((_, c) => {
          const cw = 192/10, ch = 132/6;
          return `<rect x="${4 + c*cw + 1}" y="${4 + r*ch + 1}" width="${cw - 2}" height="${ch - 2}" fill="none" stroke="rgba(96,165,250,0.06)" stroke-width="0.3"/>`;
        }).join('')
      ).join('')}
      <!-- Busbars -->
      ${Array.from({length: 3}).map((_, i) => `<line x1="4" y1="${4 + (132/3)*(i+1) - 2}" x2="196" y2="${4 + (132/3)*(i+1) - 2}" stroke="rgba(96,165,250,0.1)" stroke-width="0.5"/>`).join('')}
      <!-- Brilho -->
      <rect x="4" y="4" width="192" height="132" rx="1" fill="url(#${id}-sheen)"/>
    </g>
    <!-- Caixa de conexao (back) -->
    <rect x="135" y="175" width="30" height="12" rx="1" fill="#1e2330" stroke="#4b5563" stroke-width="0.5"/>
    <circle cx="150" cy="181" r="2" fill="#f59e0b" opacity="0.6"/>
    <!-- Label -->
    <text x="150" y="195" text-anchor="middle" fill="#94a3b8" font-size="8" font-family="Inter, sans-serif">SolMais Module 550</text>
  </svg>`;
  }

  if (type === 'inverter') {
    return `<svg class="equipment-render-svg" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SolMais Inverter 5K - inversor string">
    <defs>
      <linearGradient id="${id}-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1a1f2e"/>
        <stop offset="100%" stop-color="#0d1117"/>
      </linearGradient>
      <linearGradient id="${id}-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#e5e7eb"/>
        <stop offset="50%" stop-color="#9ca3af"/>
        <stop offset="100%" stop-color="#6b7280"/>
      </linearGradient>
      <linearGradient id="${id}-screen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0a1525"/>
        <stop offset="100%" stop-color="#050a15"/>
      </linearGradient>
    </defs>
    <rect width="300" height="200" fill="url(#${id}-bg)"/>
    <!-- Corpo do inversor -->
    <g transform="translate(100 25)">
      <!-- Corpo principal -->
      <rect width="100" height="150" rx="6" fill="url(#${id}-body)"/>
      <!-- Painel frontal -->
      <rect x="8" y="8" width="84" height="50" rx="3" fill="url(#${id}-screen)"/>
      <!-- Display LCD -->
      <text x="50" y="28" text-anchor="middle" fill="#22c55e" font-size="11" font-family="monospace" font-weight="700">3,42 kW</text>
      <text x="50" y="42" text-anchor="middle" fill="#f59e0b" font-size="7" font-family="monospace">PRODUCING</text>
      <text x="50" y="52" text-anchor="middle" fill="#475569" font-size="6" font-family="monospace">584 kWh / mes</text>
      <!-- LEDs de status -->
      <circle cx="20" cy="72" r="3" fill="#22c55e"><animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/></circle>
      <circle cx="35" cy="72" r="3" fill="#22c55e"/>
      <circle cx="50" cy="72" r="3" fill="#475569"/>
      <circle cx="65" cy="72" r="3" fill="#475569"/>
      <circle cx="80" cy="72" r="3" fill="#f59e0b" opacity="0.5"/>
      <!-- Ventilacao -->
      <g stroke="#4b5563" stroke-width="0.5">
        ${Array.from({length: 8}).map((_, i) => `<line x1="15" y1="${85 + i*7}" x2="85" y2="${85 + i*7}"/>`).join('')}
      </g>
      <!-- Logo sutil -->
      <text x="50" y="145" text-anchor="middle" fill="#1e2330" font-size="9" font-weight="700" font-family="Sora, sans-serif">SolMais</text>
    </g>
    <!-- Label -->
    <text x="150" y="195" text-anchor="middle" fill="#94a3b8" font-size="8" font-family="Inter, sans-serif">SolMais Inverter 5K</text>
  </svg>`;
  }

  if (type === 'protection') {
    return `<svg class="equipment-render-svg" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SolMais Protection Box - quadro de protecao">
    <defs>
      <linearGradient id="${id}-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1a1f2e"/>
        <stop offset="100%" stop-color="#0d1117"/>
      </linearGradient>
      <linearGradient id="${id}-box" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4b5563"/>
        <stop offset="100%" stop-color="#374151"/>
      </linearGradient>
    </defs>
    <rect width="300" height="200" fill="url(#${id}-bg)"/>
    <!-- Quadro -->
    <g transform="translate(95 30)">
      <rect width="110" height="140" rx="4" fill="url(#${id}-box)" stroke="#6b7280" stroke-width="1"/>
      <!-- Interior -->
      <rect x="6" y="6" width="98" height="128" rx="2" fill="#1e2330"/>
      <!-- Disjuntor principal -->
      <rect x="15" y="15" width="30" height="40" rx="1" fill="#dc2626" opacity="0.8"/>
      <rect x="17" y="20" width="26" height="6" rx="1" fill="#1e2330"/>
      <text x="30" y="50" text-anchor="middle" fill="#fff" font-size="6" font-family="monospace">63A</text>
      <!-- Disjuntores secundarios -->
      ${Array.from({length: 4}).map((_, i) =>
        `<rect x="${55 + i * 12}" y="15" width="10" height="40" rx="1" fill="#1e40af" opacity="0.7"/>
         <rect x="${57 + i * 12}" y="20" width="6" height="4" rx="0.5" fill="#1e2330"/>
         <text x="${60 + i * 12}" y="50" text-anchor="middle" fill="#94a3b8" font-size="4" font-family="monospace">${16 + i}A</text>`
      ).join('')}
      <!-- DPS -->
      ${Array.from({length: 3}).map((_, i) =>
        `<rect x="${15 + i * 30}" y="65" width="25" height="20" rx="1" fill="#f59e0b" opacity="0.6"/>
         <text x="${27.5 + i * 30}" y="78" text-anchor="middle" fill="#1e2330" font-size="5" font-family="monospace">DPS</text>`
      ).join('')}
      <!-- Barramento -->
      <line x1="15" y1="100" x2="95" y2="100" stroke="#fbbf24" stroke-width="2" opacity="0.5"/>
      <line x1="15" y1="110" x2="95" y2="110" stroke="#3b82f6" stroke-width="2" opacity="0.5"/>
      <!-- Conexoes -->
      <circle cx="20" cy="125" r="3" fill="#22c55e"/>
      <circle cx="40" cy="125" r="3" fill="#22c55e"/>
      <circle cx="60" cy="125" r="3" fill="#f59e0b"/>
      <circle cx="80" cy="125" r="3" fill="#475569"/>
    </g>
    <text x="150" y="195" text-anchor="middle" fill="#94a3b8" font-size="8" font-family="Inter, sans-serif">SolMais Protection Box</text>
  </svg>`;
  }

  return '';
}

/* ================================================================
   5. CURVA SOLAR — Grafico grande com pico destacado + consumo
   Assinatura visual da marca
   ================================================================ */
function solarCurve(opts) {
  opts = opts || {};
  const id = opts.id || 'solar';
  const w = opts.width || 800;
  const h = opts.height || 280;
  const showConsumption = opts.showConsumption !== false;
  const peak = opts.peak || '4,82 kW';
  const peakTime = opts.peakTime || '12:38';

  // Geracao solar (curva sino)
  const genPoints = [];
  for (let i = 0; i <= 24; i++) {
    const x = (i / 24) * (w - 80) + 40;
    const v = Math.max(0, Math.sin(((i - 6) / 12) * Math.PI));
    const y = h - 50 - v * (h - 100);
    genPoints.push(`${x},${y}`);
  }
  const genPath = 'M ' + genPoints.join(' L ');
  const genArea = genPath + ` L ${w - 40},${h - 50} L 40,${h - 50} Z`;

  // Consumo (linha mais plana)
  const consPoints = [];
  const consPattern = [0.3, 0.25, 0.2, 0.2, 0.25, 0.35, 0.5, 0.6, 0.55, 0.5, 0.45, 0.4, 0.4, 0.42, 0.45, 0.5, 0.6, 0.75, 0.85, 0.8, 0.7, 0.55, 0.45, 0.35, 0.3];
  for (let i = 0; i < 24; i++) {
    const x = (i / 24) * (w - 80) + 40;
    const y = h - 50 - consPattern[i] * (h - 100) * 0.6;
    consPoints.push(`${x},${y}`);
  }
  const consPath = 'M ' + consPoints.join(' L ');

  // Pico
  const peakX = 40 + (12.6 / 24) * (w - 80);
  const peakY = h - 50 - 1.0 * (h - 100);

  return `<svg class="solar-curve-svg" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Curva de geracao solar ao longo do dia com pico de ${peak} as ${peakTime}">
  <defs>
    <linearGradient id="${id}-area" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.02"/>
    </linearGradient>
    <linearGradient id="${id}-line" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.3"/>
    </linearGradient>
  </defs>

  <!-- Grid horizontal -->
  <g stroke="rgba(148,163,184,0.1)" stroke-width="0.5">
    ${Array.from({length: 5}).map((_, i) => `<line x1="40" y1="${50 + i * (h - 100) / 4}" x2="${w - 40}" y2="${50 + i * (h - 100) / 4}"/>`).join('')}
  </g>

  <!-- Area de geracao -->
  <path d="${genArea}" fill="url(#${id}-area)"/>

  <!-- Curva de geracao -->
  <path d="${genPath}" stroke="url(#${id}-line)" stroke-width="2.5" fill="none"/>

  <!-- Linha de consumo -->
  ${showConsumption ? `<path d="${consPath}" stroke="#3b82f6" stroke-width="1.5" fill="none" stroke-dasharray="5,4" opacity="0.6"/>` : ''}

  <!-- Pico destacado -->
  <line x1="${peakX}" y1="${peakY}" x2="${peakX}" y2="${h - 50}" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
  <circle cx="${peakX}" cy="${peakY}" r="6" fill="#fbbf24" filter="url(#${id}-glow)"/>
  <circle cx="${peakX}" cy="${peakY}" r="3" fill="#fff"/>
  <g transform="translate(${peakX + 12} ${peakY - 20})">
    <rect width="80" height="36" rx="4" fill="#1e2330" stroke="#f59e0b" stroke-width="0.5"/>
    <text x="40" y="14" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="700" font-family="monospace">${peak}</text>
    <text x="40" y="28" text-anchor="middle" fill="#94a3b8" font-size="8" font-family="monospace">PICO ${peakTime}</text>
  </g>

  <!-- Eixo X (horas) -->
  <g fill="#64748b" font-size="9" font-family="monospace">
    ${['06h','09h','12h','15h','18h','21h'].map((label, i) => {
      const x = 40 + (i / 5) * (w - 80);
      return `<text x="${x}" y="${h - 30}" text-anchor="middle">${label}</text>`;
    }).join('')}
  </g>

  <!-- Eixo Y (kW) -->
  <g fill="#64748b" font-size="9" font-family="monospace">
    ${['5','4','3','2','1','0'].map((label, i) => {
      const y = 50 + i * (h - 100) / 5;
      return `<text x="30" y="${y + 3}" text-anchor="end">${label}</text>`;
    }).join('')}
  </g>

  <!-- Legenda -->
  <g transform="translate(${w - 200} 60)">
    <line x1="0" y1="0" x2="20" y2="0" stroke="#fbbf24" stroke-width="2"/>
    <text x="26" y="4" fill="#e2e8f0" font-size="10" font-family="Inter, sans-serif">Geracao</text>
    ${showConsumption ? `<line x1="90" y1="0" x2="110" y2="0" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.6"/>
    <text x="116" y="4" fill="#e2e8f0" font-size="10" font-family="Inter, sans-serif">Consumo</text>` : ''}
  </g>

  <!-- Label kW no eixo Y -->
  <text x="15" y="45" fill="#94a3b8" font-size="9" font-family="monospace">kW</text>
</svg>`;
}

/* ================================================================
   6. AREA CHART — Grafico de area premium
   ================================================================ */
function areaChart(data, opts) {
  opts = opts || {};
  const w = opts.width || 500;
  const h = opts.height || 200;
  const color = opts.color || '#f59e0b';
  const labels = opts.labels || [];
  const id = opts.id || 'area';
  const label = opts.label || '';
  const showAxis = opts.showAxis !== false;

  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const range = max - min || 1;
  const points = data.map((v, i) => {
    const x = 40 + (i / (data.length - 1)) * (w - 60);
    const y = h - 40 - ((v - min) / range) * (h - 70);
    return `${x},${y}`;
  });
  const path = 'M ' + points.join(' L ');
  const area = path + ` L ${40 + (w - 60)},${h - 40} L 40,${h - 40} Z`;

  return `<svg class="area-chart-svg" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeHtml(label)}">
  <defs>
    <linearGradient id="${id}-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0.02"/>
    </linearGradient>
  </defs>
  ${showAxis ? `<g stroke="rgba(148,163,184,0.1)" stroke-width="0.5">
    ${Array.from({length: 4}).map((_, i) => `<line x1="40" y1="${40 + i * (h - 70) / 3}" x2="${w - 20}" y2="${40 + i * (h - 70) / 3}"/>`).join('')}
  </g>` : ''}
  <path d="${area}" fill="url(#${id}-grad)"/>
  <path d="${path}" stroke="${color}" stroke-width="2" fill="none"/>
  ${data.map((v, i) => {
    const x = 40 + (i / (data.length - 1)) * (w - 60);
    const y = h - 40 - ((v - min) / range) * (h - 70);
    return `<circle cx="${x}" cy="${y}" r="2.5" fill="${color}"/>`;
  }).join('')}
  ${labels.length ? `<g fill="#64748b" font-size="8" font-family="monospace">
    ${labels.filter((_, i) => i % Math.ceil(labels.length / 6) === 0).map((l, i) => {
      const idx = i * Math.ceil(labels.length / 6);
      const x = 40 + (idx / (data.length - 1)) * (w - 60);
      return `<text x="${x}" y="${h - 20}" text-anchor="middle">${escapeHtml(l)}</text>`;
    }).join('')}
  </g>` : ''}
</svg>`;
}

/* ================================================================
   7. DONUT / GAUGE — Medidor circular premium
   ================================================================ */
function gauge(value, opts) {
  opts = opts || {};
  const id = opts.id || 'gauge';
  const label = opts.label || '';
  const unit = opts.unit || '';
  const max = opts.max || 100;
  const size = opts.size || 160;
  const color = opts.color || '#f59e0b';
  const pct = Math.min(value / max, 1);

  const r = size / 2 - 12;
  const cx = size / 2;
  const cy = size / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct * 0.75); // 270 graus

  return `<svg class="gauge-svg" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeHtml(label)}: ${value}${unit}">
  <circle cx="${cx}" cy="${cy}" r="${r}" stroke="rgba(148,163,184,0.15)" stroke-width="8" fill="none" stroke-dasharray="${circ}" stroke-dashoffset="${circ * 0.25}" stroke-linecap="round" transform="rotate(135 ${cx} ${cy})"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" stroke="${color}" stroke-width="8" fill="none" stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round" transform="rotate(135 ${cx} ${cy})" filter="url(#${id}-glow)"/>
  <text x="${cx}" y="${cy - 5}" text-anchor="middle" fill="${color}" font-size="${size * 0.18}" font-weight="700" font-family="Sora, sans-serif">${value}</text>
  <text x="${cx}" y="${cy + 15}" text-anchor="middle" fill="#94a3b8" font-size="${size * 0.08}" font-family="Inter, sans-serif">${escapeHtml(unit)}</text>
  <text x="${cx}" y="${cy + 32}" text-anchor="middle" fill="#64748b" font-size="${size * 0.07}" font-family="Inter, sans-serif">${escapeHtml(label)}</text>
</svg>`;
}

/* ================================================================
   8. SPARKLINE — Mini grafico para KPIs
   ================================================================ */
function sparkline(data, opts) {
  opts = opts || {};
  const w = opts.width || 100;
  const h = opts.height || 30;
  const color = opts.color || '#f59e0b';
  const id = opts.id || 'spark';

  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const range = max - min || 1;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x},${y}`;
  }).join(' L ');

  return `<svg class="sparkline-svg" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tendencia">
  <path d="M ${points}" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.8"/>
</svg>`;
}

/* ================================================================
   9. CASE HERO — Hero full-width por tipo de projeto
   Cada tipo tem arquitetura distinta
   ================================================================ */
function caseHero(type, opts) {
  opts = opts || {};
  const id = opts.id || 'case-' + type;
  const title = opts.title || '';
  const power = opts.power || '';
  const modules = opts.modules || '';
  const annual = opts.annual || '';

  const themes = {
    residencial: { sky: ['#0a0f1a', '#141d2e'], building: 'house', accent: '#f59e0b' },
    comercial: { sky: ['#0d1117', '#1a1f2e'], building: 'commercial', accent: '#f59e0b' },
    condominio: { sky: ['#0a1520', '#162030'], building: 'condo', accent: '#f59e0b' },
    rural: { sky: ['#0f1a0f', '#1a2a1a'], building: 'rural', accent: '#f59e0b' },
    galpao: { sky: ['#1a1a0d', '#2a2a15'], building: 'warehouse', accent: '#f59e0b' },
    compacto: { sky: ['#0d0f1a', '#161a2e'], building: 'compact', accent: '#f59e0b' }
  };
  const t = themes[type] || themes.residencial;

  let building = '';
  if (type === 'residencial') {
    building = `
      <!-- Casa contemporanea -->
      <polygon points="${id}-wall" fill="#2a2f3e"/>
      <rect x="${300*0.2}" y="${200*0.4}" width="${300*0.4}" height="${200*0.35}" fill="#2a2f3e"/>
      <polygon points="${300*0.15},${200*0.4} ${300*0.6},${200*0.4} ${300*0.55},${200*0.28} ${300*0.22},${200*0.28}" fill="#1e2330"/>
      <g transform="translate(${300*0.18} ${200*0.30}) skewY(-12)">
        ${Array.from({length: 2}).map((_, r) => Array.from({length: 5}).map((_, c) =>
          `<rect x="${c*42}" y="${r*20}" width="38" height="16" rx="1" fill="#0a1525" stroke="#2a4a6f" stroke-width="0.5"/>`
        ).join('')).join('')}
      </g>
      <rect x="${300*0.25}" y="${200*0.5}" width="${300*0.08}" height="${200*0.15}" fill="rgba(96,165,250,0.2)"/>
      <rect x="${300*0.36}" y="${200*0.5}" width="${300*0.08}" height="${200*0.15}" fill="rgba(96,165,250,0.2)"/>`;
  } else if (type === 'comercial') {
    building = `
      <!-- Edificio comercial -->
      <rect x="${300*0.15}" y="${200*0.15}" width="${300*0.45}" height="${200*0.6}" fill="#2a2f3e"/>
      <rect x="${300*0.15}" y="${200*0.10}" width="${300*0.45}" height="${200*0.06}" fill="#1e2330"/>
      <!-- Paineis no topo (plano) -->
      <g transform="translate(${300*0.17} ${200*0.115})">
        ${Array.from({length: 2}).map((_, r) => Array.from({length: 8}).map((_, c) =>
          `<rect x="${c*16}" y="${r*8}" width="14" height="6" rx="0.5" fill="#0a1525" stroke="#2a4a6f" stroke-width="0.3"/>`
        ).join('')).join('')}
      </g>
      <!-- Janelas (grid comercial) -->
      ${Array.from({length: 6}).map((_, r) => Array.from({length: 5}).map((_, c) =>
        `<rect x="${300*0.18 + c*22}" y="${200*0.22 + r*16}" width="16" height="10" fill="rgba(96,165,250,0.15)" stroke="#1e2330" stroke-width="0.3"/>`
      ).join('')).join('')}`;
  } else if (type === 'condominio') {
    building = `
      <!-- Condominio (3 torres) -->
      ${[0, 1, 2].map(i => {
        const x = 300*0.15 + i * 300*0.18;
        const hh = 200*0.5 - i * 200*0.05;
        return `<rect x="${x}" y="${200*0.75 - hh}" width="${300*0.14}" height="${hh}" fill="#2a2f3e"/>
        <rect x="${x}" y="${200*0.75 - hh - 4}" width="${300*0.14}" height="4" fill="#1e2330"/>
        <g transform="translate(${x + 4} ${200*0.75 - hh - 2})">
          ${Array.from({length: 3}).map((_, r) => Array.from({length: 4}).map((_, c) =>
            `<rect x="${c*14}" y="${r*6}" width="12" height="4" rx="0.3" fill="#0a1525" stroke="#2a4a6f" stroke-width="0.2"/>`
          ).join('')).join('')}
        </g>
        ${Array.from({length: Math.floor(hh/20)}).map((_, r) =>
          Array.from({length: 3}).map((_, c) =>
            `<rect x="${x + 4 + c*20}" y="${200*0.75 - hh + 10 + r*18}" width="14" height="10" fill="rgba(96,165,250,0.15)"/>`
          ).join('')
        ).join('')}`;
      }).join('')}`;
  } else if (type === 'rural') {
    building = `
      <!-- Propriedade rural -->
      <rect x="${300*0.2}" y="${200*0.35}" width="${300*0.35}" height="${200*0.4}" fill="#3a3025"/>
      <polygon points="${300*0.15},${200*0.35} ${300*0.55},${200*0.35} ${300*0.5},${200*0.18} ${300*0.22},${200*0.18}" fill="#2a2520"/>
      <g transform="translate(${300*0.22} ${200*0.22}) skewY(-20)">
        ${Array.from({length: 2}).map((_, r) => Array.from({length: 4}).map((_, c) =>
          `<rect x="${c*38}" y="${r*16}" width="34" height="12" rx="1" fill="#0a1525" stroke="#2a4a6f" stroke-width="0.4"/>`
        ).join('')).join('')}
      </g>
      <rect x="${300*0.25}" y="${200*0.5}" width="${300*0.06}" height="${200*0.12}" fill="rgba(96,165,250,0.15)"/>
      <!-- Terreno / pasto -->
      <rect x="0" y="${200*0.75}" width="${300}" height="${200*0.25}" fill="#1a2a1a" opacity="0.5"/>`;
  } else if (type === 'galpao') {
    building = `
      <!-- Galpao industrial -->
      <polygon points="${300*0.1},${200*0.55} ${300*0.85},${200*0.55} ${300*0.85},${200*0.75} ${300*0.1},${200*0.75}" fill="#2a2f3e"/>
      <polygon points="${300*0.1},${200*0.55} ${300*0.85},${200*0.55} ${300*0.8},${200*0.35} ${300*0.15},${200*0.35}" fill="#1e2330"/>
      <!-- Paineis no telhado (plano grande) -->
      <g transform="translate(${300*0.17} ${200*0.38})">
        ${Array.from({length: 3}).map((_, r) => Array.from({length: 10}).map((_, c) =>
          `<rect x="${c*22}" y="${r*10}" width="20" height="8" rx="0.5" fill="#0a1525" stroke="#2a4a6f" stroke-width="0.3"/>`
        ).join('')).join('')}
      </g>
      <!-- Portao -->
      <rect x="${300*0.35}" y="${200*0.58}" width="${300*0.25}" height="${200*0.17}" fill="#1a1f2e" stroke="#475569" stroke-width="0.5"/>`;
  } else {
    // compacto
    building = `
      <!-- Casa compacta -->
      <rect x="${300*0.25}" y="${200*0.42}" width="${300*0.3}" height="${200*0.33}" fill="#2a2f3e"/>
      <polygon points="${300*0.22},${200*0.42} ${300*0.55},${200*0.42} ${300*0.52},${200*0.30} ${300*0.27},${200*0.30}" fill="#1e2330"/>
      <g transform="translate(${300*0.27} ${200*0.32}) skewY(-12)">
        ${Array.from({length: 2}).map((_, r) => Array.from({length: 3}).map((_, c) =>
          `<rect x="${c*36}" y="${r*14}" width="32" height="10" rx="1" fill="#0a1525" stroke="#2a4a6f" stroke-width="0.4"/>`
        ).join('')).join('')}
      </g>
      <rect x="${300*0.30}" y="${200*0.50}" width="${300*0.06}" height="${200*0.12}" fill="rgba(96,165,250,0.2)"/>`;
  }

  return `<div class="case-hero">
  <svg class="case-hero-svg" viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${escapeHtml(title)} - ${escapeHtml(power)}">
    <defs>
      <linearGradient id="${id}-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${t.sky[0]}"/>
        <stop offset="100%" stop-color="${t.sky[1]}"/>
      </linearGradient>
      <radialGradient id="${id}-sun" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="${t.accent}" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="${t.accent}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#${id}-sky)"/>
    <circle cx="1000" cy="100" r="120" fill="url(#${id}-sun)"/>
    <circle cx="1000" cy="100" r="30" fill="${t.accent}" opacity="0.7"/>
    <!-- Edificio escalado e centralizado -->
    <g transform="translate(450 100) scale(1.8)">
      ${building}
    </g>
    <!-- Overlay escuro para legibilidade -->
    <rect width="1200" height="500" fill="url(#${id}-sky)" opacity="0.3"/>
    <linearGradient id="${id}-overlay" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(10,15,26,0.6)"/>
      <stop offset="60%" stop-color="rgba(10,15,26,0.2)"/>
      <stop offset="100%" stop-color="rgba(10,15,26,0.7)"/>
    </linearGradient>
    <rect width="1200" height="500" fill="url(#${id}-overlay)"/>
  </svg>
  <div class="case-hero-overlay">
    <span class="case-hero-badge">PROJETO DEMONSTRATIVO</span>
    <h1 class="case-hero-title">${escapeHtml(title)}</h1>
    <div class="case-hero-stats">
      <div class="case-hero-stat"><span class="case-hero-stat-value">${escapeHtml(power)}</span><span class="case-hero-stat-label">Potencia</span></div>
      <div class="case-hero-stat"><span class="case-hero-stat-value">${escapeHtml(modules)}</span><span class="case-hero-stat-label">Modulos</span></div>
      <div class="case-hero-stat"><span class="case-hero-stat-value">${escapeHtml(annual)}</span><span class="case-hero-stat-label">Geracao anual</span></div>
    </div>
  </div>
</div>`;
}

/* ================================================================
   10. MAPA DEMONSTRATIVO — SVG com pins coloridos
   ================================================================ */
function mapDemo(opts) {
  opts = opts || {};
  const systems = opts.systems || [];
  const id = opts.id || 'map';

  const pins = systems.map((s, i) => {
    const x = 60 + (i % 4) * 100 + Math.random() * 30;
    const y = 50 + Math.floor(i / 4) * 80 + Math.random() * 20;
    const color = s.health && s.health.system === 'normal' ? '#22c55e' : s.health && s.health.system === 'atencao' ? '#f59e0b' : '#ef4444';
    return `<g class="map-pin" transform="translate(${x} ${y})">
      <circle r="12" fill="${color}" opacity="0.15"><animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite" begin="${i*0.3}s"/></circle>
      <circle r="6" fill="${color}"/>
      <circle r="3" fill="#fff"/>
    </g>`;
  }).join('');

  return `<svg class="map-demo-svg" viewBox="0 0 460 280" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa demonstrativo com ${systems.length} sistemas monitorados">
  <defs>
    <linearGradient id="${id}-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0d1117"/>
      <stop offset="100%" stop-color="#0a0e16"/>
    </linearGradient>
  </defs>
  <rect width="460" height="280" fill="url(#${id}-bg)" rx="8"/>
  <!-- Linhas de grade (estilo mapa tecnico) -->
  <g stroke="rgba(245,158,11,0.06)" stroke-width="0.5">
    ${Array.from({length: 14}).map((_, i) => `<line x1="${i * 35}" y1="0" x2="${i * 35}" y2="280"/>`).join('')}
    ${Array.from({length: 8}).map((_, i) => `<line x1="0" y1="${i * 35}" x2="460" y2="${i * 35}"/>`).join('')}
  </g>
  <!-- Costa/litoral estilizado -->
  <path d="M 50 50 Q 120 80 180 60 T 300 90 T 420 70 L 420 250 Q 350 260 280 240 T 150 250 L 50 230 Z" fill="rgba(30,58,95,0.15)" stroke="rgba(59,130,246,0.2)" stroke-width="1"/>
  ${pins}
  <!-- Legenda -->
  <g transform="translate(20 250)">
    <circle cx="0" cy="0" r="4" fill="#22c55e"/><text x="10" y="3" fill="#94a3b8" font-size="8">Normal</text>
    <circle cx="60" cy="0" r="4" fill="#f59e0b"/><text x="70" y="3" fill="#94a3b8" font-size="8">Atencao</text>
    <circle cx="130" cy="0" r="4" fill="#ef4444"/><text x="140" y="3" fill="#94a3b8" font-size="8">Alerta</text>
  </g>
</svg>`;
}

/* ================================================================
   11. OG IMAGE — SVG 1200x630
   ================================================================ */
function ogImage(opts) {
  opts = opts || {};
  const title = opts.title || 'SolMais';
  const subtitle = opts.subtitle || 'Plataforma energy-tech';
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeHtml(title)} — ${escapeHtml(subtitle)}">
  <defs>
    <linearGradient id="og-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0f1a"/>
      <stop offset="100%" stop-color="#141d2e"/>
    </linearGradient>
    <radialGradient id="og-sun" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#og-bg)"/>
  <circle cx="950" cy="150" r="200" fill="url(#og-sun)"/>
  <circle cx="950" cy="150" r="50" fill="#f59e0b" opacity="0.6"/>
  <!-- Mini digital twin -->
  <g transform="translate(700 280) scale(0.5)">
    <rect x="0" y="80" width="300" height="180" fill="#2a2f3e"/>
    <polygon points="0,80 300,80 270,20 40,20" fill="#1e2330"/>
    <g transform="translate(30 30) skewY(-12)">
      ${Array.from({length: 2}).map((_, r) => Array.from({length: 5}).map((_, c) =>
        `<rect x="${c*50}" y="${r*22}" width="46" height="18" rx="1" fill="#0a1525" stroke="#2a4a6f" stroke-width="0.5"/>`
      ).join('')).join('')}
    </g>
  </g>
  <text x="80" y="280" fill="#f59e0b" font-size="28" font-weight="700" font-family="Sora, sans-serif">SolMais</text>
  <text x="80" y="340" fill="#e2e8f0" font-size="48" font-weight="700" font-family="Sora, sans-serif">${escapeHtml(title)}</text>
  <text x="80" y="390" fill="#94a3b8" font-size="24" font-family="Inter, sans-serif">${escapeHtml(subtitle)}</text>
  <rect x="80" y="430" width="280" height="36" rx="18" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="1"/>
  <text x="220" y="453" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="600" font-family="Inter, sans-serif">Plataforma demonstrativa</text>
  <text x="80" y="570" fill="#475569" font-size="16" font-family="Inter, sans-serif">solmais.expostacker.com.br</text>
</svg>`;
}

/* ================================================================
   12. PAGE HERO — Hero para paginas internas
   ================================================================ */
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

/* ================================================================
   13. ENERGY FLOW — Fluxo energetico animado
   ================================================================ */
function energyFlow(opts) {
  opts = opts || {};
  const id = opts.id || 'flow';
  return `<svg class="energy-flow-svg" viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fluxo energetico: sol para paineis, paineis para casa, excedente para rede">
  <defs>
    <radialGradient id="${id}-sun" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Sol -->
  <circle cx="60" cy="60" r="40" fill="url(#${id}-sun)"/>
  <circle cx="60" cy="60" r="18" fill="#f59e0b"/>
  <text x="60" y="105" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="600">SOL</text>
  <!-- Flow: Sol -> Painels -->
  <path d="M 90 60 L 200 60" stroke="#f59e0b" stroke-width="2" fill="none" opacity="0.3" stroke-dasharray="6,4">
    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite"/>
  </path>
  <circle r="4" fill="#f59e0b"><animateMotion dur="1.5s" repeatCount="indefinite" path="M 90 60 L 200 60"/></circle>
  <!-- Painels -->
  <g transform="translate(200 40)">
    <rect width="60" height="40" rx="2" fill="#0a1525" stroke="#2a4a6f" stroke-width="0.5"/>
    ${Array.from({length: 2}).map((_, r) => Array.from({length: 3}).map((_, c) =>
      `<rect x="${4 + c*18}" y="${4 + r*16}" width="16" height="14" rx="0.5" fill="rgba(59,130,246,0.2)" stroke="#1a3a5f" stroke-width="0.3"/>`
    ).join('')).join('')}
  </g>
  <text x="230" y="105" text-anchor="middle" fill="#3b82f6" font-size="10" font-weight="600">PAINELS</text>
  <!-- Flow: Painels -> Casa -->
  <path d="M 270 60 L 380 60" stroke="#22c55e" stroke-width="2" fill="none" opacity="0.3" stroke-dasharray="6,4">
    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.2s" repeatCount="indefinite"/>
  </path>
  <circle r="4" fill="#22c55e"><animateMotion dur="1.2s" repeatCount="indefinite" path="M 270 60 L 380 60"/></circle>
  <!-- Casa -->
  <g transform="translate(380 35)">
    <rect width="50" height="50" rx="2" fill="#2a2f3e"/>
    <polygon points="-5,0 55,0 50,-15 0,-15" fill="#1e2330"/>
    <rect x="10" y="15" width="12" height="15" fill="rgba(96,165,250,0.3)"/>
    <rect x="28" y="15" width="12" height="15" fill="rgba(96,165,250,0.3)"/>
  </g>
  <text x="405" y="105" text-anchor="middle" fill="#e2e8f0" font-size="10" font-weight="600">CASA</text>
  <!-- Flow: Casa -> Rede -->
  <path d="M 440 60 L 540 60" stroke="#3b82f6" stroke-width="2" fill="none" opacity="0.2" stroke-dasharray="6,4">
    <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" repeatCount="indefinite"/>
  </path>
  <circle r="3" fill="#3b82f6" opacity="0.6"><animateMotion dur="2s" repeatCount="indefinite" path="M 440 60 L 540 60"/></circle>
  <!-- Rede -->
  <line x1="540" y1="30" x2="540" y2="80" stroke="#475569" stroke-width="2"/>
  <line x1="535" y1="35" x2="545" y2="35" stroke="#475569" stroke-width="1"/>
  <line x1="536" y1="42" x2="544" y2="42" stroke="#475569" stroke-width="1"/>
  <text x="540" y="105" text-anchor="middle" fill="#64748b" font-size="10" font-weight="600">REDE</text>
</svg>`;
}

module.exports = {
  digitalTwin,
  cinematicHero,
  roofCAD,
  equipmentRender,
  solarCurve,
  areaChart,
  gauge,
  sparkline,
  caseHero,
  mapDemo,
  ogImage,
  pageHero,
  energyFlow
};
