// Loaded in <head> so the saved theme and language apply before the first paint.
(function () {
  var root = document.documentElement;

  function read(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* storage blocked: the choice lasts for this page only */ }
  }
  function setLang(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
  }

  var savedTheme = read('site-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') root.setAttribute('data-theme', savedTheme);

  // The site opens in English. To open in Chinese instead, change 'en' to 'zh' on the next line.
  setLang(read('site-lang') === 'zh' ? 'zh' : 'en');

  // Fonts load without blocking the page, because Google Fonts can be slow or unreachable
  // from mainland China. The fallback fonts in site.css apply if this request fails.
  var fonts = document.createElement('link');
  fonts.rel = 'stylesheet';
  fonts.href = 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Inter:wght@400;500;600&family=Noto+Serif+SC:wght@500;600&display=swap';
  document.head.appendChild(fonts);

  document.addEventListener('DOMContentLoaded', function () {
    var themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
      themeButton.addEventListener('click', function () {
        var current = root.getAttribute('data-theme');
        if (!current) {
          current = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        var next = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        save('site-theme', next);
      });
    }

    var langButton = document.getElementById('lang-toggle');
    if (langButton) {
      langButton.addEventListener('click', function () {
        var next = root.getAttribute('data-lang') === 'zh' ? 'en' : 'zh';
        setLang(next);
        save('site-lang', next);
      });
    }
  });
})();
