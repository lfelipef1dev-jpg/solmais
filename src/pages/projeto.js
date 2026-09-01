/* SolMais — Projeto (Meu Projeto + diagrama + layout telhado + dimensionamento) */

function render(data, T) {
  const store = data.store;
  const sys = (data.systems || [])[0];
  const project = (data.projects || [])[0];
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Portal', href: 'conta.html' }, { label: 'Meu projeto' }];

  const content = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb(bcItems)}
    <div class="section-header">
      <h2>Projeto ${project.id}</h2>
      <p>${T.escapeHtml(project.customerName)} — ${T.escapeHtml(project.location)} — ${project.power} kWp</p>
      <span class="demo-badge mt-2">Projeto demonstrativo — dados ficticios</span>
    </div>

    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-4)">Dados do projeto</h3>
      <div class="grid grid-4">
        <div class="kpi-card"><div class="kpi-value">${sys.power}</div><div class="kpi-label">kWp</div></div>
        <div class="kpi-card"><div class="kpi-value">${sys.panels}</div><div class="kpi-label">Modulos 550W</div></div>
        <div class="kpi-card"><div class="kpi-value">${sys.inverterPower} kW</div><div class="kpi-label">Inversor</div></div>
        <div class="kpi-card"><div class="kpi-value">${sys.area} m²</div><div class="kpi-label">Area</div></div>
      </div>
      <div class="grid grid-3 mt-4">
        <div class="kpi-card"><div class="kpi-value">${sys.monthlyGeneration}</div><div class="kpi-label">kWh/mes</div></div>
        <div class="kpi-card"><div class="kpi-value">${sys.annualGeneration}</div><div class="kpi-label">kWh/ano</div></div>
        <div class="kpi-card"><div class="kpi-value">${sys.strings}</div><div class="kpi-label">Strings</div></div>
      </div>
    </div>

    <h3 style="margin-bottom: var(--space-4)">Diagrama energetico</h3>
    <div class="energy-flow mb-6">
      <div class="flow-node"><div class="flow-node-icon sun">${T.ICONS.sun}</div><div class="flow-node-label">SOL</div></div>
      <div class="flow-arrow">\u2193</div>
      <div class="flow-node"><div class="flow-node-icon panel">${T.ICONS.panel}</div><div class="flow-node-label">PAINELS</div></div>
      <div class="flow-arrow">\u2193</div>
      <div class="flow-node"><div class="flow-node-icon inverter">${T.ICONS.bolt}</div><div class="flow-node-label">INVERSOR</div></div>
      <div class="flow-arrow">\u2193</div>
      <div class="flow-node"><div class="flow-node-icon home">${T.ICONS.home}</div><div class="flow-node-label">IMÓVEL</div></div>
      <div class="flow-arrow">\u2194</div>
      <div class="flow-node"><div class="flow-node-icon grid">${T.ICONS.grid}</div><div class="flow-node-label">REDE</div></div>
    </div>

    <h3 style="margin-bottom: var(--space-4)">Layout dos modulos no telhado</h3>
    <div class="roof-layout mb-6">
      <div class="roof-grid" style="grid-template-columns: repeat(5, 60px)">
        ${Array.from({ length: 10 }).map(() => '<div class="roof-panel"></div>').join('')}
      </div>
      <div class="roof-compass">
        <strong>N</strong> &uarr; Orientacao norte — Telhado ${T.escapeHtml(sys.roofType)} — Sombreamento ${T.escapeHtml(sys.shading)}
      </div>
      <p class="text-xs text-muted text-center mt-4">Representacao ilustrativa — 10 modulos de 550W em 2 strings</p>
    </div>

    <h3 style="margin-bottom: var(--space-4)">Dimensionamento tecnico</h3>
    <div class="card mb-6">
      <table class="data-table">
        <tr><th>Componente</th><th>Especificacao</th></tr>
        <tr><td>Modulos</td><td>10 × 550 Wp — ${sys.panelModel}</td></tr>
        <tr><td>Potencia instalada</td><td>${sys.power} kWp</td></tr>
        <tr><td>Inversor</td><td>${sys.inverter} — ${sys.inverterPower} kW</td></tr>
        <tr><td>Strings</td><td>${sys.strings}</td></tr>
        <tr><td>Area estimada</td><td>${sys.area} m²</td></tr>
        <tr><td>Producao anual estimada</td><td>${sys.annualGeneration} kWh (${(sys.annualGeneration/1000).toFixed(1)} MWh)</td></tr>
        <tr><td>Telhado</td><td>${T.escapeHtml(sys.roofType)} — orientacao ${T.escapeHtml(sys.orientation)}</td></tr>
      </table>
      <p class="text-xs text-muted mt-4">Dados demonstrativos — nao constitui projeto eletrico real</p>
    </div>

    <h3 style="margin-bottom: var(--space-4)">Equipe responsavel</h3>
    <div class="grid grid-3 mb-6">
      ${project.team.map(m => `<div class="card text-center"><div class="portal-user-avatar" style="background:var(--info-soft);color:var(--info)">${m.name.charAt(0)}</div><h4 style="font-size:var(--fs-sm)">${T.escapeHtml(m.name)}</h4><p class="text-xs text-muted">${T.escapeHtml(m.role)}</p></div>`).join('')}
    </div>

    <div class="card card-glow text-center">
      <h3 style="margin-bottom: var(--space-3)">Proximos passos</h3>
      <div class="hero-cta" style="justify-content:center">
        <a href="instalacao.html" class="btn btn-primary">${T.ICONS.settings} Ver instalacao</a>
        <a href="monitoramento.html" class="btn btn-secondary">${T.ICONS.chart} Monitoramento</a>
        <a href="documentos.html" class="btn btn-secondary">${T.ICONS.doc} Documentos</a>
      </div>
    </div>
  </div>
</section>`;

  return [{
    filename: 'projeto.html',
    slug: 'projeto',
    noindex: false,
    html: T.renderLayout({
      store, data, title: 'Meu Projeto — ' + project.id,
      description: 'Projeto solar demonstrativo com diagrama energetico, layout dos modulos no telhado e especificacoes de potencia, inversor e producao estimada.',
      canonical: '/projeto.html', active: '',
      structuredData: T.renderBreadcrumbSchema(bcItems, store.url),
      content
    })
  }];
}

module.exports = { render };
