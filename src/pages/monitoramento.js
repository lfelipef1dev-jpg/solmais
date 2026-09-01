/* SolMais — Monitoramento (dashboard energetico premium)
   FEATURE HERO: geracao atual, fluxo energetico SVG, graficos, gauges, status */

function render(data, T) {
  const store = data.store;
  const sys = (data.systems || [])[0];
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Monitoramento' }];

  const hourlyData = sys.hourlyData.map(h => h.kw);
  const hourlyLabels = sys.hourlyData.map(h => h.h + 'h');
  const monthlyGenerated = sys.monthlyData.map(m => m.generated);
  const monthlyEstimated = sys.monthlyData.map(m => m.estimated);
  const monthlyLabels = sys.monthlyData.map(m => m.month);

  const content = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb(bcItems)}
    ${T.pageHero('Monitoramento Energetico', 'Dashboard em tempo real — sistema ' + sys.projectId + ' em ' + T.escapeHtml(sys.location), { icon: T.ICONS.chart })}

    <!-- Status bar -->
    <div class="glass-card mb-6" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:var(--space-3)">
      <div>
        <h3 style="font-size: var(--fs-lg)">Sistema ${sys.projectId} — ${sys.power} kWp</h3>
        <p class="text-sm text-muted">${T.escapeHtml(sys.location)} — ${sys.panels} modulos — Inversor ${sys.inverter}</p>
      </div>
      <div style="display:flex;align-items:center;gap:var(--space-3)">
        <span class="status-dot normal"></span>
        <span class="badge badge-success">Sistema normal</span>
        <span class="text-xs text-muted">Atualizado ha 2 min</span>
      </div>
    </div>

    <!-- KPI Premium Row -->
    <div class="grid grid-4 mb-6">
      <div class="kpi-premium">
        <div class="kpi-icon-wrap solar">${T.ICONS.bolt}</div>
        <div class="kpi-value text-solar">3,42 kW</div>
        <div class="kpi-label">Gerando agora</div>
        <div class="mini-chart-wrap">${T.sparkline([0,0.1,0.8,1.8,2.9,3.8,4.5,4.8,4.6,4,3.2,2.3,1.4,0.6], {color:'#f59e0b', fill:'rgba(245,158,11,0.1)'})}</div>
      </div>
      <div class="kpi-premium">
        <div class="kpi-icon-wrap gen">${T.ICONS.sun}</div>
        <div class="kpi-value text-gen">18,7</div>
        <div class="kpi-label">kWh hoje</div>
        <div class="mini-chart-wrap">${T.sparkline([2,4,6,8,10,12,14,16,18,18.7], {color:'#22c55e', fill:'rgba(34,197,94,0.1)'})}</div>
      </div>
      <div class="kpi-premium">
        <div class="kpi-icon-wrap info">${T.ICONS.chart}</div>
        <div class="kpi-value">584</div>
        <div class="kpi-label">kWh este mes</div>
        <div class="mini-chart-wrap">${T.sparkline([530,535,540,545,550,560,570,575,580,584], {color:'#3b82f6', fill:'rgba(59,130,246,0.1)'})}</div>
      </div>
      <div class="kpi-premium">
        <div class="kpi-icon-wrap solar">${T.ICONS.cash}</div>
        <div class="kpi-value text-solar">${T.formatBRL(480)}</div>
        <div class="kpi-label">Economia estimada/mes</div>
        <div class="mini-chart-wrap">${T.sparkline([420,440,450,460,465,470,475,478,480], {color:'#f59e0b', fill:'rgba(245,158,11,0.1)'})}</div>
      </div>
    </div>

    <!-- Main Dashboard Grid -->
    <div class="monitor-grid">
      <!-- Main: Energy Flow + Hourly Chart -->
      <div class="monitor-main">
        <h3 style="color: #e2e8f0; margin-bottom: var(--space-2)">Fluxo de energia em tempo real</h3>
        <p style="color: #94a3b8; font-size: var(--fs-sm); margin-bottom: var(--space-4)">Sol gera nos paineis, inversor converte, casa consome e excedente vai para a rede</p>
        ${T.energyFlow()}
        <div class="section-divider"></div>
        <h3 style="color: #e2e8f0; margin-bottom: var(--space-4)">Geracao hoje — curva solar (00h as 24h)</h3>
        ${T.areaChart(hourlyData, { width: 550, height: 160, color: '#f59e0b', labels: hourlyLabels, id: 'hourly', label: 'horaria (kW)' })}
        <p class="text-xs text-muted mt-4">Curva solar natural: zero a noite, pico ao meio-dia. Dados demonstrativos.</p>
      </div>

      <!-- Side: Gauges + System Render -->
      <div class="monitor-side">
        <div class="glass-card text-center">
          <h4 style="margin-bottom: var(--space-4)">Performance</h4>
          <div class="monitor-gauge-row">
            ${T.donutChart(87, 100, { label: 'Eficiencia', unit: '%', color: '#22c55e' })}
          </div>
        </div>
        <div class="glass-card text-center">
          <h4 style="margin-bottom: var(--space-4)">Sistema</h4>
          ${T.systemRender({ panels: sys.panels, power: sys.power, inverter: sys.inverterPower + 'kW' })}
        </div>
      </div>
    </div>

    <!-- Monthly Chart Premium -->
    <div class="chart-premium mt-6">
      <h3>
        <span>Geracao mensal — Estimado vs Gerado</span>
        <span class="chart-legend">
          <span class="chart-legend-item"><span class="chart-legend-dot" style="background:#3b82f6;opacity:0.5"></span> Estimado</span>
          <span class="chart-legend-item"><span class="chart-legend-dot" style="background:#22c55e"></span> Gerado</span>
        </span>
      </h3>
      ${T.areaChart(monthlyGenerated, { width: 600, height: 200, color: '#22c55e', color2: '#3b82f6', estimated: monthlyEstimated, labels: monthlyLabels, id: 'monthly', label: 'mensal (kWh)' })}
      <p class="text-xs text-muted mt-4">Comparativo estimado vs realizado — dados demonstrativos. Meses futuros sem geracao registrada.</p>
    </div>

    <!-- System Health + Weather -->
    <div class="grid grid-2 mt-6">
      <div class="card">
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
        <div class="mini-chart-wrap">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span class="text-sm text-muted">Ultima comunicacao</span>
            <span class="badge badge-success">ha 2 min</span>
          </div>
        </div>
      </div>
      <div class="card">
        <h3 style="margin-bottom: var(--space-4)">Clima (demonstrativo)</h3>
        <div class="grid grid-3">
          <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.sun}</div><div class="kpi-value">28C</div><div class="kpi-label">Ensolarado</div></div>
          <div class="kpi-card"><div class="kpi-card-icon info">${T.ICONS.bolt}</div><div class="kpi-value">Alta</div><div class="kpi-label">Irradiacao</div></div>
          <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.chart}</div><div class="kpi-value">27,5</div><div class="kpi-label">kWh previstos</div></div>
        </div>
        <p class="text-xs text-muted mt-4">Condicao meteorologica demonstrativa — nao utiliza API real</p>
      </div>
    </div>

    <!-- Environmental Impact -->
    <div class="card card-glow mt-6">
      <h3 style="margin-bottom: var(--space-4)">Impacto ambiental (estimativa)</h3>
      <div class="grid grid-3">
        <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.bolt}</div><div class="kpi-value">6,2 MWh</div><div class="kpi-label">Energia produzida/ano</div></div>
        <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.leaf}</div><div class="kpi-value">5,2 t</div><div class="kpi-label">CO2 evitado/ano</div></div>
        <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.leaf}</div><div class="kpi-value">240</div><div class="kpi-label">Arvores equiv.</div></div>
      </div>
      <p class="text-xs text-muted mt-4">Estimativa demonstrativa — metodologia ilustrativa</p>
    </div>

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
      title: 'Monitoramento Solar: Dashboard Energetico',
      description: 'Dashboard de monitoramento solar em tempo real. Veja geracao atual, graficos horarios e mensais, fluxo energetico, status do inversor e impacto ambiental estimado.',
      canonical: '/monitoramento.html',
      active: '',
      ogImage: store.url.replace(/\/$/, '') + '/img/og/monitoramento.svg',
      structuredData: T.renderBreadcrumbSchema(bcItems, store.url),
      content
    })
  }];
}

module.exports = { render };
