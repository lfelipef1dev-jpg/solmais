/* SolMais — Home page renderer
   Hero + simulacao rapida + features + como funciona + cases + CTA */

function render(data, T) {
  const store = data.store;
  const systems = data.systems || [];
  const cases = data.cases || [];

  const heroSection = `<section class="hero">
  <div class="container hero-inner">
    <div class="hero-content">
      <h1>Energia solar <span>calculada</span> para a sua realidade</h1>
      <p>Simule seu sistema, visualize geracao e economia estimadas e acompanhe cada etapa do projeto — da analise ao monitoramento.</p>
      <div class="hero-cta">
        <a href="simulador.html" class="btn btn-primary btn-lg">${T.ICONS.bolt} Simular meu sistema</a>
        <a href="monitoramento.html" class="btn btn-secondary btn-lg">${T.ICONS.chart} Explorar demonstracao</a>
      </div>
    </div>
    <div class="quick-sim">
      <h3>${T.ICONS.sun} Simulacao rapida</h3>
      <div class="field">
        <label class="label">Minha conta media</label>
        <input type="number" class="input" id="qs-bill" placeholder="R$ 650" value="650">
      </div>
      <div class="field">
        <label class="label">Minha cidade</label>
        <select class="select" id="qs-city">
          <option value="santos">Santos/SP</option>
          <option value="saovicente">Sao Vicente/SP</option>
          <option value="praiagrande">Praia Grande/SP</option>
          <option value="guaruja">Guaruja/SP</option>
          <option value="cubatao">Cubatao/SP</option>
        </select>
      </div>
      <div class="field">
        <label class="label">Tipo de imovel</label>
        <select class="select" id="qs-type">
          <option value="residencial">Residencial</option>
          <option value="comercial">Comercial</option>
          <option value="condominio">Condominio</option>
          <option value="rural">Rural</option>
        </select>
      </div>
      <button class="btn btn-primary btn-block" onclick="SolMais.quickSim()">${T.ICONS.bolt} Calcular potencial solar</button>
      <div class="quick-sim-result hidden" id="qs-result">
        <div class="quick-sim-stat"><div class="val" id="qs-power">5,5 kWp</div><div class="lbl">Sistema estimado</div></div>
        <div class="quick-sim-stat"><div class="val" id="qs-gen">650 kWh</div><div class="lbl">Geracao/mes</div></div>
        <div class="quick-sim-stat"><div class="val" id="qs-save">R$ 480</div><div class="lbl">Economia/mes</div></div>
        <div class="quick-sim-stat"><div class="val" id="qs-payback">4,8 anos</div><div class="lbl">Payback estimado</div></div>
        <a href="simulador.html" class="btn btn-secondary btn-block mt-4">Fazer simulacao completa ${T.ICONS.arrow}</a>
      </div>
      <p class="text-xs text-muted mt-4 text-center">Estimativa demonstrativa — dados ficticios</p>
    </div>
  </div>
</section>`;

  const featuresSection = `<section class="section">
  <div class="container">
    <div class="section-header">
      <h2>Simular. Projetar. Acompanhar. Monitorar.</h2>
      <p>Quatro experiencias integradas em uma plataforma end-to-end</p>
    </div>
    <div class="grid grid-4">
      <div class="card card-glow">
        <div class="kpi-card-icon solar">${T.ICONS.bolt}</div>
        <h3>Simular</h3>
        <p class="text-sm text-secondary">Wizard de 6 etapas com localizacao, consumo, telhado e objetivo. Resultado com kWp, geracao e payback.</p>
        <a href="simulador.html" class="btn btn-ghost btn-sm mt-4">Iniciar simulacao ${T.ICONS.arrow}</a>
      </div>
      <div class="card">
        <div class="kpi-card-icon info">${T.ICONS.panel}</div>
        <h3>Projetar</h3>
        <p class="text-sm text-secondary">Projeto tecnico com diagrama energetico, layout do telhado, dimensionamento e documentos.</p>
        <a href="projeto.html" class="btn btn-ghost btn-sm mt-4">Ver projeto demo ${T.ICONS.arrow}</a>
      </div>
      <div class="card">
        <div class="kpi-card-icon warn">${T.ICONS.clock}</div>
        <h3>Acompanhar</h3>
        <p class="text-sm text-secondary">Timeline de implantacao: simulacao, analise, projeto, documentacao, instalacao e conexao.</p>
        <a href="conta.html" class="btn btn-ghost btn-sm mt-4">Portal do cliente ${T.ICONS.arrow}</a>
      </div>
      <div class="card">
        <div class="kpi-card-icon gen">${T.ICONS.chart}</div>
        <h3>Monitorar</h3>
        <p class="text-sm text-secondary">Dashboard energetico em tempo real: geracao atual, graficos diarios e mensais, status do sistema.</p>
        <a href="monitoramento.html" class="btn btn-ghost btn-sm mt-4">Ver monitoramento ${T.ICONS.arrow}</a>
      </div>
    </div>
  </div>
</section>`;

  const casesSection = `<section class="section">
  <div class="container">
    <div class="section-header">
      <h2>Projetos demonstrativos</h2>
      <p>Exemplos ficticios de sistemas dimensionados para diferentes perfis</p>
    </div>
    <div class="grid grid-3">
      ${cases.slice(0, 3).map(c => `
      <div class="case-card">
        <div class="case-card-header">
          <div>
            <h3>${T.escapeHtml(c.title)}</h3>
            <p class="text-xs text-muted">${T.escapeHtml(c.location)} &middot; ${T.escapeHtml(c.type)}</p>
          </div>
          <span class="demo-badge">DEMO</span>
        </div>
        <div class="case-card-stats">
          <div class="case-stat"><div class="val">${c.power} kWp</div><div class="lbl">Potencia</div></div>
          <div class="case-stat"><div class="val">${c.panels}</div><div class="lbl">Modulos</div></div>
          <div class="case-stat"><div class="val">${T.formatKWh(c.annualGeneration)}</div><div class="lbl">Geracao/ano</div></div>
          <div class="case-stat"><div class="val">${T.formatBRL(c.monthlySavings)}</div><div class="lbl">Economia/mes</div></div>
        </div>
        <a href="projeto-${c.slug}.html" class="btn btn-secondary btn-sm">Ver detalhes ${T.ICONS.arrow}</a>
      </div>`).join('')}
    </div>
    <div class="text-center mt-6">
      <a href="projetos.html" class="btn btn-secondary">Ver todos os projetos ${T.ICONS.arrow}</a>
    </div>
  </div>
</section>`;

  const ctaSection = `<section class="section">
  <div class="container">
    <div class="card card-elevated card-glow text-center" style="padding: var(--space-10) var(--space-6)">
      <h2 style="font-size: var(--fs-3xl); margin-bottom: var(--space-3)">Pronto para simular?</h2>
      <p class="text-lg text-secondary mb-6" style="max-width: 500px; margin: 0 auto var(--space-6)">Faca uma simulacao completa em 6 etapas e veja o resultado com graficos, comparador e cenarios financeiros.</p>
      <a href="simulador.html" class="btn btn-primary btn-lg">${T.ICONS.bolt} Iniciar simulacao</a>
      <p class="text-xs text-muted mt-4">Plataforma demonstrativa — todos os dados sao ficticios</p>
    </div>
  </div>
</section>`;

  const content = heroSection + featuresSection + casesSection + ctaSection;

  const orgSchema = T.renderOrganizationSchema(store);
  const siteSchema = T.renderWebSiteSchema(store);
  const graphSchema = T.renderGraphSchema([orgSchema, siteSchema], store);

  return [{
    filename: 'index.html',
    slug: 'index',
    noindex: false,
    html: T.renderLayout({
      store,
      data,
      title: 'Energia Solar: Simulador e Monitoramento',
      description: 'Plataforma digital de energia solar fotovoltaica. Simule seu sistema em 6 etapas, veja geracao e economia estimadas e acompanhe o projeto ate o monitoramento.',
      canonical: '/',
      active: 'index',
      structuredData: graphSchema,
      preload: 'img/hero-solar-mobile.jpg',
      content
    })
  }];
}

module.exports = { render };
