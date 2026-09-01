/* SolMais — Comparador de sistemas (3 configuracoes) */

function render(data, T) {
  const store = data.store;
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Simulador', href: 'simulador.html' }, { label: 'Comparador' }];

  const systems = [
    { name: 'Economico', power: 4.4, panels: 8, inverter: 4, area: 21, gen: 480, genYear: 5760, coverage: '65%', invest: 26000, payback: 5.2, prod25: 138000, recommended: false },
    { name: 'Recomendado', power: 5.5, panels: 10, inverter: 5, area: 26, gen: 650, genYear: 7800, coverage: '90%', invest: 32000, payback: 4.8, prod25: 180000, recommended: true },
    { name: 'Performance', power: 6.6, panels: 12, inverter: 6, area: 31, gen: 780, genYear: 9360, coverage: '100%+', invest: 38000, payback: 4.6, prod25: 216000, recommended: false }
  ];

  const content = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb(bcItems)}
    ${T.pageHero('Comparador de Sistemas', 'Tres configuracoes para diferentes objetivos — dados demonstrativos', { icon: T.ICONS.chart })}

    <div class="grid grid-3 mb-6">
      ${systems.map(s => `
      <div class="card ${s.recommended ? 'card-glow' : ''}" style="text-align: center">
        ${s.recommended ? '<span class="badge badge-success mb-2">Recomendado</span>' : ''}
        <h3 style="font-size: var(--fs-lg)">${s.name}</h3>
        <div style="font-family: var(--font-display); font-size: var(--fs-3xl); font-weight: 700; color: var(--solar); margin: var(--space-3) 0">${s.power} kWp</div>
        <p class="text-sm text-muted">${s.panels} modulos — inversor ${s.inverter} kW</p>
        <p class="text-sm text-secondary mt-2">Cobertura: ${s.coverage}</p>
        <a href="financeiro.html" class="btn ${s.recommended ? 'btn-primary' : 'btn-secondary'} btn-block mt-4">Ver cenarios</a>
      </div>`).join('')}
    </div>

    <div class="card">
      <h3 style="margin-bottom: var(--space-4)">Comparativo detalhado</h3>
      <div class="compare-table">
        <table>
          <tr>
            <th>Caracteristica</th>
            ${systems.map(s => '<th' + (s.recommended ? ' class="recommended"' : '') + '>' + s.name + '</th>').join('')}
          </tr>
          <tr><td>Potencia</td>${systems.map(s => '<td>' + s.power + ' kWp</td>').join('')}</tr>
          <tr><td>Modulos (550W)</td>${systems.map(s => '<td>' + s.panels + '</td>').join('')}</tr>
          <tr><td>Inversor</td>${systems.map(s => '<td>' + s.inverter + ' kW</td>').join('')}</tr>
          <tr><td>Area necessaria</td>${systems.map(s => '<td>' + s.area + ' m²</td>').join('')}</tr>
          <tr><td>Geracao mensal</td>${systems.map(s => '<td>' + s.gen + ' kWh</td>').join('')}</tr>
          <tr><td>Geracao anual</td>${systems.map(s => '<td>' + s.genYear.toLocaleString('pt-BR') + ' kWh</td>').join('')}</tr>
          <tr><td>Cobertura do consumo</td>${systems.map(s => '<td>' + s.coverage + '</td>').join('')}</tr>
          <tr><td>Investimento demo</td>${systems.map(s => '<td>' + T.formatBRL(s.invest) + '</td>').join('')}</tr>
          <tr><td>Payback estimado</td>${systems.map(s => '<td>' + s.payback + ' anos</td>').join('')}</tr>
          <tr><td>Producao 25 anos</td>${systems.map(s => '<td>' + (s.prod25/1000).toFixed(0) + ' MWh</td>').join('')}</tr>
        </table>
      </div>
      <p class="text-xs text-muted mt-4">Cenarios demonstrativos — nao constituem proposta comercial ou orcamento.</p>
    </div>
  </div>
</section>`;

  return [{
    filename: 'comparador.html', slug: 'comparador', noindex: false,
    html: T.renderLayout({
      store, data, title: 'Comparador de Sistemas Solares',
      description: 'Compare tres configuracoes de sistemas solares: economico, recomendado e performance. Veja potencia, modulos, geracao, cobertura, area, investimento e payback.',
      canonical: '/comparador.html', active: 'simulador',
      structuredData: T.renderBreadcrumbSchema(bcItems, store.url), content
    })
  }];
}

module.exports = { render };
