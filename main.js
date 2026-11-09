(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var WORKS = window.WORKS || [], CATS = window.CATS || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  function visual(w, big) {
    var m = (w.media || [])[0], inner = "";
    if (m) inner = /\.(mp4|webm)$/i.test(m)
      ? '<video src="' + esc(m) + '" muted loop playsinline autoplay></video>'
      : '<img src="' + esc(m) + '" alt="' + esc(w.title) + '" loading="lazy">';
    return '<div class="vis g-' + esc(w.cat) + '">' + inner + (m ? "" : "<span>" + esc(CATS[w.cat] ? CATS[w.cat].split("·")[0] : "") + "</span>") + "</div>";
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
  $("#stack").innerHTML = feat.map(function (w, i) {
    return '<article class="stack-card" style="--i:' + i + '" data-id="' + w.id + '" tabindex="0">' +
      '<div><div class="num">0' + (i + 1) + " / " + esc(CATS[w.cat]) + "</div><h3>" + esc(w.title) + "</h3><p>" + esc(w.summary) + '</p><div class="more">자세히 보기 →</div></div>' +
      visual(w, true) + "</article>";
  }).join("");

  /* works grid + filter */
  var cur = "all";
  function renderChips() {
    $("#chips").innerHTML = Object.keys(CATS).map(function (k) {
      return '<button class="chip' + (k === cur ? " on" : "") + '" data-k="' + k + '">' + esc(CATS[k]) + "</button>";
    }).join("");
  }
  var hasMedia = function (w) { return (w.media || []).length > 0; };
  function renderCards() {
    var shown = WORKS.filter(function (w) { return (cur === "all" || w.cat === cur) && hasMedia(w); }).sort(function (x, y) { return (y.featured ? 1 : 0) - (x.featured ? 1 : 0) || (ORDER.indexOf(x.id) + 99) % 99 - (ORDER.indexOf(y.id) + 99) % 99; });
    $("#cards").innerHTML = shown.map(function (w, i) {
      return '<article class="card rv" data-id="' + w.id + '" tabindex="0" style="--d:' + ((i % 3) * 0.08) + 's">' +
        visual(w) + '<div class="body"><div class="cat">' + esc(CATS[w.cat]) + (w.year ? " · " + esc(w.year) : "") + "</div><h3>" + esc(w.title) + "</h3><p>" + esc(w.summary) + '</p><div class="tl">' +
        (w.tools || []).slice(0, 4).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</div></div></article>";
    }).join("");
    var more = WORKS.filter(function (w) { return (cur === "all" || w.cat === cur) && !hasMedia(w) && !w.draft; });
    $("#more").innerHTML = more.length ? '<button class="more-toggle" id="moreBtn" aria-expanded="false">그 밖의 작업 ' + more.length + '건 보기 <span>＋</span></button>' +
      '<div class="more-list" id="moreList" hidden>' + more.map(function (w) {
        return '<div class="row" data-id="' + w.id + '" tabindex="0"><div class="cat">' + esc(CATS[w.cat]) + '</div><div><h3>' + esc(w.title) + '</h3><p>' + esc(w.summary) + '</p></div><span class="go">→</span></div>';
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
    return '<div class="gallery">' + g.map(function (u) { return '<a href="' + esc(u) + '" target="_blank" rel="noopener"><img src="' + esc(u) + '" alt="' + esc(w.title) + ' 결과물" loading="lazy"></a>'; }).join("") + "</div>";
  }
  function open(id) {
    var w = WORKS.filter(function (x) { return x.id === id; })[0]; if (!w) return;
    lastFocus = document.activeElement;
    panel.innerHTML = '<button class="close" id="closeBtn">닫기 ✕</button>' + visual(w, true) +
      '<div class="meta">' + esc(CATS[w.cat]) + (w.org ? " · " + esc(w.org) : "") + (w.year ? " · " + esc(w.year) : "") + "</div><h2>" + esc(w.title) + "</h2><p>" + esc(w.summary) + "</p>" +
      (w.draft ? '<div class="draft">상세 내용은 작성 중입니다. 결과 이미지·영상과 과정 설명이 곧 추가됩니다.</div>' : "") +
      "<h4>문제</h4><p>" + esc(w.problem) + "</p><h4>과정</h4><ol>" + (w.process || []).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ol>" +
      "<h4>결과</h4><p>" + esc(w.result) + "</p>" + gallery(w) + "<h4>사용한 도구</h4><div class=\"tl\" style=\"display:flex;gap:6px;flex-wrap:wrap\">" + (w.tools || []).map(function (t) { return '<span class="chip on">' + esc(t) + "</span>"; }).join("") + "</div>";
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

  /* mobile menu */
  var menu = $("#menu");
  $("#burger").addEventListener("click", function () { menu.classList.toggle("open"); });
  menu.addEventListener("click", function () { menu.classList.remove("open"); });
})();
