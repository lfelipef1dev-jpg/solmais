/* SolMais — Projeto 3.0
   SHOWCASE com Digital Twin + hotspots + equipamentos com renders
   Uma das melhores paginas do produto */

function render(data, T) {
  const store = data.store;
  const sys = (data.systems || [])[0];
  const project = (data.projects || [])[0];
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Portal', href: 'conta.html' }, { label: 'Meu projeto' }];

  /* === HERO: DIGITAL TWIN COM HOTSPOTS === */
  const twinHero = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb(bcItems)}
    <div style="text-align:center;margin:var(--space-6) 0">
      <span class="cinematic-hero-eyebrow">Projeto ${sys.projectId}</span>
      <h1 style="font-family:'Sora',sans-serif;font-size:var(--fs-3xl);font-weight:800;color:#e2e8f0;margin-top:var(--space-3)">Meu sistema fotovoltaico</h1>
      <p style="font-size:var(--fs-lg);color:var(--sm-text-soft);margin-top:var(--space-2)">${sys.power} kWp &middot; ${sys.panels} modulos &middot; ${T.escapeHtml(sys.location)}</p>
    </div>
    <div class="digital-twin-wrap" style="max-width:800px;margin:0 auto var(--space-6)">
      ${T.digitalTwin({ width: 800, height: 500, panels: sys.panels, showFlow: false, generating: false, id: 'proj-twin', theme: 'dark', hotspots: true })}
    </div>
    <!-- Hotspot info -->
    <div class="grid grid-4" style="max-width:800px;margin:0 auto var(--space-6)">
      <div class="kpi-premium">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:var(--space-2)">
          <div style="width:24px;height:24px;border-radius:50%;background:var(--sm-amber);display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">01</div>
          <h4 style="font-size:var(--fs-sm)">Modulos</h4>
        </div>
        <p class="text-sm text-muted">${sys.panels} × 550Wp</p>
      </div>
      <div class="kpi-premium">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:var(--space-2)">
          <div style="width:24px;height:24px;border-radius:50%;background:var(--sm-amber);display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">02</div>
          <h4 style="font-size:var(--fs-sm)">Inversor</h4>
        </div>
        <p class="text-sm text-muted">${sys.inverterPower} kW string</p>
      </div>
      <div class="kpi-premium">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:var(--space-2)">
          <div style="width:24px;height:24px;border-radius:50%;background:var(--sm-blue);display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">03</div>
          <h4 style="font-size:var(--fs-sm)">Quadro</h4>
        </div>
        <p class="text-sm text-muted">Protecao CC/CA</p>
      </div>
      <div class="kpi-premium">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:var(--space-2)">
          <div style="width:24px;height:24px;border-radius:50%;background:var(--sm-green);display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">04</div>
          <h4 style="font-size:var(--fs-sm)">Rede</h4>
        </div>
        <p class="text-sm text-muted">Conexao distribuidora</p>
      </div>
    </div>
  </div>
</section>`;

  /* === KPIs PREMIUM === */
  const kpiSection = `<section class="section" style="padding-top:0">
  <div class="container">
    <div class="grid grid-4">
      <div class="kpi-premium">
        <div class="kpi-icon-wrap solar">${T.ICONS.panel}</div>
        <div class="kpi-value">${sys.power}</div>
        <div class="kpi-label">kWp instalado</div>
        <div class="mini-chart-wrap">${T.sparkline([4.8, 5.0, 5.2, 5.3, 5.4, 5.5], {color:'#f59e0b'})}</div>
      </div>
      <div class="kpi-premium">
        <div class="kpi-icon-wrap gen">${T.ICONS.bolt}</div>
        <div class="kpi-value">650</div>
        <div class="kpi-label">kWh/mes</div>
        <div class="mini-chart-wrap">${T.sparkline([520, 540, 560, 580, 600, 650], {color:'#22c55e'})}</div>
      </div>
      <div class="kpi-premium">
        <div class="kpi-icon-wrap info">${T.ICONS.chart}</div>
        <div class="kpi-value">7,8</div>
        <div class="kpi-label">MWh/ano</div>
        <div class="mini-chart-wrap">${T.sparkline([6.5, 6.8, 7.0, 7.3, 7.5, 7.8], {color:'#3b82f6'})}</div>
      </div>
      <div class="kpi-premium">
        <div class="kpi-icon-wrap solar">${T.ICONS.cash}</div>
        <div class="kpi-value">R$ 480</div>
        <div class="kpi-label">Economia/mes</div>
        <div class="mini-chart-wrap">${T.sparkline([420, 440, 450, 460, 470, 480], {color:'#f59e0b'})}</div>
      </div>
    </div>
  </div>
