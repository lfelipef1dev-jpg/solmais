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
    <h1 style="margin-bottom: var(--space-4)">Como funciona a energia solar fotovoltaica</h1>
    <p class="text-secondary mb-6">Sistemas fotovoltaicos convertem luz solar em eletricidade. O processo envolve paineis, inversor, medidor e rede de distribuicao.</p>

    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-4)">O processo em 4 etapas</h3>
      <div class="energy-flow">
        <div class="flow-node"><div class="flow-node-icon sun">${T.ICONS.sun}</div><div class="flow-node-label">1. SOL</div></div>
        <div class="flow-arrow">\u2193</div>
        <div class="flow-node"><div class="flow-node-icon panel">${T.ICONS.panel}</div><div class="flow-node-label">2. PAINELS</div></div>
        <div class="flow-arrow">\u2193</div>
        <div class="flow-node"><div class="flow-node-icon inverter">${T.ICONS.bolt}</div><div class="flow-node-label">3. INVERSOR</div></div>
        <div class="flow-arrow">\u2193</div>
        <div class="flow-node"><div class="flow-node-icon home">${T.ICONS.home}</div><div class="flow-node-label">4. IMÓVEL</div></div>
      </div>
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

    <div class="card card-glow text-center">
      <h3>Quer simular seu sistema?</h3>
      <p class="text-secondary mb-4">Faca uma simulacao completa em 6 etapas.</p>
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
    <h1 style="margin-bottom: var(--space-4)">Compensacao de energia</h1>
    <p class="text-secondary mb-6">Como funciona o Sistema de Compensacao de Energia Eletrica (SCEE) e os creditos de energia.</p>

    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-4)">Fluxo da compensacao</h3>
      <div class="energy-flow">
        <div class="flow-node"><div class="flow-node-icon panel">${T.ICONS.panel}</div><div class="flow-node-label">PRODUÇÃO</div></div>
        <div class="flow-arrow">\u2193</div>
        <div class="flow-node"><div class="flow-node-icon home">${T.ICONS.home}</div><div class="flow-node-label">CONSUMO</div></div>
        <div class="flow-arrow">\u2193</div>
        <div class="flow-node"><div class="flow-node-icon grid">${T.ICONS.grid}</div><div class="flow-node-label">REDE</div></div>
        <div class="flow-arrow">\u2193</div>
        <div class="flow-node"><div class="flow-node-icon solar">${T.ICONS.check}</div><div class="flow-node-label">CRÉDITOS</div></div>
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
    <h1 style="margin-bottom: var(--space-4)">Modalidades de geracao distribuida</h1>
    <p class="text-secondary mb-6">A ANEEL reconhece diferentes modalidades de autoconsumo por meio de geracao distribuida.</p>

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
    <h1 style="margin-bottom: var(--space-4)">Glossario solar</h1>
    <p class="text-secondary mb-6">Termos tecnicos do universo fotovoltaico explicados de forma simples.</p>
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
    <div class="section-header"><h2>Central de conhecimento</h2><p>Artigos demonstrativos sobre energia solar</p></div>
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
    <span class="badge badge-neutral mb-2">${T.escapeHtml(a.category)}</span>
    <h1 style="margin-bottom: var(--space-2)">${T.escapeHtml(a.title)}</h1>
    <div class="article-meta"><span>${a.readTime}</span><span>${a.date}</span></div>
    <div class="article-body"><p>${T.escapeHtml(a.content)}</p></div>
    <div class="card card-glow mt-6 text-center">
      <p class="text-secondary">Quer simular seu proprio sistema?</p>
      <a href="simulador.html" class="btn btn-primary mt-3">${T.ICONS.bolt} Iniciar simulacao</a>
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
    <div class="section-header"><h2>Projetos demonstrativos</h2><p>Cases ficticios para ilustrar diferentes perfis de sistema</p></div>
    <div class="grid grid-3">
      ${cases.map(c => `
      <div class="case-card">
        <div class="case-card-header"><div><h3>${T.escapeHtml(c.title)}</h3><p class="text-xs text-muted">${T.escapeHtml(c.location)} — ${T.escapeHtml(c.type)}</p></div><span class="demo-badge">DEMO</span></div>
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
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Projetos' }], store.url),
      content: projContent
    })
  });

  /* ----- Cases individuais ----- */
  cases.forEach(c => {
    const caseContent = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Projetos', href: 'projetos.html' }, { label: c.title }])}
    <span class="demo-badge mb-4">PROJETO FICTICIO PARA DEMONSTRACAO</span>
    <h1 style="margin-bottom: var(--space-2)">${T.escapeHtml(c.title)}</h1>
    <p class="text-secondary mb-6">${T.escapeHtml(c.location)} — ${T.escapeHtml(c.type)} — ${T.escapeHtml(c.roofType)}</p>

    <div class="grid grid-4 mb-6">
      <div class="kpi-card"><div class="kpi-value">${c.power}</div><div class="kpi-label">kWp</div></div>
      <div class="kpi-card"><div class="kpi-value">${c.panels}</div><div class="kpi-label">Modulos</div></div>
      <div class="kpi-card"><div class="kpi-value">${c.inverter}</div><div class="kpi-label">Inversor</div></div>
      <div class="kpi-card"><div class="kpi-value">${c.area} m²</div><div class="kpi-label">Area</div></div>
    </div>
    <div class="grid grid-3 mb-6">
      <div class="kpi-card"><div class="kpi-value">${T.formatKWh(c.annualGeneration)}</div><div class="kpi-label">Geracao/ano</div></div>
      <div class="kpi-card"><div class="kpi-value text-solar">${T.formatBRL(c.monthlySavings)}</div><div class="kpi-label">Economia/mes</div></div>
      <div class="kpi-card"><div class="kpi-value">${c.payback}</div><div class="kpi-label">Payback (anos)</div></div>
    </div>

    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-3)">Sobre o projeto</h3>
      <p class="text-secondary">${T.escapeHtml(c.description)}</p>
      <p class="text-xs text-muted mt-4">Instalado em ${c.installedAt} — Projeto ficticio para demonstracao da plataforma.</p>
    </div>

    <div class="roof-layout mb-6">
      <h4 style="margin-bottom: var(--space-3)">Layout dos modulos</h4>
      <div class="roof-grid" style="grid-template-columns: repeat(${Math.ceil(c.panels / 2)}, 60px)">
        ${Array.from({ length: c.panels }).map(() => '<div class="roof-panel"></div>').join('')}
      </div>
      <div class="roof-compass"><strong>N</strong> &uarr; Orientacao ${T.escapeHtml(c.orientation)} — ${T.escapeHtml(c.roofType)}</div>
    </div>

    <div class="card card-glow text-center">
      <h3>Quer um projeto como este?</h3>
      <p class="text-secondary mb-4">Faca uma simulacao completa.</p>
      <a href="simulador.html" class="btn btn-primary btn-lg">${T.ICONS.bolt} Simular sistema</a>
    </div>
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
    <h1 style="margin-bottom: var(--space-4)">Sobre o SolMais</h1>
    <p class="text-lg text-secondary mb-6">Plataforma digital end-to-end para energia solar fotovoltaica — da simulacao ao monitoramento.</p>

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
    <h1 style="margin-bottom: var(--space-4)">Contato</h1>
    <p class="text-secondary mb-6">Plataforma demonstrativa — nao atendemos clientes reais.</p>
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
    <h1 style="margin-bottom: var(--space-4)">Perguntas frequentes</h1>
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
