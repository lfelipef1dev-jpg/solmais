/* SolMais — Projeto (Meu Projeto + render 3D + diagrama + layout telhado + equipamentos) */

function render(data, T) {
  const store = data.store;
  const sys = (data.systems || [])[0];
  const project = (data.projects || [])[0];
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Portal', href: 'conta.html' }, { label: 'Meu projeto' }];

  const content = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb(bcItems)}
    ${T.pageHero('Projeto ' + project.id, T.escapeHtml(project.customerName) + ' — ' + T.escapeHtml(project.location) + ' — ' + project.power + ' kWp', { icon: T.ICONS.panel })}
    <span class="demo-badge" style="display:block;text-align:center;margin-bottom:var(--space-6)">Projeto demonstrativo — dados ficticios</span>

    <!-- KPIs -->
    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-4)">Dados do projeto</h3>
      <div class="grid grid-4">
        <div class="kpi-card"><div class="kpi-value">${sys.power}</div><div class="kpi-label">kWp</div></div>
        <div class="kpi-card"><div class="kpi-value">${sys.panels}</div><div class="kpi-label">Modulos 550W</div></div>
        <div class="kpi-card"><div class="kpi-value">${sys.inverterPower} kW</div><div class="kpi-label">Inversor</div></div>
        <div class="kpi-card"><div class="kpi-value">${sys.area} m2</div><div class="kpi-label">Area</div></div>
      </div>
      <div class="grid grid-3 mt-4">
        <div class="kpi-card"><div class="kpi-value">${sys.monthlyGeneration}</div><div class="kpi-label">kWh/mes</div></div>
        <div class="kpi-card"><div class="kpi-value">${sys.annualGeneration}</div><div class="kpi-label">kWh/ano</div></div>
        <div class="kpi-card"><div class="kpi-value">${sys.strings}</div><div class="kpi-label">Strings</div></div>
      </div>
    </div>

    <!-- System Render + Roof Layout -->
    <div class="grid grid-2 mb-6">
      <div class="card">
        <h3 style="margin-bottom: var(--space-4)">Render do sistema</h3>
        ${T.systemRender({ panels: sys.panels, power: sys.power, inverter: sys.inverterPower + 'kW' })}
        <p class="text-xs text-muted mt-4 text-center">Render isometrico demonstrativo — ${sys.panels} modulos, inversor ${sys.inverterPower}kW</p>
      </div>
      <div class="card">
        <h3 style="margin-bottom: var(--space-4)">Layout do telhado</h3>
        ${T.roofLayout({ panels: sys.panels, orientation: sys.orientation, roofType: sys.roofType })}
        <p class="text-xs text-muted mt-4 text-center">${sys.panels} modulos — orientacao ${T.escapeHtml(sys.orientation)} — ${T.escapeHtml(sys.roofType)} — sombreamento ${T.escapeHtml(sys.shading)}</p>
      </div>
    </div>

    <!-- Energy Flow -->
    <div class="visual-section mb-6">
      <h3>Diagrama energetico</h3>
      <p>Fluxo completo: Sol -> Paineis -> Inversor -> Imovel <-> Rede</p>
      ${T.energyFlow()}
    </div>

    <!-- Equipment List -->
    <h3 style="margin-bottom: var(--space-4)">Equipamentos</h3>
    <div class="grid grid-3 mb-6">
      <div class="equipment-card">
        ${T.inverterRender()}
        <h4>Inversor ${sys.inverter}</h4>
        <p>${sys.inverterPower} kW — string</p>
      </div>
      <div class="equipment-card">
        <div style="background:linear-gradient(135deg,#1e3a5f,#0a1e36);border-radius:var(--radius-lg);padding:var(--space-4);margin-bottom:var(--space-3)">
          <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
            <rect x="5" y="5" width="90" height="50" rx="2" fill="#0a1e36" stroke="#2a4a6f" stroke-width="0.5"/>
            <g stroke="#1a3a5f" stroke-width="0.3">
              <line x1="5" y1="20" x2="95" y2="20"/><line x1="5" y1="35" x2="95" y2="35"/>
              <line x1="25" y1="5" x2="25" y2="55"/><line x1="50" y1="5" x2="50" y2="55"/><line x1="75" y1="5" x2="75" y2="55"/>
            </g>
            <rect x="5" y="5" width="90" height="50" rx="2" fill="#3b82f6" opacity="0.05"/>
          </svg>
        </div>
        <h4>Modulo ${sys.panelModel}</h4>
        <p>${sys.panelPower} Wp — ${sys.panels} unidades</p>
      </div>
      <div class="equipment-card">
        <div style="background:linear-gradient(135deg,#1e293b,#0f172a);border-radius:var(--radius-lg);padding:var(--space-4);margin-bottom:var(--space-3);height:120px;display:flex;align-items:center;justify-content:center">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:80px;height:80px">
            <rect x="20" y="10" width="40" height="60" rx="4" fill="#1e293b" stroke="#475569" stroke-width="1"/>
            <line x1="25" y1="25" x2="55" y2="25" stroke="#64748b" stroke-width="0.5"/>
            <line x1="25" y1="35" x2="55" y2="35" stroke="#64748b" stroke-width="0.5"/>
            <line x1="25" y1="45" x2="55" y2="45" stroke="#64748b" stroke-width="0.5"/>
            <line x1="25" y1="55" x2="55" y2="55" stroke="#64748b" stroke-width="0.5"/>
            <circle cx="40" cy="65" r="3" fill="#22c55e"/>
          </svg>
        </div>
        <h4>String Box</h4>
        <p>Protecoes CC e CA — demonstrativo</p>
      </div>
    </div>

    <!-- Technical Specs -->
    <h3 style="margin-bottom: var(--space-4)">Dimensionamento tecnico</h3>
    <div class="card mb-6">
      <table class="data-table">
        <tr><th>Componente</th><th>Especificacao</th></tr>
        <tr><td>Modulos</td><td>${sys.panels} x ${sys.panelPower} Wp — ${sys.panelModel}</td></tr>
        <tr><td>Potencia instalada</td><td>${sys.power} kWp</td></tr>
        <tr><td>Inversor</td><td>${sys.inverter} — ${sys.inverterPower} kW</td></tr>
        <tr><td>Strings</td><td>${sys.strings}</td></tr>
        <tr><td>Area estimada</td><td>${sys.area} m2</td></tr>
        <tr><td>Producao anual estimada</td><td>${sys.annualGeneration} kWh (${(sys.annualGeneration/1000).toFixed(1)} MWh)</td></tr>
        <tr><td>Telhado</td><td>${T.escapeHtml(sys.roofType)} — orientacao ${T.escapeHtml(sys.orientation)}</td></tr>
      </table>
      <p class="text-xs text-muted mt-4">Dados demonstrativos — nao constitui projeto eletrico real</p>
    </div>

    <!-- Team -->
    <h3 style="margin-bottom: var(--space-4)">Equipe responsavel</h3>
    <div class="grid grid-3 mb-6">
      ${project.team.map(m => `<div class="card text-center"><div class="portal-user-avatar" style="background:var(--info-soft);color:var(--info)">${m.name.charAt(0)}</div><h4 style="font-size:var(--fs-sm)">${T.escapeHtml(m.name)}</h4><p class="text-xs text-muted">${T.escapeHtml(m.role)}</p></div>`).join('')}
    </div>

    <!-- CTA -->
    <div class="visual-section">
      <h3>Proximos passos</h3>
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
