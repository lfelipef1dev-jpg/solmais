/* SolMais — Como funciona + Compensacao + Modalidades GD + Conteudo + Glossario + Projetos + Cases + Sobre + Contato + FAQ */

function render(data, T) {
  const store = data.store;
  const articles = data.articles || [];
  const glossary = data.glossary || [];
  const cases = data.cases || [];
  const pages = [];

  /* ----- Como funciona ----- */
  const howContent = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Como funciona' }])}
    ${T.pageHero('Como Funciona a Energia Solar', 'Sistemas fotovoltaicos convertem luz solar em eletricidade — do painel a compensacao na rede', { icon: T.ICONS.sun })}

    <div class="energy-flow-wrap mb-6">
      <h3 style="text-align:center;color:#e2e8f0;margin-bottom:var(--space-2)">O fluxo energetico completo</h3>
      <p style="text-align:center;color:#94a3b8;margin-bottom:var(--space-4)">Sol -> Paineis -> Inversor -> Imovel <-> Rede</p>
      ${T.energyFlow()}
    </div>

    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-3)">1. Luz solar nos paineis</h3>
      <p class="text-secondary">A luz solar atinge as celulas fotovoltaicas dos modulos. Os fotos excitam eletrons, gerando corrente continua (CC).</p>
    </div>
    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-3)">2. Inversor converte CC em CA</h3>
      <p class="text-secondary">O inversor transforma a corrente continua em corrente alternada (CA), compativel com a rede eletrica e os aparelhos da sua casa.</p>
    </div>
    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-3)">3. Consumo e excedente</h3>
      <p class="text-secondary">A energia gerada e primeiro consumida pelo imovel. O excedente e injetado na rede e compensado conforme as regras vigentes do SCEE.</p>
    </div>
    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-3)">4. Compensacao na conta</h3>
      <p class="text-secondary">A energia injetada vira creditos que abatem o consumo nos periodos em que o sistema nao gera (noite, por exemplo). A compensacao segue as regras da Lei 14.300 e do marco da MMGD.</p>
    </div>

    <div class="visual-section">
      <h3>Quer simular seu sistema?</h3>
      <p>Faca uma simulacao completa em 6 etapas.</p>
      <a href="simulador.html" class="btn btn-primary btn-lg">${T.ICONS.bolt} Iniciar simulacao</a>
    </div>
  </div>
