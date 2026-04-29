/* theme.js — Dark mode toggle + Scroll reveal */

(function () {
  'use strict';

  /* ── Dark mode ── */
  const saved = localStorage.getItem('senpai_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(function (btn) {
      btn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
      btn.addEventListener('click', function () {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('senpai_theme', next);
        toggles.forEach(function (b) { b.textContent = next === 'dark' ? '☀️' : '🌙'; });
      });
    });

    /* ── Scroll reveal ── */
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  });
})();
