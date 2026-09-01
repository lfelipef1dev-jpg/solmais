/* SolMais — Suporte (central + categorias + abrir chamado) */

function render(data, T) {
  const store = data.store;
  const tickets = data.tickets || [];
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Portal', href: 'conta.html' }, { label: 'Suporte' }];

  const categories = [
    { icon: 'bolt', label: 'Sistema nao esta gerando', desc: 'Producao zero ou abaixo do esperado' },
    { icon: 'chart', label: 'App/monitoramento', desc: 'Problemas com o dashboard' },
    { icon: 'cash', label: 'Conta de energia', desc: 'Duvidas sobre faturamento e compensacao' },
    { icon: 'bolt', label: 'Inversor', desc: 'Status, erros e reinicializacao' },
    { icon: 'check', label: 'Garantia', desc: 'Cobertura e solicitacao' },
    { icon: 'doc', label: 'Documentacao', desc: 'Projetos, manuais e termos' },
    { icon: 'settings', label: 'Manutencao', desc: 'Limpeza, inspecao e reparos' }
  ];

  const content = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb(bcItems)}
    ${T.pageHero('Central de Suporte', 'Como podemos ajudar? — Atendimento demonstrativo', { icon: T.ICONS.support })}

    <div class="card mb-6">
      <div class="field">
        <label class="label">Buscar na central de ajuda</label>
        <input type="text" class="input" placeholder="Ex: inversor offline, compensacao, garantia..." oninput="SolMais.searchFaq(this.value)">
      </div>
    </div>

    <h3 style="margin-bottom: var(--space-4)">Categorias</h3>
    <div class="support-categories mb-6">
      ${categories.map(c => `
      <div class="support-cat" onclick="SolMais.toast('Categoria: ${T.escapeHtml(c.label)}', 'info')">
        <div class="support-cat-icon">${T.ICONS[c.icon] || T.ICONS.support}</div>
        <div class="option-card-title">${T.escapeHtml(c.label)}</div>
        <div class="option-card-desc">${T.escapeHtml(c.desc)}</div>
      </div>`).join('')}
    </div>

    <div class="grid grid-2">
      <div class="card">
        <h3 style="margin-bottom: var(--space-4)">${T.ICONS.support} Abrir chamado</h3>
        <div class="field">
          <label class="label">Categoria</label>
          <select class="select" id="ticket-cat">
            <option>Monitoramento</option><option>Inversor</option><option>Conta de energia</option>
            <option>Documentacao</option><option>Manutencao</option><option>Garantia</option>
          </select>
        </div>
        <div class="field">
          <label class="label">Assunto</label>
          <input type="text" class="input" id="ticket-subject" placeholder="Resumo do problema">
        </div>
        <div class="field">
          <label class="label">Descricao</label>
          <textarea class="textarea" id="ticket-desc" placeholder="Descreva o problema em detalhes"></textarea>
        </div>
        <div class="field">
          <label class="label">Prioridade</label>
          <select class="select" id="ticket-prio">
            <option value="baixa">Baixa</option><option value="media" selected>Media</option><option value="alta">Alta</option>
          </select>
        </div>
        <button class="btn btn-primary btn-block" onclick="SolMais.createTicket()">${T.ICONS.support} Abrir chamado</button>
        <p class="text-xs text-muted mt-4">Chamado demonstrativo — persiste apenas no seu navegador (localStorage)</p>
      </div>

      <div class="card">
        <h3 style="margin-bottom: var(--space-4)">Meus chamados</h3>
        <div class="doc-list" id="tickets-list">
          ${tickets.map(t => `
          <div class="doc-item">
            <div class="doc-icon" style="background:var(--info-soft);color:var(--info)">${T.ICONS.support}</div>
            <div class="doc-info">
              <div class="doc-name">#${T.escapeHtml(t.id)} — ${T.escapeHtml(t.subject)}</div>
              <div class="doc-meta"><span class="badge ${t.status === 'resolvido' ? 'badge-success' : t.status === 'em-analise' ? 'badge-warn' : 'badge-info'}">${t.status}</span> ${t.priority} — ${t.createdAt}</div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </div>
</section>`;

  return [{
    filename: 'suporte.html', slug: 'suporte', noindex: true,
    html: T.renderLayout({
      store, data, title: 'Central de Suporte', description: 'Central de suporte demonstrativa.',
      canonical: '/suporte.html', active: '', noindex: true,
      structuredData: T.renderBreadcrumbSchema(bcItems, store.url), content
    })
  }];
}

module.exports = { render };