</section>`;

  pages.push({
    filename: 'como-funciona.html', slug: 'como-funciona', noindex: false,
    html: T.renderLayout({
      store, data, title: 'Como Funciona Energia Solar Fotovoltaica',
      description: 'Entenda como funciona a energia solar fotovoltaica: do painel a compensacao na rede. Conheca o processo de geracao de eletricidade a partir da luz solar em 4 etapas.',
      canonical: '/como-funciona.html', active: 'como-funciona',
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Como funciona' }], store.url),
      content: howContent
    })
  });

  /* ----- Compensacao ----- */
  const compContent = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteudo', href: 'conteudo.html' }, { label: 'Compensacao' }])}
    ${T.pageHero('Compensacao de Energia', 'Como funciona o Sistema de Compensacao de Energia Eletrica (SCEE) e os creditos de energia', { icon: T.ICONS.grid })}

    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-4)">Fluxo da compensacao</h3>
      <div class="energy-flow-wrap">
        ${T.energyFlow()}
      </div>
    </div>

    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-3)">O que sao creditos de energia?</h3>
      <p class="text-secondary">Quando o sistema gera mais energia do que o imovel consome, o excedente e injetado na rede de distribuicao. Esse excedente vira creditos que podem ser abatidos do consumo em outros periodos.</p>
    </div>
    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-3)">Validade dos creditos</h3>
      <p class="text-secondary">Conforme as regras atuais, os creditos tem validade de 60 meses. Isso permite acumular geracao do verao para usar no inverno, por exemplo.</p>
    </div>
    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-3)">Marco legal — Lei 14.300</h3>
      <p class="text-secondary">A Lei 14.300/2022 instituiu o marco legal da micro e minigeracao distribuida. Para unidades sujeitas a transicao do art. 27, o percentual previsto para 2026 e de 60% sobre as componentes tarifarias especificadas na lei. A ANEEL atualiza periodicamente suas orientacoes sobre as modalidades vigentes.</p>
    </div>
    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-3)">Importante</h3>
      <p class="text-secondary">Os resultados dependem de tarifa, distribuidora, consumo, modalidade, dimensionamento, irradiacao e regras vigentes do SCEE. Esta pagina e apenas informativa e nao constitui aconselhamento regulatorio.</p>
    </div>
  </div>
</section>`;

  pages.push({
    filename: 'compensacao.html', slug: 'compensacao', noindex: false,
    html: T.renderLayout({
      store, data, title: 'Compensacao de Energia — SCEE',
      description: 'Como funciona o sistema de compensacao de energia eletrica (SCEE), os creditos de energia e o marco legal da microgeracao distribuida (Lei 14.300).',
      canonical: '/compensacao.html', active: 'conteudo',
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteudo', href: 'conteudo.html' }, { label: 'Compensacao' }], store.url),
      content: compContent
    })
  });

  /* ----- Modalidades GD ----- */
  const modContent = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteudo', href: 'conteudo.html' }, { label: 'Modalidades GD' }])}
    ${T.pageHero('Modalidades de Geracao Distribuida', 'A ANEEL reconhece diferentes modalidades de autoconsumo por meio de geracao distribuida', { icon: T.ICONS.bolt })}

    <div class="card mb-6"><h3>Autoconsumo local</h3><p class="text-secondary mt-2">Geracao e consumo na mesma unidade consumidora. A energia produzida e consumida no proprio imovel onde o sistema esta instalado.</p></div>
    <div class="card mb-6"><h3>Autoconsumo remoto</h3><p class="text-secondary mt-2">Geracao em uma unidade e consumo em outra, dentro da mesma area de concessao da distribuidora. Permite instalar paineis em um imovel e abater a conta de outro.</p></div>
    <div class="card mb-6"><h3>Multiplas unidades consumidoras</h3><p class="text-secondary mt-2">Um unico sistema atende a varias unidades do mesmo titular (ex: condominio). A compensacao e distribuida entre as unidades conforme regras especificas.</p></div>
    <div class="card mb-6"><h3>Geracao compartilhada</h3><p class="text-secondary mt-2">Condominios ou grupos de consumidores se unem para investir em um sistema de geracao compartilhada. A energia e os creditos sao distribuidos entre os participantes.</p></div>

    <p class="text-xs text-muted">Conteudo informativo — nao constitui aconselhamento regulatorio. Consulte a ANEEL e a regulamentacao vigente para detalhes.</p>
  </div>
</section>`;

  pages.push({
    filename: 'modalidades-gd.html', slug: 'modalidades-gd', noindex: false,
    html: T.renderLayout({
      store, data, title: 'Modalidades de Geracao Distribuida',
      description: 'Conheca as modalidades de geracao distribuida reconhecidas pela ANEEL: autoconsumo local, remoto, multiplas unidades e geracao compartilhada.',
      canonical: '/modalidades-gd.html', active: 'conteudo',
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteudo', href: 'conteudo.html' }, { label: 'Modalidades GD' }], store.url),
      content: modContent
    })
  });

  /* ----- Glossario ----- */
  const glossContent = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteudo', href: 'conteudo.html' }, { label: 'Glossario' }])}
    ${T.pageHero('Glossario Solar', 'Termos tecnicos do universo fotovoltaico explicados de forma simples', { icon: T.ICONS.doc })}
    <div class="glossary-list">
      ${glossary.map(g => `<div class="glossary-item"><div class="glossary-term">${T.escapeHtml(g.term)}</div><div class="glossary-def">${T.escapeHtml(g.definition)}</div></div>`).join('')}
    </div>
  </div>
</section>`;

  pages.push({
    filename: 'glossario.html', slug: 'glossario', noindex: false,
    html: T.renderLayout({
      store, data, title: 'Glossario Solar — Termos Tecnicos',
      description: 'Glossario solar com termos tecnicos do universo fotovoltaico: kW, kWh, kWp, irradiacao, inversor, string, SCEE, MMGD, compensacao, degradacao e payback.',
      canonical: '/glossario.html', active: 'conteudo',
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteudo', href: 'conteudo.html' }, { label: 'Glossario' }], store.url),
      content: glossContent
    })
  });

  /* ----- Conteudo (lista de artigos) ----- */
  const contContent = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteudo' }])}
    ${T.pageHero('Central de Conhecimento', 'Artigos demonstrativos sobre energia solar', { icon: T.ICONS.doc })}
    <div class="grid grid-3">
      ${articles.map(a => `
      <a href="artigo-${a.slug}.html" class="card" style="text-decoration: none; color: inherit">
        <span class="badge badge-neutral mb-2">${T.escapeHtml(a.category)}</span>
        <h3 style="font-size: var(--fs-base)">${T.escapeHtml(a.title)}</h3>
        <p class="text-sm text-muted mt-2">${T.escapeHtml(a.description)}</p>
        <p class="text-xs text-muted mt-3">${a.readTime} — ${a.date}</p>
      </a>`).join('')}
    </div>
  </div>
