/* SolMais — App JS
   Wizard, quickSim, toast, tickets, kanban, nav toggle, busca FAQ */

(function () {
  'use strict';

  const SolMais = window.SolMais = window.SolMais || {};

  /* ---------- Toast ---------- */
  SolMais.toast = function (msg, type) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const t = document.createElement('div');
    t.className = 'toast ' + (type || 'info');
    t.textContent = msg;
    container.appendChild(t);
    setTimeout(function () { t.remove(); }, 4000);
  };

  /* ---------- Nav toggle ---------- */
  SolMais.initNav = function () {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  };

  /* ---------- Quick sim (home) ---------- */
  SolMais.quickSim = function () {
    const bill = parseFloat(document.getElementById('qs-bill')?.value) || 650;
    const type = document.getElementById('qs-type')?.value || 'residencial';

    // Estimativa simples demonstrativa
    const kWhPerReal = 1.1;
    const consumption = bill * kWhPerReal;
    const systemPower = Math.max(2.2, Math.round((consumption / 120) * 10) / 10);
    const monthlyGen = Math.round(systemPower * 120);
    const savings = Math.round(monthlyGen * 0.75);
    const invest = systemPower * 5800;
    const payback = (invest / (savings * 12)).toFixed(1);

    document.getElementById('qs-power').textContent = systemPower.toFixed(1).replace('.', ',') + ' kWp';
    document.getElementById('qs-gen').textContent = monthlyGen + ' kWh';
    document.getElementById('qs-save').textContent = 'R$ ' + savings.toLocaleString('pt-BR');
    document.getElementById('qs-payback').textContent = payback.replace('.', ',') + ' anos';
    document.getElementById('qs-result').classList.remove('hidden');
    SolMais.toast('Estimativa calculada — dados demonstrativos', 'success');
  };

  /* ---------- Wizard ---------- */
  let wizardStep = 1;
  const totalSteps = 6;

  SolMais.wizardNext = function () {
    if (wizardStep < totalSteps) {
      wizardStep++;
      SolMais.wizardShow(wizardStep);
    }
  };

  SolMais.wizardPrev = function () {
    if (wizardStep > 1) {
      wizardStep--;
      SolMais.wizardShow(wizardStep);
    }
  };

  SolMais.wizardShow = function (step) {
    document.querySelectorAll('.wizard-panel').forEach(function (p) {
      p.classList.add('hidden');
    });
    const panel = document.querySelector('.wizard-panel[data-panel="' + step + '"]');
    if (panel) panel.classList.remove('hidden');

    document.querySelectorAll('.wizard-step').forEach(function (s, i) {
      s.classList.remove('active', 'done');
      if (i + 1 < step) s.classList.add('done');
      else if (i + 1 === step) s.classList.add('active');
    });

    const prev = document.getElementById('wizard-prev');
    const next = document.getElementById('wizard-next');
    if (prev) prev.disabled = step === 1;
    if (next) {
      if (step === totalSteps) {
        next.textContent = 'Concluido';
        next.onclick = function () { window.location.href = 'comparador.html'; };
      } else {
        next.innerHTML = 'Proximo \u2192';
        next.onclick = SolMais.wizardNext;
      }
    }
  };

  /* ---------- Option cards (selectable) ---------- */
  SolMais.initOptionCards = function () {
    document.querySelectorAll('.option-grid').forEach(function (grid) {
      const cards = grid.querySelectorAll('.option-card');
      cards.forEach(function (card) {
        card.addEventListener('click', function () {
          cards.forEach(function (c) { c.classList.remove('selected'); });
          card.classList.add('selected');
        });
      });
    });

    // Consumo type toggle
    const consumoType = document.getElementById('sim-consumo-type');
    if (consumoType) {
      consumoType.querySelectorAll('.option-card').forEach(function (card) {
        card.addEventListener('click', function () {
          const val = card.getAttribute('data-value');
          ['sim-conta-field', 'sim-kwh-field', 'sim-historico-field'].forEach(function (id) {
            const el = document.getElementById(id);
            if (el) el.classList.add('hidden');
          });
          const map = { conta: 'sim-conta-field', kwh: 'sim-kwh-field', historico: 'sim-historico-field' };
          const target = document.getElementById(map[val]);
          if (target) target.classList.remove('hidden');
        });
      });
    }
  };

  /* ---------- Create ticket ---------- */
  SolMais.createTicket = function () {
    const cat = document.getElementById('ticket-cat')?.value;
    const subject = document.getElementById('ticket-subject')?.value;
    const desc = document.getElementById('ticket-desc')?.value;
    const prio = document.getElementById('ticket-prio')?.value;

    if (!subject || !desc) {
      SolMais.toast('Preencha assunto e descricao', 'warn');
      return;
    }

    const id = 'SOL-' + Math.floor(4000 + Math.random() * 999);
    const list = document.getElementById('tickets-list');
    if (list) {
      const item = document.createElement('div');
      item.className = 'doc-item';
      item.innerHTML = '<div class="doc-icon" style="background:var(--info-soft);color:var(--info)">' +
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div>' +
        '<div class="doc-info"><div class="doc-name">#' + id + ' — ' + subject + '</div>' +
        '<div class="doc-meta"><span class="badge badge-info">aberto</span> ' + prio + ' — agora</div></div>';
      list.insertBefore(item, list.firstChild);
    }

    // Persist
    try {
      const tickets = JSON.parse(localStorage.getItem('solmais_tickets') || '[]');
      tickets.push({ id, cat, subject, desc, prio, status: 'aberto', createdAt: new Date().toISOString() });
      localStorage.setItem('solmais_tickets', JSON.stringify(tickets));
    } catch (e) {}

    SolMais.toast('Chamado #' + id + ' aberto (demonstrativo)', 'success');
    if (document.getElementById('ticket-subject')) document.getElementById('ticket-subject').value = '';
    if (document.getElementById('ticket-desc')) document.getElementById('ticket-desc').value = '';
  };

  /* ---------- FAQ search ---------- */
  SolMais.searchFaq = function (q) {
    // Demo: apenas feedback visual
    const cats = document.querySelectorAll('.support-cat');
    if (!q) {
      cats.forEach(function (c) { c.style.opacity = '1'; });
      return;
    }
    cats.forEach(function (c) {
      const text = c.textContent.toLowerCase();
      c.style.opacity = text.indexOf(q.toLowerCase()) >= 0 ? '1' : '0.3';
    });
  };

  /* ---------- Kanban drag ---------- */
  let draggedId = null;
  SolMais.dragStart = function (e, id) {
    draggedId = id;
    e.target.style.opacity = '0.5';
  };
  SolMais.dragEnd = function (e) {
    e.target.style.opacity = '1';
  };
  SolMais.initKanban = function () {
    document.querySelectorAll('.kanban-col').forEach(function (col) {
      col.addEventListener('dragover', function (e) { e.preventDefault(); });
      col.addEventListener('drop', function (e) {
        e.preventDefault();
        const card = document.querySelector('.kanban-card[draggable="true"]');
        if (card && draggedId) {
          col.appendChild(card);
          try {
            const stages = JSON.parse(localStorage.getItem('solmais_pipeline') || '{}');
            stages[draggedId] = col.getAttribute('data-stage');
            localStorage.setItem('solmais_pipeline', JSON.stringify(stages));
          } catch (err) {}
          SolMais.toast('Projeto ' + draggedId + ' movido para ' + col.querySelector('.kanban-col-title').textContent, 'success');
        }
      });
    });
  };

  /* ---------- Init ---------- */
  function init() {
    SolMais.initNav();
    SolMais.initOptionCards();
    SolMais.initKanban();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
