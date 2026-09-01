/* SolMais — Monitoramento 3.0
   A MELHOR TELA DO SOLMAIS
   HERO do dashboard com Digital Twin + fluxo animado + metricas sobrepostas
   Curva solar grande com pico destacado + linha de consumo */

function render(data, T) {
  const store = data.store;
  const sys = (data.systems || [])[0];
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Portal', href: 'conta.html' }, { label: 'Monitoramento' }];

  /* === HERO DO DASHBOARD === */
  const monitorHero = `<div class="monitor-hero">
  <div class="monitor-hero-visual">
    ${T.digitalTwin({ width: 800, height: 450, panels: sys.panels, showFlow: true, generating: true, id: 'mon-hero', theme: 'dark' })}
  </div>
  <div class="monitor-hero-overlay">
    <div class="monitor-hero-status">
      <div class="monitor-hero-status-dot"></div>
      <span class="monitor-hero-status-text">SISTEMA OPERANDO NORMAL</span>
    </div>
    <div class="monitor-hero-generating">
      <div class="monitor-hero-generating-label">Gerando agora</div>
      <div class="monitor-hero-generating-value">3,42<span class="monitor-hero-generating-unit"> kW</span></div>
    </div>
    <div class="monitor-hero-kpis">
      <div class="monitor-hero-kpi">
        <div class="monitor-hero-kpi-value">18,7 kWh</div>
        <div class="monitor-hero-kpi-label">Hoje</div>
      </div>
      <div class="monitor-hero-kpi">
        <div class="monitor-hero-kpi-value">584 kWh</div>
        <div class="monitor-hero-kpi-label">Mes</div>
      </div>
      <div class="monitor-hero-kpi">
        <div class="monitor-hero-kpi-value">R$ 480</div>
        <div class="monitor-hero-kpi-label">Economia</div>
      </div>
      <div class="monitor-hero-kpi">
        <div class="monitor-hero-kpi-value">${sys.power} kWp</div>
        <div class="monitor-hero-kpi-label">Potencia</div>
      </div>
    </div>
  </div>
</div>`;

  /* === CURVA SOLAR (GRAFICO ASSINATURA) === */
  const solarCurveSection = `<section class="section">
  <div class="container">
    <div class="solar-curve-wrap">
      <div class="solar-curve-header">
        <div>
          <div class="solar-curve-title">Geracao hoje</div>
          <div class="solar-curve-subtitle">Curva solar com pico destacado e linha de consumo</div>
        </div>
        <div style="text-align:right">
          <div class="big-number big-number-amber" style="font-size:var(--fs-xl)">18,7<span class="big-number-unit">kWh</span></div>
          <div class="big-number-label">Total do dia</div>
        </div>
      </div>
      ${T.solarCurve({ id: 'mon-curve', width: 800, height: 280, showConsumption: true, peak: '4,82 kW', peakTime: '12:38' })}
    </div>
  </div>
</section>`;

  /* === GAUGES + STATUS === */
  const gaugesSection = `<section class="section" style="padding-top:0">
  <div class="container">
    <div class="grid grid-4">
      <div class="chart-premium text-center">
        <h3>Performance</h3>
        ${T.gauge(92, { id: 'g1', label: 'Eficiencia', unit: '%', max: 100, color: '#22c55e', size: 160 })}
      </div>
      <div class="chart-premium text-center">
        <h3>Irradiacao</h3>
        ${T.gauge(78, { id: 'g2', label: 'W/m²', unit: '%', max: 100, color: '#f59e0b', size: 160 })}
      </div>
      <div class="chart-premium text-center">
        <h3>Consumo</h3>
        ${T.gauge(65, { id: 'g3', label: 'Carga', unit: '%', max: 100, color: '#3b82f6', size: 160 })}
      </div>
      <div class="chart-premium text-center">
        <h3>Saude</h3>
        ${T.gauge(98, { id: 'g4', label: 'Sistema', unit: '%', max: 100, color: '#22c55e', size: 160 })}
      </div>
    </div>
  </div>
</section>`;

  /* === GRAFICO MENSAL === */
  const monthlySection = `<section class="section" style="padding-top:0">
  <div class="container">
    <div class="grid grid-2">
      <div class="chart-premium">
        <h3>Geracao mensal — Estimado vs Realizado</h3>
        ${T.areaChart([580, 590, 600, 610, 620, 630, 640, 650, 640, 630, 600, 580], { width: 450, height: 200, color: '#f59e0b', labels: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'], id: 'mon-monthly', label: 'kWh/mes' })}
      </div>
      <div class="chart-premium">
        <h3>Economia acumulada</h3>
        ${T.areaChart([480, 960, 1440, 1920, 2400, 2880, 3360, 3840, 4320, 4800, 5280, 5760], { width: 450, height: 200, color: '#22c55e', labels: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'], id: 'mon-savings', label: 'R$ acumulado' })}
      </div>
    </div>
  </div>
</section>`;

  /* === SAUDE DO SISTEMA + CLIMA === */
  const healthSection = `<section class="section" style="padding-top:0">
  <div class="container">
    <div class="grid grid-2">
      <div class="chart-premium">
        <h3>Saude do sistema</h3>
        <div class="grid grid-2">
          <div class="kpi-premium" style="border:none;padding:var(--space-3)">
            <div class="kpi-icon-wrap gen">${T.ICONS.check}</div>
            <div class="kpi-value" style="font-size:var(--fs-lg)">Normal</div>
            <div class="kpi-label">Status geral</div>
          </div>
          <div class="kpi-premium" style="border:none;padding:var(--space-3)">
            <div class="kpi-icon-wrap solar">${T.ICONS.bolt}</div>
            <div class="kpi-value" style="font-size:var(--fs-lg)">98%</div>
            <div class="kpi-label">Disponibilidade</div>
          </div>
          <div class="kpi-premium" style="border:none;padding:var(--space-3)">
            <div class="kpi-icon-wrap info">${T.ICONS.panel}</div>
            <div class="kpi-value" style="font-size:var(--fs-lg)">${sys.panels}</div>
            <div class="kpi-label">Modulos ativos</div>
          </div>
          <div class="kpi-premium" style="border:none;padding:var(--space-3)">
            <div class="kpi-icon-wrap warn">${T.ICONS.clock}</div>
            <div class="kpi-value" style="font-size:var(--fs-lg)">12:38</div>
            <div class="kpi-label">Ultima atualizacao</div>
          </div>
        </div>
      </div>
      <div class="chart-premium">
        <h3>Condicoes climaticas</h3>
        <div class="grid grid-2">
          <div class="kpi-premium" style="border:none;padding:var(--space-3)">
            <div class="kpi-icon-wrap solar">${T.ICONS.sun}</div>
            <div class="kpi-value" style="font-size:var(--fs-lg)">78%</div>
            <div class="kpi-label">Irradiacao</div>
          </div>
          <div class="kpi-premium" style="border:none;padding:var(--space-3)">
            <div class="kpi-icon-wrap info">${T.ICONS.chart}</div>
            <div class="kpi-value" style="font-size:var(--fs-lg)">28°C</div>
            <div class="kpi-label">Temp. modulo</div>
          </div>
          <div class="kpi-premium" style="border:none;padding:var(--space-3)">
            <div class="kpi-icon-wrap gen">${T.ICONS.check}</div>
            <div class="kpi-value" style="font-size:var(--fs-lg)">Ensolarado</div>
            <div class="kpi-label">Condicao</div>
          </div>
          <div class="kpi-premium" style="border:none;padding:var(--space-3)">
            <div class="kpi-icon-wrap warn">${T.ICONS.clock}</div>
            <div class="kpi-value" style="font-size:var(--fs-lg)">5,2 h</div>
            <div class="kpi-label">Horas de sol</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;

  /* === IMPACTO AMBIENTAL === */
  const impactSection = `<section class="section" style="padding-top:0">
  <div class="container">
    <div class="grid grid-3">
      <div class="kpi-premium text-center">
        <div class="big-number big-number-green" style="font-size:var(--fs-2xl)">2,1<span class="big-number-unit">t CO²</span></div>
        <div class="big-number-label">Evitado/mes</div>
      </div>
      <div class="kpi-premium text-center">
        <div class="big-number big-number-amber" style="font-size:var(--fs-2xl)">38<span class="big-number-unit">arvores</span></div>
        <div class="big-number-label">Equivalente/ano</div>
      </div>
      <div class="kpi-premium text-center">
        <div class="big-number big-number-light" style="font-size:var(--fs-2xl)">7,8<span class="big-number-unit">MWh</span></div>
        <div class="big-number-label">Geracao/ano</div>
      </div>
    </div>
  </div>
</section>`;

  const content = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb(bcItems)}
  </div>
</section>
${monitorHero}
<section class="section">
  <div class="container">
    <p class="text-xs text-muted text-center" style="margin-bottom:var(--space-6)">Dados demonstrativos — sistema ficticio ${sys.projectId}</p>
  </div>
</section>
${solarCurveSection}
${gaugesSection}
${monthlySection}
${healthSection}
${impactSection}`;

  return [{
    filename: 'monitoramento.html',
    slug: 'monitoramento',
    noindex: true,
    html: T.renderLayout({
      store, data,
      title: 'Monitoramento Energetico',
      description: 'Dashboard de monitoramento em tempo real — geracao, consumo, economia e saude do sistema.',
      canonical: '/monitoramento.html', active: '',
      noindex: true,
      ogImage: store.url.replace(/\/$/, '') + '/img/og/monitoramento.svg',
      content
    })
  }];
}

module.exports = { render };