</section>`;

  pages.push({
    filename: 'conteudo.html', slug: 'conteudo', noindex: false,
    html: T.renderLayout({
      store, data, title: 'Central de Conhecimento',
      description: 'Central de conhecimento sobre energia solar fotovoltaica. Artigos sobre fundamentos, equipamentos, regulamentacao, dimensionamento e manutencao.',
      canonical: '/conteudo.html', active: 'conteudo',
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteudo' }], store.url),
      content: contContent
    })
  });

  /* ----- Artigos individuais ----- */
  articles.forEach(a => {
    const artContent = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteudo', href: 'conteudo.html' }, { label: a.title }])}
    ${T.pageHero(a.title, a.category + ' — ' + a.readTime, { icon: T.ICONS.doc })}
    <div class="article-meta" style="margin-bottom:var(--space-6)"><span>${a.readTime}</span><span>${a.date}</span></div>
    <div class="article-body"><p>${T.escapeHtml(a.content)}</p></div>
    <div class="visual-section mt-6">
      <h3>Quer simular seu proprio sistema?</h3>
      <a href="simulador.html" class="btn btn-primary btn-lg">${T.ICONS.bolt} Iniciar simulacao</a>
    </div>
  </div>
</section>`;
    pages.push({
      filename: 'artigo-' + a.slug + '.html', slug: 'artigo-' + a.slug, noindex: false,
      html: T.renderLayout({
        store, data, title: a.title, description: a.description,
        canonical: '/artigo-' + a.slug + '.html', active: 'conteudo', ogType: 'article',
        structuredData: [
          T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteudo', href: 'conteudo.html' }, { label: a.title }], store.url),
          {
            '@type': 'Article',
            headline: a.title,
            description: a.description,
            datePublished: a.date,
            dateModified: a.date,
            author: { '@type': 'Organization', name: store.name, url: store.url },
            publisher: { '@type': 'Organization', name: store.name, url: store.url }
          }
        ],
        content: artContent
      })
    });
  });

  /* ----- Projetos (lista de cases) ----- */
  const projContent = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Projetos' }])}
    ${T.pageHero('Projetos Demonstrativos', 'Cases ficticios para ilustrar diferentes perfis de sistema solar', { icon: T.ICONS.panel })}
    <div class="grid grid-3">
      ${cases.map(c => `
      <a href="projeto-${c.slug}.html" style="text-decoration:none;color:inherit">
      <div class="case-hero" style="min-height:240px;border-radius:16px;overflow:hidden;margin-bottom:var(--space-3)">
        ${T.caseHero(c.type, { title: c.title, power: c.power + ' kWp', modules: c.panels + ' mod', annual: T.formatKWh(c.annualGeneration) + '/ano', id: 'list-' + c.slug })}
      </div>
      </a>
        <div class="case-card-header" style="margin-top: var(--space-4)"><div><h3>${T.escapeHtml(c.title)}</h3><p class="text-xs text-muted">${T.escapeHtml(c.location)} — ${T.escapeHtml(c.type)}</p></div></div>
        <div class="case-card-stats">
          <div class="case-stat"><div class="val">${c.power} kWp</div><div class="lbl">Potencia</div></div>
          <div class="case-stat"><div class="val">${c.panels}</div><div class="lbl">Modulos</div></div>
          <div class="case-stat"><div class="val">${T.formatKWh(c.annualGeneration)}</div><div class="lbl">Geracao/ano</div></div>
          <div class="case-stat"><div class="val">${T.formatBRL(c.monthlySavings)}</div><div class="lbl">Economia/mes</div></div>
        </div>
        <p class="text-sm text-secondary">${T.escapeHtml(c.description)}</p>
        <a href="projeto-${c.slug}.html" class="btn btn-secondary btn-sm">Ver detalhes ${T.ICONS.arrow}</a>
      </div>`).join('')}
    </div>
  </div>
