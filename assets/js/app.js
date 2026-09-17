/* ROSTO LEVE — comportamento compartilhado */
(function () {
  "use strict";
  document.documentElement.classList.add("js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Reveal on scroll ---- */
  function initReveal() {
    var els = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (!els.length) return;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- Comparador antes/depois ---- */
  function initCompare() {
    document.querySelectorAll(".compare").forEach(function (c) {
      var range = c.querySelector(".compare__range");
      var set = function (v) {
        v = Math.max(0, Math.min(100, v));
        c.style.setProperty("--pos", v + "%");
        if (range) range.setAttribute("aria-valuenow", Math.round(v));
      };
      set(50);
      if (!range) return;
      range.addEventListener("input", function () { set(parseFloat(range.value)); });
      // suporte a arrasto direto na área
      var drag = function (clientX) {
        var r = c.getBoundingClientRect();
        var v = ((clientX - r.left) / r.width) * 100;
        set(v); range.value = v;
      };
      var down = false;
      c.addEventListener("pointerdown", function (e) {
        down = true; drag(e.clientX); c.setPointerCapture && c.setPointerCapture(e.pointerId);
      });
      c.addEventListener("pointermove", function (e) { if (down) drag(e.clientX); });
      window.addEventListener("pointerup", function () { down = false; });
    });
  }

  /* ---- FAQ: fecha os demais ao abrir (acordeão) ---- */
  function initFaq() {
    var items = document.querySelectorAll("details.faq__i");
    items.forEach(function (d) {
      d.addEventListener("toggle", function () {
        if (d.open) items.forEach(function (o) { if (o !== d) o.open = false; });
      });
    });
  }

  /* ---- Sticky CTA (mostra após sair do hero) ---- */
  function initSticky() {
    var bar = document.querySelector(".stickybar");
    if (!bar) return;
    var anchor = document.querySelector("[data-sticky-after]") || document.querySelector(".hero");
    if (!anchor || !("IntersectionObserver" in window)) { bar.classList.add("on"); return; }
    var io = new IntersectionObserver(function (entries) {
      bar.classList.toggle("on", !entries[0].isIntersecting);
    }, { threshold: 0 });
    io.observe(anchor);
  }

  /* ---- Ano no rodapé ---- */
  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---- QUIZ engine ---- */
  function initQuiz() {
    var root = document.querySelector("[data-quiz]");
    if (!root) return;
    var steps = Array.prototype.slice.call(root.querySelectorAll(".q-step"));
    var bar = root.querySelector(".q-progress__fill");
    var counter = root.querySelector("[data-q-counter]");
    var total = steps.length; // inclui tela de resultado como última
    var questions = total - 1;
    var idx = 0;
    var answers = {};
    var leadFired = false;

    function show(n) {
      idx = Math.max(0, Math.min(total - 1, n));
      steps.forEach(function (s, i) { s.hidden = i !== idx; });
      if (idx >= questions && !leadFired) {
        leadFired = true;
        if (typeof fbq === "function") fbq("track", "Lead", { content_name: "Quiz Rosto Leve" });
      }
      var pct = idx / questions;
      if (bar) bar.style.transform = "scaleX(" + pct + ")";
      if (counter) counter.textContent = idx < questions ? (idx + 1) + " / " + questions : "";
      var focusable = steps[idx].querySelector("button, [tabindex], input");
      if (focusable) { try { focusable.focus({ preventScroll: true }); } catch (e) {} }
      steps[idx].scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }

    root.addEventListener("click", function (e) {
      var opt = e.target.closest("[data-opt]");
      if (opt) {
        var step = opt.closest(".q-step");
        var key = step.getAttribute("data-key") || ("q" + idx);
        answers[key] = opt.getAttribute("data-opt");
        // marca seleção visual brevemente e avança
        step.querySelectorAll("[data-opt]").forEach(function (b) { b.setAttribute("aria-pressed", b === opt ? "true" : "false"); });
        window.setTimeout(function () { show(idx + 1); }, reduce ? 0 : 220);
        return;
      }
      if (e.target.closest("[data-q-back]")) { show(idx - 1); }
      if (e.target.closest("[data-q-restart]")) { answers = {}; show(0); }
    });

    show(0);
  }

  /* ---- Modal de upgrade (plano Essencial -> Completo) ---- */
  function initUpgradeModal() {
    var modal = document.querySelector('[data-modal="upgrade"]');
    if (!modal) return;
    var lastFocus = null;
    function open() {
      lastFocus = document.activeElement;
      modal.classList.add("on");
      document.body.style.overflow = "hidden";
      var f = modal.querySelector("a, button");
      if (f) { try { f.focus(); } catch (e) {} }
    }
    function close() {
      modal.classList.remove("on");
      document.body.style.overflow = "";
      if (lastFocus) { try { lastFocus.focus(); } catch (e) {} }
    }
    document.querySelectorAll('[data-plan="essencial"]').forEach(function (b) {
      b.addEventListener("click", function (e) { e.preventDefault(); open(); });
    });
    modal.querySelectorAll("[data-modal-close]").forEach(function (b) {
      b.addEventListener("click", close);
    });
    modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("on")) close();
    });
  }

  /* ---- Pixel: InitiateCheckout ao clicar em qualquer link de checkout da Cakto ---- */
  function initCheckoutTracking() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href*="pay.cakto.com.br"]');
      if (a && typeof fbq === "function") {
        fbq("track", "InitiateCheckout", { content_name: a.getAttribute("href") });
      }
    });
  }

  /* ---- Reforço de autoplay dos vídeos (seguro; iOS em Baixo Consumo ainda pode bloquear) ---- */
  function initVideoAutoplay() {
    document.querySelectorAll("video[autoplay]").forEach(function (v) {
      try {
        v.muted = true; v.setAttribute("muted", ""); v.playsInline = true;
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      } catch (e) {}
    });
  }

  function boot() {
    initReveal(); initCompare(); initFaq(); initSticky(); initYear(); initQuiz(); initUpgradeModal(); initCheckoutTracking(); initVideoAutoplay();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else { boot(); }
})();
