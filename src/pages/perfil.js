/* SolMais — Perfil (dados do cliente + preferencias) */

function render(data, T) {
  const store = data.store;
  const customer = (data.customers || [])[0];
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Portal', href: 'conta.html' }, { label: 'Perfil' }];

  const content = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb(bcItems)}
    <div class="section-header">
      <h2>Meu perfil</h2>
      <p>Dados demonstrativos — nao sao reais</p>
    </div>

    <div class="card mb-6 text-center">
      <div class="portal-user-avatar" style="width: 80px; height: 80px; font-size: var(--fs-2xl)">${customer.avatar}</div>
      <h3 style="margin-top: var(--space-3)">${T.escapeHtml(customer.name)}</h3>
      <p class="text-sm text-muted">Cliente desde ${customer.since}</p>
      <span class="demo-badge mt-2">DEMO</span>
    </div>

    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-4)">Dados cadastrais</h3>
      <div class="grid grid-2">
        <div class="field"><label class="label">Nome</label><input type="text" class="input" value="${T.escapeHtml(customer.name)}" disabled></div>
        <div class="field"><label class="label">Email</label><input type="email" class="input" value="${T.escapeHtml(customer.email)}" disabled></div>
        <div class="field"><label class="label">Telefone</label><input type="text" class="input" value="${T.escapeHtml(customer.phone)}" disabled></div>
        <div class="field"><label class="label">Tipo</label><input type="text" class="input" value="${T.escapeHtml(customer.type)}" disabled></div>
        <div class="field"><label class="label">Cidade</label><input type="text" class="input" value="${T.escapeHtml(customer.city) + '/' + T.escapeHtml(customer.state)}" disabled></div>
        <div class="field"><label class="label">CEP</label><input type="text" class="input" value="${T.escapeHtml(customer.cep)}" disabled></div>
      </div>
      <p class="text-xs text-muted mt-4">Dados demonstrativos — edicao desativada na plataforma demo</p>
    </div>

    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-4)">Preferencias</h3>
      <div class="field">
        <label class="label">Lembretes por email</label>
        <select class="select"><option>Ativado</option><option>Desativado</option></select>
      </div>
      <div class="field">
        <label class="label">Lembretes por WhatsApp</label>
        <select class="select"><option>Ativado</option><option>Desativado</option></select>
      </div>
      <div class="field">
        <label class="label">Alertas de monitoramento</label>
        <select class="select"><option>Ativado</option><option>Desativado</option></select>
      </div>
      <button class="btn btn-primary" onclick="SolMais.toast('Preferencias salvas (demonstrativo)', 'success')">Salvar preferencias</button>
    </div>

    <div class="card">
      <h3 style="margin-bottom: var(--space-4)">Contrato</h3>
      <table class="data-table">
        <tr><td>Tipo de aquisicao</td><td><strong>${T.escapeHtml(customer.contractType)}</strong></td></tr>
        <tr><td>Sistema</td><td>${(data.systems||[])[0].power} kWp</td></tr>
        <tr><td>Projeto</td><td>${customer.projectId}</td></tr>
        <tr><td>Cliente desde</td><td>${customer.since}</td></tr>
      </table>
    </div>
  </div>
</section>`;

  return [{
    filename: 'perfil.html', slug: 'perfil', noindex: true,
    html: T.renderLayout({
      store, data, title: 'Meu Perfil', description: 'Perfil do cliente demonstrativo.',
      canonical: '/perfil.html', active: '', noindex: true,
      structuredData: T.renderBreadcrumbSchema(bcItems, store.url), content
    })
  }];
}

module.exports = { render };