</section>`;

  pages.push({
    filename: 'projetos.html', slug: 'projetos', noindex: false,
    html: T.renderLayout({
      store, data, title: 'Projetos Demonstrativos',
      description: 'Cases demonstrativos de sistemas solares fotovoltaicos: residencial, comercial, condominio e rural. Veja potencia, modulos, geracao e payback de cada projeto.',
      canonical: '/projetos.html', active: 'projetos',
      ogImage: store.url.replace(/\/$/, '') + '/img/og/projetos.svg',
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Projetos' }], store.url),
      content: projContent
    })
  });

  /* ----- Cases individuais ----- */
  cases.forEach(c => {
    // Geracao mensal estimada para o grafico
    const monthlyGen = Array(12).fill(0).map((_, i) => Math.round(c.annualGeneration / 12 * (0.85 + Math.sin(i / 12 * Math.PI * 2) * 0.15)));
    const monthLabels = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

    const caseContent = `
    <!-- HERO FULL-WIDTH -->
    ${T.caseHero(c.type, { title: c.title, power: c.power + ' kWp', modules: c.panels + ' modulos', annual: T.formatKWh(c.annualGeneration) + '/ano', id: 'hero-' + c.slug })}

    <section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Projetos', href: 'projetos.html' }, { label: c.title }])}

    <!-- VISAO GERAL -->
    <div class="editorial-grid" style="margin:var(--space-8) 0">
      <div class="editorial-text">
        <span class="cinematic-hero-eyebrow">Visao geral</span>
        <h2 style="font-family:'Sora',sans-serif;font-size:var(--fs-2xl);font-weight:700;margin:var(--space-3) 0 var(--space-4)">${T.escapeHtml(c.title)}</h2>
        <p style="font-size:var(--fs-lg);color:var(--sm-text-soft);line-height:1.6;margin-bottom:var(--space-3)">${T.escapeHtml(c.description)}</p>
        <p class="text-sm text-muted">Instalado em ${c.installedAt} — ${T.escapeHtml(c.location)} — ${T.escapeHtml(c.type)} — ${T.escapeHtml(c.roofType)}</p>
      </div>
      <div class="grid grid-2">
        <div class="kpi-premium"><div class="kpi-value">${c.power}</div><div class="kpi-label">kWp</div></div>
        <div class="kpi-premium"><div class="kpi-value">${c.panels}</div><div class="kpi-label">Modulos</div></div>
        <div class="kpi-premium"><div class="kpi-value">${c.inverter}</div><div class="kpi-label">Inversor</div></div>
        <div class="kpi-premium"><div class="kpi-value">${c.area} m²</div><div class="kpi-label">Area</div></div>
        <div class="kpi-premium"><div class="kpi-value">${T.formatKWh(c.annualGeneration)}</div><div class="kpi-label">Geracao/ano</div></div>
        <div class="kpi-premium"><div class="kpi-value" style="color:var(--sm-amber)">${T.formatBRL(c.monthlySavings)}</div><div class="kpi-label">Economia/mes</div></div>
      </div>
    </div>

    <!-- PROJETO: DIGITAL TWIN -->
    <div style="margin:var(--space-8) 0">
      <span class="cinematic-hero-eyebrow">Projeto</span>
      <h2 style="font-family:'Sora',sans-serif;font-size:var(--fs-2xl);font-weight:700;margin:var(--space-3) 0 var(--space-4)">Digital Twin</h2>
      <div class="digital-twin-wrap">
        ${T.digitalTwin({ width: 700, height: 450, panels: c.panels, showFlow: true, generating: true, id: 'case-' + c.slug, theme: 'dark' })}
      </div>
    </div>

    <!-- LAYOUT: ROOF CAD -->
    <div class="editorial-grid" style="margin:var(--space-8) 0;align-items:start">
      <div>
        <span class="cinematic-hero-eyebrow">Layout</span>
        <h2 style="font-family:'Sora',sans-serif;font-size:var(--fs-2xl);font-weight:700;margin:var(--space-3) 0 var(--space-4)">Telhado — top view</h2>
        <p style="font-size:var(--fs-lg);color:var(--sm-text-soft);line-height:1.6;margin-bottom:var(--space-4)">Distribuicao dos ${c.panels} modulos com orientacao ${c.orientation || 'norte'} e area de ${c.area} m².</p>
        <div class="grid grid-2">
          <div class="kpi-premium"><div class="kpi-value" style="font-size:var(--fs-lg)">${c.area} m²</div><div class="kpi-label">Area utilizada</div></div>
          <div class="kpi-premium"><div class="kpi-value" style="font-size:var(--fs-lg)">${c.orientation || 'Norte'}</div><div class="kpi-label">Orientacao</div></div>
        </div>
      </div>
      <div class="roof-cad-wrap">
        ${T.roofCAD({ panels: c.panels, panelCols: Math.ceil(c.panels/2), id: 'case-roof-' + c.slug, areaUsed: c.area + ' m²' })}
      </div>
    </div>

    <!-- PERFORMANCE -->
    <div style="margin:var(--space-8) 0">
      <span class="cinematic-hero-eyebrow">Performance</span>
      <h2 style="font-family:'Sora',sans-serif;font-size:var(--fs-2xl);font-weight:700;margin:var(--space-3) 0 var(--space-4)">Geracao mensal estimada</h2>
      <div class="chart-premium">
        ${T.areaChart(monthlyGen, { width: 700, height: 240, color: '#f59e0b', labels: monthLabels, id: 'case-' + c.slug, label: 'kWh/mes' })}
      </div>
    </div>

    <!-- GALERIA: EQUIPAMENTOS -->
    <div style="margin:var(--space-8) 0">
      <span class="cinematic-hero-eyebrow">Galeria</span>
      <h2 style="font-family:'Sora',sans-serif;font-size:var(--fs-2xl);font-weight:700;margin:var(--space-3) 0 var(--space-4)">Equipamentos</h2>
      <div class="grid grid-3">
        <div class="equipment-card">
          ${T.equipmentRender('module', { id: 'case-eq-mod-' + c.slug })}
          <div class="equipment-card-body"><div class="equipment-card-name">SolMais Module 550</div><div class="equipment-card-spec">550 Wp × ${c.panels}</div></div>
        </div>
        <div class="equipment-card">
          ${T.equipmentRender('inverter', { id: 'case-eq-inv-' + c.slug })}
          <div class="equipment-card-body"><div class="equipment-card-name">SolMais Inverter ${c.inverter}</div><div class="equipment-card-spec">${c.inverter} string</div></div>
        </div>
        <div class="equipment-card">
          ${T.equipmentRender('protection', { id: 'case-eq-prot-' + c.slug })}
          <div class="equipment-card-body"><div class="equipment-card-name">SolMais Protection Box</div><div class="equipment-card-spec">DPS + Disjuntor</div></div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="visual-section" style="margin:var(--space-8) 0">
      <h3>Quer um projeto como este?</h3>
      <p>Faca uma simulacao completa.</p>
      <a href="simulador.html" class="btn btn-primary btn-lg">${T.ICONS.bolt} Simular sistema</a>
    </div>

    <p class="text-xs text-muted text-center" style="margin-bottom:var(--space-8)">Projeto ficticio para demonstracao da plataforma — todos os dados sao inventados</p>
  </div>
