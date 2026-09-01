/* SolMais — Simulador wizard 6 etapas
   Localizacao → Consumo → Imovel → Objetivo → Configuracao → Resultado */

function render(data, T) {
  const store = data.store;
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Simulador' }];

  const wizard = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb(bcItems)}
    <div class="section-header">
      <h2>Simulador solar</h2>
      <p>Wizard de 6 etapas — localizacao, consumo, imovel, objetivo, configuracao e resultado</p>
    </div>
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
        <!-- Step 1: Localizacao -->
        <div class="wizard-panel" data-panel="1">
          <h2 style="margin-bottom: var(--space-4)">Localizacao do imovel</h2>
          <p class="text-secondary mb-6">Informe a regiao para estimar a irradiacao solar disponivel.</p>
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

        <!-- Step 2: Consumo -->
        <div class="wizard-panel hidden" data-panel="2">
          <h2 style="margin-bottom: var(--space-4)">Consumo de energia</h2>
          <p class="text-secondary mb-6">Escolha como prefere informar seu consumo.</p>
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

        <!-- Step 3: Imovel -->
        <div class="wizard-panel hidden" data-panel="3">
          <h2 style="margin-bottom: var(--space-4)">Caracteristicas do imovel</h2>
          <p class="text-secondary mb-6">Informacoes sobre o telhado e area disponivel.</p>
          <div class="field">
            <label class="label">Tipo de telhado</label>
            <div class="option-grid" id="sim-roof">
              <div class="option-card selected" data-value="ceramico"><div class="option-card-title">Ceramico</div></div>
              <div class="option-card" data-value="fibrocimento"><div class="option-card-title">Fibrocimento</div></div>
              <div class="option-card" data-value="metalico"><div class="option-card-title">Metalico</div></div>
              <div class="option-card" data-value="laje"><div class="option-card-title">Laje</div></div>
              <div class="option-card" data-value="solo"><div class="option-card-title">Solo</div></div>
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
        </div>

        <!-- Step 4: Objetivo -->
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
        </div>

        <!-- Step 5: Configuracao -->
        <div class="wizard-panel hidden" data-panel="5">
          <h2 style="margin-bottom: var(--space-4)">Sistema recomendado</h2>
          <p class="text-secondary mb-6">Com base nos dados informados, o sistema SolMais Recomendado:</p>
          <div class="card card-glow" style="margin-bottom: var(--space-4)">
            <div class="grid grid-3">
              <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.panel}</div><div class="kpi-value">5,5</div><div class="kpi-label">kWp</div></div>
              <div class="kpi-card"><div class="kpi-card-icon info">${T.ICONS.grid}</div><div class="kpi-value">10</div><div class="kpi-label">Modulos 550W</div></div>
              <div class="kpi-card"><div class="kpi-card-icon warn">${T.ICONS.bolt}</div><div class="kpi-value">5 kW</div><div class="kpi-label">Inversor</div></div>
            </div>
          </div>
          <div class="grid grid-2">
            <div class="card">
              <h4 class="text-sm text-muted mb-2">Dimensionamento</h4>
              <div class="data-table" style="font-size: var(--fs-sm)">
                <div style="display:flex;justify-content:space-between;padding:var(--space-2) 0;border-bottom:1px solid var(--border)"><span class="text-secondary">Potencia instalada</span><strong>5,50 kWp</strong></div>
                <div style="display:flex;justify-content:space-between;padding:var(--space-2) 0;border-bottom:1px solid var(--border)"><span class="text-secondary">Modulos</span><strong>10 × 550W</strong></div>
                <div style="display:flex;justify-content:space-between;padding:var(--space-2) 0;border-bottom:1px solid var(--border)"><span class="text-secondary">Inversor</span><strong>5 kW</strong></div>
                <div style="display:flex;justify-content:space-between;padding:var(--space-2) 0;border-bottom:1px solid var(--border)"><span class="text-secondary">Strings</span><strong>2</strong></div>
                <div style="display:flex;justify-content:space-between;padding:var(--space-2) 0"><span class="text-secondary">Area estimada</span><strong>~26 m²</strong></div>
              </div>
            </div>
            <div class="card">
              <h4 class="text-sm text-muted mb-2">Producao estimada</h4>
              <div class="data-table" style="font-size: var(--fs-sm)">
                <div style="display:flex;justify-content:space-between;padding:var(--space-2) 0;border-bottom:1px solid var(--border)"><span class="text-secondary">Geracao mensal</span><strong>650 kWh</strong></div>
                <div style="display:flex;justify-content:space-between;padding:var(--space-2) 0;border-bottom:1px solid var(--border)"><span class="text-secondary">Geracao anual</span><strong>7.800 kWh</strong></div>
                <div style="display:flex;justify-content:space-between;padding:var(--space-2) 0;border-bottom:1px solid var(--border)"><span class="text-secondary">Producao 25 anos</span><strong>~180 MWh</strong></div>
                <div style="display:flex;justify-content:space-between;padding:var(--space-2) 0;border-bottom:1px solid var(--border)"><span class="text-secondary">CO₂ evitado/ano</span><strong>~5,2 t</strong></div>
                <div style="display:flex;justify-content:space-between;padding:var(--space-2) 0"><span class="text-secondary">Arvores equiv.</span><strong>~240</strong></div>
              </div>
            </div>
          </div>
          <p class="text-xs text-muted mt-4">Estimativa demonstrativa — os resultados dependem de tarifa, distribuidora, consumo, modalidade, dimensionamento, irradiacao e regras vigentes do SCEE.</p>
        </div>

        <!-- Step 6: Resultado -->
        <div class="wizard-panel hidden" data-panel="6">
          <div class="result-hero">
            <h2>Seu projeto solar estimado</h2>
            <div class="power">5,50 kWp</div>
          </div>
          <div class="result-cards">
            <div class="result-card"><div class="val">650 kWh</div><div class="lbl">Geracao mensal</div></div>
            <div class="result-card"><div class="val">7.800 kWh</div><div class="lbl">Geracao anual</div></div>
            <div class="result-card"><div class="val">${T.formatBRL(480)}</div><div class="lbl">Economia/mes</div></div>
            <div class="result-card"><div class="val">${T.formatBRL(5760)}</div><div class="lbl">Economia/ano</div></div>
            <div class="result-card"><div class="val">4,8 anos</div><div class="lbl">Payback estimado</div></div>
            <div class="result-card"><div class="val">5,2 t/ano</div><div class="lbl">CO₂ evitado</div></div>
            <div class="result-card"><div class="val">10</div><div class="lbl">Modulos</div></div>
            <div class="result-card"><div class="val">26 m²</div><div class="lbl">Area necessaria</div></div>
          </div>

          <div class="chart-container">
            <h3>Geracao × Consumo (12 meses) — dados demonstrativos</h3>
            <div class="bar-chart" id="result-chart-gen">
              ${['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'].map((m, i) => {
                const gen = [680, 620, 650, 600, 550, 520, 540, 580, 620, 670, 690, 700][i];
                const cons = 720;
                const maxVal = 800;
                const genH = (gen / maxVal * 100).toFixed(0);
                const consH = (cons / maxVal * 100).toFixed(0);
                return '<div class="bar-chart-item" style="height:' + genH + '%"><span class="bar-chart-label">' + m + '</span></div>';
              }).join('')}
            </div>
            <div class="text-xs text-muted mt-4">Barras: geracao estimada. Linha tracejada: consumo medio.</div>
          </div>

          <div class="chart-container">
            <h3>Economia acumulada projetada — dados demonstrativos</h3>
            <div class="grid grid-5">
              ${[
                { year: 'Ano 1', val: 5760 },
                { year: 'Ano 5', val: 28800 },
                { year: 'Ano 10', val: 57600 },
                { year: 'Ano 20', val: 115200 },
                { year: 'Ano 25', val: 144000 }
              ].map(e => '<div class="kpi-card"><div class="kpi-value text-solar">' + T.formatBRL(e.val) + '</div><div class="kpi-label">' + e.year + '</div></div>').join('')}
            </div>
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
      title: 'Simulador Solar — 6 Etapas | SolMais',
      description: 'Simule seu sistema solar fotovoltaico em 6 etapas: localizacao, consumo, imovel, objetivo, configuracao e resultado.',
      canonical: '/simulador.html',
      active: 'simulador',
      structuredData: T.renderBreadcrumbSchema(bcItems, store.url),
      content: wizard
    })
  }];
}

module.exports = { render };
