/* SolMais — Como funciona + compensação + Modalidades GD + Conteúdo + Glossario + Projetos + Cases + Sobre + Contato + FAQ */

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
    ${T.pageHero('Como Funciona a Energia Solar', 'Sistemas fotovoltaicos convertem luz solar em eletricidade — do painel a compensação na rede', { icon: T.ICONS.sun })}

    <div class="energy-flow-wrap mb-6">
      <h2 style="text-align:center;color:#e2e8f0;margin-bottom:var(--space-2)">O fluxo energético completo</h2>
      <p style="text-align:center;color:#94a3b8;margin-bottom:var(--space-4)">Sol -> Módulos fotovoltaicos -> Inversor -> Imóvel <-> Rede</p>
      ${T.energyFlow()}
    </div>

    <div class="card mb-6">
      <h2 style="margin-bottom: var(--space-3)">1. Luz solar nos módulos fotovoltaicos</h2>
      <p class="text-secondary">A luz solar atinge as células fotovoltaicas dos módulos. Os fótons excitam elétrons, gerando corrente contínua (CC).</p>
    </div>
    <div class="card mb-6">
      <h2 style="margin-bottom: var(--space-3)">2. Inversor converte CC em CA</h2>
      <p class="text-secondary">O inversor transforma a corrente contínua em corrente alternada (CA), compatível com a rede elétrica e os aparelhos da sua casa.</p>
    </div>
    <div class="card mb-6">
      <h2 style="margin-bottom: var(--space-3)">3. Consumo e excedente</h2>
      <p class="text-secondary">A energia gerada é primeiro consumida pelo imóvel. O excedente é injetado na rede e compensado conforme as regras vigentes do SCEE.</p>
    </div>
    <div class="card mb-6">
      <h2 style="margin-bottom: var(--space-3)">4. compensação na conta</h2>
      <p class="text-secondary">A energia injetada vira créditos que abatem o consumo nos períodos em que o sistema não gera (noite, por exemplo). A compensação segue as regras da Lei 14.300 e do marco da MMGD.</p>
    </div>

    <div class="visual-section">
      <h2>Quer simular seu sistema?</h2>
      <p>Faça uma simulação completa em 6 etapas.</p>
      <a href="simulador.html" class="btn btn-primary btn-lg">${T.ICONS.bolt} Iniciar simulação</a>
    </div>
  </div>
