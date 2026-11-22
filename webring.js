/* little pages webring
   ------------------------------------------------------------------
   The only file to edit when a page is added, removed or reordered.
   Order in this list is the order of the ring, and it loops.

   path  = relative to the site root ("" is the homepage)
   label = shown in the strip's tooltip and in the bar's status text
   ------------------------------------------------------------------ */
(function () {
  var PAGES = [
    { path: "",                   label: "home" },
    { path: "keepers-index.html", label: "keepers index" },
    { path: "widgets/",           label: "widgets" }
  ];

  // where this script lives is the site root, so the same file works
  // from /little-pages/ and from /little-pages/widgets/
  var script = document.currentScript;
  if (!script || !script.src) return;
  var root = new URL(".", script.src).href;

  function full(p) { return root + p.path; }

  function norm(u) {
    var x = new URL(u, location.href);
    return x.origin + x.pathname.replace(/index\.html$/, "");
  }

  var here = norm(location.href);
  var i = -1;
  for (var n = 0; n < PAGES.length; n++) {
    if (norm(full(PAGES[n])) === here) { i = n; break; }
  }
  if (i === -1) return; // not a ring page, stay quiet

  var prev = PAGES[(i + PAGES.length - 1) % PAGES.length];
  var next = PAGES[(i + 1) % PAGES.length];

  var css = [
    '.lp-webring{display:flex;align-items:center;justify-content:center;gap:5px;flex-wrap:wrap;',
    'width:-moz-fit-content;width:fit-content;max-width:92%;margin:20px auto 6px;padding:4px 7px;',
    'background:#c0c0c0;color:#000;font:11px/1 "Courier New",Courier,monospace;text-transform:lowercase;',
    'letter-spacing:.06em;border:2px solid;border-color:#dfdfdf #000 #000 #dfdfdf;',
    'box-shadow:inset 1px 1px #fff,inset -1px -1px #808080,3px 3px 0 rgba(0,0,0,.25)}',
    '.lp-webring .lp-name{padding:0 7px 0 2px;margin-right:2px;color:#1e1e1e;',
    'border-right:1px solid #808080}',
    '.lp-webring a{display:inline-block;padding:3px 9px 2px;color:#000080;text-decoration:none;',
    'background:#c0c0c0;border:1px solid;border-color:#fff #000 #000 #fff}',
    '.lp-webring a:hover{background:#dfdfdf;color:#0000ee}',
    '.lp-webring a:active{border-color:#000 #fff #fff #000;color:#0000ee;transform:translate(1px,1px)}',
    '.lp-webring a:focus-visible{outline:1px dotted #000;outline-offset:1px}',
    '.lp-webring .lp-dot{width:6px;height:6px;background:#008080;box-shadow:inset 1px 1px #fff;',
    'border:1px solid #000;margin:0 1px}'
  ].join('');

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var bar = document.createElement("nav");
  bar.className = "lp-webring";
  bar.setAttribute("aria-label", "little pages webring");

  function link(href, text, title) {
    var a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    a.title = title;
    return a;
  }

  var dot = document.createElement("span");
  dot.className = "lp-dot";
  dot.setAttribute("aria-hidden", "true");
  bar.appendChild(dot);

  var name = document.createElement("span");
  name.className = "lp-name";
  name.textContent = "little pages";
  bar.appendChild(name);

  bar.appendChild(link(full(prev), "\u00ab prev", "previous page: " + prev.label));
  bar.appendChild(link("#", "random", "jump to a random page"));
  bar.appendChild(link(full(next), "next \u00bb", "next page: " + next.label));

  // random never sends you to the page you are already on
  bar.querySelectorAll("a")[1].addEventListener("click", function (ev) {
    ev.preventDefault();
    var pool = PAGES.filter(function (_, n) { return n !== i; });
    if (!pool.length) return;
    location.href = full(pool[Math.floor(Math.random() * pool.length)]);
  });

  document.body.appendChild(bar);
})();
