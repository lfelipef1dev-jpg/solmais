/* SolMais — Financeiro (comparador compra/financiamento/assinatura) */

function render(data, T) {
  const store = data.store;
  const financial = data.financial || [];
  const bcItems = [{ label: 'Inicio', href: 'index.html' }, { label: 'Simulador', href: 'simulador.html' }, { label: 'Financeiro' }];

  const content = `<section class="section">
  <div class="container">
    ${T.renderBreadcrumb(bcItems)}
    <div class="section-header">
      <h2>Comparador de aquisicao</h2>
      <p>Compare formas de aquisicao — cenarios demonstrativos</p>
    </div>

    <div class="grid grid-3 mb-6">
      ${financial.map(f => `
      <div class="card" style="text-align: center">
        <div class="kpi-card-icon solar" style="margin: 0 auto var(--space-3)">${T.ICONS[f.icon] || T.ICONS.cash}</div>
        <h3 style="font-size: var(--fs-lg)">${f.name}</h3>
        <p class="text-sm text-muted mt-2">${T.escapeHtml(f.description)}</p>
        ${f.investment > 0 ? '<div class="kpi-value text-solar mt-4">' + T.formatBRL(f.investment) + '</div><div class="kpi-label">Investimento demo</div>' : '<div class="kpi-value text-solar mt-4">R$ 0</div><div class="kpi-label">Sem investimento inicial</div>'}
        ${f.payback ? '<p class="text-sm mt-3">Payback: <strong>' + f.payback + ' anos</strong></p>' : '<p class="text-sm mt-3">Sem payback definido</p>'}
        <p class="text-sm text-secondary mt-2">Economia/mes: <strong>${T.formatBRL(f.monthlySavings)}</strong></p>
      </div>`).join('')}
    </div>

    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-4)">Detalhes por modalidade</h3>
      ${financial.map(f => `
      <div style="border-bottom: 1px solid var(--border); padding: var(--space-4) 0">
        <h4 style="margin-bottom: var(--space-3)">${f.name}</h4>
        <div class="grid grid-3">
          ${f.details.entrada !== undefined ? '<div class="kpi-card"><div class="kpi-value">' + (f.details.entrada > 0 ? T.formatBRL(f.details.entrada) : 'R$ 0') + '</div><div class="kpi-label">Entrada</div></div>' : ''}
          ${f.details.parcelas ? '<div class="kpi-card"><div class="kpi-value">' + f.details.parcelas + 'x</div><div class="kpi-label">Parcelas</div></div>' : ''}
          ${f.details.valorParcela ? '<div class="kpi-card"><div class="kpi-value">' + T.formatBRL(f.details.valorParcela) + '</div><div class="kpi-label">Valor da parcela</div></div>' : ''}
          ${f.details.taxa ? '<div class="kpi-card"><div class="kpi-value">' + f.details.taxa + '%</div><div class="kpi-label">Taxa demo (a.m.)</div></div>' : ''}
          ${f.details.mensalidade ? '<div class="kpi-card"><div class="kpi-value">' + T.formatBRL(f.details.mensalidade) + '</div><div class="kpi-label">Mensalidade</div></div>' : ''}
          ${f.details.economia25anos ? '<div class="kpi-card"><div class="kpi-value text-solar">' + T.formatBRL(f.details.economia25anos) + '</div><div class="kpi-label">Economia 25 anos</div></div>' : ''}
        </div>
        <div class="grid grid-2 mt-4">
          <div><strong class="text-gen">Vantagens:</strong><ul style="margin-top: var(--space-2); padding-left: var(--space-4); list-style: disc">${f.pros.map(p => '<li class="text-sm text-secondary">' + T.escapeHtml(p) + '</li>').join('')}</ul></div>
          <div><strong class="text-warn">Desvantagens:</strong><ul style="margin-top: var(--space-2); padding-left: var(--space-4); list-style: disc">${f.cons.map(c => '<li class="text-sm text-secondary">' + T.escapeHtml(c) + '</li>').join('')}</ul></div>
        </div>
        <p class="text-xs text-muted mt-4">${T.escapeHtml(f.disclaimer)}</p>
      </div>`).join('')}
    </div>

    <div class="chart-container">
      <h3>Energia convencional vs Solar — projecao 25 anos (dados demonstrativos)</h3>
      <div class="bar-chart" style="height: 200px">
        ${Array.from({ length: 25 }).map((_, i) => {
          const year = i + 1;
          const conv = 7800 * year * (1 + i * 0.04);
          const solar = (7800 - 5760) * year;
          const max = 240000;
          const convH = (conv / max * 100).toFixed(0);
          const solarH = (solar / max * 100).toFixed(0);
          return '<div style="flex:1;display:flex;gap:2px;align-items:flex-end;height:100%;position:relative">' +
            '<div class="bar-chart-item estimated" style="height:' + convH + '%;flex:1"></div>' +
            '<div class="bar-chart-item gen" style="height:' + solarH + '%;flex:1"></div>' +
            (year % 5 === 0 ? '<span class="bar-chart-label">A' + year + '</span>' : '') + '</div>';
        }).join('')}
      </div>
      <div class="text-xs text-muted mt-4">
        <span style="display:inline-block;width:12px;height:12px;background:var(--elevated);border:1px solid var(--border-strong);border-radius:2px;vertical-align:middle;margin-right:4px"></span> Sem solar
        <span style="display:inline-block;width:12px;height:12px;background:var(--gen);border-radius:2px;vertical-align:middle;margin-left:12px;margin-right:4px"></span> Com solar
      </div>
      <p class="text-xs text-muted mt-4">Cenarios ficticios — nao constituem oferta de credito ou proposta comercial.</p>
    </div>
  </div>
</section>`;

  return [{
    filename: 'financeiro.html', slug: 'financeiro', noindex: false,
    html: T.renderLayout({
      store, data, title: 'Cenarios Financeiros',
      description: 'Compare formas de aquisicao de energia solar: a vista, financiamento e assinatura. Veja investimento, parcelas, payback e economia acumulada projetada em 25 anos.',
      canonical: '/financeiro.html', active: 'simulador',
      structuredData: T.renderBreadcrumbSchema(bcItems, store.url), content
    })
  }];
}

module.exports = { render };