</section>`;
    pages.push({
      filename: 'projeto-' + c.slug + '.html', slug: 'projeto-' + c.slug, noindex: false,
      html: T.renderLayout({
        store, data, title: c.title, description: c.description,
        canonical: '/projeto-' + c.slug + '.html', active: 'projetos',
        structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Projetos', href: 'projetos.html' }, { label: c.title }], store.url),
        content: caseContent
      })
    });
  });

  /* ----- Sobre ----- */
  const aboutContent = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Sobre' }])}
    ${T.pageHero('Sobre o SolMais', 'Plataforma digital end-to-end para energia solar fotovoltaica — da simulacao ao monitoramento', { icon: T.ICONS.sun })}

    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-3)">O que e</h3>
      <p class="text-secondary">SolMais e uma plataforma demonstrativa que cobre todo o ciclo de aquisicao, implantacao e gestao de energia solar: simulacao, projeto, acompanhamento, monitoramento, documentos, suporte e administracao.</p>
    </div>
    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-3)">Para quem</h3>
      <p class="text-secondary">Para quem quer entender como funciona uma operacao solar completa — do primeiro contato ao monitoramento em producao. Para empresas do setor que precisam de uma plataforma digital para sua operacao.</p>
    </div>
    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-3)">Caracteristicas</h3>
      <ul style="padding-left: var(--space-5); list-style: disc; color: var(--text-secondary)">
        <li>Simulador em 6 etapas com resultado visual</li>
        <li>Projeto tecnico com diagrama e layout do telhado</li>
        <li>Comparador de sistemas e cenarios financeiros</li>
        <li>Portal do cliente com 8 secoes</li>
        <li>Dashboard de monitoramento energetico</li>
        <li>Timeline de implantacao</li>
        <li>Central de documentos e suporte</li>
        <li>Admin operacional com pipeline, frota e alertas</li>
        <li>Conteudo educativo e glossario</li>
      </ul>
    </div>
    <div class="card card-glow">
      <h3 style="margin-bottom: var(--space-3)">Importante</h3>
      <p class="text-secondary">${T.escapeHtml(store.demoNotice)}</p>
    </div>
  </div>
</section>`;

  pages.push({
    filename: 'sobre.html', slug: 'sobre', noindex: false,
    html: T.renderLayout({
      store, data, title: 'Sobre o SolMais | Plataforma Solar',
      description: 'SolMais e uma plataforma digital end-to-end para energia solar: simulacao, projeto, implantacao, monitoramento, documentos, suporte e administracao.',
      canonical: '/sobre.html', active: 'sobre',
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Sobre' }], store.url),
      content: aboutContent
    })
  });

  /* ----- Contato ----- */
  const contactContent = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Contato' }])}
    ${T.pageHero('Contato', 'Plataforma demonstrativa — nao atendemos clientes reais', { icon: T.ICONS.support })}
    <div class="card mb-6">
      <div class="grid grid-2">
        <div class="field"><label class="label">Nome</label><input type="text" class="input" placeholder="Seu nome"></div>
        <div class="field"><label class="label">Email</label><input type="email" class="input" placeholder="seu@email.com"></div>
      </div>
      <div class="field"><label class="label">Assunto</label><input type="text" class="input" placeholder="Assunto"></div>
      <div class="field"><label class="label">Mensagem</label><textarea class="textarea" placeholder="Sua mensagem"></textarea></div>
      <button class="btn btn-primary" onclick="SolMais.toast('Formulario demonstrativo — mensagens nao sao enviadas', 'info')">Enviar mensagem</button>
    </div>
    <div class="card">
      <p class="text-sm text-secondary">Esta e uma plataforma demonstrativa. Nao coletamos dados nem atendemos clientes reais. Use o simulador para explorar a experiencia completa.</p>
    </div>
  </div>
