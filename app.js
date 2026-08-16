/* SolMais — app.js
 * Simulador ilustrativo (sem coleta de dados) + navegação mobile + scroll animations.
 * Projeto de portfólio — sem backend, sem persistência, sem analytics.
 */
(function () {
  'use strict';

  // === Menu mobile ===
  var menuToggle = document.getElementById('menu-toggle');
  var navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
        menuToggle.focus();
      }
    });
  }

  // === Navbar scrolled shadow ===
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    var onScroll = function () {
      if (window.scrollY > 8) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // === Scroll animations (Intersection Observer) ===
  var animatedEls = document.querySelectorAll('[data-animate]');
  if (animatedEls.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.12 });
    animatedEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: mostra tudo
    animatedEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // === Simulador ilustrativo ===
  var calcConta = document.getElementById('calc-conta');
  var calcContaDisplay = document.getElementById('calc-conta-display');
  var calcRegiao = document.getElementById('calc-regiao');
  var calcReducao = document.getElementById('calc-reducao');
  var calcReducaoDisplay = document.getElementById('calc-reducao-display');
  var calcMes = document.getElementById('calc-mes');
  var calcAno = document.getElementById('calc-ano');
  var calc25 = document.getElementById('calc-25');
  var calcPayback = document.getElementById('calc-payback');

  function formatBRL(v) {
    return 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }

  function simular() {
    if (!calcConta) return;
    var conta = parseFloat(calcConta.value) || 0;
    var regiao = parseFloat(calcRegiao.value) || 1.5;
    var reducaoPct = (parseFloat(calcReducao.value) || 90) / 100;

    if (calcContaDisplay) calcContaDisplay.textContent = formatBRL(conta);
    if (calcReducaoDisplay) calcReducaoDisplay.textContent = Math.round(reducaoPct * 100) + '%';
    calcConta.setAttribute('aria-valuenow', String(conta));
    calcReducao.setAttribute('aria-valuenow', String(Math.round(reducaoPct * 100)));

    var economiaMes = conta * reducaoPct;
    var economiaAno = economiaMes * 12;
    var economia25 = economiaAno * 25;

    var tarifa = 0.95;
    var kwhMes = conta / tarifa;
    var kwp = kwhMes / (regiao * 30) / 1.2;
    var investimento = kwp * 4000;
    var payback = economiaAno > 0 ? Math.max(2, Math.round(investimento / economiaAno)) : 0;

    if (calcMes) calcMes.textContent = formatBRL(economiaMes);
    if (calcAno) calcAno.textContent = formatBRL(economiaAno);
    if (calc25) calc25.textContent = formatBRL(economia25);
    if (calcPayback) calcPayback.textContent = payback > 0 ? '~' + payback + ' anos' : '—';
  }

  if (calcConta && calcRegiao && calcReducao) {
    calcConta.addEventListener('input', simular);
    calcRegiao.addEventListener('change', simular);
    calcReducao.addEventListener('input', simular);
    simular();
  }

  // === FAQ: fecha outros ao abrir um ===
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item && other.open) other.open = false;
        });
      }
    });
  });

  // === Smooth scroll para anchors ===
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var headerHeight = navbar ? navbar.offsetHeight : 60;
      var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
})();
