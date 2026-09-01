/* SolMais — Documentos (central de documentos demo) */

function render(data, T) {
  const store = data.store;
  const documents = data.documents || [];
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Portal', href: 'conta.html' }, { label: 'Documentos' }];

  const content = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb(bcItems)}
    <div class="section-header">
      <h2>Central de documentos</h2>
      <p>Todos os documentos sao ficticios — demonstracao</p>
    </div>

    <div class="card mb-6">
      <div class="doc-list">
        ${documents.map(d => `
        <div class="doc-item">
          <div class="doc-icon">${T.ICONS.doc}</div>
          <div class="doc-info">
            <div class="doc-name">${T.escapeHtml(d.name)}</div>
            <div class="doc-meta">${d.type} — ${d.size} — ${d.uploadedAt}</div>
            <div class="text-xs text-muted mt-2">${T.escapeHtml(d.description)}</div>
          </div>
          <button class="btn btn-ghost btn-sm" onclick="SolMais.toast('Documento demonstrativo — nao e um arquivo real', 'info')">${T.ICONS.download} Baixar</button>
        </div>`).join('')}
      </div>
    </div>

    <div class="card card-glow text-center">
      <p class="text-sm text-secondary">Todos os documentos listados sao ficticios e foram criados exclusivamente para demonstracao da plataforma. Nenhum arquivo real esta disponivel para download.</p>
    </div>
  </div>
</section>`;

  return [{
    filename: 'documentos.html', slug: 'documentos', noindex: true,
    html: T.renderLayout({
      store, data, title: 'Documentos', description: 'Central de documentos demonstrativos.',
      canonical: '/documentos.html', active: '', noindex: true,
      structuredData: T.renderBreadcrumbSchema(bcItems, store.url), content
    })
  }];
}

module.exports = { render };
