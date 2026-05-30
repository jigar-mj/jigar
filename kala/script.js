/* ===== KALA — interactions ===== */
(function () {
  'use strict';

  /* Current year in footer */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* Navbar background on scroll */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  var burger = document.getElementById('burger');
  var links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      links.classList.toggle('open');
      burger.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        burger.classList.remove('open');
      });
    });
  }

  /* Reveal on scroll */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* Service chips (multi-select) */
  var chipsBox = document.getElementById('chips');
  var servicesInput = document.getElementById('services');
  if (chipsBox && servicesInput) {
    chipsBox.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;
      chip.classList.toggle('active');
      var selected = [];
      chipsBox.querySelectorAll('.chip.active').forEach(function (c) {
        selected.push(c.getAttribute('data-val'));
      });
      servicesInput.value = selected.join(', ');
    });
  }

  /* Form submit -> Web3Forms */
  var form = document.getElementById('kala-form');
  var note = document.getElementById('formNote');
  var btn = document.getElementById('submitBtn');
  var emailField = document.getElementById('email');
  var emailWrap = emailField ? emailField.closest('.field') : null;
  var success = document.getElementById('success');
  var successClose = document.getElementById('successClose');
  var accessKey = document.getElementById('access_key');

  function isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  function setNote(msg, type) {
    if (!note) return;
    note.textContent = msg || '';
    note.className = 'form-note' + (type ? ' ' + type : '');
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      setNote('', '');

      /* validate email (only required field) */
      if (!emailField || !isEmail(emailField.value.trim())) {
        if (emailWrap) emailWrap.classList.add('invalid');
        if (emailField) emailField.focus();
        return;
      }
      if (emailWrap) emailWrap.classList.remove('invalid');

      /* guard: form not configured yet */
      if (!accessKey || accessKey.value.indexOf('REPLACE_WITH') === 0) {
        setNote('Form is almost ready — add your Web3Forms key to start receiving requests.', 'bad');
        return;
      }

      btn.disabled = true;
      var original = btn.textContent;
      btn.textContent = 'Sending…';

      var data = new FormData(form);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res.success) {
            form.reset();
            if (servicesInput) servicesInput.value = '';
            chipsBox && chipsBox.querySelectorAll('.chip.active').forEach(function (c) { c.classList.remove('active'); });
            if (success) success.hidden = false;
            setNote('', '');
          } else {
            setNote('Something went wrong. Please try again, or reach us on Upwork.', 'bad');
          }
        })
        .catch(function () {
          setNote('Network error. Please check your connection and try again.', 'bad');
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = original;
        });
    });

    /* clear invalid state as user types */
    if (emailField) {
      emailField.addEventListener('input', function () {
        if (emailWrap && isEmail(emailField.value.trim())) emailWrap.classList.remove('invalid');
      });
    }
  }

  if (successClose && success) {
    successClose.addEventListener('click', function () { success.hidden = true; });
  }
})();
