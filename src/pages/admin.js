/* SolMais — Admin
   Login gate + Dashboard + Pipeline + Projetos + Instalacoes + Sistemas + Monitoramento + Alertas + Clientes + Financeiro + Documentos + Analytics + Config */

function render(data, T) {
  const store = data.store;
  const systems = data.systems || [];
  const projects = data.projects || [];
  const customers = data.customers || [];
  const alerts = data.alerts || [];
  const tickets = data.tickets || [];
  const documents = data.documents || [];
  const pages = [];

  const sidebar = `<div class="admin-sidebar">
  <h3>Operacao</h3>
  <ul class="admin-menu">
    <li><a href="admin.html" class="active">${T.ICONS.chart} Dashboard</a></li>
    <li><a href="admin-pipeline.html">${T.ICONS.grid} Pipeline</a></li>
    <li><a href="admin-projetos.html">${T.ICONS.panel} Projetos</a></li>
    <li><a href="admin-instalacoes.html">${T.ICONS.settings} Instalacoes</a></li>
    <li><a href="admin-sistemas.html">${T.ICONS.bolt} Sistemas</a></li>
    <li><a href="admin-monitoramento.html">${T.ICONS.chart} Monitoramento</a></li>
    <li><a href="admin-alertas.html">${T.ICONS.alert} Alertas</a></li>
    <li><a href="admin-clientes.html">${T.ICONS.user} Clientes</a></li>
    <li><a href="admin-financeiro.html">${T.ICONS.cash} Financeiro</a></li>
    <li><a href="admin-documentos.html">${T.ICONS.doc} Documentos</a></li>
    <li><a href="admin-analytics.html">${T.ICONS.chart} Analytics</a></li>
    <li><a href="admin-config.html">${T.ICONS.settings} Configuracoes</a></li>
  </ul>
  <div style="margin-top: var(--space-6); padding-top: var(--space-4); border-top: 1px solid var(--border)">
    <a href="index.html" class="btn btn-ghost btn-sm btn-block">${T.ICONS.logout} Sair</a>
  </div>
</div>`;

  /* ----- Admin Dashboard ----- */
  const totalPower = systems.reduce((s, x) => s + x.power, 0);
  const totalGen = systems.reduce((s, x) => s + x.production.today, 0);
  const activeAlerts = alerts.filter(a => a.status === 'aberto').length;

  const dashContent = `<div class="admin-layout">
  ${sidebar}
  <div class="admin-content">
    <h1 style="margin-bottom: var(--space-2)">Dashboard</h1>
    <p class="text-secondary mb-6">Visao geral da operacao — dados demonstrativos</p>

    <div class="admin-kpi-grid">
      <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.bolt}</div><div class="kpi-value">${projects.length}</div><div class="kpi-label">Projetos ativos</div></div>
      <div class="kpi-card"><div class="kpi-card-icon info">${T.ICONS.settings}</div><div class="kpi-value">${projects.filter(p => p.stage === 'instalacao').length}</div><div class="kpi-label">Em instalacao</div></div>
      <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.panel}</div><div class="kpi-value">${totalPower} kWp</div><div class="kpi-label">Potencia instalada</div></div>
      <div class="kpi-card"><div class="kpi-card-icon ${activeAlerts > 0 ? 'warn' : 'gen'}">${T.ICONS.alert}</div><div class="kpi-value">${activeAlerts}</div><div class="kpi-label">Alertas abertos</div></div>
    </div>

    <div class="grid grid-2">
      <div class="card">
        <h3 style="margin-bottom: var(--space-4)">Projetos por estagio</h3>
        <div class="bar-chart" style="height: 180px">
          ${[
            { label: 'Simulacao', count: projects.filter(p => p.stage === 'simulacao').length },
            { label: 'Documentacao', count: projects.filter(p => p.stage === 'documentacao').length },
            { label: 'Instalacao', count: projects.filter(p => p.stage === 'instalacao').length },
            { label: 'Monitoramento', count: projects.filter(p => p.stage === 'monitoramento').length }
          ].map(s => {
            const max = 5;
            const h = (s.count / max * 100).toFixed(0);
            return '<div class="bar-chart-item" style="height:' + (h > 0 ? h : 5) + '%"><span class="bar-chart-label">' + s.label + '</span></div>';
          }).join('')}
        </div>
      </div>
      <div class="card">
        <h3 style="margin-bottom: var(--space-4)">Geração hoje por sistema</h3>
        <div class="bar-chart" style="height: 180px">
          ${systems.map(s => {
            const max = Math.max(...systems.map(x => x.production.today));
            const h = (s.production.today / max * 100).toFixed(0);
            return '<div class="bar-chart-item gen" style="height:' + h + '%"><span class="bar-chart-label">' + s.projectId.replace('SOL-','') + '</span></div>';
          }).join('')}
        </div>
      </div>
    </div>

    <div class="card mt-6">
      <h3 style="margin-bottom: var(--space-4)">Alertas recentes</h3>
      <table class="data-table">
        <tr><th>Sistema</th><th>Alerta</th><th>Severidade</th><th>Status</th></tr>
        ${alerts.map(a => `<tr><td>${a.projectId}</td><td>${T.escapeHtml(a.title)}</td><td><span class="badge ${a.severity === 'alto' ? 'badge-danger' : a.severity === 'medio' ? 'badge-warn' : 'badge-info'}">${a.severity}</span></td><td><span class="badge ${a.status === 'resolvido' ? 'badge-success' : 'badge-warn'}">${a.status}</span></td></tr>`).join('')}
      </table>
    </div>
  </div>
</div>`;

  pages.push({
    filename: 'admin.html', slug: 'admin', noindex: true,
    html: T.renderLayout({
      store, data, title: 'Admin Dashboard | SolMais', description: 'Painel administrativo demonstrativo.',
      canonical: '/admin.html', active: '', noindex: true,
      cssFiles: ['base.css', 'components.css', 'pages.css'],
      content: dashContent
    })
  });

  /* ----- Helper for sub-pages ----- */
  function adminPage(filename, title, content) {
    return {
      filename, slug: filename.replace('.html', ''), noindex: true,
      html: T.renderLayout({
        store, data, title: title + ' | SolMais Admin', description: 'Painel administrativo demonstrativo.',
        canonical: '/' + filename, active: '', noindex: true,
        content: '<div class="admin-layout">' + sidebar + '<div class="admin-content">' + content + '</div></div>'
      })
    };
  }

  /* ----- Pipeline (Kanban) ----- */
  const stages = [
    { id: 'simulacao', label: 'Simulacao' },
    { id: 'documentacao', label: 'Documentacao' },
    { id: 'instalacao', label: 'Instalacao' },
    { id: 'monitoramento', label: 'Conectado' }
  ];
  const pipelineContent = `
    <h1 style="margin-bottom: var(--space-2)">Pipeline</h1>
    <p class="text-secondary mb-6">Fluxo de projetos — arraste cards entre colunas (demonstrativo)</p>
    <div class="kanban">
      ${stages.map(stage => {
        const items = projects.filter(p => p.stage === stage.id);
        return `<div class="kanban-col" data-stage="${stage.id}">
          <div class="kanban-col-header"><span class="kanban-col-title">${stage.label}</span><span class="kanban-col-count">${items.length}</span></div>
          ${items.map(p => `<div class="kanban-card" draggable="true" ondragstart="SolMais.dragStart(event,'${p.id}')" ondragend="SolMais.dragEnd(event)">
            <div class="kanban-card-title">${p.id}</div>
            <div class="kanban-card-meta">${T.escapeHtml(p.customerName)} — ${p.power} kWp</div>
            <div class="kanban-card-meta">${T.escapeHtml(p.location)}</div>
          </div>`).join('')}
        </div>`;
      }).join('')}
    </div>
    <p class="text-xs text-muted mt-4">Kanban demonstrativo — alteracoes persistem apenas no seu navegador</p>
  `;
  pages.push(adminPage('admin-pipeline.html', 'Pipeline', pipelineContent));

  /* ----- Projetos ----- */
  const projContent = `
    <h1 style="margin-bottom: var(--space-2)">Projetos</h1>
    <p class="text-secondary mb-6">Gestao de projetos — dados demonstrativos</p>
    <div class="card">
      <table class="data-table">
        <tr><th>ID</th><th>Cliente</th><th>Local</th><th>Potencia</th><th>Estagio</th><th>Status</th></tr>
        ${projects.map(p => `<tr>
          <td><strong>${p.id}</strong></td>
          <td>${T.escapeHtml(p.customerName)}</td>
          <td>${T.escapeHtml(p.location)}</td>
          <td>${p.power} kWp</td>
          <td>${T.escapeHtml(p.stage)}</td>
          <td><span class="badge ${p.status === 'conectado' ? 'badge-success' : p.status === 'alerta' ? 'badge-danger' : 'badge-info'}">${p.status}</span></td>
        </tr>`).join('')}
      </table>
    </div>
  `;
  pages.push(adminPage('admin-projetos.html', 'Projetos', projContent));

  /* ----- Instalacoes ----- */
  const instContent = `
    <h1 style="margin-bottom: var(--space-2)">Instalacoes</h1>
    <p class="text-secondary mb-6">Calendario e equipes — dados demonstrativos</p>
    <div class="card mb-6">
      <table class="data-table">
        <tr><th>Projeto</th><th>Equipe</th><th>Cidade</th><th>Data</th><th>Potencia</th><th>Status</th></tr>
        ${projects.filter(p => p.installedAt).map((p, i) => `<tr>
          <td><strong>${p.id}</strong></td>
          <td>Equipe ${['A', 'B', 'A', 'C', 'B'][i % 5]}</td>
          <td>${T.escapeHtml(p.location)}</td>
          <td>${p.installedAt}</td>
          <td>${p.power} kWp</td>
          <td><span class="badge ${p.stage === 'monitoramento' ? 'badge-success' : 'badge-warn'}">${p.stage === 'monitoramento' ? 'Concluida' : 'Em andamento'}</span></td>
        </tr>`).join('')}
      </table>
    </div>
    <div class="card">
      <h3 style="margin-bottom: var(--space-4)">Checklist padrao de instalacao</h3>
      <div class="timeline">
        ${['Estrutura de fixacao','Modulos fotovoltaicos','Inversor','Cabeamento CC e CA','Protecoes','Testes de comunicacao','Energizacao','Fotos demonstrativas'].map((item, i) => `
        <div class="timeline-item"><div class="timeline-dot done">${T.ICONS.check}</div><div class="timeline-content"><h4>${item}</h4></div></div>`).join('')}
      </div>
    </div>
  `;
  pages.push(adminPage('admin-instalacoes.html', 'Instalacoes', instContent));

  /* ----- Sistemas (frota) ----- */
  const sysContent = `
    <h1 style="margin-bottom: var(--space-2)">Sistemas</h1>
    <p class="text-secondary mb-6">Monitoramento da frota — ${systems.length} sistemas demonstrativos</p>
    <div class="admin-kpi-grid mb-6">
      <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.check}</div><div class="kpi-value">${systems.filter(s => s.health.system === 'normal').length}</div><div class="kpi-label">Normais</div></div>
      <div class="kpi-card"><div class="kpi-card-icon warn">${T.ICONS.alert}</div><div class="kpi-value">${systems.filter(s => s.health.system === 'atencao').length}</div><div class="kpi-label">Atencao</div></div>
      <div class="kpi-card"><div class="kpi-card-icon warn" style="background:var(--danger-soft);color:var(--danger)">${T.ICONS.alert}</div><div class="kpi-value">${systems.filter(s => s.health.system === 'alerta').length}</div><div class="kpi-label">Alerta</div></div>
      <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.panel}</div><div class="kpi-value">${totalPower} kWp</div><div class="kpi-label">Potencia total</div></div>
    </div>
    <div class="card">
      <table class="data-table">
        <tr><th>Sistema</th><th>Cliente</th><th>Local</th><th>Potencia</th><th>Geracao hoje</th><th>Status</th><th>Ultima comun.</th></tr>
        ${systems.map(s => `<tr>
          <td><strong>${s.projectId}</strong></td>
          <td>${T.escapeHtml(s.customerName)}</td>
          <td>${T.escapeHtml(s.location)}</td>
          <td>${s.power} kWp</td>
          <td>${s.production.today} kWh</td>
          <td><span class="status-dot ${s.health.system === 'normal' ? 'normal' : s.health.system === 'atencao' ? 'atencao' : 'alerta'}"></span> ${s.health.system}</td>
          <td>${s.health.lastUpdate}</td>
        </tr>`).join('')}
      </table>
    </div>
  `;
  pages.push(adminPage('admin-sistemas.html', 'Sistemas', sysContent));

  /* ----- Monitoramento admin ----- */
  const monContent = `
    <h1 style="margin-bottom: var(--space-2)">Monitoramento</h1>
    <p class="text-secondary mb-6">Visao consolidada da geracao — dados demonstrativos</p>
    <div class="admin-kpi-grid mb-6">
      <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.bolt}</div><div class="kpi-value">${totalGen.toFixed(1)}</div><div class="kpi-label">kWh gerados hoje</div></div>
      <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.chart}</div><div class="kpi-value">${systems.reduce((s,x)=>s+x.production.month,0).toLocaleString('pt-BR')}</div><div class="kpi-label">kWh este mes</div></div>
      <div class="kpi-card"><div class="kpi-card-icon info">${T.ICONS.chart}</div><div class="kpi-value">${(systems.reduce((s,x)=>s+x.production.year,0)/1000).toFixed(1)} MWh</div><div class="kpi-label">MWh este ano</div></div>
      <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.cash}</div><div class="kpi-value">${T.formatBRL(systems.reduce((s,x)=>s+x.estimatedSavings,0))}</div><div class="kpi-label">Economia estimada/mes</div></div>
    </div>
    <div class="card">
      <h3 style="margin-bottom: var(--space-4)">Geracao por sistema (hoje)</h3>
      <div class="bar-chart" style="height: 200px">
        ${systems.map(s => {
          const max = Math.max(...systems.map(x => x.production.today));
          const h = (s.production.today / max * 100).toFixed(0);
          return '<div class="bar-chart-item gen" style="height:' + h + '%"><span class="bar-chart-label">' + s.projectId.replace('SOL-','') + '</span></div>';
        }).join('')}
      </div>
    </div>
  `;
  pages.push(adminPage('admin-monitoramento.html', 'Monitoramento', monContent));

  /* ----- Alertas ----- */
  const alertContent = `
    <h1 style="margin-bottom: var(--space-2)">Central de alertas</h1>
    <p class="text-secondary mb-6">Alertas do sistema — dados demonstrativos</p>
    <div class="card">
      <table class="data-table">
        <tr><th>ID</th><th>Sistema</th><th>Tipo</th><th>Severidade</th><th>Descricao</th><th>Status</th><th>Acoes</th></tr>
        ${alerts.map(a => `<tr>
          <td><strong>${a.id}</strong></td>
          <td>${a.projectId}</td>
          <td>${T.escapeHtml(a.type)}</td>
          <td><span class="badge ${a.severity === 'alto' ? 'badge-danger' : a.severity === 'medio' ? 'badge-warn' : 'badge-info'}">${a.severity}</span></td>
          <td>${T.escapeHtml(a.description)}</td>
          <td><span class="badge ${a.status === 'resolvido' ? 'badge-success' : 'badge-warn'}">${a.status}</span></td>
          <td><button class="btn btn-ghost btn-sm" onclick="SolMais.toast('Acao demonstrativa', 'info')">Ver</button></td>
        </tr>`).join('')}
      </table>
    </div>
  `;
  pages.push(adminPage('admin-alertas.html', 'Alertas', alertContent));

  /* ----- Clientes ----- */
  const cusContent = `
    <h1 style="margin-bottom: var(--space-2)">Clientes</h1>
    <p class="text-secondary mb-6">${customers.length} clientes demonstrativos</p>
    <div class="card">
      <table class="data-table">
        <tr><th>ID</th><th>Nome</th><th>Tipo</th><th>Cidade</th><th>Sistema</th><th>Economia/mes</th><th>Desde</th></tr>
        ${customers.map(c => `<tr>
          <td><strong>${c.id}</strong></td>
          <td>${T.escapeHtml(c.name)}</td>
          <td>${T.escapeHtml(c.type)}</td>
          <td>${T.escapeHtml(c.city)}/${T.escapeHtml(c.state)}</td>
          <td>${c.projectId}</td>
          <td>${T.formatBRL(c.monthlySavings)}</td>
          <td>${c.since}</td>
        </tr>`).join('')}
      </table>
    </div>
  `;
  pages.push(adminPage('admin-clientes.html', 'Clientes', cusContent));

  /* ----- Financeiro admin ----- */
  const finContent = `
    <h1 style="margin-bottom: var(--space-2)">Financeiro</h1>
    <p class="text-secondary mb-6">Visao financeira demonstrativa</p>
    <div class="admin-kpi-grid mb-6">
      <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.cash}</div><div class="kpi-value">${T.formatBRL(366000)}</div><div class="kpi-label">Receita demo (a vista)</div></div>
      <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.cash}</div><div class="kpi-value">${T.formatBRL(28800)}</div><div class="kpi-label">Mensalidades assinatura</div></div>
      <div class="kpi-card"><div class="kpi-card-icon info">${T.ICONS.cash}</div><div class="kpi-value">${T.formatBRL(156000)}</div><div class="kpi-label">Financiamento ativo</div></div>
      <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.chart}</div><div class="kpi-value">${T.formatBRL(systems.reduce((s,x)=>s+x.estimatedSavings,0))}</div><div class="kpi-label">Economia clientes/mes</div></div>
    </div>
    <div class="card">
      <h3 style="margin-bottom: var(--space-4)">Receita por modalidade</h3>
      <table class="data-table">
        <tr><th>Modalidade</th><th>Clientes</th><th>Receita demo</th></tr>
        <tr><td>A vista</td><td>${customers.filter(c=>c.contractType==='a-vista').length}</td><td>${T.formatBRL(207000)}</td></tr>
        <tr><td>Financiamento</td><td>${customers.filter(c=>c.contractType==='financiamento').length}</td><td>${T.formatBRL(133000)}</td></tr>
        <tr><td>Assinatura</td><td>${customers.filter(c=>c.contractType==='assinatura').length}</td><td>${T.formatBRL(200 * 12)}</td></tr>
      </table>
      <p class="text-xs text-muted mt-4">Valores demonstrativos — nao constituem receita real.</p>
    </div>
  `;
  pages.push(adminPage('admin-financeiro.html', 'Financeiro', finContent));

  /* ----- Documentos admin ----- */
  const docContent = `
    <h1 style="margin-bottom: var(--space-2)">Documentos</h1>
    <p class="text-secondary mb-6">Gestao documental — dados demonstrativos</p>
    <div class="card">
      <table class="data-table">
        <tr><th>Documento</th><th>Projeto</th><th>Tipo</th><th>Tamanho</th><th>Data</th></tr>
        ${documents.map(d => `<tr>
          <td>${T.escapeHtml(d.name)}</td>
          <td>${d.projectId}</td>
          <td>${d.type}</td>
          <td>${d.size}</td>
          <td>${d.uploadedAt}</td>
        </tr>`).join('')}
      </table>
    </div>
  `;
  pages.push(adminPage('admin-documentos.html', 'Documentos', docContent));

  /* ----- Analytics ----- */
  const anaContent = `
    <h1 style="margin-bottom: var(--space-2)">Analytics</h1>
    <p class="text-secondary mb-6">Metricas da operacao — dados demonstrativos</p>
    <div class="admin-kpi-grid mb-6">
      <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.bolt}</div><div class="kpi-value">142</div><div class="kpi-label">Simulacoes (mes)</div></div>
      <div class="kpi-card"><div class="kpi-card-icon gen">${T.ICONS.chart}</div><div class="kpi-value">38%</div><div class="kpi-label">Conversao</div></div>
      <div class="kpi-card"><div class="kpi-card-icon info">${T.ICONS.cash}</div><div class="kpi-value">${T.formatBRL(32000)}</div><div class="kpi-label">Ticket demo</div></div>
      <div class="kpi-card"><div class="kpi-card-icon solar">${T.ICONS.panel}</div><div class="kpi-value">${totalPower} kWp</div><div class="kpi-label">Potencia projetada</div></div>
    </div>
    <div class="grid grid-2">
      <div class="card">
        <h3 style="margin-bottom: var(--space-4)">Origem de leads</h3>
        <div class="bar-chart" style="height: 160px">
          ${[{l:'Site',v:45},{l:'Google',v:30},{l:'Indic.',v:15},{l:'Social',v:10}].map(s => {
            const h = (s.v * 2);
            return '<div class="bar-chart-item" style="height:' + h + '%"><span class="bar-chart-label">' + s.l + ' ' + s.v + '%</span></div>';
          }).join('')}
        </div>
      </div>
      <div class="card">
        <h3 style="margin-bottom: var(--space-4)">Tipos de imovel</h3>
        <div class="bar-chart" style="height: 160px">
          ${[{l:'Resid.',v:60},{l:'Comer.',v:25},{l:'Cond.',v:10},{l:'Rural',v:5}].map(s => {
            const h = (s.v * 1.5);
            return '<div class="bar-chart-item gen" style="height:' + h + '%"><span class="bar-chart-label">' + s.l + ' ' + s.v + '%</span></div>';
          }).join('')}
        </div>
      </div>
    </div>
    <div class="card mt-6">
      <h3 style="margin-bottom: var(--space-4)">Distribuicao por regiao</h3>
      <table class="data-table">
        <tr><th>Regiao</th><th>Projetos</th><th>Potencia</th><th>% do total</th></tr>
        <tr><td>Santos</td><td>2</td><td>9,9 kWp</td><td>15%</td></tr>
        <tr><td>Sao Vicente</td><td>1</td><td>18 kWp</td><td>27%</td></tr>
        <tr><td>Praia Grande</td><td>1</td><td>35 kWp</td><td>53%</td></tr>
        <tr><td>Guaruja</td><td>1</td><td>6,6 kWp</td><td>10%</td></tr>
        <tr><td>Cubatao</td><td>1</td><td>4,4 kWp</td><td>7%</td></tr>
      </table>
    </div>
  `;
  pages.push(adminPage('admin-analytics.html', 'Analytics', anaContent));

  /* ----- Config ----- */
  const confContent = `
    <h1 style="margin-bottom: var(--space-2)">Configuracoes</h1>
    <p class="text-secondary mb-6">Configuracoes da plataforma — demonstrativo</p>
    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-4)">Dados da empresa (demo)</h3>
      <div class="grid grid-2">
        <div class="field"><label class="label">Nome</label><input type="text" class="input" value="${T.escapeHtml(store.name)}" disabled></div>
        <div class="field"><label class="label">Email</label><input type="text" class="input" value="${T.escapeHtml(store.email)}" disabled></div>
        <div class="field"><label class="label">Cidade</label><input type="text" class="input" value="${T.escapeHtml(store.city)}" disabled></div>
        <div class="field"><label class="label">Regiao</label><input type="text" class="input" value="${T.escapeHtml(store.region)}" disabled></div>
      </div>
    </div>
    <div class="card mb-6">
      <h3 style="margin-bottom: var(--space-4)">Preferencias</h3>
      <div class="field"><label class="label">Notificacoes de alertas</label><select class="select"><option>Ativado</option><option>Desativado</option></select></div>
      <div class="field"><label class="label">Relatorios automaticos</label><select class="select"><option>Ativado</option><option>Desativado</option></select></div>
      <button class="btn btn-primary" onclick="SolMais.toast('Configuracoes salvas (demo)', 'success')">Salvar</button>
    </div>
    <div class="card">
      <p class="text-xs text-muted">Plataforma demonstrativa — todas as configuracoes sao ficticias.</p>
    </div>
  `;
  pages.push(adminPage('admin-config.html', 'Configuracoes', confContent));

  return pages;
}

module.exports = { render };
