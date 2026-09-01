/* SolMais — Monitoramento (dashboard energetico)
   FEATURE HERO: geracao atual, fluxo energetico, graficos, status */

function render(data, T) {
  const store = data.store;
  const sys = (data.systems || [])[0];
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Monitoramento' }];

  const flowDiagram = `<div class="energy-flow">
  <div class="flow-node">
    <div class="flow-node-icon sun">${T.ICONS.sun}</div>
    <div class="flow-node-label">SOL</div>
    <div class="flow-node-value">4,1 kW</div>
  </div>
  <div class="flow-arrow">\u2193</div>
  <div class="flow-node">
    <div class="flow-node-icon panel">${T.ICONS.panel}</div>
    <div class="flow-node-label">PAINELS</div>
    <div class="flow-node-value">3,4 kW</div>
  </div>
  <div class="flow-arrow">\u2193</div>
  <div class="flow-node">
    <div class="flow-node-icon inverter">${T.ICONS.bolt}</div>
    <div class="flow-node-label">INVERSOR</div>
    <div class="flow-node-value">3,2 kW</div>
  </div>
  <div class="flow-arrow">\u2193</div>
  <div class="flow-node">
    <div class="flow-node-icon home">${T.ICONS.home}</div>
    <div class="flow-node-label">CASA</div>
    <div class="flow-node-value">2,7 kW</div>
  </div>
  <div class="flow-arrow">\u2194</div>
  <div class="flow-node">
    <div class="flow-node-icon grid">${T.ICONS.grid}</div>
    <div class="flow-node-label">REDE</div>
    <div class="flow-node-value">0,7 kW</div>
  </div>
</div>`;

  const hourlyChart = `<div class="chart-container">
  <h3>Geracao hoje (00h \u2192 24h) — dados simulados</h3>
  <div class="bar-chart">
    ${sys.hourlyData.map(h => {
      const maxKw = 5;
      const heightPct = (h.kw / maxKw * 100).toFixed(0);
      return '<div class="bar-chart-item' + (h.kw > 4 ? ' gen' : '') + '" style="height:' + (heightPct > 0 ? heightPct : 1) + '%"><span class="bar-chart-label">' + h.h + 'h</span></div>';
    }).join('')}
  </div>
  <p class="text-xs text-muted mt-4">Curva solar natural: zero a noite, pico ao meio-dia. Dados demonstrativos.</p>
</div>`;

  const monthlyChart = `<div class="chart-container">
  <h3>Geracao mensal — Estimado vs Gerado (dados demonstrativos)</h3>
  <div class="bar-chart" style="height: 180px">
    ${sys.monthlyData.map((m, i) => {
      const maxVal = Math.max(...sys.monthlyData.map(x => x.estimated));
      const estH = (m.estimated / maxVal * 100).toFixed(0);
      const genH = m.generated > 0 ? (m.generated / maxVal * 100).toFixed(0) : 0;
      return '<div style="flex:1;display:flex;gap:2px;align-items:flex-end;height:100%;position:relative">' +
        '<div class="bar-chart-item estimated" style="height:' + estH + '%;flex:1"></div>' +
        '<div class="bar-chart-item gen" style="height:' + (genH > 0 ? genH : 1) + '%;flex:1"></div>' +
        '<span class="bar-chart-label">' + m.month + '</span></div>';
    }).join('')}
  </div>
  <div class="text-xs text-muted mt-4">
    <span style="display:inline-block;width:12px;height:12px;background:var(--elevated);border:1px solid var(--border-strong);border-radius:2px;vertical-align:middle;margin-right:4px"></span> Estimado
    <span style="display:inline-block;width:12px;height:12px;background:var(--gen);border-radius:2px;vertical-align:middle;margin-left:12px;margin-right:4px"></span> Gerado
  </div>
</div>`;

  const healthSection = `<div class="card">
  <h3 style="margin-bottom: var(--space-4)">Saude do sistema</h3>
  <div class="grid grid-2">
    <div style="display:flex;align-items:center;gap:var(--space-3);padding:var(--space-3);background:var(--elevated);border-radius:var(--radius-md)">
      <span class="status-dot normal"></span>
      <div><strong>Sistema</strong><div class="text-xs text-muted">Normal</div></div>
    </div>
    <div style="display:flex;align-items:center;gap:var(--space-3);padding:var(--space-3);background:var(--elevated);border-radius:var(--radius-md)">
      <span class="status-dot normal"></span>
      <div><strong>Inversor</strong><div class="text-xs text-muted">Online</div></div>
    </div>
    <div style="display:flex;align-items:center;gap:var(--space-3);padding:var(--space-3);background:var(--elevated);border-radius:var(--radius-md)">
      <span class="status-dot normal"></span>
      <div><strong>Modulos</strong><div class="text-xs text-muted">Normal</div></div>
    </div>
    <div style="display:flex;align-items:center;gap:var(--space-3);padding:var(--space-3);background:var(--elevated);border-radius:var(--radius-md)">
      <span class="status-dot normal"></span>
      <div><strong>Comunicacao</strong><div class="text-xs text-muted">Online</div></div>
    </div>
  </div>
  <p class="text-xs text-muted mt-4">Ultima atualizacao: ha 2 min — dados simulados</p>
</div>`;

  const weatherSection = `<div class="card">
  <h3 style="margin-bottom: var(--space-4)">Clima (demonstrativo)</h3>
  <div class="grid grid-3">
    <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.sun}</div><div class="kpi-value">28°C</div><div class="kpi-label">Ensolarado</div></div>
    <div class="kpi-card"><div class="kpi-card-icon info">${T.ICONS.bolt}</div><div class="kpi-value">Alta</div><div class="kpi-label">Irradiacao</div></div>
    <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.chart}</div><div class="kpi-value">27,5</div><div class="kpi-label">kWh previstos</div></div>
  </div>
  <p class="text-xs text-muted mt-4">Condicao meteorologica demonstrativa — nao utiliza API real</p>
</div>`;

  const impactSection = `<div class="card card-glow">
  <h3 style="margin-bottom: var(--space-4)">Impacto ambiental (estimativa)</h3>
  <div class="grid grid-3">
    <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.bolt}</div><div class="kpi-value">6,2 MWh</div><div class="kpi-label">Energia produzida/ano</div></div>
    <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.leaf}</div><div class="kpi-value">5,2 t</div><div class="kpi-label">CO₂ evitado/ano</div></div>
    <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.leaf}</div><div class="kpi-value">240</div><div class="kpi-label">Arvores equiv.</div></div>
  </div>
  <p class="text-xs text-muted mt-4">Estimativa demonstrativa — metodologia ilustrativa</p>
</div>`;

  const content = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb(bcItems)}
    <div class="section-header">
      <h2>Monitoramento energetico</h2>
      <p>Dashboard demonstrativo — sistema ${sys.projectId} em ${T.escapeHtml(sys.location)}</p>
    </div>

    <div class="card card-glow mb-6" style="padding: var(--space-6)">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:var(--space-3)">
        <div>
          <h3 style="font-size: var(--fs-lg)">Meu sistema agora</h3>
          <p class="text-sm text-muted">Sistema ${sys.projectId} — ${sys.power} kWp</p>
        </div>
        <div style="display:flex;align-items:center;gap:var(--space-2)">
          <span class="status-dot normal"></span>
          <span class="badge badge-success">Sistema normal</span>
        </div>
      </div>
    </div>

    <div class="grid grid-4 mb-6">
      <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.bolt}</div><div class="kpi-value">3,42 kW</div><div class="kpi-label">Gerando agora</div><div class="kpi-sub">Simulado</div></div>
      <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.sun}</div><div class="kpi-value">18,7</div><div class="kpi-label">kWh hoje</div></div>
      <div class="kpi-card"><div class="kpi-card-icon info">${T.ICONS.chart}</div><div class="kpi-value">584</div><div class="kpi-label">kWh este mes</div></div>
      <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.cash}</div><div class="kpi-value">${T.formatBRL(480)}</div><div class="kpi-label">Economia estimada</div></div>
    </div>

    <h3 style="margin-bottom: var(--space-4)">Fluxo de energia em tempo real</h3>
    ${flowDiagram}
    <p class="text-xs text-muted text-center mt-4 mb-6">Animacao ilustrativa — dados simulados</p>

    ${hourlyChart}
    ${monthlyChart}

    <div class="grid grid-2 mt-6">
      ${healthSection}
      ${weatherSection}
    </div>
    <div class="mt-6">${impactSection}</div>

    <p class="text-xs text-muted text-center mt-6">Plataforma demonstrativa — todos os dados de geracao, clima e status sao ficticios. Nao utiliza API real de concessionaria ou equipamento.</p>
  </div>
</section>`;

  return [{
    filename: 'monitoramento.html',
    slug: 'monitoramento',
    noindex: false,
    html: T.renderLayout({
      store,
      data,
      title: 'Monitoramento Solar — Dashboard Energetico | SolMais',
      description: 'Dashboard demonstrativo de monitoramento solar: geracao em tempo real, graficos, status do sistema e impacto ambiental.',
      canonical: '/monitoramento.html',
      active: '',
      structuredData: T.renderBreadcrumbSchema(bcItems, store.url),
      content
    })
  }];
}

module.exports = { render };
