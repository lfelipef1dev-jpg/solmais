/* SolMais — Instalacao (timeline de implantacao + checklist) */

function render(data, T) {
  const store = data.store;
  const project = (data.projects || [])[0];
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Portal', href: 'conta.html' }, { label: 'Instalacao' }];

  const checklist = [
    { item: 'Estrutura de fixacao', done: true },
    { item: 'Modulos fotovoltaicos (10x 550W)', done: true },
    { item: 'Inversor 5kW', done: true },
    { item: 'Cabeamento CC e CA', done: true },
    { item: 'Protecoes (DC, AC, SPDA)', done: true },
    { item: 'Testes de comunicacao', done: true },
    { item: 'Ligacao e energizacao', done: true },
    { item: 'Fotos demonstrativas', done: true }
  ];

  const content = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb(bcItems)}
    <div class="section-header">
      <h2>Jornada de implantacao</h2>
      <p>Projeto ${project.id} — ${T.escapeHtml(project.location)}</p>
    </div>

    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-4)">Timeline de implantacao</h3>
      <div class="timeline">
        ${project.timeline.map(t => `
        <div class="timeline-item">
          <div class="timeline-dot ${t.status}">${t.status === 'done' ? T.ICONS.check : t.status === 'current' ? T.ICONS.clock : ''}</div>
          <div class="timeline-content">
            <h4>${T.escapeHtml(t.label)}</h4>
            <p class="text-muted">${T.escapeHtml(t.desc)}</p>
            ${t.date ? '<p class="date">' + t.date + '</p>' : ''}
          </div>
        </div>`).join('')}
      </div>
      <p class="text-xs text-muted mt-4">Os prazos variam conforme distribuidora, caracteristicas do projeto e etapas de conexao previstas na regulamentacao vigente.</p>
    </div>

    <div class="grid grid-2">
      <div class="card">
        <h3 style="margin-bottom: var(--space-4)">Checklist de instalacao</h3>
        <div class="timeline">
          ${checklist.map(c => `
          <div class="timeline-item">
            <div class="timeline-dot ${c.done ? 'done' : 'pending'}">${c.done ? T.ICONS.check : ''}</div>
            <div class="timeline-content"><h4>${T.escapeHtml(c.item)}</h4></div>
          </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <h3 style="margin-bottom: var(--space-4)">Homologacao e conexao</h3>
        <p class="text-sm text-secondary mb-4">O processo de homologacao envolve etapas com a distribuidora local:</p>
        <div class="timeline">
          <div class="timeline-item"><div class="timeline-dot done">${T.ICONS.check}</div><div class="timeline-content"><h4>Documentacao preparada</h4><p class="text-muted">Projeto, memorial e documentos tecnicos</p></div></div>
          <div class="timeline-item"><div class="timeline-dot done">${T.ICONS.check}</div><div class="timeline-content"><h4>Solicitacao enviada</h4><p class="text-muted">Envio a distribuidora</p></div></div>
          <div class="timeline-item"><div class="timeline-dot done">${T.ICONS.check}</div><div class="timeline-content"><h4>Analise da distribuidora</h4><p class="text-muted">Pode haver pendencias — variavel conforme caso</p></div></div>
          <div class="timeline-item"><div class="timeline-dot done">${T.ICONS.check}</div><div class="timeline-content"><h4>Vistoria realizada</h4><p class="text-muted">Inspecao tecnica</p></div></div>
          <div class="timeline-item"><div class="timeline-dot done">${T.ICONS.check}</div><div class="timeline-content"><h4>Aprovacao/conexao</h4><p class="text-muted">Sistema conectado a rede</p></div></div>
        </div>
        <p class="text-xs text-muted mt-4">Nao prometemos prazo universal — os procedimentos variam conforme distribuidora e caracteristicas do projeto.</p>
      </div>
    </div>
  </div>
</section>`;

  return [{
    filename: 'instalacao.html', slug: 'instalacao', noindex: false,
    html: T.renderLayout({
      store, data, title: 'Instalacao e Implantacao Solar',
      description: 'Timeline de implantacao de energia solar fotovoltaica: simulacao, analise tecnica, projeto eletrico, documentacao, instalacao, vistoria e sistema conectado.',
      canonical: '/instalacao.html', active: '',
      structuredData: T.renderBreadcrumbSchema(bcItems, store.url), content
    })
  }];
}

module.exports = { render };
