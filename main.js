(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var WORKS = window.WORKS || [], CATS = window.CATS || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  var LANG = "ko";
  try { var q = new URLSearchParams(location.search).get("lang"); LANG = (q === "en" || q === "ko") ? q : (localStorage.getItem("lang") || "ko"); } catch (e) {}
  if (LANG !== "en") LANG = "ko";
  var T = {
    ko: { more: "자세히 보기 →", close: "닫기 ✕", problem: "문제", process: "과정", result: "결과", tools: "사용한 도구", others: function (n) { return "그 밖의 작업 " + n + "건 보기"; }, draft: "상세 내용은 작성 중입니다. 결과 이미지·영상과 과정 설명이 곧 추가됩니다.", res: " 결과물" },
    en: { more: "View details →", close: "Close ✕", problem: "Problem", process: "Process", result: "Result", tools: "Tools used", others: function (n) { return "Show " + n + " more works"; }, draft: "Details are being written. Result images and a process write-up are coming soon.", res: " result" }
  };
  var t = function (k) { return T[LANG][k]; };
  var CX = function () { return LANG === "en" && window.CATS_EN ? window.CATS_EN : CATS; };
  var W = function (w) { return LANG === "en" && window.WORKS_EN && window.WORKS_EN[w.id] ? Object.assign({}, w, window.WORKS_EN[w.id]) : w; };

  function visual(w, big) {
    w = W(w);
    var m = (w.media || [])[0], inner = "";
    if (m) inner = /\.(mp4|webm)$/i.test(m)
      ? '<video src="' + esc(m) + '" muted loop playsinline autoplay></video>'
      : '<img src="' + esc(m) + '" alt="' + esc(w.title) + '" loading="lazy">';
    return '<div class="vis g-' + esc(w.cat) + '">' + inner + (m ? "" : "<span>" + esc(CX()[w.cat] ? CX()[w.cat].split("·")[0] : "") + "</span>") + "</div>";
  }

  /* hero stats + marquee */
  var cnt = function (el, to) {
    if (reduce) { el.textContent = to; return; }
    var t0 = performance.now();
    (function f(t) { var p = Math.min(1, (t - t0) / 1200); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); })(t0);
  };
  var tools = ["Claude", "ChatGPT", "Google Flow · Veo", "Midjourney", "Sora", "Kling", "Higgsfield", "Canva", "CapCut", "Figma", "Python", "Meta Graph API", "Notion", "GitHub"];
  var mq = tools.map(function (t) { return "<span>" + t + "</span>"; }).join("");
  $("#marq").innerHTML = mq + mq;

  /* featured stack */
  var ORDER = ["smartstore", "slicer-log", "sketchup-ruby", "game-clan", "review-card"];
  var feat = WORKS.filter(function (w) { return w.featured; }).sort(function (a, b) { return ORDER.indexOf(a.id) - ORDER.indexOf(b.id); });
  function renderStack() {
  $("#stack").innerHTML = feat.map(function (w0, i) {
    var w = W(w0);
    return '<article class="stack-card" style="--i:' + i + '" data-id="' + w.id + '" tabindex="0">' +
      '<div><div class="num">0' + (i + 1) + " / " + esc(CX()[w.cat]) + "</div><h3>" + esc(w.title) + "</h3><p>" + esc(w.summary) + '</p><div class="more">" + t("more") + "</div></div>' +
      visual(w, true) + "</article>";
  }).join("");
  }
  renderStack();

  /* works grid + filter */
  var cur = "all";
  function renderChips() {
    $("#chips").innerHTML = Object.keys(CATS).map(function (k) {
      return '<button class="chip' + (k === cur ? " on" : "") + '" data-k="' + k + '">' + esc(CX()[k]) + "</button>";
    }).join("");
  }
  var hasMedia = function (w) { return (w.media || []).length > 0; };
  function renderCards() {
    var shown = WORKS.filter(function (w) { return (cur === "all" || w.cat === cur) && hasMedia(w); }).sort(function (x, y) { return (y.featured ? 1 : 0) - (x.featured ? 1 : 0) || (ORDER.indexOf(x.id) + 99) % 99 - (ORDER.indexOf(y.id) + 99) % 99; });
    $("#cards").innerHTML = shown.map(function (w0, i) {
      var w = W(w0);
      return '<article class="card rv" data-id="' + w.id + '" tabindex="0" style="--d:' + ((i % 3) * 0.08) + 's">' +
        visual(w) + '<div class="body"><div class="cat">' + esc(CX()[w.cat]) + (w.year ? " · " + esc(w.year) : "") + "</div><h3>" + esc(w.title) + "</h3><p>" + esc(w.summary) + '</p><div class="tl">' +
        (w.tools || []).slice(0, 4).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</div></div></article>";
    }).join("");
    var more = WORKS.filter(function (w) { return (cur === "all" || w.cat === cur) && !hasMedia(w) && !w.draft; });
    $("#more").innerHTML = more.length ? '<button class="more-toggle" id="moreBtn" aria-expanded="false">' + t("others")(more.length) + ' <span>＋</span></button>' +
      '<div class="more-list" id="moreList" hidden>' + more.map(function (w0) {
        var w = W(w0);
        return '<div class="row" data-id="' + w.id + '" tabindex="0"><div class="cat">' + esc(CX()[w.cat]) + '</div><div><h3>' + esc(w.title) + '</h3><p>' + esc(w.summary) + '</p></div><span class="go">→</span></div>';
      }).join("") + "</div>" : "";
    observe();
  }
  renderChips(); renderCards();
  $("#more").addEventListener("click", function (e) {
    var b = e.target.closest("#moreBtn"); if (!b) return;
    var l = $("#moreList"), o = l.hidden; l.hidden = !o; b.setAttribute("aria-expanded", o ? "true" : "false"); b.querySelector("span").textContent = o ? "－" : "＋";
  });
  $("#chips").addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    cur = b.dataset.k; renderChips(); renderCards();
    document.querySelectorAll("#cards .rv").forEach(function (c) { c.classList.add("in"); });
  });

  /* modal */
  var modal = $("#modal"), panel = $("#panel"), lastFocus;
  function gallery(w) {
    var g = (w.media || []).slice(1); if (!g.length) return "";
    return '<div class="gallery">' + g.map(function (u) { return '<a href="' + esc(u) + '" target="_blank" rel="noopener"><img src="' + esc(u) + '" alt="' + esc(w.title) + t("res") + '" loading="lazy"></a>'; }).join("") + "</div>";
  }
  function open(id) {
    var w = WORKS.filter(function (x) { return x.id === id; })[0]; if (!w) return; w = W(w);
    lastFocus = document.activeElement;
    panel.innerHTML = '<button class="close" id="closeBtn">' + t("close") + '</button>' + visual(w, true) +
      '<div class="meta">' + esc(CX()[w.cat]) + (w.org ? " · " + esc(w.org) : "") + (w.year ? " · " + esc(w.year) : "") + "</div><h2>" + esc(w.title) + "</h2><p>" + esc(w.summary) + "</p>" +
      (w.draft ? '<div class="draft">' + t("draft") + "</div>" : "") +
      "<h4>" + t("problem") + "</h4><p>" + esc(w.problem) + "</p><h4>" + t("process") + "</h4><ol>" + (w.process || []).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ol>" +
      "<h4>" + t("result") + "</h4><p>" + esc(w.result) + "</p>" + gallery(w) + "<h4>" + t("tools") + "</h4><div class=\"tl\" style=\"display:flex;gap:6px;flex-wrap:wrap\">" + (w.tools || []).map(function (t) { return '<span class="chip on">' + esc(t) + "</span>"; }).join("") + "</div>";
    modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
    $("#closeBtn").focus();
  }
  function close() { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
  document.addEventListener("click", function (e) {
    var c = e.target.closest("[data-id]"); if (c && !e.target.closest("#modal")) return open(c.dataset.id);
    if (e.target.id === "modal" || e.target.id === "closeBtn") close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
    if (e.key === "Enter" && e.target.dataset && e.target.dataset.id) open(e.target.dataset.id);
  });

  /* reveal */
  var io;
  function observe() {
    if (reduce || !("IntersectionObserver" in window)) { document.querySelectorAll(".rv").forEach(function (n) { n.classList.add("in"); }); return; }
    io = io || new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll(".rv:not(.in)").forEach(function (n) { io.observe(n); });
  }
  observe();

  /* scroll: progress, header, parallax, active link, stack scale */
  var nav = $("#nav"), bar = $("#bar"), glow = $("#glow"), links = [].slice.call(document.querySelectorAll(".menu a[href^='#']"));
  var secs = links.map(function (a) { return $(a.getAttribute("href")); });
  var ticking = false;
  function onScroll() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    nav.classList.toggle("light", y > innerHeight * 0.7 && !overDark());
    if (!reduce && glow) glow.style.transform = "translate3d(0," + y * 0.25 + "px,0) scale(" + (1 + y / 4000) + ")";
    var cur = null; secs.forEach(function (s, i) { if (s && s.getBoundingClientRect().top < innerHeight * 0.4) cur = i; });
    links.forEach(function (a, i) { a.classList.toggle("on", i === cur); });
    if (!reduce) document.querySelectorAll(".stack-card").forEach(function (c, i, all) {
      var next = all[i + 1]; if (!next) return;
      var d = next.getBoundingClientRect().top - c.getBoundingClientRect().top;
      var k = Math.max(0, Math.min(1, 1 - d / (c.offsetHeight + 28)));
      c.style.transform = "scale(" + (1 - k * 0.05) + ")"; c.style.opacity = 1 - k * 0.35;
    });
    ticking = false;
  }
  function overDark() {
    var d = document.querySelectorAll(".hero,.featured,.contact"), m = 40;
    for (var i = 0; i < d.length; i++) { var r = d[i].getBoundingClientRect(); if (r.top <= m && r.bottom >= m) return true; }
    return false;
  }
  addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* language */
  function applyStatic() {
    var en = LANG === "en" && window.I18N_EN, E = window.I18N_EN || {};
    document.documentElement.lang = LANG;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (el._ko == null) el._ko = el.innerHTML;
      var k = el.getAttribute("data-i18n");
      el.innerHTML = en && E[k] != null ? E[k] : el._ko;
    });
    if (document._koTitle == null) document._koTitle = document.title;
    document.title = en && E.title ? E.title : document._koTitle;
    var md = document.querySelector('meta[name="description"]'), ot = document.querySelector('meta[property="og:title"]'), od = document.querySelector('meta[property="og:description"]');
    [md, ot, od].forEach(function (x) { if (x && x._ko == null) x._ko = x.getAttribute("content"); });
    if (md) md.setAttribute("content", en && E.desc ? E.desc : md._ko);
    if (ot) ot.setAttribute("content", en && E.title ? E.title : ot._ko);
    if (od) od.setAttribute("content", en && E.desc ? E.desc : od._ko);
    var b = $("#lang"); if (b) { b.textContent = LANG === "en" ? "한국어" : "EN"; b.setAttribute("aria-label", LANG === "en" ? "한국어로 보기" : "View in English"); }
    var bg = $("#burger"); if (bg) bg.setAttribute("aria-label", LANG === "en" ? "Open menu" : "메뉴 열기");
  }
  function setLang(l) {
    LANG = l === "en" ? "en" : "ko";
    try { localStorage.setItem("lang", LANG); } catch (e) {}
    applyStatic(); renderStack(); renderChips(); renderCards(); close(); onScroll();
  }
  if ($("#lang")) $("#lang").addEventListener("click", function () { setLang(LANG === "en" ? "ko" : "en"); });
  if (LANG === "en") applyStatic(); else applyStatic();

  /* mobile menu */
  var menu = $("#menu");
  $("#burger").addEventListener("click", function () { menu.classList.toggle("open"); });
  menu.addEventListener("click", function () { menu.classList.remove("open"); });
})();
