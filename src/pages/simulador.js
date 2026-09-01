/* SolMais — Simulador wizard 6 etapas com feedback visual
   Localizacao (mapa) → Consumo (grafico) → Imovel (telhados) → Objetivo (cards) → Configuracao (render) → Resultado (WOW) */

function render(data, T) {
  const store = data.store;
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Simulador' }];

  // Dados para graficos do resultado
  const genData = [680, 620, 650, 600, 550, 520, 540, 580, 620, 670, 690, 700];
  const consData = Array(12).fill(720);
  const monthLabels = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  const economyData = [5760, 11520, 17280, 23040, 28800, 57600, 86400, 115200, 144000];

  const wizard = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb(bcItems)}
    ${T.pageHero('Simulador Solar', 'Wizard de 6 etapas — localizacao, consumo, imovel, objetivo, configuracao e resultado', { icon: T.ICONS.bolt })}

    <div class="wizard" id="wizard">
      <div class="wizard-steps" id="wizard-steps">
        <div class="wizard-step active" data-step="1"><span class="wizard-step-num">1</span> Localizacao</div>
        <div class="wizard-step" data-step="2"><span class="wizard-step-num">2</span> Consumo</div>
        <div class="wizard-step" data-step="3"><span class="wizard-step-num">3</span> Imovel</div>
        <div class="wizard-step" data-step="4"><span class="wizard-step-num">4</span> Objetivo</div>
        <div class="wizard-step" data-step="5"><span class="wizard-step-num">5</span> Configuracao</div>
        <div class="wizard-step" data-step="6"><span class="wizard-step-num">6</span> Resultado</div>
      </div>

      <div class="wizard-content" id="wizard-content">
        <!-- Step 1: Localizacao (com mapa SVG) -->
        <div class="wizard-panel" data-panel="1">
          <h2 style="margin-bottom: var(--space-4)">Localizacao do imovel</h2>
          <p class="text-secondary mb-6">Informe a regiao para estimar a irradiacao solar disponivel.</p>
          <div class="grid grid-2">
            <div>
              <div class="grid grid-2">
                <div class="field">
                  <label class="label">CEP (demonstrativo)</label>
                  <input type="text" class="input" id="sim-cep" placeholder="11000-000" value="11000-000">
                </div>
                <div class="field">
                  <label class="label">Cidade</label>
                  <select class="select" id="sim-city">
                    <option value="santos">Santos/SP</option>
                    <option value="saovicente">Sao Vicente/SP</option>
                    <option value="praiagrande">Praia Grande/SP</option>
                    <option value="guaruja">Guaruja/SP</option>
                    <option value="cubatao">Cubatao/SP</option>
                  </select>
                </div>
              </div>
              <div class="field">
                <label class="label">Tipo de imovel</label>
                <div class="option-grid" id="sim-type">
                  <div class="option-card selected" data-value="residencial">
                    <div class="option-card-icon">${T.ICONS.home}</div>
                    <div class="option-card-title">Residencial</div>
                  </div>
                  <div class="option-card" data-value="comercial">
                    <div class="option-card-icon">${T.ICONS.bolt}</div>
                    <div class="option-card-title">Comercial</div>
                  </div>
                  <div class="option-card" data-value="condominio">
                    <div class="option-card-icon">${T.ICONS.grid}</div>
                    <div class="option-card-title">Condominio</div>
                  </div>
                  <div class="option-card" data-value="rural">
                    <div class="option-card-icon">${T.ICONS.leaf}</div>
                    <div class="option-card-title">Rural</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card" style="height:100%">
                <h4 style="margin-bottom: var(--space-3)">Irradiacao solar estimada</h4>
                ${T.mapDemo({ systems: [{ projectId: 'Santos', health: { system: 'normal' } }, { projectId: 'S.Vicente', health: { system: 'normal' } }, { projectId: 'P.Grande', health: { system: 'atencao' } }, { projectId: 'Guaruja', health: { system: 'normal' } }, { projectId: 'Cubatao', health: { system: 'alerta' } }] })}
                <div class="grid grid-2 mt-4">
                  <div class="kpi-card"><div class="kpi-value text-solar">4,8</div><div class="kpi-label">kWh/m²/dia</div></div>
                  <div class="kpi-card"><div class="kpi-value">1.750</div><div class="kpi-label">h sol/ano</div></div>
                </div>
                <p class="text-xs text-muted mt-3">Irradiacao media da regiao — dados demonstrativos</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2: Consumo (com grafico) -->
        <div class="wizard-panel hidden" data-panel="2">
          <h2 style="margin-bottom: var(--space-4)">Consumo de energia</h2>
          <p class="text-secondary mb-6">Escolha como prefere informar seu consumo.</p>
          <div class="grid grid-2">
            <div>
              <div class="option-grid" id="sim-consumo-type">
                <div class="option-card selected" data-value="conta">
                  <div class="option-card-icon">${T.ICONS.cash}</div>
                  <div class="option-card-title">Conta media</div>
                  <div class="option-card-desc">Valor mensal em R$</div>
                </div>
                <div class="option-card" data-value="kwh">
                  <div class="option-card-icon">${T.ICONS.bolt}</div>
                  <div class="option-card-title">Consumo em kWh</div>
                  <div class="option-card-desc">Sei meu consumo</div>
                </div>
                <div class="option-card" data-value="historico">
                  <div class="option-card-icon">${T.ICONS.chart}</div>
                  <div class="option-card-title">Historico 12 meses</div>
                  <div class="option-card-desc">Consumo mensal detalhado</div>
                </div>
              </div>
              <div class="field mt-6" id="sim-conta-field">
                <label class="label">Conta media mensal (R$)</label>
                <input type="number" class="input" id="sim-bill" placeholder="650" value="650">
              </div>
              <div class="field hidden" id="sim-kwh-field">
                <label class="label">Consumo mensal (kWh)</label>
                <input type="number" class="input" id="sim-kwh" placeholder="720" value="720">
              </div>
              <div class="field hidden" id="sim-historico-field">
                <label class="label">Historico de 12 meses (kWh)</label>
                <div class="grid grid-3" id="sim-historico-inputs">
                  ${['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'].map((m, i) =>
                    '<div><label class="label text-xs">' + m + '</label><input type="number" class="input" data-month="' + m + '" placeholder="' + (600 + i * 20) + '" value="' + (600 + i * 20) + '"></div>'
                  ).join('')}
                </div>
              </div>
            </div>
            <div>
              <div class="card" style="height:100%">
                <h4 style="margin-bottom: var(--space-3)">Seu consumo estimado</h4>
                ${T.areaChart([720, 740, 710, 690, 670, 650, 660, 680, 700, 720, 740, 750], { width: 350, height: 150, color: '#3b82f6', labels: monthLabels, id: 'consumo', label: 'kWh/mes' })}
                <div class="grid grid-2 mt-4">
                  <div class="kpi-card"><div class="kpi-value">720</div><div class="kpi-label">kWh/mes</div></div>
                  <div class="kpi-card"><div class="kpi-value">R$ 650</div><div class="kpi-label">Conta media</div></div>
                </div>
                <p class="text-xs text-muted mt-3">Estimativa baseada na conta informada — dados demonstrativos</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3: Imovel (com thumbnails de telhado) -->
        <div class="wizard-panel hidden" data-panel="3">
          <h2 style="margin-bottom: var(--space-4)">Caracteristicas do imovel</h2>
          <p class="text-secondary mb-6">Informacoes sobre o telhado e area disponivel.</p>
          <div class="field">
            <label class="label">Tipo de telhado</label>
            <div class="grid grid-5" id="sim-roof">
              <div class="option-card selected" data-value="ceramico">
                <svg viewBox="0 0 60 40" fill="none" style="width:100%;height:auto;margin-bottom:8px"><path d="M0 30 L30 10 L60 30 L60 35 L0 35 Z" fill="#8b4513" opacity="0.7"/><g stroke="#5a2d0c" stroke-width="0.5"><line x1="0" y1="30" x2="60" y2="30"/><line x1="10" y1="22" x2="50" y2="22"/><line x1="20" y1="14" x2="40" y2="14"/></g></svg>
                <div class="option-card-title">Ceramico</div>
              </div>
              <div class="option-card" data-value="fibrocimento">
                <svg viewBox="0 0 60 40" fill="none" style="width:100%;height:auto;margin-bottom:8px"><path d="M0 30 L30 10 L60 30 L60 35 L0 35 Z" fill="#6b7280" opacity="0.7"/><g stroke="#4b5563" stroke-width="0.5"><line x1="0" y1="25" x2="60" y2="25"/><line x1="0" y1="30" x2="60" y2="30"/></g></svg>
                <div class="option-card-title">Fibrocimento</div>
              </div>
              <div class="option-card" data-value="metalico">
                <svg viewBox="0 0 60 40" fill="none" style="width:100%;height:auto;margin-bottom:8px"><path d="M0 30 L30 10 L60 30 L60 35 L0 35 Z" fill="#9ca3af" opacity="0.7"/><g stroke="#6b7280" stroke-width="0.5"><line x1="0" y1="28" x2="60" y2="28"/><line x1="15" y1="20" x2="45" y2="20"/></g></svg>
                <div class="option-card-title">Metalico</div>
              </div>
              <div class="option-card" data-value="laje">
                <svg viewBox="0 0 60 40" fill="none" style="width:100%;height:auto;margin-bottom:8px"><rect x="5" y="15" width="50" height="20" fill="#6b7280" opacity="0.7"/><rect x="5" y="15" width="50" height="3" fill="#9ca3af" opacity="0.5"/></svg>
                <div class="option-card-title">Laje</div>
              </div>
              <div class="option-card" data-value="solo">
                <svg viewBox="0 0 60 40" fill="none" style="width:100%;height:auto;margin-bottom:8px"><rect y="30" width="60" height="10" fill="#3a4a3a" opacity="0.7"/><line x1="10" y1="30" x2="10" y2="15" stroke="#2a3a2a" stroke-width="2"/><line x1="30" y1="30" x2="30" y2="10" stroke="#2a3a2a" stroke-width="2"/><line x1="50" y1="30" x2="50" y2="15" stroke="#2a3a2a" stroke-width="2"/></svg>
                <div class="option-card-title">Solo</div>
              </div>
            </div>
          </div>
          <div class="grid grid-2">
            <div class="field">
              <label class="label">Area aproximada (m²)</label>
              <input type="number" class="input" id="sim-area" placeholder="30" value="30">
            </div>
            <div class="field">
              <label class="label">Orientacao</label>
              <select class="select" id="sim-orientation">
                <option value="norte">Norte (ideal)</option>
                <option value="nordeste">Nordeste</option>
                <option value="leste">Leste</option>
                <option value="oeste">Oeste</option>
                <option value="sul">Sul (menos eficiente)</option>
              </select>
            </div>
          </div>
          <div class="field">
            <label class="label">Sombreamento</label>
            <div class="option-grid" id="sim-shading">
              <div class="option-card selected" data-value="baixo"><div class="option-card-title">Baixo</div><div class="option-card-desc">Sem obstrucoes</div></div>
              <div class="option-card" data-value="medio"><div class="option-card-title">Medio</div><div class="option-card-desc">Alguma sombra</div></div>
              <div class="option-card" data-value="alto"><div class="option-card-title">Alto</div><div class="option-card-desc">Muita sombra</div></div>
            </div>
          </div>
          <div class="card mt-4">
            <h4 style="margin-bottom: var(--space-3)">Preview do layout</h4>
            ${T.roofLayout({ panels: 10, orientation: 'Norte', roofType: 'Ceramico' })}
          </div>
        </div>

        <!-- Step 4: Objetivo (visual cards) -->
        <div class="wizard-panel hidden" data-panel="4">
          <h2 style="margin-bottom: var(--space-4)">Seu objetivo</h2>
          <p class="text-secondary mb-6">O que voce espera com o sistema solar?</p>
          <div class="option-grid" id="sim-goal">
            <div class="option-card selected" data-value="reduzir">
              <div class="option-card-icon">${T.ICONS.cash}</div>
              <div class="option-card-title">Reduzir conta</div>
              <div class="option-card-desc">Menor investimento</div>
            </div>
            <div class="option-card" data-value="independencia">
              <div class="option-card-icon">${T.ICONS.bolt}</div>
              <div class="option-card-title">Independencia</div>
              <div class="option-card-desc">Maxima geracao</div>
            </div>
            <div class="option-card" data-value="eletrico">
              <div class="option-card-icon">${T.ICONS.bolt}</div>
              <div class="option-card-title">Carro eletrico</div>
              <div class="option-card-desc">Preparar para VE</div>
            </div>
            <div class="option-card" data-value="empresarial">
              <div class="option-card-icon">${T.ICONS.grid}</div>
              <div class="option-card-title">Sistema empresarial</div>
              <div class="option-card-desc">Comercial/industrial</div>
            </div>
          </div>
          <div class="grid grid-3 mt-6">
            <div class="kpi-premium">
              <div class="kpi-icon-wrap solar">${T.ICONS.cash}</div>
              <div class="kpi-value text-solar">90%</div>
              <div class="kpi-label">Reducao estimada</div>
            </div>
            <div class="kpi-premium">
              <div class="kpi-icon-wrap gen">${T.ICONS.leaf}</div>
              <div class="kpi-value text-gen">5,2 t</div>
              <div class="kpi-label">CO2 evitado/ano</div>
            </div>
            <div class="kpi-premium">
              <div class="kpi-icon-wrap info">${T.ICONS.clock}</div>
              <div class="kpi-value">4,8</div>
              <div class="kpi-label">Payback (anos)</div>
            </div>
          </div>
        </div>

        <!-- Step 5: Configuracao (com render do sistema) -->
        <div class="wizard-panel hidden" data-panel="5">
          <h2 style="margin-bottom: var(--space-4)">Sistema recomendado</h2>
          <p class="text-secondary mb-6">Com base nos dados informados, o sistema SolMais Recomendado:</p>
          <div class="grid grid-2">
            <div>
              <div class="card card-glow" style="margin-bottom: var(--space-4)">
                <div class="grid grid-3">
                  <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.panel}</div><div class="kpi-value">5,5</div><div class="kpi-label">kWp</div></div>
                  <div class="kpi-card"><div class="kpi-card-icon info">${T.ICONS.grid}</div><div class="kpi-value">10</div><div class="kpi-label">Modulos 550W</div></div>
                  <div class="kpi-card"><div class="kpi-card-icon warn">${T.ICONS.bolt}</div><div class="kpi-value">5 kW</div><div class="kpi-label">Inversor</div></div>
                </div>
              </div>
              <div class="card">
                <h4 class="text-sm text-muted mb-2">Dimensionamento</h4>
                <div class="data-table" style="font-size: var(--fs-sm)">
                  <div style="display:flex;justify-content:space-between;padding:var(--space-2) 0;border-bottom:1px solid var(--border)"><span class="text-secondary">Potencia instalada</span><strong>5,50 kWp</strong></div>
                  <div style="display:flex;justify-content:space-between;padding:var(--space-2) 0;border-bottom:1px solid var(--border)"><span class="text-secondary">Modulos</span><strong>10 x 550W</strong></div>
                  <div style="display:flex;justify-content:space-between;padding:var(--space-2) 0;border-bottom:1px solid var(--border)"><span class="text-secondary">Inversor</span><strong>5 kW</strong></div>
                  <div style="display:flex;justify-content:space-between;padding:var(--space-2) 0;border-bottom:1px solid var(--border)"><span class="text-secondary">Strings</span><strong>2</strong></div>
                  <div style="display:flex;justify-content:space-between;padding:var(--space-2) 0"><span class="text-secondary">Area estimada</span><strong>~26 m2</strong></div>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <h4 style="margin-bottom: var(--space-3)">Render do sistema</h4>
                ${T.systemRender({ panels: 10, power: '5,5', inverter: '5kW' })}
              </div>
            </div>
          </div>
          <p class="text-xs text-muted mt-4">Estimativa demonstrativa — os resultados dependem de tarifa, distribuidora, consumo, modalidade, dimensionamento, irradiacao e regras vigentes do SCEE.</p>
        </div>

        <!-- Step 6: Resultado (WOW) -->
        <div class="wizard-panel hidden" data-panel="6">
          <div class="result-hero">
            <h2>Seu projeto solar estimado</h2>
            <div class="power">5,50 kWp</div>
          </div>

          <!-- System render + roof layout -->
          <div class="grid grid-2 mb-6">
            <div class="card">
              <h4 style="margin-bottom: var(--space-3)">Sistema completo</h4>
              ${T.systemRender({ panels: 10, power: '5,5', inverter: '5kW' })}
            </div>
            <div class="card">
              <h4 style="margin-bottom: var(--space-3)">Layout do telhado</h4>
              ${T.roofLayout({ panels: 10, orientation: 'Norte', roofType: 'Ceramico' })}
            </div>
          </div>

          <!-- KPIs Resultado -->
          <div class="result-cards">
            <div class="result-card"><div class="val">650 kWh</div><div class="lbl">Geracao mensal</div></div>
            <div class="result-card"><div class="val">7.800 kWh</div><div class="lbl">Geracao anual</div></div>
            <div class="result-card"><div class="val">${T.formatBRL(480)}</div><div class="lbl">Economia/mes</div></div>
            <div class="result-card"><div class="val">${T.formatBRL(5760)}</div><div class="lbl">Economia/ano</div></div>
            <div class="result-card"><div class="val">4,8 anos</div><div class="lbl">Payback estimado</div></div>
            <div class="result-card"><div class="val">5,2 t/ano</div><div class="lbl">CO2 evitado</div></div>
            <div class="result-card"><div class="val">10</div><div class="lbl">Modulos</div></div>
            <div class="result-card"><div class="val">26 m2</div><div class="lbl">Area necessaria</div></div>
          </div>

          <!-- Grafico premium geracao vs consumo -->
          <div class="chart-premium mt-6">
            <h3>
              <span>Geracao x Consumo (12 meses)</span>
              <span class="chart-legend">
                <span class="chart-legend-item"><span class="chart-legend-dot" style="background:#f59e0b"></span> Geracao</span>
                <span class="chart-legend-item"><span class="chart-legend-dot" style="background:#3b82f6;opacity:0.5"></span> Consumo</span>
              </span>
            </h3>
            ${T.areaChart(genData, { width: 600, height: 220, color: '#f59e0b', color2: '#3b82f6', estimated: consData, labels: monthLabels, id: 'result-gen', label: 'kWh/mes' })}
            <p class="text-xs text-muted mt-4">Linha laranja: geracao estimada. Linha azul tracejada: consumo medio. Dados demonstrativos.</p>
          </div>

          <!-- Gauges -->
          <div class="grid grid-4 mt-6">
            <div class="card text-center">
              <h4 style="margin-bottom: var(--space-3)">Cobertura</h4>
              ${T.donutChart(90, 100, { label: 'do consumo', unit: '%', color: '#22c55e' })}
            </div>
            <div class="card text-center">
              <h4 style="margin-bottom: var(--space-3)">Payback</h4>
              ${T.donutChart(48, 100, { label: '4,8 anos', unit: '', color: '#f59e0b' })}
            </div>
            <div class="card text-center">
              <h4 style="margin-bottom: var(--space-3)">ROI 25 anos</h4>
              ${T.donutChart(85, 100, { label: 'do investimento', unit: '%', color: '#3b82f6' })}
            </div>
            <div class="card text-center">
              <h4 style="margin-bottom: var(--space-3)">Sustentabilidade</h4>
              ${T.donutChart(75, 100, { label: 'impacto', unit: '%', color: '#22c55e' })}
            </div>
          </div>

          <!-- Economia acumulada -->
          <div class="chart-premium mt-6">
            <h3>Economia acumulada projetada</h3>
            ${T.areaChart(economyData, { width: 600, height: 180, color: '#f59e0b', labels: ['Ano 1','Ano 2','Ano 3','Ano 4','Ano 5','Ano 10','Ano 15','Ano 20','Ano 25'], id: 'economy', label: 'R$ acumulado' })}
            <div class="grid grid-5 mt-4">
              ${[
                { year: 'Ano 1', val: 5760 },
                { year: 'Ano 5', val: 28800 },
                { year: 'Ano 10', val: 57600 },
                { year: 'Ano 20', val: 115200 },
                { year: 'Ano 25', val: 144000 }
              ].map(e => '<div class="kpi-card"><div class="kpi-value text-solar">' + T.formatBRL(e.val) + '</div><div class="kpi-label">' + e.year + '</div></div>').join('')}
            </div>
          </div>

          <!-- Energy Flow -->
          <div class="visual-section mt-6">
            <h3>Fluxo energetico do seu sistema</h3>
            <p>Sol -> Paineis -> Inversor -> Imovel <-> Rede</p>
            ${T.energyFlow()}
          </div>

          <div class="card card-glow text-center mt-6">
            <h3 style="margin-bottom: var(--space-3)">Proximos passos</h3>
            <p class="text-secondary mb-6">Compare sistemas, veja cenarios financeiros ou crie um projeto demonstrativo.</p>
            <div class="hero-cta" style="justify-content:center">
              <a href="comparador.html" class="btn btn-primary">${T.ICONS.chart} Comparar sistemas</a>
              <a href="financeiro.html" class="btn btn-secondary">${T.ICONS.cash} Cenarios financeiros</a>
              <a href="projeto.html" class="btn btn-secondary">${T.ICONS.panel} Ver projeto demo</a>
            </div>
          </div>
          <p class="text-xs text-muted text-center mt-4">Estimativa demonstrativa — nao constitui proposta comercial, projeto eletrico, orcamento, oferta de credito ou garantia de economia.</p>
        </div>
      </div>

      <div class="wizard-nav">
        <button class="btn btn-secondary" id="wizard-prev" onclick="SolMais.wizardPrev()" disabled>Voltar</button>
        <button class="btn btn-primary" id="wizard-next" onclick="SolMais.wizardNext()">Proximo ${T.ICONS.arrow}</button>
      </div>
    </div>
  </div>
</section>`;

  return [{
    filename: 'simulador.html',
    slug: 'simulador',
    noindex: false,
    html: T.renderLayout({
      store,
      data,
      title: 'Simulador Solar Fotovoltaico: 6 Etapas',
      description: 'Simule seu sistema solar em 6 etapas: localizacao, consumo, imovel, telhado, objetivo e configuracao. Veja resultado com kWp, geracao, economia e payback estimados.',
      canonical: '/simulador.html',
      active: 'simulador',
      ogImage: store.url.replace(/\/$/, '') + '/img/og/simulador.svg',
      structuredData: T.renderBreadcrumbSchema(bcItems, store.url),
      content: wizard
    })
  }];
}

module.exports = { render };
