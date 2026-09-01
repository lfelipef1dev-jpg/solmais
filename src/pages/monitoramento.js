/* SolMais — Monitoramento V3
   PRODUTO COMO PROTAGONISTA, nao dashboard cards
   "Veja sua energia acontecer." */

function render(data, T) {
  const store = data.store;
  const sys = (data.systems || [])[0];
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Portal', href: 'conta.html' }, { label: 'Monitoramento' }];

  const content = `
<div class="sm-mon-page">
  <section style="max-width:var(--container-max);margin:0 auto;padding:var(--space-6) var(--space-6) 0">
    ${T.renderBreadcrumb(bcItems)}
  </section>

  <!-- HERO: Gerando agora -->
  <section class="sm-mon-hero">
    <div class="sm-mon-hero-head">
      <div>
        <span class="sm-eyebrow">Monitoramento</span>
        <h1 class="sm-headline dark" style="margin-top:var(--space-3)">Veja sua energia<br>acontecer.</h1>
      </div>
      <div class="sm-monitor-status" style="font-size:var(--fs-sm)">Sistema operando normal</div>
    </div>

    <!-- Digital Twin com dados sobrepostos -->
    <div style="position:relative;max-width:800px;margin:var(--space-6) auto 0">
      ${T.digitalTwin({ width: 800, height: 450, panels: sys.panels, showFlow: true, generating: true, id: 'mon-v3', theme: 'dark' })}
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
    </div>

    <!-- Numero protagonista -->
    <div class="sm-mon-now-block">
      <div class="sm-mega-number">3,42<span class="unit">kW</span></div>
      <div class="sm-mon-now-label">Gerando agora · ${sys.projectId}</div>
      <div class="sm-mon-kpis">
        <div class="sm-mon-kpi">
          <div class="sm-mon-kpi-value">18,7 kWh</div>
          <div class="sm-mon-kpi-label">Hoje</div>
        </div>
        <div class="sm-mon-kpi">
          <div class="sm-mon-kpi-value">584 kWh</div>
          <div class="sm-mon-kpi-label">Mes</div>
        </div>
        <div class="sm-mon-kpi">
          <div class="sm-mon-kpi-value" style="color:var(--solar)">R$ 480</div>
          <div class="sm-mon-kpi-label">Economia</div>
        </div>
        <div class="sm-mon-kpi">
          <div class="sm-mon-kpi-value" style="color:var(--gen)">Normal</div>
          <div class="sm-mon-kpi-label">Status</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CURVA SOLAR GRANDE -->
  <section class="sm-mon-chart">
    <div class="solar-curve-wrap">
      <div class="solar-curve-header">
        <div>
          <div class="solar-curve-title">Geracao hoje</div>
          <div class="solar-curve-subtitle">Curva solar com pico destacado e linha de consumo</div>
        </div>
        <div style="text-align:right">
          <div class="sm-big-number" style="font-size:var(--fs-xl);color:var(--solar)">18,7<span style="font-size:0.4em;color:var(--text-dark-muted)">kWh</span></div>
          <div class="sm-number-label">Total do dia</div>
        </div>
      </div>
      ${T.solarCurve({ id: 'mon-v3-curve', width: 800, height: 280, showConsumption: true, peak: '4,82 kW', peakTime: '12:38' })}
    </div>
  </section>

  <!-- GAUGES -->
  <section style="max-width:var(--container-max);margin:0 auto var(--space-8);padding:0 var(--space-6)">
    <div class="grid grid-4">
      <div class="chart-premium text-center" style="background:var(--surface-dark);border-color:var(--border-dark)">
        <h3 style="color:var(--text-dark)">Performance</h3>
        ${T.gauge(92, { id: 'g1', label: 'Eficiencia', unit: '%', max: 100, color: '#22c55e', size: 160 })}
      </div>
      <div class="chart-premium text-center" style="background:var(--surface-dark);border-color:var(--border-dark)">
        <h3 style="color:var(--text-dark)">Irradiacao</h3>
        ${T.gauge(78, { id: 'g2', label: 'W/m²', unit: '%', max: 100, color: '#f59e0b', size: 160 })}
      </div>
      <div class="chart-premium text-center" style="background:var(--surface-dark);border-color:var(--border-dark)">
        <h3 style="color:var(--text-dark)">Consumo</h3>
        ${T.gauge(65, { id: 'g3', label: 'Carga', unit: '%', max: 100, color: '#3b82f6', size: 160 })}
      </div>
      <div class="chart-premium text-center" style="background:var(--surface-dark);border-color:var(--border-dark)">
        <h3 style="color:var(--text-dark)">Saude</h3>
        ${T.gauge(98, { id: 'g4', label: 'Sistema', unit: '%', max: 100, color: '#22c55e', size: 160 })}
      </div>
    </div>
  </section>

  <!-- HISTORICO MENSAL -->
  <section style="max-width:var(--container-max);margin:0 auto var(--space-8);padding:0 var(--space-6)">
    <div class="grid grid-2">
      <div class="chart-premium" style="background:var(--surface-dark);border-color:var(--border-dark)">
        <h3 style="color:var(--text-dark)">Geracao mensal</h3>
        ${T.areaChart([580, 590, 600, 610, 620, 630, 640, 650, 640, 630, 600, 580], { width: 450, height: 200, color: '#f59e0b', labels: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'], id: 'mon-v3-monthly', label: 'kWh/mes' })}
      </div>
      <div class="chart-premium" style="background:var(--surface-dark);border-color:var(--border-dark)">
        <h3 style="color:var(--text-dark)">Economia acumulada</h3>
        ${T.areaChart([480, 960, 1440, 1920, 2400, 2880, 3360, 3840, 4320, 4800, 5280, 5760], { width: 450, height: 200, color: '#22c55e', labels: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'], id: 'mon-v3-savings', label: 'R$ acumulado' })}
      </div>
    </div>
  </section>

  <!-- IMPACTO AMBIENTAL -->
  <section style="max-width:var(--container-max);margin:0 auto var(--space-10);padding:0 var(--space-6)">
    <div style="text-align:center;margin-bottom:var(--space-6)">
      <span class="sm-eyebrow">Impacto ambiental</span>
    </div>
    <div class="grid grid-3">
      <div class="text-center">
        <div class="sm-big-number" style="color:var(--gen)">2,1<span style="font-size:0.3em;color:var(--text-dark-muted)">t CO²</span></div>
        <div class="sm-number-label">Evitado/mes</div>
      </div>
      <div class="text-center">
        <div class="sm-big-number" style="color:var(--solar)">38<span style="font-size:0.3em;color:var(--text-dark-muted)">arvores</span></div>
        <div class="sm-number-label">Equivalente/ano</div>
      </div>
      <div class="text-center">
        <div class="sm-big-number" style="color:var(--text-dark)">7,8<span style="font-size:0.3em;color:var(--text-dark-muted)">MWh</span></div>
        <div class="sm-number-label">Geracao/ano</div>
      </div>
    </div>
  </section>

  <p class="text-xs text-muted text-center" style="color:var(--text-dark-muted);padding-bottom:var(--space-8)">Dados demonstrativos — sistema ficticio ${sys.projectId}</p>
</div>`;

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
