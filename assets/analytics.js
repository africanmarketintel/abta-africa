/* ABTA analytics (Google Analytics 4) with a cookie notice.
   Loaded once, by assets/footer.js, so every page that has the footer has it. Nothing to add to individual pages.

   To switch analytics off everywhere: set GA_MEASUREMENT_ID to ''.
   To use a separate Google Analytics property for this site: replace the ID below.
   Model: every visitor, in Europe and elsewhere, is asked first. Nothing loads until "Accept" is pressed.
   The choice is remembered for 180 days on this site. Advertising signals are always off. */
(function () {
  'use strict';
  var GA_MEASUREMENT_ID = 'G-KJWPP1E5DY';
  var PRIVACY_URL = 'https://ami.abta.africa/privacy.html';
  var KEY = 'abta_analytics';
  var DAYS = 180;
  if (!GA_MEASUREMENT_ID || window.__abtaGaLoaded === true || window.__abtaGaInit) return;
  window.__abtaGaInit = true;

  function choice() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (v && v.until > Date.now() && (v.v === 'granted' || v.v === 'denied')) return v.v;
    } catch (e) { /* storage blocked */ }
    return null;
  }
  function europe() {
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      return /^Europe\//.test(tz) || /^Atlantic\/(Canary|Madeira|Azores|Reykjavik|Faroe)$/.test(tz);
    } catch (e) { return true; }
  }
  function load() {
    if (window.__abtaGaLoaded) return;
    window.__abtaGaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(s);
  }
  function save(v) {
    try { localStorage.setItem(KEY, JSON.stringify({ v: v, until: Date.now() + DAYS * 864e5 })); } catch (e) { /* ignore */ }
  }
  function clearCookies() {
    var host = location.hostname, parts = host.split('.'), doms = ['', host, '.' + host];
    if (parts.length > 2) doms.push('.' + parts.slice(-2).join('.'));
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (/^_ga/.test(name)) doms.forEach(function (d) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
      });
    });
  }
  function closeNote() {
    var n = document.getElementById('abtaCookieNote');
    if (n) n.remove();
    document.body.style.paddingBottom = '';
  }
  function accept() {
    save('granted');
    if (window.__abtaGaLoaded && window.gtag) window.gtag('consent', 'update', { analytics_storage: 'granted' });
    else load();
    closeNote();
  }
  function decline() {
    save('denied');
    if (window.__abtaGaLoaded && window.gtag) window.gtag('consent', 'update', { analytics_storage: 'denied' });
    clearCookies();
    closeNote();
  }
  function note(ask) {
    if (choice() !== null || document.getElementById('abtaCookieNote')) return;
    var st = document.createElement('style');
    st.textContent = '.abta-cookie{position:fixed;left:0;right:0;bottom:0;z-index:2000;background:#fff;color:#333;border-top:3px solid #F4A300;box-shadow:0 -2px 12px rgba(0,0,0,.18);box-sizing:border-box;padding:14px max(16px,calc((100% - 1120px)/2 + 20px));display:flex;gap:12px;align-items:center;flex-wrap:wrap;font:15px/1.5 Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif}'
      + '.abta-cookie p{margin:0;flex:1 1 320px;max-width:75ch}.abta-cookie a{color:#1A237E}'
      + '.abta-cookie button{min-height:44px;padding:8px 22px;border-radius:999px;font:600 15px Inter,sans-serif;cursor:pointer;border:2px solid #1A237E}'
      + '.abta-cookie .ok{background:#1A237E;color:#fff}.abta-cookie .no{background:#fff;color:#1A237E}';
    document.head.appendChild(st);
    var n = document.createElement('div');
    n.id = 'abtaCookieNote';
    n.className = 'abta-cookie';
    n.setAttribute('role', 'region');
    n.setAttribute('aria-label', 'Analytics cookies');
    n.innerHTML = '<p>' + 'We use third-party tools to understand how visitors use the site and to improve its content. '
      + '<a href="' + PRIVACY_URL + '">Privacy</a></p>'
      + '<button type="button" class="ok">' + 'Accept' + '</button>'
      + '<button type="button" class="no">' + 'Decline' + '</button>';
    n.querySelector('.ok').addEventListener('click', accept);
    n.querySelector('.no').addEventListener('click', decline);
    document.body.appendChild(n);
    document.body.style.paddingBottom = n.offsetHeight + 'px';
  }
  function start() {
    var c = choice(), ask = true; /* every visitor is asked first, in Europe and elsewhere */
    if (c === 'granted' || (c === null && !ask)) load();
    if (c === null) note(ask);
  }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