</section>`;

  pages.push({
    filename: 'como-funciona.html', slug: 'como-funciona', noindex: false,
    html: T.renderLayout({
      store, data, title: 'Como Funciona Energia Solar Fotovoltaica',
      description: 'Entenda como funciona a energia solar fotovoltaica: do painel a compensação na rede. Conheca o processo de geração de eletricidade a partir da luz solar em 4 etapas.',
      canonical: '/como-funciona.html', active: 'como-funciona',
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Como funciona' }], store.url),
      content: howContent
    })
  });

  /* ----- compensação ----- */
  const compContent = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteúdo', href: 'conteudo.html' }, { label: 'compensação' }])}
    ${T.pageHero('compensação de Energia', 'Como funciona o Sistema de compensação de Energia Elétrica (SCEE) e os créditos de energia', { icon: T.ICONS.grid })}

    <div class="card mb-6">
      <h2 style="margin-bottom: var(--space-4)">Fluxo da compensação</h2>
      <div class="energy-flow-wrap">
        ${T.energyFlow()}
      </div>
    </div>

    <div class="card mb-6">
      <h2 style="margin-bottom: var(--space-3)">O que são créditos de energia?</h2>
      <p class="text-secondary">Quando o sistema gera mais energia do que o imóvel consome, o excedente e injetado na rede de distribuição. Esse excedente vira créditos que podem ser abatidos do consumo em outros períodos.</p>
    </div>
    <div class="card mb-6">
      <h2 style="margin-bottom: var(--space-3)">Validade dos créditos</h2>
      <p class="text-secondary">Conforme as regras atuais, os créditos têm validade de 60 meses. Isso permite acumular geração do verão para usar no inverno, por exemplo.</p>
    </div>
    <div class="card mb-6">
      <h2 style="margin-bottom: var(--space-3)">Marco legal — Lei 14.300</h2>
      <p class="text-secondary">A Lei 14.300/2022 instituiu o marco legal da micro e minigeração distribuída. Para unidades sujeitas a transição do art. 27, o percentual previsto para 2026 e de 60% sobre as componentes tarifarias especificadas na lei. A ANEEL atualiza periodicamente suas orientacoes sobre as modalidades vigentes.</p>
    </div>
    <div class="card mb-6">
      <h2 style="margin-bottom: var(--space-3)">Importante</h2>
      <p class="text-secondary">Os resultados dependem de tarifa, distribuidora, consumo, modalidade, dimensionamento, irradiação e regras vigentes do SCEE. Esta página é apenas informativa e não constitui aconselhamento regulatório.</p>
    </div>
  </div>
</section>`;

  pages.push({
    filename: 'compensacao.html', slug: 'compensacao', noindex: false,
    html: T.renderLayout({
      store, data, title: 'compensação de Energia — SCEE',
      description: 'Como funciona o sistema de compensação de energia elétrica (SCEE), os créditos de energia e o marco legal da microgeração distribuída (Lei 14.300).',
      canonical: '/compensação.html', active: 'conteudo',
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteúdo', href: 'conteudo.html' }, { label: 'compensação' }], store.url),
      content: compContent
    })
  });

  /* ----- Modalidades GD ----- */
  const modContent = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteúdo', href: 'conteudo.html' }, { label: 'Modalidades GD' }])}
    ${T.pageHero('Modalidades de geração distribuída', 'A ANEEL reconhece diferentes modalidades de autoconsumo por meio de geração distribuída', { icon: T.ICONS.bolt })}

    <div class="card mb-6"><h2>Autoconsumo local</h2><p class="text-secondary mt-2">geração e consumo na mesma unidade consumidora. A energia produzida é consumida no próprio imóvel onde o sistema está instalado.</p></div>
    <div class="card mb-6"><h2>Autoconsumo remoto</h2><p class="text-secondary mt-2">geração em uma unidade e consumo em outra, dentro da mesma área de concessão da distribuidora. Permite instalar módulos fotovoltaicos em um imóvel e abater a conta de outro.</p></div>
    <div class="card mb-6"><h2>Multiplas unidades consumidoras</h2><p class="text-secondary mt-2">Um unico sistema atende a varias unidades do mesmo titular (ex: condomínio). A compensação e distribuída entre as unidades conforme regras especificas.</p></div>
    <div class="card mb-6"><h2>geração compartilhada</h2><p class="text-secondary mt-2">Condominios ou grupos de consumidores se unem para investir em um sistema de geração compartilhada. A energia e os créditos são distribuidos entre os participantes.</p></div>

    <p class="text-xs text-muted">Conteúdo informativo — não constitui aconselhamento regulatório. Consulte a ANEEL e a regulamentação vigente para detalhes.</p>
  </div>
