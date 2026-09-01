/* SolMais — Privacidade + Termos */

function render(data, T) {
  const store = data.store;
  const pages = [];

  const privContent = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Privacidade' }])}
    <h1 style="margin-bottom: var(--space-4)">Politica de Privacidade</h1>
    <p class="text-secondary mb-6">Plataforma demonstrativa — atualizado em setembro 2026</p>

    <div class="card mb-4"><h3>1. Natureza demonstrativa</h3><p class="text-secondary mt-2">O SolMais e uma plataforma demonstrativa. Nao coletamos dados pessoais reais, nao processamos pagamentos e nao celebramos contratos comerciais.</p></div>
    <div class="card mb-4"><h3>2. Dados locais</h3><p class="text-secondary mt-2">Dados inseridos no simulador, portal e admin sao armazenados apenas no seu navegador (localStorage). Nao sao enviados a nenhum servidor.</p></div>
    <div class="card mb-4"><h3>3. Cookies</h3><p class="text-secondary mt-2">Esta plataforma nao utiliza cookies de rastreamento. Apenas armazenamento local para persistencia de dados demonstrativos.</p></div>
    <div class="card mb-4"><h3>4. Analytics</h3><p class="text-secondary mt-2">Podemos utilizar analytics anonimizados para entender o uso da plataforma. Nenhum dado pessoal e coletado.</p></div>
    <div class="card mb-4"><h3>5. Contato</h3><p class="text-secondary mt-2">Para questoes sobre esta politica: ${T.escapeHtml(store.email)} (email demonstrativo).</p></div>
  </div>
</section>`;

  pages.push({
    filename: 'privacidade.html', slug: 'privacidade', noindex: true,
    html: T.renderLayout({
      store, data, title: 'Politica de Privacidade | SolMais', description: 'Politica de privacidade da plataforma demonstrativa SolMais.',
      canonical: '/privacidade.html', active: '', noindex: true,
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Privacidade' }], store.url),
      content: privContent
    })
  });

  const termosContent = `<section class="section">
  <div class="container container-narrow">
    ${T.renderBreadcrumb([{ label: 'Inicio', href: 'index.html' }, { label: 'Termos' }])}
    <h1 style="margin-bottom: var(--space-4)">Termos de Uso</h1>
    <p class="text-secondary mb-6">Plataforma demonstrativa — atualizado em setembro 2026</p>

    <div class="card mb-4"><h3>1. Natureza do servico</h3><p class="text-secondary mt-2">O SolMais e uma plataforma demonstrativa. Nao constitui proposta comercial, projeto eletrico, orcamento, oferta de credito ou garantia de economia.</p></div>
    <div class="card mb-4"><h3>2. Dados ficticios</h3><p class="text-secondary mt-2">Todos os clientes, sistemas, projetos, metricas, valores, documentos e localizacoes sao ficticios e identificados como demonstrativos.</p></div>
    <div class="card mb-4"><h3>3. Nao e aconselhamento</h3><p class="text-secondary mt-2">O conteudo desta plataforma nao constitui aconselhamento regulatorio, financeiro, juridico ou tecnico. Consulte profissionais qualificados para projetos reais.</p></div>
    <div class="card mb-4"><h3>4. Limitacao de responsabilidade</h3><p class="text-secondary mt-2">O SolMais nao se responsabiliza por decisoes tomadas com base nos dados demonstrativos apresentados.</p></div>
    <div class="card mb-4"><h3>5. Marco legal</h3><p class="text-secondary mt-2">As informacoes sobre compensacao de energia e modalidades de GD seguem a Lei 14.300 e as regras vigentes do SCEE/MMGD. Consulte a ANEEL para detalhes atualizados.</p></div>
  </div>
</section>`;

  pages.push({
    filename: 'termos.html', slug: 'termos', noindex: true,
    html: T.renderLayout({
      store, data, title: 'Termos de Uso | SolMais', description: 'Termos de uso da plataforma demonstrativa SolMais.',
      canonical: '/termos.html', active: '', noindex: true,
      structuredData: T.renderBreadcrumbSchema([{ label: 'Inicio', href: 'index.html' }, { label: 'Termos' }], store.url),
      content: termosContent
    })
  });

  return pages;
}

module.exports = { render };