</section>`;

  pages.push({
    filename: 'contato.html', slug: 'contato', noindex: true,
    html: T.renderLayout({
      store, data, title: 'Contato', description: 'Entre em contato com a plataforma demonstrativa SolMais. Formulario de contato disponivel. Plataforma demo: nao atendemos clientes reais nem coletamos dados.',
      canonical: '/contato.html', active: '', noindex: true,
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Contato' }], store.url),
      content: contactContent
    })
  });

  /* ----- FAQ ----- */
  const faqContent = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'FAQ' }])}
    ${T.pageHero('Perguntas Frequentes', 'Duvidas comuns sobre energia solar fotovoltaica', { icon: T.ICONS.support })}
    <div class="card mb-4"><h3>Quanto posso economizar?</h3><p class="text-secondary mt-2">Sistemas fotovoltaicos podem reduzir significativamente a energia faturada da rede, mas o resultado depende do perfil de consumo, dimensionamento, tarifa, distribuidora e regras aplicaveis.</p></div>
    <div class="card mb-4"><h3>Quanto tempo leva a homologacao?</h3><p class="text-secondary mt-2">Os prazos variam conforme distribuidora, caracteristicas do projeto e etapas de conexao previstas na regulamentacao vigem. Nao prometemos prazo universal.</p></div>
    <div class="card mb-4"><h3>Qual a garantia dos paineis?</h3><p class="text-secondary mt-2">Garantias variam conforme fabricante, modelo e componente. Os periodos apresentados nesta demonstracao sao ilustrativos.</p></div>
    <div class="card mb-4"><h3>Funciona em dias nublados?</h3><p class="text-secondary mt-2">Sim. Paineis fotovoltaicos geram eletricidade com luz difusa, nao apenas com sol direto. A geracao reduz, mas nao para.</p></div>
    <div class="card mb-4"><h3>Os dados sao reais?</h3><p class="text-secondary mt-2">Nao. Todos os clientes, sistemas, projetos, metricas, valores e documentos sao ficticios e claramente identificados como demonstrativos.</p></div>
  </div>
</section>`;

  pages.push({
    filename: 'faq.html', slug: 'faq', noindex: false,
    html: T.renderLayout({
      store, data, title: 'FAQ — Perguntas Frequentes',
      description: 'Perguntas frequentes sobre energia solar: quanto economizar, tempo de homologacao, garantia dos paineis, dias nublados e compensacao de energia.',
      canonical: '/faq.html', active: '',
      structuredData: [
        T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'FAQ' }], store.url)
      ],
      content: faqContent
    })
  });

  return pages;
}

module.exports = { render };
