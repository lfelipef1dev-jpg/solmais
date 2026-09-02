/* SolMais — Home V3
   EDITORIAL ENERGY-TECH + PRODUCT SHOWCASE
   Apple × Tesla Energy × Aurora Solar
   Ritmo: HERO dark → PRODUCT light → SIM light → TWIN dark → MONITOR light → PROJECTS light → CTA dark */

function render(data, T) {
  const store = data.store;
  const cases = data.cases || [];

  /* === 01 — HERO CINEMATOGRAFICO (full viewport) === */
  const hero = `<section class="sm-hero">
  <div class="sm-hero-visual">
    ${T.digitalTwin({ width: 1600, height: 1000, panels: 10, showFlow: true, generating: true, id: 'hero-v3', theme: 'dark' })}
  </div>
  <div class="sm-hero-overlay">
    <div class="sm-hero-content">
      <h1 class="sm-hero-title">Sua energia.<br><span class="accent">Projetada</span> para voce.</h1>
      <p class="sm-hero-sub">Simule, acompanhe e monitore seu sistema solar em uma unica plataforma.</p>
      <a href="simulador.html" class="sm-hero-cta">Simular meu sistema &rarr;</a>
      <div class="sm-hero-meta">
        <div class="sm-hero-meta-item">
          <div class="sm-hero-meta-value">5,5 kWp</div>
          <div class="sm-hero-meta-label">Sistema demonstrativo</div>
        </div>
        <div class="sm-hero-meta-item">
          <div class="sm-hero-meta-value">650 kWh/mes</div>
          <div class="sm-hero-meta-label">Geracao estimada</div>
        </div>
        <div class="sm-hero-meta-item">
          <div class="sm-hero-meta-value">R$ 480/mes</div>
          <div class="sm-hero-meta-label">Economia</div>
        </div>
      </div>
    </div>
  </div>
</section>`;

  /* === 02 — PRODUTO: "Do telhado aos dados" (light editorial) === */
  const productSection = `<section class="sm-product-section">
  <div class="sm-product-grid">
    <div class="sm-product-text">
      <span class="sm-eyebrow">A plataforma</span>
      <h2 class="sm-headline">Do telhado<br>aos dados.</h2>
      <p class="sm-lede">O SolMais une modelagem do telhado, dimensionamento do sistema, acompanhamento do projeto e monitoramento energetico em uma so interface. Nao e um site de empresa solar. E software de energia.</p>
      <a href="projeto.html" class="sm-hero-cta" style="color:var(--solar)">Ver produto em acao &rarr;</a>
    </div>
    <div class="sm-product-visual">
      <div class="digital-twin-wrap">
        ${T.digitalTwin({ width: 600, height: 420, panels: 10, showFlow: false, generating: false, id: 'prod-v3', theme: 'dark' })}
      </div>
      <div class="sm-float-ui sm-float-ui-tr">
        <div class="sm-float-ui-title">Sistema</div>
        <div class="sm-float-ui-row"><span class="sm-float-ui-label">Potencia</span><span class="sm-float-ui-value">5,5 kWp</span></div>
        <div class="sm-float-ui-row"><span class="sm-float-ui-label">Modulos</span><span class="sm-float-ui-value">10</span></div>
        <div class="sm-float-ui-row"><span class="sm-float-ui-label">Area</span><span class="sm-float-ui-value">26 m²</span></div>
      </div>
      <div class="sm-float-ui sm-float-ui-bl">
        <div class="sm-float-ui-title">Geracao estimada</div>
        <div class="sm-float-ui-row"><span class="sm-float-ui-label">Mensal</span><span class="sm-float-ui-value" style="color:var(--solar)">650 kWh</span></div>
        <div class="sm-float-ui-row"><span class="sm-float-ui-label">Anual</span><span class="sm-float-ui-value" style="color:var(--solar)">7.800 kWh</span></div>
      </div>
    </div>
  </div>
</section>`;

  /* === 03 — SIMULADOR PREVIEW (light editorial 50/50) === */
  const simSection = `<section class="sm-sim-preview">
  <div class="sm-sim-preview-grid">
    <div>
      <span class="sm-eyebrow">Simulador</span>
      <h2 class="sm-headline">Descubra o<br>sistema ideal.</h2>
      <p class="sm-lede" style="margin-top:var(--space-4)">Seis etapas. Do CEP ao payback. O wizard pergunta o que importa e devolve um projeto completo.</p>
      <div class="sm-sim-steps">
        <div class="sm-sim-step"><span class="sm-sim-step-num">01</span><span class="sm-sim-step-label">Localizacao</span></div>
        <div class="sm-sim-step"><span class="sm-sim-step-num">02</span><span class="sm-sim-step-label">Consumo</span></div>
        <div class="sm-sim-step"><span class="sm-sim-step-num">03</span><span class="sm-sim-step-label">Telhado</span></div>
        <div class="sm-sim-step"><span class="sm-sim-step-num">04</span><span class="sm-sim-step-label">Objetivo</span></div>
        <div class="sm-sim-step"><span class="sm-sim-step-num">05</span><span class="sm-sim-step-label">Sistema</span></div>
        <div class="sm-sim-step"><span class="sm-sim-step-num">06</span><span class="sm-sim-step-label">Resultado</span></div>
      </div>
      <a href="simulador.html" class="sm-hero-cta" style="color:var(--solar);margin-top:var(--space-6)">Iniciar simulacao &rarr;</a>
    </div>
    <div class="sm-sim-mockup">
      <div style="display:flex;align-items:center;gap:var(--space-2);margin-bottom:var(--space-5)">
        <div style="width:10px;height:10px;border-radius:50%;background:#ef4444"></div>
        <div style="width:10px;height:10px;border-radius:50%;background:#f59e0b"></div>
        <div style="width:10px;height:10px;border-radius:50%;background:#22c55e"></div>
        <span style="font-family:var(--font-mono);font-size:var(--fs-xs);color:var(--text-dark-muted);margin-left:var(--space-2)">simulador · etapa 03</span>
      </div>
      <div style="font-family:var(--font-display);font-size:var(--fs-lg);color:var(--text-dark);margin-bottom:var(--space-4)">Telhado</div>
      <div style="background:var(--bg-dark);border-radius:var(--radius-md);padding:var(--space-3);margin-bottom:var(--space-4)">
        <div style="font-size:var(--fs-xs);color:var(--text-dark-muted);margin-bottom:var(--space-2)">ORIENTACAO</div>
        <div style="display:flex;gap:var(--space-2)">
          <div style="flex:1;padding:var(--space-2);text-align:center;background:var(--solar);color:var(--white);border-radius:var(--radius-sm);font-size:var(--fs-xs);font-weight:600">Norte</div>
          <div style="flex:1;padding:var(--space-2);text-align:center;background:var(--elevated-dark);color:var(--text-dark-secondary);border-radius:var(--radius-sm);font-size:var(--fs-xs)">Sul</div>
          <div style="flex:1;padding:var(--space-2);text-align:center;background:var(--elevated-dark);color:var(--text-dark-secondary);border-radius:var(--radius-sm);font-size:var(--fs-xs)">Leste</div>
        </div>
      </div>
      ${T.roofCAD({ panels: 10, panelCols: 5, id: 'sim-mockup', areaUsed: '26 m²', areaTotal: '48 m²' })}
    </div>
  </div>
</section>`;

  /* === 04 — DIGITAL TWIN WOW (dark) === */
  const twinWow = `<section class="sm-twin-wow">
  <div class="sm-twin-wow-grid">
    <div class="sm-twin-wow-header">
      <span class="sm-eyebrow">Digital Twin</span>
      <h2 class="sm-headline dark" style="margin-top:var(--space-3)">A mesma casa.<br>Em todo lugar.</h2>
      <p class="sm-lede dark" style="margin:var(--space-3) auto 0">O Digital Twin do SolMais aparece na simulacao, no projeto e no monitoramento. Continuidade visual. Identidade de produto.</p>
    </div>
    <div class="sm-twin-wow-stage">
      ${T.digitalTwin({ width: 800, height: 500, panels: 10, showFlow: true, generating: true, id: 'twin-wow', theme: 'dark' })}
      <div class="sm-twin-data sm-twin-data-tl">
        <div class="sm-twin-data-value solar">3,42 kW</div>
        <div class="sm-twin-data-label">Gerando agora</div>
      </div>
      <div class="sm-twin-data sm-twin-data-tr">
        <div class="sm-twin-data-value info">2,7 kW</div>
        <div class="sm-twin-data-label">Consumo</div>
      </div>
      <div class="sm-twin-data sm-twin-data-bl">
        <div class="sm-twin-data-value gen">+1,4 kW</div>
        <div class="sm-twin-data-label">Exportando</div>
      </div>
      <div class="sm-twin-data sm-twin-data-br">
        <div class="sm-twin-data-value light">5,5 kWp</div>
        <div class="sm-twin-data-label">Sistema</div>
      </div>
    </div>
  </div>
</section>`;

  /* === 05 — MONITORAMENTO PREVIEW (light) === */
  const monitorSection = `<section class="sm-monitor-preview">
  <div class="sm-monitor-preview-grid">
    <div class="sm-monitor-head">
      <div>
        <span class="sm-eyebrow">Monitoramento</span>
        <h2 class="sm-headline" style="margin-top:var(--space-3)">Veja sua energia<br>acontecer.</h2>
      </div>
      <a href="monitoramento.html" class="sm-hero-cta" style="color:var(--solar)">Abrir dashboard &rarr;</a>
    </div>
    <div class="sm-monitor-main">
      <div class="sm-monitor-now">
        <div class="sm-mega-number">3,42<span class="unit">kW</span></div>
        <div class="sm-monitor-now-label">Gerando agora</div>
        <div class="sm-monitor-status">Sistema operando normal</div>
      </div>
      <div class="sm-monitor-side">
        <div class="sm-monitor-side-row">
          <span class="sm-monitor-side-label">Hoje</span>
          <span class="sm-monitor-side-value">18,7 kWh</span>
        </div>
        <div class="sm-monitor-side-row">
          <span class="sm-monitor-side-label">Mes</span>
          <span class="sm-monitor-side-value">584 kWh</span>
        </div>
        <div class="sm-monitor-side-row">
          <span class="sm-monitor-side-label">Economia/mes</span>
          <span class="sm-monitor-side-value" style="color:var(--solar)">R$ 480</span>
        </div>
        <div class="sm-monitor-side-row">
          <span class="sm-monitor-side-label">CO² evitado</span>
          <span class="sm-monitor-side-value" style="color:var(--gen)">2,1 t/mes</span>
        </div>
        <div style="margin-top:var(--space-4)">
          ${T.solarCurve({ id: 'mon-preview', width: 500, height: 180, showConsumption: true, peak: '4,82 kW', peakTime: '12:38' })}
        </div>
      </div>
    </div>
  </div>
</section>`;

  /* === 06 — PROJETOS: MOSAICO EDITORIAL === */
  const mosaicItems = cases.slice(0, 5).map((c, i) => {
    const isLarge = i === 0;
    return `<a href="projeto-${c.slug}.html" class="sm-mosaic-item${isLarge ? ' large' : ''}" style="text-decoration:none">
    ${T.caseHero(c.type, { title: '', power: '', modules: '', annual: '', id: 'mosaic-' + c.slug })}
    <div class="sm-mosaic-overlay">
      <div class="sm-mosaic-type">${T.escapeHtml(c.type)}</div>
      <div class="sm-mosaic-title">${T.escapeHtml(c.title)}</div>
      <div class="sm-mosaic-meta">${c.power} kWp · ${c.panels} modulos · ${T.escapeHtml(c.location)}</div>
    </div>
  </a>`;
  }).join('');

  const projectsSection = `<section class="sm-projects-mosaic">
  <div style="max-width:var(--container-max);margin:0 auto var(--space-8);padding:0 var(--space-6)">
    <span class="sm-eyebrow">Projetos</span>
    <h2 class="sm-headline" style="margin-top:var(--space-3)">Arquitetura como<br>protagonista.</h2>
  </div>
  <div class="sm-mosaic">
    ${mosaicItems}
  </div>
  <div style="text-align:center;margin-top:var(--space-8)">
    <a href="projetos.html" class="sm-hero-cta" style="color:var(--solar)">Ver todos os projetos &rarr;</a>
  </div>
</section>`;

  /* === 07 — CTA FINAL (dark) === */
  const cta = `<section class="sm-cta">
  <div class="sm-cta-inner">
    <h2 class="sm-headline dark">Pronto para<br>simular?</h2>
    <p class="sm-lede dark">Faca uma simulacao completa em 6 etapas e veja o resultado com graficos, comparador e cenarios financeiros.</p>
    <a href="simulador.html" class="sm-hero-cta">Iniciar simulacao &rarr;</a>
    <p style="font-size:var(--fs-xs);color:var(--text-dark-muted);margin-top:var(--space-5)">Plataforma demonstrativa — todos os dados sao ficticios</p>
  </div>
</section>`;

  const content = hero + productSection + simSection + twinWow + monitorSection + projectsSection + cta;

  const orgSchema = T.renderOrganizationSchema(store);
  const siteSchema = T.renderWebSiteSchema(store);
  const graphSchema = T.renderGraphSchema([orgSchema, siteSchema], store);

  return [{
    filename: 'index.html',
    slug: 'index',
    noindex: false,
    html: T.renderLayout({
      store, data,
      title: 'Energia Solar: Simulador e Monitoramento',
      description: 'Plataforma digital de energia solar fotovoltaica. Simule seu sistema em 6 etapas, veja geracao e economia estimadas e acompanhe o projeto ate o monitoramento.',
      canonical: '/',
      active: 'index',
      structuredData: graphSchema,
      ogImage: store.url.replace(/\/$/, '') + '/og-image.png',
      content
    })
  }];
}

module.exports = { render };