</section>`;

  pages.push({
    filename: 'modalidades-gd.html', slug: 'modalidades-gd', noindex: false,
    html: T.renderLayout({
      store, data, title: 'Modalidades de geração distribuída',
      description: 'Conheca as modalidades de geração distribuída reconhecidas pela ANEEL: autoconsumo local, remoto, multiplas unidades e geração compartilhada.',
      canonical: '/modalidades-gd.html', active: 'conteudo',
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteúdo', href: 'conteudo.html' }, { label: 'Modalidades GD' }], store.url),
      content: modContent
    })
  });

  /* ----- Glossario ----- */
  const glossContent = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteúdo', href: 'conteudo.html' }, { label: 'Glossario' }])}
    ${T.pageHero('Glossario Solar', 'Termos técnicos do universo fotovoltaico explicados de forma simples', { icon: T.ICONS.doc })}
    <div class="glossary-list">
      ${glossary.map(g => `<div class="glossary-item"><div class="glossary-term">${T.escapeHtml(g.term)}</div><div class="glossary-def">${T.escapeHtml(g.definition)}</div></div>`).join('')}
    </div>
  </div>
</section>`;

  pages.push({
    filename: 'glossario.html', slug: 'glossario', noindex: false,
    html: T.renderLayout({
      store, data, title: 'Glossario Solar — Termos Técnicos',
      description: 'Glossario solar com termos técnicos do universo fotovoltaico: kW, kWh, kWp, irradiação, inversor, string, SCEE, MMGD, compensação, degradacao e payback.',
      canonical: '/glossario.html', active: 'conteudo',
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteúdo', href: 'conteudo.html' }, { label: 'Glossario' }], store.url),
      content: glossContent
    })
  });

  /* ----- Conteúdo (lista de artigos) ----- */
  const contContent = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteúdo' }])}
    ${T.pageHero('Central de Conhecimento', 'Artigos demonstrativos sobre energia solar', { icon: T.ICONS.doc })}
    <div class="grid grid-3">
      ${articles.map(a => `
      <a href="artigo-${a.slug}.html" class="card" style="text-decoration: none; color: inherit">
        <span class="badge badge-neutral mb-2">${T.escapeHtml(a.category)}</span>
        <h2 style="font-size: var(--fs-base)">${T.escapeHtml(a.title)}</h2>
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
      description: 'Central de conhecimento sobre energia solar fotovoltaica. Artigos sobre fundamentos, equipamentos, regulamentação, dimensionamento e manutenção.',
      canonical: '/conteudo.html', active: 'conteudo',
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteúdo' }], store.url),
      content: contContent
    })
  });

  /* ----- Artigos individuais ----- */
  articles.forEach(a => {
    const artContent = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteúdo', href: 'conteudo.html' }, { label: a.title }])}
    ${T.pageHero(a.title, a.category + ' — ' + a.readTime, { icon: T.ICONS.doc })}
    <div class="article-meta" style="margin-bottom:var(--space-6)"><span>${a.readTime}</span><span>${a.date}</span></div>
    <div class="article-body"><p>${T.escapeHtml(a.content)}</p></div>
    <div class="visual-section mt-6">
      <h2>Quer simular seu proprio sistema?</h2>
      <a href="simulador.html" class="btn btn-primary btn-lg">${T.ICONS.bolt} Iniciar simulação</a>
    </div>
  </div>
</section>`;
    pages.push({
      filename: 'artigo-' + a.slug + '.html', slug: 'artigo-' + a.slug, noindex: false,
      html: T.renderLayout({
        store, data, title: a.title, description: a.description,
        canonical: '/artigo-' + a.slug + '.html', active: 'conteudo', ogType: 'article',
        structuredData: [
          T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Conteúdo', href: 'conteudo.html' }, { label: a.title }], store.url),
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

  /* ----- Projetos (mosaico editorial V3) ----- */
  const mosaicItems = cases.map((c, i) => {
    const isLarge = i === 0;
    return `<a href="projeto-${c.slug}.html" class="sm-mosaic-item${isLarge ? ' large' : ''}" style="text-decoration:none">
    ${T.caseHero(c.type, { title: '', power: '', modules: '', annual: '', id: 'mosaic-' + c.slug })}
    <div class="sm-mosaic-overlay">
      <div class="sm-mosaic-type">${T.escapeHtml(c.type)}</div>
      <div class="sm-mosaic-title">${T.escapeHtml(c.title)}</div>
      <div class="sm-mosaic-meta">${c.power} kWp · ${c.panels} módulos · ${T.escapeHtml(c.location)}</div>
    </div>
  </a>`;
  }).join('');

  const projContent = `<section class="sm-projects-mosaic">
  <div style="max-width:var(--container-max);margin:0 auto var(--space-4);padding:var(--space-6) var(--space-6) 0">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Projetos' }])}
  </div>
  <div style="max-width:var(--container-max);margin:0 auto var(--space-8);padding:0 var(--space-6)">
    <span class="sm-eyebrow">Projetos demonstrativos</span>
    <h2 class="sm-headline" style="margin-top:var(--space-3)">Arquitetura como<br>protagonista.</h2>
    <p class="sm-lede" style="margin-top:var(--space-3)">Cases fictícios para ilustrar diferentes perfis de sistema solar. Cada projeto com tratamento visual exclusivo por tipo.</p>
  </div>
  <div class="sm-mosaic">
    ${mosaicItems}
  </div>
  <p class="text-xs text-muted text-center" style="padding:var(--space-6) 0">Projetos fictícios para demonstração da plataforma</p>
</section>`;

  pages.push({
    filename: 'projetos.html', slug: 'projetos', noindex: false,
    html: T.renderLayout({
      store, data, title: 'Projetos Demonstrativos',
      description: 'Cases demonstrativos de sistemas solares fotovoltaicos: residencial, comercial, condomínio e rural. Veja potência, módulos, geração e payback de cada projeto.',
      canonical: '/projetos.html', active: 'projetos',
      ogImage: store.url.replace(/\/$/, '') + '/img/og/projetos.svg',
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Projetos' }], store.url),
      content: projContent
    })
  });

  /* ----- Cases individuais ----- */
  cases.forEach(c => {
    // geração mensal estimada para o gráfico
    const monthlyGen = Array(12).fill(0).map((_, i) => Math.round(c.annualGeneration / 12 * (0.85 + Math.sin(i / 12 * Math.PI * 2) * 0.15)));
    const monthLabels = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

    const caseContent = `
    <!-- HERO FULL-WIDTH -->
    ${T.caseHero(c.type, { title: c.title, power: c.power + ' kWp', modules: c.panels + ' módulos', annual: T.formatKWh(c.annualGeneration) + '/ano', id: 'hero-' + c.slug })}

    <section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Projetos', href: 'projetos.html' }, { label: c.title }])}

    <!-- VISAO GERAL -->
    <div class="editorial-grid" style="margin:var(--space-8) 0">
      <div class="editorial-text">
        <span class="cinematic-hero-eyebrow">Visão geral</span>
        <h2 style="font-family:'Sora',sans-serif;font-size:var(--fs-2xl);font-weight:700;margin:var(--space-3) 0 var(--space-4)">${T.escapeHtml(c.title)}</h2>
        <p style="font-size:var(--fs-lg);color:var(--sm-text-soft);line-height:1.6;margin-bottom:var(--space-3)">${T.escapeHtml(c.description)}</p>
        <p class="text-sm text-muted">Instalado em ${c.installedAt} — ${T.escapeHtml(c.location)} — ${T.escapeHtml(c.type)} — ${T.escapeHtml(c.roofType)}</p>
      </div>
      <div class="grid grid-2">
        <div class="kpi-premium"><div class="kpi-value">${c.power}</div><div class="kpi-label">kWp</div></div>
        <div class="kpi-premium"><div class="kpi-value">${c.panels}</div><div class="kpi-label">Módulos</div></div>
        <div class="kpi-premium"><div class="kpi-value">${c.inverter}</div><div class="kpi-label">Inversor</div></div>
        <div class="kpi-premium"><div class="kpi-value">${c.area} m²</div><div class="kpi-label">Área</div></div>
        <div class="kpi-premium"><div class="kpi-value">${T.formatKWh(c.annualGeneration)}</div><div class="kpi-label">geração/ano</div></div>
        <div class="kpi-premium"><div class="kpi-value" style="color:var(--sm-amber)">${T.formatBRL(c.monthlySavings)}</div><div class="kpi-label">Economia/mês</div></div>
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
        <p style="font-size:var(--fs-lg);color:var(--sm-text-soft);line-height:1.6;margin-bottom:var(--space-4)">Distribuição dos ${c.panels} módulos com orientação ${c.orientation || 'norte'} e área de ${c.area} m².</p>
        <div class="grid grid-2">
          <div class="kpi-premium"><div class="kpi-value" style="font-size:var(--fs-lg)">${c.area} m²</div><div class="kpi-label">Área utilizada</div></div>
          <div class="kpi-premium"><div class="kpi-value" style="font-size:var(--fs-lg)">${c.orientation || 'Norte'}</div><div class="kpi-label">orientação</div></div>
        </div>
      </div>
      <div class="roof-cad-wrap">
        ${T.roofCAD({ panels: c.panels, panelCols: Math.ceil(c.panels/2), id: 'case-roof-' + c.slug, areaUsed: c.area + ' m²' })}
      </div>
    </div>

    <!-- PERFORMANCE -->
    <div style="margin:var(--space-8) 0">
      <span class="cinematic-hero-eyebrow">Performance</span>
      <h2 style="font-family:'Sora',sans-serif;font-size:var(--fs-2xl);font-weight:700;margin:var(--space-3) 0 var(--space-4)">geração mensal estimada</h2>
      <div class="chart-premium">
        ${T.areaChart(monthlyGen, { width: 700, height: 240, color: '#f59e0b', labels: monthLabels, id: 'case-' + c.slug, label: 'kWh/mês' })}
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
      <h2>Quer um projeto como este?</h2>
      <p>Faça uma simulação completa.</p>
      <a href="simulador.html" class="btn btn-primary btn-lg">${T.ICONS.bolt} Simular sistema</a>
    </div>

    <p class="text-xs text-muted text-center" style="margin-bottom:var(--space-8)">Projeto fictício para demonstração da plataforma — todos os dados são inventados</p>
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
    ${T.pageHero('Sobre o SolMais', 'Plataforma digital end-to-end para energia solar fotovoltaica — da simulação ao monitoramento', { icon: T.ICONS.sun })}

    <div class="card mb-6">
      <h2 style="margin-bottom: var(--space-3)">O que e</h2>
      <p class="text-secondary">SolMais e uma plataforma demonstrativa que cobre todo o ciclo de aquisicao, implantacao e gestao de energia solar: simulação, projeto, acompanhamento, monitoramento, documentos, suporte e administracao.</p>
    </div>
    <div class="card mb-6">
      <h2 style="margin-bottom: var(--space-3)">Para quem</h2>
      <p class="text-secondary">Para quem quer entender como funciona uma operação solar completa — do primeiro contato ao monitoramento em produção. Para empresas do setor que precisam de uma plataforma digital para sua operação.</p>
    </div>
    <div class="card mb-6">
      <h2 style="margin-bottom: var(--space-3)">Caracteristicas</h2>
      <ul style="padding-left: var(--space-5); list-style: disc; color: var(--text-secondary)">
        <li>Simulador em 6 etapas com resultado visual</li>
        <li>Projeto técnico com diagrama e layout do telhado</li>
        <li>Comparador de sistemas e cenários financeiros</li>
        <li>Portal do cliente com 8 secoes</li>
        <li>Dashboard de monitoramento energético</li>
        <li>Timeline de implantacao</li>
        <li>Central de documentos e suporte</li>
        <li>Admin operacional com pipeline, frota e alertas</li>
        <li>Conteúdo educativo e glossario</li>
      </ul>
    </div>
    <div class="card card-glow">
      <h2 style="margin-bottom: var(--space-3)">Importante</h2>
      <p class="text-secondary">${T.escapeHtml(store.demoNotice)}</p>
    </div>
  </div>
</section>`;

  pages.push({
    filename: 'sobre.html', slug: 'sobre', noindex: false,
    html: T.renderLayout({
      store, data, title: 'Sobre o SolMais | Plataforma Solar',
      description: 'SolMais e uma plataforma digital end-to-end para energia solar: simulação, projeto, implantacao, monitoramento, documentos, suporte e administracao.',
      canonical: '/sobre.html', active: 'sobre',
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Sobre' }], store.url),
      content: aboutContent
    })
  });

  /* ----- Contato ----- */
  const contactContent = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Contato' }])}
    ${T.pageHero('Contato', 'Plataforma demonstrativa — não atendemos clientes reais', { icon: T.ICONS.support })}
    <div class="card mb-6">
      <div class="grid grid-2">
        <div class="field"><label class="label">Nome</label><input type="text" class="input" placeholder="Seu nome"></div>
        <div class="field"><label class="label">Email</label><input type="email" class="input" placeholder="seu@email.com"></div>
      </div>
      <div class="field"><label class="label">Assunto</label><input type="text" class="input" placeholder="Assunto"></div>
      <div class="field"><label class="label">Mensagem</label><textarea class="textarea" placeholder="Sua mensagem"></textarea></div>
      <button class="btn btn-primary" onclick="SolMais.toast('Formulário demonstrativo — mensagens não são enviadas', 'info')">Enviar mensagem</button>
    </div>
    <div class="card">
      <p class="text-sm text-secondary">Esta e uma plataforma demonstrativa. não coletamos dados nem atendemos clientes reais. Use o simulador para explorar a experiencia completa.</p>
    </div>
  </div>
</section>`;

  pages.push({
    filename: 'contato.html', slug: 'contato', noindex: true,
    html: T.renderLayout({
      store, data, title: 'Contato', description: 'Entre em contato com a plataforma demonstrativa SolMais. Formulário de contato disponível. Plataforma demo: não atendemos clientes reais nem coletamos dados.',
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
    <div class="card mb-4"><h2>Quanto posso economizar?</h2><p class="text-secondary mt-2">Sistemas fotovoltaicos podem reduzir significativamente a energia faturada da rede, mas o resultado depende do perfil de consumo, dimensionamento, tarifa, distribuidora e regras aplicáveis.</p></div>
    <div class="card mb-4"><h2>Quanto tempo leva a homologação?</h2><p class="text-secondary mt-2">Os prazos variam conforme distribuidora, caracteristicas do projeto e etapas de conexão previstas na regulamentação vigem. não prometemos prazo universal.</p></div>
    <div class="card mb-4"><h2>Qual a garantia dos módulos fotovoltaicos?</h2><p class="text-secondary mt-2">Garantias variam conforme fabricante, modelo e componente. Os períodos apresentados nesta demonstração são ilustrativos.</p></div>
    <div class="card mb-4"><h2>Funciona em dias nublados?</h2><p class="text-secondary mt-2">Sim. Módulos fotovoltaicos fotovoltaicos geram eletricidade com luz difusa, não apenas com sol direto. A geração reduz, mas não para.</p></div>
    <div class="card mb-4"><h2>Os dados são reais?</h2><p class="text-secondary mt-2">não. Todos os clientes, sistemas, projetos, métricas, valores e documentos são fictícios e claramente identificados como demonstrativos.</p></div>
  </div>
</section>`;

  pages.push({
    filename: 'faq.html', slug: 'faq', noindex: false,
    html: T.renderLayout({
      store, data, title: 'FAQ — Perguntas Frequentes',
      description: 'Perguntas frequentes sobre energia solar: quanto economizar, tempo de homologação, garantia dos módulos fotovoltaicos, dias nublados e compensação de energia.',
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
