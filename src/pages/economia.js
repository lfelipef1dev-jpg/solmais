/* SolMais — Economia (dashboard financeiro do cliente) */

function render(data, T) {
  const store = data.store;
  const sys = (data.systems || [])[0];
  const customer = (data.customers || [])[0];
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Portal', href: 'conta.html' }, { label: 'Economia' }];

  const content = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb(bcItems)}
    ${T.pageHero('Economia Estimada', 'Sistema ' + sys.projectId + ' — ' + sys.power + ' kWp', { icon: T.ICONS.cash })}

    <div class="grid grid-4 mb-6">
      <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.cash}</div><div class="kpi-value">${T.formatBRL(customer.monthlySavings)}</div><div class="kpi-label">Economia/mes</div></div>
      <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.cash}</div><div class="kpi-value">${T.formatBRL(customer.monthlySavings * 12)}</div><div class="kpi-label">Economia/ano</div></div>
      <div class="kpi-card"><div class="kpi-card-icon info">${T.ICONS.chart}</div><div class="kpi-value">${T.formatBRL(customer.totalSavings)}</div><div class="kpi-label">Economia total</div></div>
      <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.clock}</div><div class="kpi-value">${sys.estimatedPayback}</div><div class="kpi-label">Payback (anos)</div></div>
    </div>

    <div class="chart-container mb-6">
      <h3>Economia acumulada projetada — dados demonstrativos</h3>
      <div class="bar-chart" style="height: 240px">
        ${[
          { year: 'A1', val: 5760 }, { year: 'A5', val: 28800 },
          { year: 'A10', val: 57600 }, { year: 'A15', val: 86400 },
          { year: 'A20', val: 115200 }, { year: 'A25', val: 144000 }
        ].map(e => {
          const max = 144000;
          const h = (e.val / max * 100).toFixed(0);
          return '<div class="bar-chart-item" style="height:' + h + '%"><span class="bar-chart-label">' + e.year + '</span></div>';
        }).join('')}
      </div>
    </div>

    <div class="grid grid-2">
      <div class="card">
        <h3 style="margin-bottom: var(--space-4)">Energia convencional vs Solar</h3>
        <table class="data-table">
          <tr><th>Cenario</th><th>Ano 1</th><th>Ano 10</th><th>Ano 25</th></tr>
          <tr><td>Sem solar (estimado)</td><td>${T.formatBRL(7800)}</td><td>${T.formatBRL(96000)}</td><td>${T.formatBRL(240000)}</td></tr>
          <tr><td>Com solar (estimado)</td><td>${T.formatBRL(7800 - 5760)}</td><td>${T.formatBRL(96000 - 57600)}</td><td>${T.formatBRL(240000 - 144000)}</td></tr>
          <tr><td>Economia estimada</td><td class="text-solar"><strong>${T.formatBRL(5760)}</strong></td><td class="text-solar"><strong>${T.formatBRL(57600)}</strong></td><td class="text-solar"><strong>${T.formatBRL(144000)}</strong></td></tr>
        </table>
        <p class="text-xs text-muted mt-4">Estimativa demonstrativa — nao considera depreciacao, inflacao energetica, O&M nem mudancas tarifarias.</p>
      </div>
      <div class="card">
        <h3 style="margin-bottom: var(--space-4)">CO₂ evitado (estimativa)</h3>
        <div class="grid grid-3">
          <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.leaf}</div><div class="kpi-value">${sys.co2Avoided} t</div><div class="kpi-label">CO₂/ano</div></div>
          <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.leaf}</div><div class="kpi-value">${(sys.co2Avoided * 25).toFixed(0)} t</div><div class="kpi-label">CO₂/25 anos</div></div>
          <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.leaf}</div><div class="kpi-value">${sys.treesEquivalent}</div><div class="kpi-label">Arvores equiv.</div></div>
        </div>
        <p class="text-xs text-muted mt-4">Estimativa ilustrativa — metodologia aproximada.</p>
      </div>
    </div>
  </div>
</section>`;

  return [{
    filename: 'economia.html', slug: 'economia', noindex: true,
    html: T.renderLayout({
      store, data, title: 'Economia Estimada', description: 'Dashboard de economia demonstrativo.',
      canonical: '/economia.html', active: '', noindex: true,
      structuredData: T.renderBreadcrumbSchema(bcItems, store.url), content
    })
  }];
}

module.exports = { render };
