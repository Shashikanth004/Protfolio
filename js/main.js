/* ==========================================================
   ShashiKanth B — Portfolio behaviour
   Renders every section from window.PORTFOLIO (js/data.js).
   ========================================================== */
(function () {
  "use strict";

  var D = window.PORTFOLIO;
  var $ = function (id) { return document.getElementById(id); };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- tiny DOM helper ---------- */
  function el(tag, props, children) {
    var node = document.createElement(tag);
    Object.keys(props || {}).forEach(function (k) {
      if (k === "class") node.className = props[k];
      else if (k === "text") node.textContent = props[k];
      else node.setAttribute(k, props[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }
  function external(a) { a.setAttribute("target", "_blank"); a.setAttribute("rel", "noopener noreferrer"); return a; }

  var ARROW_UP_RIGHT = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17L17 7M8 7h9v9"/></svg>';
  var ARROW_RIGHT = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* ---------- stats ---------- */
  (function renderStats() {
    var items = [
      [String(D.projects.length), "Projects built"],
      [String(D.certifications.length), "Trainings and certifications"],
      ["3rd", "GeeksforGeeks Hackathon, 2026"]
    ];
    var wrap = $("stats");
    items.forEach(function (it) {
      wrap.appendChild(el("div", {}, [
        el("span", { class: "stat-num", text: it[0] }),
        el("span", { class: "stat-label", text: it[1] })
      ]));
    });
  })();

  /* ---------- projects rail ---------- */
  (function renderProjects() {
    var rail = $("projectRail");
    D.projects.forEach(function (p) {
      var hasLink = !!p.url;
      var tile = el(hasLink ? "a" : "article", { class: "tile" });
      tile.style.setProperty("--t", p.hue);
      if (hasLink) {
        external(tile);
        tile.setAttribute("href", p.url);
        tile.setAttribute("aria-label", p.name + " — open project");
      }
      var art = el("div", { class: "tile-art", "aria-hidden": "true" }, [el("span", { text: p.mark || p.name.slice(0, 2) })]);
      var chips = el("ul", { class: "chips" }, p.tags.map(function (t) { return el("li", { text: t }); }));
      var cta;
      if (hasLink) {
        var circle = el("span", { class: "circle" }); circle.innerHTML = ARROW_RIGHT;
        cta = el("div", { class: "tile-cta" }, [el("span", { text: "Open project" }), circle]);
      } else {
        cta = el("p", { class: "tile-note", text: "Link coming soon" });
      }
      var body = el("div", { class: "tile-body" }, [
        el("span", { class: "tile-period", text: p.period }),
        el("h3", { text: p.name }),
        el("p", { text: p.description }),
        chips,
        cta
      ]);
      tile.appendChild(art); tile.appendChild(body);
      rail.appendChild(tile);
    });

    var prev = $("prevProj"), next = $("nextProj");
    function step() { var t = rail.querySelector(".tile"); return t ? t.getBoundingClientRect().width + 24 : 400; }
    function sync() {
      prev.disabled = rail.scrollLeft < 8;
      next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8;
    }
    prev.addEventListener("click", function () { rail.scrollBy({ left: -step(), behavior: "smooth" }); });
    next.addEventListener("click", function () { rail.scrollBy({ left: step(), behavior: "smooth" }); });
    rail.addEventListener("scroll", sync, { passive: true });
    rail.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { rail.scrollBy({ left: step(), behavior: "smooth" }); e.preventDefault(); }
      if (e.key === "ArrowLeft") { rail.scrollBy({ left: -step(), behavior: "smooth" }); e.preventDefault(); }
    });
    window.addEventListener("resize", sync);
    sync();
  })();

  /* ---------- certifications ---------- */
  (function renderCerts() {
    var list = $("certList");
    D.certifications.forEach(function (c) {
      var href = c.url || c.fallback;
      var arrow = el("span", { class: "cert-arrow", "aria-hidden": "true" }); arrow.innerHTML = ARROW_UP_RIGHT;
      var row = el(href ? "a" : "div", { class: "cert-row" }, [
        el("span", { class: "cert-name", text: c.name }),
        el("span", { class: "cert-issuer", text: c.issuer }),
        el("span", { class: "cert-period", text: c.period }),
        href ? arrow : null
      ]);
      if (href) {
        external(row);
        row.setAttribute("href", href);
        row.setAttribute("aria-label", c.name + " — " + (c.url ? "view certificate" : "open issuer site"));
        if (!c.url) row.setAttribute("title", "Opens " + c.issuer + " (direct certificate link not added yet)");
      }
      list.appendChild(el("li", {}, [row]));
    });
  })();

  /* ---------- skills ---------- */
  (function renderSkills() {
    var wrap = $("skillGroups");
    D.skills.forEach(function (g) {
      wrap.appendChild(el("div", { class: "skill-card" }, [
        el("h3", { text: g.group }),
        el("ul", {}, g.items.map(function (s) { return el("li", { text: s }); }))
      ]));
    });
  })();

  /* ---------- education ---------- */
  (function renderEducation() {
    var wrap = $("eduGrid");
    D.education.forEach(function (e) {
      wrap.appendChild(el("article", { class: "edu-card" }, [
        el("p", { class: "edu-years", text: e.years }),
        el("h3", { text: e.title }),
        el("p", { class: "edu-place", text: e.place }),
        el("p", { class: "edu-detail", text: e.detail })
      ]));
    });
  })();

  /* ---------- recognition ---------- */
  (function renderRecognition() {
    var wrap = $("recGrid");
    D.recognition.forEach(function (r) {
      wrap.appendChild(el("article", { class: "rec-card" }, [
        el("span", { class: "rec-when", text: r.when }),
        el("h3", { text: r.title }),
        el("p", { text: r.text })
      ]));
    });
  })();

  /* ---------- contact + footer ---------- */
  (function renderContact() {
    var P = D.person;
    $("mailBtn").setAttribute("href", "mailto:" + P.email);
    $("callBtn").setAttribute("href", "tel:" + P.phoneHref);

    var list = $("contactList");
    function row(label, node) { list.appendChild(el("li", {}, [el("small", { text: label }), node])); }
    row("Email", el("a", { href: "mailto:" + P.email, text: P.email }));
    row("Phone", el("a", { href: "tel:" + P.phoneHref, text: P.phone }));
    row("Location", el("span", { text: P.location }));
    row("Résumé", el("a", { href: P.resume, download: "", text: "Download PDF" }));

    var foot = $("footerSocial");
    if (P.linkedin) { foot.appendChild(external(el("a", { href: P.linkedin, text: "LinkedIn" }))); }
    if (P.github) { foot.appendChild(external(el("a", { href: P.github, text: "GitHub" }))); }
    foot.appendChild(el("a", { href: "mailto:" + P.email, text: "Email" }));
    if (P.linkedin) row("LinkedIn", external(el("a", { href: P.linkedin, text: "Open profile" })));
    if (P.github) row("GitHub", external(el("a", { href: P.github, text: "Open profile" })));

    $("year").textContent = new Date().getFullYear();
  })();

  /* ---------- hero screen: cycles through real projects ---------- */
  (function heroScreen() {
    var screen = $("screen"), caption = screen.querySelector(".screen-caption");
    var dots = $("screenDots"), idx = 0, timer = null;

    var buttons = D.projects.map(function (p, i) {
      var b = el("button", { type: "button", role: "tab", "aria-label": "Show " + p.name, "aria-selected": "false" });
      b.addEventListener("click", function () { show(i, true); restart(); });
      dots.appendChild(b);
      return b;
    });

    function show(i, instant) {
      idx = i;
      var p = D.projects[i];
      function apply() {
        $("screenPeriod").textContent = p.period;
        $("screenName").textContent = p.name;
        $("screenDesc").textContent = p.description;
        screen.style.setProperty("--h", p.hue);
        if (p.url) {
          screen.setAttribute("href", p.url);
          screen.setAttribute("target", "_blank");
          screen.setAttribute("rel", "noopener noreferrer");
          screen.setAttribute("aria-label", p.name + " — open project");
        } else {
          screen.setAttribute("href", "#projects");
          screen.removeAttribute("target");
          screen.removeAttribute("rel");
          screen.setAttribute("aria-label", p.name + " — see projects");
        }
        buttons.forEach(function (b, j) { b.setAttribute("aria-selected", j === i ? "true" : "false"); });
        caption.classList.remove("swap");
      }
      if (instant || reduceMotion) { apply(); return; }
      caption.classList.add("swap");
      setTimeout(apply, 300);
    }
    function restart() {
      clearInterval(timer);
      if (reduceMotion) return;
      timer = setInterval(function () { show((idx + 1) % D.projects.length); }, 6000);
    }
    screen.addEventListener("mouseenter", function () { clearInterval(timer); });
    screen.addEventListener("mouseleave", restart);
    screen.addEventListener("focus", function () { clearInterval(timer); });
    screen.addEventListener("blur", restart);

    show(0, true);
    restart();
  })();

  /* ---------- sub-nav: mobile menu + active section ---------- */
  (function nav() {
    var btn = $("menuBtn"), links = $("subnavLinks");
    function close() { links.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    btn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) { if (e.target.tagName === "A") close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    var anchors = [].slice.call(links.querySelectorAll("a"));
    var map = {};
    anchors.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && map[en.target.id]) {
            anchors.forEach(function (a) { a.classList.remove("active"); });
            map[en.target.id].classList.add("active");
          }
        });
      }, { rootMargin: "-40% 0px -55% 0px" });
      Object.keys(map).forEach(function (id) { var s = $(id); if (s) io.observe(s); });
    }
  })();
})();