</section>`;

  /* === ROOF CAD === */
  const roofSection = `<section class="section" style="padding-top:0">
  <div class="container">
    <div class="grid grid-2" style="align-items:start">
      <div>
        <span class="cinematic-hero-eyebrow">Layout tecnico</span>
        <h2 style="font-family:'Sora',sans-serif;font-size:var(--fs-2xl);font-weight:700;margin:var(--space-3) 0 var(--space-4)">Telhado — top view CAD</h2>
        <p style="font-size:var(--fs-lg);color:var(--sm-text-soft);line-height:1.6;margin-bottom:var(--space-4)">Distribuicao dos ${sys.panels} modulos no telhado com orientacao norte, dimensoes e area utilizada.</p>
        <div class="grid grid-2">
          <div class="kpi-premium"><div class="kpi-value" style="font-size:var(--fs-lg)">${sys.area} m²</div><div class="kpi-label">Area utilizada</div></div>
          <div class="kpi-premium"><div class="kpi-value" style="font-size:var(--fs-lg)">48 m²</div><div class="kpi-label">Area disponivel</div></div>
          <div class="kpi-premium"><div class="kpi-value" style="font-size:var(--fs-lg)">Norte</div><div class="kpi-label">Orientacao</div></div>
          <div class="kpi-premium"><div class="kpi-value" style="font-size:var(--fs-lg)">15°</div><div class="kpi-label">Inclinacao</div></div>
        </div>
      </div>
      <div class="roof-cad-wrap">
        ${T.roofCAD({ panels: sys.panels, panelCols: 5, id: 'proj-roof', areaUsed: sys.area + ' m²', areaTotal: '48 m²' })}
      </div>
    </div>
  </div>
</section>`;

  /* === EQUIPAMENTOS COM RENDERS === */
  const equipmentSection = `<section class="section" style="padding-top:0">
  <div class="container">
    <div style="text-align:center;margin-bottom:var(--space-6)">
      <span class="cinematic-hero-eyebrow">Equipamentos</span>
      <h2 style="font-family:'Sora',sans-serif;font-size:var(--fs-2xl);font-weight:700;margin-top:var(--space-3)">Hardware do sistema</h2>
      <p style="font-size:var(--fs-lg);color:var(--sm-text-soft);max-width:500px;margin:var(--space-2) auto 0">Componentes ficticios com renders estilo industrial</p>
    </div>
    <div class="grid grid-3">
      <div class="equipment-card">
        ${T.equipmentRender('module', { id: 'eq-mod' })}
        <div class="equipment-card-body">
          <div class="equipment-card-name">SolMais Module 550</div>
          <div class="equipment-card-spec">550 Wp &middot; Monocristalino &middot; ${sys.panels} unidades</div>
        </div>
      </div>
      <div class="equipment-card">
        ${T.equipmentRender('inverter', { id: 'eq-inv' })}
        <div class="equipment-card-body">
          <div class="equipment-card-name">SolMais Inverter 5K</div>
          <div class="equipment-card-spec">${sys.inverterPower} kW &middot; String &middot; WiFi integrado</div>
        </div>
      </div>
      <div class="equipment-card">
        ${T.equipmentRender('protection', { id: 'eq-prot' })}
        <div class="equipment-card-body">
          <div class="equipment-card-name">SolMais Protection Box</div>
          <div class="equipment-card-spec">DPS + Disjuntor &middot; CC e CA &middot; IP65</div>
        </div>
      </div>
    </div>
  </div>
