/* SolMais — Home 3.0
   CINEMATIC HERO com Digital Twin + widgets integrados
   Secoes editoriais (nao cardizadas) + cases premium */

function render(data, T) {
  const store = data.store;
  const systems = data.systems || [];
  const cases = data.cases || [];

  /* === HERO CINEMATOGRAFICO === */
  const heroSection = T.cinematicHero({
    title: 'Energia solar sem complicacao',
    subtitle: 'Simule, projete, acompanhe e monitore seu sistema fotovoltaico em uma plataforma unica.',
    cta: 'Iniciar simulacao',
    ctaHref: 'simulador.html',
    secondaryCta: 'Ver projetos',
    secondaryHref: 'projetos.html'
  });

  /* === SIMULACAO RAPIDA (editorial, sem card) === */
  const quickSimSection = `<section class="section" style="padding-top: var(--space-10)">
  <div class="container">
    <div class="editorial-grid">
      <div class="editorial-text">
        <span class="cinematic-hero-eyebrow">Simulacao rapida</span>
        <h2 style="font-family:'Sora',sans-serif;font-size:var(--fs-2xl);font-weight:700;margin-bottom:var(--space-3)">Descubra seu potencial solar em 10 segundos</h2>
        <p style="font-size:var(--fs-lg);color:var(--sm-text-soft);line-height:1.6;margin-bottom:var(--space-5)">Informe sua conta media e tipo de imovel. O algoritmo estima potencia, geracao mensal, economia e payback.</p>
        <div class="field mb-3">
          <label class="label">Minha conta media</label>
          <input type="number" class="input" id="qs-bill" placeholder="R$ 650" value="650">
        </div>
        <div class="field mb-4">
          <label class="label">Tipo de imovel</label>
          <select class="select" id="qs-type">
            <option value="residencial">Residencial</option>
            <option value="comercial">Comercial</option>
            <option value="condominio">Condominio</option>
            <option value="rural">Rural</option>
          </select>
        </div>
        <button class="btn btn-primary btn-lg" onclick="SolMais.quickSim()">${T.ICONS.bolt} Calcular potencial solar</button>
        <div class="quick-sim-result hidden" id="qs-result" style="margin-top:var(--space-5)">
          <div class="grid grid-4">
            <div><div class="big-number big-number-amber" id="qs-power">5,5<span class="big-number-unit">kWp</span></div><div class="big-number-label">Sistema</div></div>
            <div><div class="big-number big-number-light" id="qs-gen">650<span class="big-number-unit">kWh</span></div><div class="big-number-label">Geracao/mes</div></div>
            <div><div class="big-number big-number-green" id="qs-save">R$ 480</div><div class="big-number-label">Economia/mes</div></div>
            <div><div class="big-number big-number-light" id="qs-payback">4,8<span class="big-number-unit">anos</span></div><div class="big-number-label">Payback</div></div>
          </div>
          <a href="simulador.html" class="btn btn-secondary btn-block mt-4">Fazer simulacao completa ${T.ICONS.arrow}</a>
        </div>
        <p class="text-xs text-muted mt-4">Estimativa demonstrativa — dados ficticios</p>
      </div>
      <div class="digital-twin-wrap">
        ${T.digitalTwin({ width: 500, height: 400, panels: 10, showFlow: true, generating: true, id: 'home-quick', theme: 'dark' })}
      </div>
    </div>
  </div>
</section>`;

  /* === COMO FUNCIONA (fluxo energetico editorial) === */
  const flowSection = `<section class="section">
  <div class="container">
    <div style="text-align:center;margin-bottom:var(--space-8)">
      <span class="cinematic-hero-eyebrow">Como funciona</span>
      <h2 style="font-family:'Sora',sans-serif;font-size:var(--fs-2xl);font-weight:700;margin-top:var(--space-3)">Do sol a sua conta de luz</h2>
      <p style="font-size:var(--fs-lg);color:var(--sm-text-soft);max-width:500px;margin:var(--space-2) auto 0">O fluxo energetico completo — sol, paineis, inversor, imovel e rede</p>
    </div>
    <div style="max-width:700px;margin:0 auto var(--space-8)">
      ${T.energyFlow()}
    </div>
    <div class="grid grid-4">
      <div class="kpi-premium">
        <div class="kpi-icon-wrap solar">${T.ICONS.sun}</div>
        <h4 style="margin-bottom:var(--space-2)">Sol</h4>
        <p class="text-sm text-muted">Luz solar atinge os modulos fotovoltaicos</p>
      </div>
      <div class="kpi-premium">
        <div class="kpi-icon-wrap info">${T.ICONS.panel}</div>
        <h4 style="margin-bottom:var(--space-2)">Paineis</h4>
        <p class="text-sm text-muted">Convertem luz em corrente continua (CC)</p>
      </div>
      <div class="kpi-premium">
        <div class="kpi-icon-wrap gen">${T.ICONS.bolt}</div>
        <h4 style="margin-bottom:var(--space-2)">Inversor</h4>
        <p class="text-sm text-muted">Transforma CC em corrente alternada (CA)</p>
      </div>
      <div class="kpi-premium">
        <div class="kpi-icon-wrap warn">${T.ICONS.home}</div>
        <h4 style="margin-bottom:var(--space-2)">Imovel</h4>
        <p class="text-sm text-muted">Consome e excedente vai para a rede</p>
      </div>
    </div>
    <div class="text-center mt-6">
      <a href="como-funciona.html" class="btn btn-secondary">Entenda o processo completo ${T.ICONS.arrow}</a>
    </div>
  </div>
</section>`;

  /* === 4 PRODUTOS (editorial, nao cardizado) === */
  const featuresSection = `<section class="section">
  <div class="container">
    <div style="text-align:center;margin-bottom:var(--space-8)">
      <span class="cinematic-hero-eyebrow">Plataforma end-to-end</span>
      <h2 style="font-family:'Sora',sans-serif;font-size:var(--fs-2xl);font-weight:700;margin-top:var(--space-3)">Simular. Projetar. Acompanhar. Monitorar.</h2>
      <p style="font-size:var(--fs-lg);color:var(--sm-text-soft);max-width:500px;margin:var(--space-2) auto 0">Quatro experiencias integradas em uma plataforma unica</p>
    </div>
    <div class="grid grid-4">
      <div class="kpi-premium">
        <div class="kpi-icon-wrap solar">${T.ICONS.bolt}</div>
        <h3 style="font-family:'Sora',sans-serif;font-size:var(--fs-lg);margin-bottom:var(--space-2)">Simular</h3>
        <p class="text-sm text-muted mb-4">Wizard de 6 etapas com localizacao, consumo, telhado e objetivo. Resultado com kWp, geracao e payback.</p>
        <a href="simulador.html" class="btn btn-ghost btn-sm">Iniciar simulacao ${T.ICONS.arrow}</a>
      </div>
      <div class="kpi-premium">
        <div class="kpi-icon-wrap info">${T.ICONS.panel}</div>
        <h3 style="font-family:'Sora',sans-serif;font-size:var(--fs-lg);margin-bottom:var(--space-2)">Projetar</h3>
        <p class="text-sm text-muted mb-4">Projeto tecnico com diagrama energetico, layout do telhado, dimensionamento e documentos.</p>
        <a href="projeto.html" class="btn btn-ghost btn-sm">Ver projeto demo ${T.ICONS.arrow}</a>
      </div>
      <div class="kpi-premium">
        <div class="kpi-icon-wrap warn">${T.ICONS.clock}</div>
        <h3 style="font-family:'Sora',sans-serif;font-size:var(--fs-lg);margin-bottom:var(--space-2)">Acompanhar</h3>
        <p class="text-sm text-muted mb-4">Timeline de implantacao: simulacao, analise, projeto, documentacao, instalacao e conexao.</p>
        <a href="conta.html" class="btn btn-ghost btn-sm">Portal do cliente ${T.ICONS.arrow}</a>
      </div>
      <div class="kpi-premium">
        <div class="kpi-icon-wrap gen">${T.ICONS.chart}</div>
        <h3 style="font-family:'Sora',sans-serif;font-size:var(--fs-lg);margin-bottom:var(--space-2)">Monitorar</h3>
        <p class="text-sm text-muted mb-4">Dashboard energetico em tempo real: geracao atual, graficos diarios e mensais, status do sistema.</p>
        <a href="monitoramento.html" class="btn btn-ghost btn-sm">Ver monitoramento ${T.ICONS.arrow}</a>
      </div>
    </div>
  </div>
</section>`;

  /* === CASES PREMIUM === */
  const casesSection = `<section class="section">
  <div class="container">
    <div style="text-align:center;margin-bottom:var(--space-8)">
      <span class="cinematic-hero-eyebrow">Projetos demonstrativos</span>
      <h2 style="font-family:'Sora',sans-serif;font-size:var(--fs-2xl);font-weight:700;margin-top:var(--space-3)">Sistemas dimensionados para diferentes perfis</h2>
      <p style="font-size:var(--fs-lg);color:var(--sm-text-soft);max-width:500px;margin:var(--space-2) auto 0">Exemplos ficticios com hero arquitetonico exclusivo por tipo</p>
    </div>
    <div class="grid grid-3">
      ${cases.slice(0, 3).map(c => `
      <a href="projeto-${c.slug}.html" style="text-decoration:none;color:inherit">
        <div class="case-hero" style="min-height:280px;border-radius:16px;overflow:hidden;margin-bottom:var(--space-4)">
          ${T.caseHero(c.type, { title: c.title, power: c.power + ' kWp', modules: c.panels + ' modulos', annual: T.formatKWh(c.annualGeneration) + '/ano', id: 'home-' + c.slug })}
        </div>
      </a>`).join('')}
    </div>
    <div class="text-center mt-6">
      <a href="projetos.html" class="btn btn-secondary">Ver todos os projetos ${T.ICONS.arrow}</a>
    </div>
  </div>
</section>`;

  /* === CTA === */
  const ctaSection = `<section class="section">
  <div class="container">
    <div class="visual-section">
      <h2 style="font-size: var(--fs-3xl); color: #e2e8f0; margin-bottom: var(--space-3)">Pronto para simular?</h2>
      <p style="font-size: var(--fs-lg); color: #94a3b8; max-width: 500px; margin: 0 auto var(--space-6)">Faca uma simulacao completa em 6 etapas e veja o resultado com graficos, comparador e cenarios financeiros.</p>
      <a href="simulador.html" class="btn btn-primary btn-lg">${T.ICONS.bolt} Iniciar simulacao</a>
      <p class="text-xs text-muted mt-4">Plataforma demonstrativa — todos os dados sao ficticios</p>
    </div>
  </div>
</section>`;

  const content = heroSection + quickSimSection + flowSection + featuresSection + casesSection + ctaSection;

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
      ogImage: store.url.replace(/\/$/, '') + '/img/og/home.svg',
      content
    })
  }];
}

module.exports = { render };
