/* SolMais — Instalacao (timeline premium + cena de instalacao + checklist) */

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
    ${T.pageHero('Jornada de Implantacao', 'Projeto ' + project.id + ' — ' + T.escapeHtml(project.location), { icon: T.ICONS.settings })}

    <!-- Narrativa fotografica: 5 etapas -->
    <div style="margin:var(--space-6) 0">
      <span class="cinematic-hero-eyebrow">Narrativa de instalacao</span>
      <h2 style="font-family:'Sora',sans-serif;font-size:var(--fs-2xl);font-weight:700;margin:var(--space-3) 0 var(--space-6)">5 etapas — do chão ao sistema conectado</h2>
      <div class="grid grid-3" style="gap:var(--space-4)">
        <div class="equipment-card">
          ${T.equipmentRender('module', { id: 'inst-mod' })}
          <div class="equipment-card-body">
            <div class="equipment-card-name">01. Estrutura</div>
            <div class="equipment-card-spec">Fixacao e perfilagem no telhado</div>
          </div>
        </div>
        <div class="equipment-card">
          ${T.equipmentRender('module', { id: 'inst-mod2' })}
          <div class="equipment-card-body">
            <div class="equipment-card-name">02. Modulos</div>
            <div class="equipment-card-spec">Posicionamento e fixacao dos paineis</div>
          </div>
        </div>
        <div class="equipment-card">
          ${T.equipmentRender('inverter', { id: 'inst-inv' })}
          <div class="equipment-card-body">
            <div class="equipment-card-name">03. Inversor</div>
            <div class="equipment-card-spec">Instalacao interna organizada</div>
          </div>
        </div>
        <div class="equipment-card">
          ${T.equipmentRender('protection', { id: 'inst-prot' })}
          <div class="equipment-card-body">
            <div class="equipment-card-name">04. Protecoes</div>
            <div class="equipment-card-spec">Quadro CC/CA, DPS e aterramento</div>
          </div>
        </div>
        <div class="digital-twin-wrap" style="border-radius:12px;overflow:hidden">
          ${T.digitalTwin({ panels: 10, id: 'inst-twin', width: 300, height: 200, generating: true, showFlow: true })}
          <div style="padding:var(--space-3);background:var(--sm-charcoal)">
            <div class="equipment-card-name">05. Sistema concluido</div>
            <div class="equipment-card-spec">Energizacao e homologacao</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Timeline premium -->
    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-6)">Timeline de implantacao</h3>
      <div class="timeline-premium">
        ${project.timeline.map((t, i) => `
        <div class="timeline-premium-item">
          <div class="timeline-premium-dot ${t.status === 'done' ? 'done' : t.status === 'current' ? 'active' : 'pending'}">
            ${t.status === 'done' ? T.ICONS.check : t.status === 'current' ? T.ICONS.clock : (i + 1)}
          </div>
          <div class="timeline-premium-content">
            <h4>${T.escapeHtml(t.label)}</h4>
            ${t.date ? '<div class="timeline-premium-date">' + t.date + '</div>' : ''}
            <p class="timeline-premium-desc">${T.escapeHtml(t.desc)}</p>
          </div>
        </div>`).join('')}
      </div>
      <p class="text-xs text-muted mt-4">Os prazos variam conforme distribuidora, caracteristicas do projeto e etapas de conexao previstas na regulamentacao vigente.</p>
    </div>

    <div class="grid grid-2">
      <div class="card">
        <h3 style="margin-bottom: var(--space-4)">Checklist de instalacao</h3>
        <div class="timeline-premium">
          ${checklist.map((c, i) => `
          <div class="timeline-premium-item">
            <div class="timeline-premium-dot ${c.done ? 'done' : 'pending'}">${c.done ? T.ICONS.check : (i + 1)}</div>
            <div class="timeline-premium-content">
              <h4>${T.escapeHtml(c.item)}</h4>
            </div>
          </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <h3 style="margin-bottom: var(--space-4)">Homologacao e conexao</h3>
        <p class="text-sm text-secondary mb-4">O processo de homologacao envolve etapas com a distribuidora local:</p>
        <div class="timeline-premium">
          <div class="timeline-premium-item"><div class="timeline-premium-dot done">${T.ICONS.check}</div><div class="timeline-premium-content"><h4>Documentacao preparada</h4><p class="timeline-premium-desc">Projeto, memorial e documentos tecnicos</p></div></div>
          <div class="timeline-premium-item"><div class="timeline-premium-dot done">${T.ICONS.check}</div><div class="timeline-premium-content"><h4>Solicitacao enviada</h4><p class="timeline-premium-desc">Envio a distribuidora</p></div></div>
          <div class="timeline-premium-item"><div class="timeline-premium-dot done">${T.ICONS.check}</div><div class="timeline-premium-content"><h4>Analise da distribuidora</h4><p class="timeline-premium-desc">Pode haver pendencias — variavel conforme caso</p></div></div>
          <div class="timeline-premium-item"><div class="timeline-premium-dot done">${T.ICONS.check}</div><div class="timeline-premium-content"><h4>Vistoria realizada</h4><p class="timeline-premium-desc">Inspecao tecnica</p></div></div>
          <div class="timeline-premium-item"><div class="timeline-premium-dot done">${T.ICONS.check}</div><div class="timeline-premium-content"><h4>Aprovacao/conexao</h4><p class="timeline-premium-desc">Sistema conectado a rede</p></div></div>
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
