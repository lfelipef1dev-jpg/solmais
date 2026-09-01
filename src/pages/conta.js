/* SolMais — Portal do cliente
   Visao geral, projeto, instalacao, monitoramento, economia, documentos, suporte, perfil */

function render(data, T) {
  const store = data.store;
  const customer = (data.customers || [])[0];
  const system = (data.systems || [])[0];
  const project = (data.projects || [])[0];
  const documents = data.documents || [];
  const tickets = data.tickets || [];
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Portal do cliente' }];

  const sidebar = `<div class="portal-sidebar">
  <div class="portal-user">
    <div class="portal-user-avatar">${customer.avatar}</div>
    <h3 style="font-size: var(--fs-base)">${T.escapeHtml(customer.name)}</h3>
    <p class="text-xs text-muted">Cliente desde ${customer.since}</p>
    <span class="demo-badge mt-2">DEMO</span>
  </div>
  <ul class="portal-menu">
    <li><a href="conta.html" class="active">${T.ICONS.home} Visao geral</a></li>
    <li><a href="projeto.html">${T.ICONS.panel} Meu projeto</a></li>
    <li><a href="instalacao.html">${T.ICONS.settings} Instalacao</a></li>
    <li><a href="monitoramento.html">${T.ICONS.chart} Monitoramento</a></li>
    <li><a href="economia.html">${T.ICONS.cash} Economia</a></li>
    <li><a href="documentos.html">${T.ICONS.doc} Documentos</a></li>
    <li><a href="suporte.html">${T.ICONS.support} Suporte</a></li>
    <li><a href="perfil.html">${T.ICONS.user} Perfil</a></li>
  </ul>
</div>`;

  const overview = `<div class="portal-main">
  <h1 style="margin-bottom: var(--space-2)">Ola, ${T.escapeHtml(customer.name.split(' ')[0])}</h1>
  <p class="text-secondary mb-6">Sistema ${system.projectId} — ${system.power} kWp — ${T.escapeHtml(system.location)}</p>

  <div class="grid grid-4 mb-6">
    <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.panel}</div><div class="kpi-value">${system.power}</div><div class="kpi-label">kWp instalado</div></div>
    <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.bolt}</div><div class="kpi-value">584</div><div class="kpi-label">kWh este mes</div></div>
    <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.cash}</div><div class="kpi-value">${T.formatBRL(customer.monthlySavings)}</div><div class="kpi-label">Economia/mes</div></div>
    <div class="kpi-card"><div class="kpi-card-icon info">${T.ICONS.chart}</div><div class="kpi-value">${T.formatBRL(customer.totalSavings)}</div><div class="kpi-label">Economia total</div></div>
  </div>

  <div class="card mb-6">
    <h3 style="margin-bottom: var(--space-4)">Status do projeto</h3>
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
  </div>

  <div class="grid grid-2">
    <div class="card">
      <h3 style="margin-bottom: var(--space-3)">${T.ICONS.doc} Documentos recentes</h3>
      <div class="doc-list">
        ${documents.slice(0, 3).map(d => `
        <div class="doc-item">
          <div class="doc-icon">${T.ICONS.doc}</div>
          <div class="doc-info"><div class="doc-name">${T.escapeHtml(d.name)}</div><div class="doc-meta">${d.size} — ${d.uploadedAt}</div></div>
        </div>`).join('')}
      </div>
      <a href="documentos.html" class="btn btn-ghost btn-sm mt-4">Ver todos ${T.ICONS.arrow}</a>
    </div>
    <div class="card">
      <h3 style="margin-bottom: var(--space-3)">${T.ICONS.support} Chamados</h3>
      <div class="doc-list">
        ${tickets.map(t => `
        <div class="doc-item">
          <div class="doc-icon" style="background:var(--info-soft);color:var(--info)">${T.ICONS.support}</div>
          <div class="doc-info"><div class="doc-name">#${T.escapeHtml(t.id)} — ${T.escapeHtml(t.subject)}</div><div class="doc-meta">${t.status} — ${t.createdAt}</div></div>
        </div>`).join('')}
      </div>
      <a href="suporte.html" class="btn btn-ghost btn-sm mt-4">Central de suporte ${T.ICONS.arrow}</a>
    </div>
  </div>
</div>`;

  const content = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb(bcItems)}
    <div class="portal-layout">
      ${sidebar}
      ${overview}
    </div>
  </div>
</section>`;

  return [{
    filename: 'conta.html',
    slug: 'conta',
    noindex: true,
    html: T.renderLayout({
      store, data, title: 'Portal do Cliente', description: 'Area do cliente SolMais — demonstrativo.',
      canonical: '/conta.html', active: '', noindex: true,
      structuredData: T.renderBreadcrumbSchema(bcItems, store.url),
      content
    })
  }];
}

module.exports = { render };