</section>`;

  /* === DIAGRAMA ENERGETICO === */
  const diagramSection = `<section class="section" style="padding-top:0">
  <div class="container">
    <div class="chart-premium">
      <h3>Diagrama energetico</h3>
      ${T.energyFlow({ id: 'proj-flow' })}
    </div>
  </div>
</section>`;

  /* === TABELA TECNICA + LINKS === */
  const techSection = `<section class="section" style="padding-top:0">
  <div class="container">
    <div class="grid grid-2">
      <div class="chart-premium">
        <h3>Dimensionamento</h3>
        <table class="data-table">
          <tr><th>Parametro</th><th>Valor</th></tr>
          <tr><td>Potencia nominal</td><td>${sys.power} kWp</td></tr>
          <tr><td>Modulos</td><td>${sys.panels} × 550 Wp</td></tr>
          <tr><td>Inversor</td><td>${sys.inverterPower} kW</td></tr>
          <tr><td>Area</td><td>${sys.area} m²</td></tr>
          <tr><td>Geracao estimada</td><td>650 kWh/mes</td></tr>
          <tr><td>Geracao anual</td><td>7.800 kWh/ano</td></tr>
          <tr><td>Cobertura estimada</td><td>90%</td></tr>
        </table>
      </div>
      <div class="chart-premium">
        <h3>Equipe</h3>
        <div class="grid grid-2">
          <div class="kpi-premium" style="border:none;padding:var(--space-3);text-align:center">
            <div class="kpi-icon-wrap solar" style="margin:0 auto var(--space-2)">${T.ICONS.user}</div>
            <div style="font-weight:600;color:#e2e8f0">Eng. Eletricista</div>
            <div class="text-xs text-muted">Responsavel tecnico</div>
          </div>
          <div class="kpi-premium" style="border:none;padding:var(--space-3);text-align:center">
            <div class="kpi-icon-wrap info" style="margin:0 auto var(--space-2)">${T.ICONS.user}</div>
            <div style="font-weight:600;color:#e2e8f0">Instalador</div>
            <div class="text-xs text-muted">Equipe certificada</div>
          </div>
          <div class="kpi-premium" style="border:none;padding:var(--space-3);text-align:center">
            <div class="kpi-icon-wrap gen" style="margin:0 auto var(--space-2)">${T.ICONS.user}</div>
            <div style="font-weight:600;color:#e2e8f0">Gerente</div>
            <div class="text-xs text-muted">Acompanhamento</div>
          </div>
          <div class="kpi-premium" style="border:none;padding:var(--space-3);text-align:center">
            <div class="kpi-icon-wrap warn" style="margin:0 auto var(--space-2)">${T.ICONS.support}</div>
            <div style="font-weight:600;color:#e2e8f0">Suporte</div>
            <div class="text-xs text-muted">Pos-venda</div>
          </div>
        </div>
        <div style="margin-top:var(--space-4);display:flex;flex-direction:column;gap:var(--space-2)">
          <a href="instalacao.html" class="btn btn-secondary btn-sm">${T.ICONS.settings} Ver instalacao</a>
          <a href="monitoramento.html" class="btn btn-secondary btn-sm">${T.ICONS.chart} Ver monitoramento</a>
          <a href="documentos.html" class="btn btn-secondary btn-sm">${T.ICONS.doc} Documentos</a>
        </div>
      </div>
    </div>
    <p class="text-xs text-muted mt-4 text-center">Projeto demonstrativo — todos os dados sao ficticios</p>
  </div>
</section>`;

  const content = twinHero + kpiSection + roofSection + equipmentSection + diagramSection + techSection;

  return [{
    filename: 'projeto.html',
    slug: 'projeto',
    noindex: true,
    html: T.renderLayout({
      store, data,
      title: 'Meu Projeto Solar',
      description: 'Projeto tecnico do sistema fotovoltaico — render 3D, layout do telhado, equipamentos e dimensionamento.',
      canonical: '/projeto.html', active: '',
      noindex: true,
      content
    })
  }];
}

module.exports = { render };
