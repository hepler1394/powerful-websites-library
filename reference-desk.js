(function () {
  'use strict';

  var rawCategories = Array.isArray(window.DATA) ? window.DATA.filter(function (cat) {
    return cat && cat.id !== 'top-picks' && Array.isArray(cat.sites) && cat.sites.length;
  }) : [];
  var topCategory = Array.isArray(window.DATA) ? window.DATA.find(function (cat) { return cat.id === 'top-picks'; }) : null;
  var filingGroups = [
    { id: 'ai-assistants', name: 'AI Assistants & Agents', sites: [] },
    { id: 'ai-creative', name: 'AI Image, Video & Audio', sites: [] },
    { id: 'ai-general', name: 'General AI Tools', sites: [] },
    { id: 'writing-research', name: 'Writing & Research', sites: [] },
    { id: 'design-media', name: 'Design & Media', sites: [] },
    { id: 'developer', name: 'Developer Tools', sites: [] },
    { id: 'productivity', name: 'Productivity & Notes', sites: [] },
    { id: 'learning', name: 'Learning & Education', sites: [] },
    { id: 'privacy', name: 'Privacy & Security', sites: [] },
    { id: 'files', name: 'Files, PDFs & Documents', sites: [] },
    { id: 'money-career', name: 'Money & Career', sites: [] },
    { id: 'entertainment', name: 'Games, Movies & Streaming', sites: [] },
    { id: 'more', name: 'Everyday & Unusual', sites: [] }
  ];
  var allSites = [];
  var siteByUrl = new Map();

  function cleanUrl(url) { return String(url || '').replace(/\/+$/, ''); }
  function urlKey(url) {
    try { var parsed = new URL(cleanUrl(url)); return parsed.hostname.replace(/^www\./, '').toLowerCase() + parsed.pathname.replace(/\/+$/, '').toLowerCase(); }
    catch (error) { return cleanUrl(url).replace(/^https?:\/\/(www\.)?/i, '').toLowerCase(); }
  }
  function normalize(value) { return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); }
  function hostFor(url) { try { return new URL(url).hostname.replace(/^www\./, ''); } catch (error) { return url; } }
  function groupById(id) { return filingGroups.find(function (group) { return group.id === id; }); }
  function faviconFor(url, size) { return 'https://www.google.com/s2/favicons?domain=' + encodeURIComponent(hostFor(url)) + '&sz=' + (size || 64); }
  function filingGroupFor(category) {
    var key = normalize((category.id || '') + ' ' + (category.name || ''));
    var id = 'more';
    if (/coding|developer|backend|infra|dev tools|ui components/.test(key)) id = 'developer';
    else if (/privacy|security|vpn|ad blocker/.test(key)) id = 'privacy';
    else if (/pdf|file tool|file conversion|document/.test(key)) id = 'files';
    else if (/gaming|game |movies|movie |streaming|sports/.test(key)) id = 'entertainment';
    else if (/money|finance|career|jobs/.test(key)) id = 'money-career';
    else if (/learning|education|educator|books|reading/.test(key)) id = 'learning';
    else if (/writing|research|docs/.test(key)) id = 'writing-research';
    else if (/meeting|focus|productivity|notes|knowledge|utilities/.test(key)) id = 'productivity';
    else if (/ai.*(video|image|voice|audio|music)|mobile creator ai/.test(key)) id = 'ai-creative';
    else if (/design|creative|creator tools|photography|video editing|website builder/.test(key)) id = 'design-media';
    else if (/llm|assistant|agent|chat|models|answer engine/.test(key)) id = 'ai-assistants';
    else if (/\bai\b|google labs/.test(key)) id = 'ai-general';
    return groupById(id);
  }

  rawCategories.forEach(function (category) {
    var group = filingGroupFor(category);
    category.sites.forEach(function (site) { (normalize(site.n) === 'squoosh' ? groupById('design-media') : group).sites.push(site); });
  });
  if (topCategory) {
    var filedUrls = new Set();
    filingGroups.forEach(function (group) { group.sites.forEach(function (site) { filedUrls.add(urlKey(site.u)); }); });
    topCategory.sites.forEach(function (site) {
      var key = urlKey(site.u);
      if (!key || filedUrls.has(key)) return;
      filingGroupFor({ id: 'editor-pick', name: site.s || site.n }).sites.push(site);
      filedUrls.add(key);
    });
  }
  var categories = filingGroups.filter(function (group) { return group.sites.length; });
  categories.forEach(function (category) {
    category.sites.forEach(function (raw) {
      var url = cleanUrl(raw.u); var key = urlKey(url);
      if (!url || siteByUrl.has(key)) return;
      var site = { name: raw.n || hostFor(url), url: url, description: raw.d || '', limit: raw.l || '', source: raw.s || '', categoryId: category.id, categoryName: category.name };
      site.search = normalize([site.name, site.description, site.limit, site.categoryName, site.source].join(' '));
      siteByUrl.set(key, site); allSites.push(site);
    });
  });

  function findSite(name) { var key = normalize(name); return allSites.find(function (site) { return normalize(site.name) === key; }); }
  var editorial = ['Photopea', 'Have I Been Pwned', 'NotebookLM', 'CodePen', 'Squoosh', 'Neal.fun'].map(findSite).filter(Boolean);
  if (editorial.length < 6) editorial = editorial.concat(allSites.slice(0, 6 - editorial.length));
  var modelWatch = ['Sakana Fugu', 'GPT-5.6 Sol', 'GPT-5.6 Terra', 'GPT-5.6 Luna', 'GPT-Live', 'Claude Fable 5'].map(findSite).filter(Boolean);

  Array.from(document.body.children).forEach(function (node) { node.classList.add('desk-legacy'); });
  document.body.className = 'desk-body';
  var root = document.createElement('div'); root.className = 'pw-root';
  root.innerHTML = [
    '<a class="pw-skip" href="#pw-search-input">Skip to search</a>',
    '<section class="pw-hero" id="pw-top" aria-label="Powerful Websites search observatory">',
    '<video class="pw-cinema" id="pw-cinema" autoplay muted loop playsinline preload="metadata" poster="assets/observatory-poster.jpg" aria-hidden="true" tabindex="-1"><source src="assets/observatory-cinema.mp4" type="video/mp4"></video><canvas class="pw-field" id="pw-field" aria-hidden="true"></canvas><div class="pw-vignette"></div><div class="pw-cursor-halo" id="pw-cursor" aria-hidden="true"></div>',
    '<header class="pw-header">',
      '<a class="pw-brand" href="./" aria-label="Powerful Websites home"><span class="pw-brand__pulse"></span><span class="pw-brand__name">Powerful Websites</span></a>',
      '<div class="pw-header__readout"><span id="pw-total">0</span> signals / 13 constellations / 0 sponsors</div>',
      '<nav class="pw-nav" aria-label="Primary"><a href="#pw-model-watch">New models</a><a href="#pw-month">Site of month</a><a href="#pw-directory">Directory</a><button id="pw-motion" type="button" aria-pressed="false">Motion on</button><button id="pw-browse" type="button">All fields</button><button id="pw-saved" type="button">Saved <span class="pw-nav__count" id="pw-saved-count">0</span></button></nav>',
    '</header>',
    '<div class="pw-stage" id="pw-main"><div class="pw-stage__content">',
      '<p class="pw-kicker">The living index of the useful web</p>',
      '<h1 class="pw-title"><span>Don\'t browse.</span><span data-text="Bend the web.">Bend the web.</span></h1>',
      '<p class="pw-deck">Every point is a useful site. Move through the field, name the job, and pull the right part of the internet toward you.</p>',
      '<form class="pw-search" id="pw-search" role="search"><div class="pw-search__frame"><span class="pw-search__glyph" aria-hidden="true">⌕</span><input id="pw-search-input" type="search" autocomplete="off" spellcheck="false" placeholder="What do you need the web to do?" aria-label="Search more than one thousand useful websites"><button class="pw-search__submit" type="submit">Find it</button></div><div class="pw-search__under"><span>Press / anywhere to focus</span><span class="pw-search__live" id="pw-search-live" aria-live="polite">Awaiting a signal</span></div>',
      '<div class="pw-trails" aria-label="Fast searches"><button type="button" data-query="pdf">Repair a PDF</button><button type="button" data-query="privacy security">Check privacy</button><button type="button" data-query="image editor">Make an image</button><button type="button" data-query="developer code">Build something</button></div></form>',
    '</div></div>',
    '<aside class="pw-feature" id="pw-feature"><div class="pw-feature__label"><span>Signal worth knowing</span><span class="pw-feature__index" id="pw-feature-index">01 / 06</span></div><a class="pw-feature__name" id="pw-feature-name" target="_blank" rel="noopener noreferrer"></a><p class="pw-feature__meta" id="pw-feature-meta"></p></aside>',
    '<div class="pw-coordinate"><strong>Field is live</strong><span id="pw-coordinate">x 000 / y 000</span></div><p class="pw-hint">Move your cursor. The index moves back.</p>',
    '<footer class="pw-dock"><span class="pw-dock__label">Choose a field</span><div class="pw-category-rail" id="pw-category-rail" aria-label="Website categories"></div><button class="pw-dock__action" id="pw-random" type="button">Random signal</button></footer>',
    '</section>',
    '<main class="pw-discovery" id="pw-discover">',
      '<div class="pw-ticker" aria-hidden="true"><div class="pw-ticker__track" id="pw-ticker-track"></div></div>',
      '<nav class="pw-page-map" aria-label="Explore this page"><a href="#pw-model-watch"><span>01</span>New model watch</a><a href="#pw-month"><span>02</span>Site of the month</a><a href="#pw-picks-title"><span>03</span>Start here</a><a href="#pw-directory"><span>04</span>Every category</a></nav>',
      '<section class="pw-intro pw-reveal" aria-labelledby="pw-intro-title"><div><p class="pw-section-code">00 / THE HUMAN FILTER</p><h2 id="pw-intro-title">The useful web,<br><em>with taste.</em></h2></div><div class="pw-intro__copy"><p class="pw-typewriter" id="pw-typewriter" aria-label="A thousand links are noise until somebody tells you where to start. These are useful sites with plain-English briefs, real limits, and no paid placement deciding the order."><span id="pw-typewriter-copy" aria-hidden="true"></span><i aria-hidden="true"></i></p><a href="#pw-directory">Explore every category <span aria-hidden="true">↓</span></a></div></section>',
      '<section class="pw-model-watch pw-reveal" id="pw-model-watch" aria-labelledby="pw-model-watch-title"><header class="pw-section-head pw-section-head--models"><div><p class="pw-section-code">01 / NEW MODEL WATCH · JULY 2026</p><h2 id="pw-model-watch-title">Six releases.<br><em>Zero rumor mill.</em></h2></div><p>A short, source-checked shelf for what actually shipped. Fugu is an orchestrator, GPT-5.6 comes in three tiers, and live voice just became its own frontier.</p></header><div class="pw-model-grid" id="pw-model-grid"></div></section>',
      '<section class="pw-month pw-reveal" id="pw-month" aria-labelledby="pw-month-title">',
        '<div class="pw-month__beam" aria-hidden="true"></div><div class="pw-month__copy"><p class="pw-section-code">JULY 2026 / SITE OF THE MONTH</p><div class="pw-month__identity"><b class="pw-month__mark" aria-hidden="true">F*</b><span>Originally FckSignups · now NoSignups.net</span></div><h2 id="pw-month-title">F*CK<br>Signups.</h2><p>A sharp directory of open-source tools that work immediately in your browser, now continuing as NoSignups. No account wall. No email capture. Just choose a job and get it done.</p><a class="pw-month__cta" href="https://nosignups.net/" target="_blank" rel="noopener noreferrer"><span>Explore the winner</span><strong>↗</strong></a></div>',
        '<div class="pw-month__visual" aria-hidden="true"><div class="pw-month__seal"><span>PW</span><small>07—26</small></div><p>F*CK</p><p>SIGNUPS</p><div class="pw-month__orbit"><i></i><i></i><i></i></div></div>',
        '<dl class="pw-month__stats"><div><dt>66</dt><dd>tools loaded</dd></div><div><dt>08</dt><dd>categories</dd></div><div><dt>00</dt><dd>signups needed</dd></div></dl>',
      '</section>',
      '<section class="pw-picks pw-reveal" aria-labelledby="pw-picks-title"><header class="pw-section-head"><div><p class="pw-section-code">02 / START HERE</p><h2 id="pw-picks-title">Six sites worth<br>knowing now.</h2></div><p>Not a popularity contest. A compact shelf of dependable tools selected from the full index.</p></header><div class="pw-picks__grid" id="pw-picks-grid"></div></section>',
      '<section class="pw-directory pw-reveal" id="pw-directory" aria-labelledby="pw-directory-title"><header class="pw-section-head pw-section-head--directory"><div><p class="pw-section-code">03 / THE COMPLETE INDEX</p><h2 id="pw-directory-title">Every field.<br>Nothing buried.</h2></div><p>Open any shelf, skim the quick briefs, save what matters, or pull the complete category into the live search panel.</p></header><nav class="pw-jump" id="pw-jump" aria-label="Jump to a website category"></nav><div class="pw-directory__groups" id="pw-directory-groups"></div></section>',
      '<section class="pw-closing pw-reveal"><p class="pw-section-code">END OF THE VISIBLE FIELD</p><h2>The web is still<br><span>weirder than an app store.</span></h2><button type="button" id="pw-random-bottom">Show me something unexpected <span aria-hidden="true">↗</span></button></section>',
      '<footer class="pw-footer"><a class="pw-brand" href="#pw-top"><span class="pw-brand__pulse"></span><span class="pw-brand__name">Powerful Websites</span></a><p>Useful websites, filed by humans. No sponsored rankings.</p><div><a href="faq.html">Manifesto</a><a href="admin.html">Admin</a><a href="#pw-top">Top ↑</a></div></footer>',
    '</main>',
    '<button class="pw-to-top" id="pw-to-top" type="button" aria-label="Scroll back to the top"><span>TOP</span></button>',
    '<button class="pw-backdrop" id="pw-backdrop" type="button" aria-label="Close results"></button>',
    '<aside class="pw-panel" id="pw-panel" aria-hidden="true" aria-labelledby="pw-panel-title"><header class="pw-panel__head"><div><p class="pw-panel__eyebrow" id="pw-panel-label">Signal results</p><h2 id="pw-panel-title">The field</h2><p class="pw-panel__meta" id="pw-panel-meta"></p></div><button class="pw-close" id="pw-close" type="button" aria-label="Close results">×</button></header><div class="pw-panel__body"><div class="pw-category-grid" id="pw-category-grid" hidden></div><div class="pw-result-list" id="pw-result-list"></div><div class="pw-empty" id="pw-empty" hidden><strong>No signal found.</strong>Try a simpler job or choose a field.</div></div><footer class="pw-panel__foot"><button class="pw-more" id="pw-more" type="button" hidden>Pull in more</button></footer></aside>',
    '<div class="pw-toast" id="pw-toast" role="status" aria-live="polite" hidden></div>'
  ].join('');
  document.body.appendChild(root);

  var panel = document.getElementById('pw-panel'); var backdrop = document.getElementById('pw-backdrop');
  var resultList = document.getElementById('pw-result-list'); var categoryGrid = document.getElementById('pw-category-grid');
  var panelTitle = document.getElementById('pw-panel-title'); var panelLabel = document.getElementById('pw-panel-label'); var panelMeta = document.getElementById('pw-panel-meta');
  var empty = document.getElementById('pw-empty'); var more = document.getElementById('pw-more'); var searchInput = document.getElementById('pw-search-input'); var searchLive = document.getElementById('pw-search-live');
  var currentResults = []; var visibleCount = 10; var currentMode = 'home'; var toastTimer; var searchTimer; var featureIndex = 0;

  function getFavorites() { try { var data = JSON.parse(localStorage.getItem('pwl_favorites') || '[]'); return Array.isArray(data) ? data : []; } catch (error) { return []; } }
  function isFavorite(url) { return getFavorites().includes(url); }
  function updateSavedCount() { document.getElementById('pw-saved-count').textContent = getFavorites().length; }
  function toast(message) { var node = document.getElementById('pw-toast'); node.textContent = message; node.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(function () { node.hidden = true; }, 1700); }
  function toggleFavorite(site) {
    var favorites = getFavorites(); var index = favorites.indexOf(site.url);
    if (index >= 0) { favorites.splice(index, 1); toast('Signal removed'); } else { favorites.push(site.url); toast('Signal saved'); }
    localStorage.setItem('pwl_favorites', JSON.stringify(favorites)); updateSavedCount();
    document.querySelectorAll('.pw-save[data-url]').forEach(function (button) { if (button.dataset.url === site.url) { button.setAttribute('aria-pressed', String(index < 0)); button.textContent = index < 0 ? '✓' : '+'; } });
    if (currentMode === 'saved') showSaved();
  }

  function scoreSite(site, terms) {
    var name = normalize(site.name); var category = normalize(site.categoryName); var score = 0;
    terms.forEach(function (term) { if (name === term) score += 40; else if (name.indexOf(term) === 0) score += 18; else if (name.includes(term)) score += 10; if (category.includes(term)) score += 6; if (site.search.includes(term)) score += 2; });
    return score;
  }
  function searchSites(query) {
    var terms = normalize(query).split(' ').filter(Boolean); if (!terms.length) return [];
    return allSites.map(function (site) { return { site: site, score: scoreSite(site, terms) }; })
      .filter(function (item) { return item.score > 0 && terms.every(function (term) { return item.site.search.includes(term); }); })
      .sort(function (a, b) { return b.score - a.score || a.site.name.localeCompare(b.site.name); }).map(function (item) { return item.site; });
  }

  function createResult(site, index) {
    var article = document.createElement('article'); article.className = 'pw-result'; article.style.animationDelay = Math.min(index * 38, 300) + 'ms';
    var num = document.createElement('span'); num.className = 'pw-result__num'; var resultLogo = document.createElement('img'); resultLogo.src = faviconFor(site.url, 64); resultLogo.alt = ''; resultLogo.loading = 'lazy'; resultLogo.width = 32; resultLogo.height = 32; var resultIndex = document.createElement('small'); resultIndex.textContent = String(index + 1).padStart(2, '0'); num.append(resultLogo, resultIndex);
    var main = document.createElement('div'); main.className = 'pw-result__main'; var heading = document.createElement('h3'); var link = document.createElement('a');
    link.href = site.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = site.name; heading.appendChild(link);
    var desc = document.createElement('p'); desc.className = 'pw-result__desc'; desc.textContent = site.description;
    var filing = document.createElement('div'); filing.className = 'pw-result__filing'; var cat = document.createElement('span'); cat.textContent = site.categoryName; filing.appendChild(cat);
    if (site.limit && !/^none\b/i.test(site.limit)) { var limit = document.createElement('span'); limit.className = 'pw-result__limit'; limit.textContent = 'Limit: ' + site.limit; filing.appendChild(limit); }
    main.append(heading, desc, filing);
    var save = document.createElement('button'); save.className = 'pw-save'; save.type = 'button'; save.dataset.url = site.url; save.textContent = isFavorite(site.url) ? '✓' : '+'; save.setAttribute('aria-label', 'Save ' + site.name); save.setAttribute('aria-pressed', String(isFavorite(site.url))); save.addEventListener('click', function () { toggleFavorite(site); });
    article.append(num, main, save); return article;
  }
  function drawResults() {
    var fragment = document.createDocumentFragment(); currentResults.slice(0, visibleCount).forEach(function (site, index) { fragment.appendChild(createResult(site, index)); }); resultList.replaceChildren(fragment);
    empty.hidden = currentResults.length !== 0; more.hidden = visibleCount >= currentResults.length;
  }
  function openPanel() { panel.classList.add('is-open'); backdrop.classList.add('is-open'); panel.setAttribute('aria-hidden', 'false'); document.body.classList.add('pw-panel-open'); }
  function closePanel(options) { panel.classList.remove('is-open'); backdrop.classList.remove('is-open'); panel.setAttribute('aria-hidden', 'true'); document.body.classList.remove('pw-panel-open'); if (!options || !options.keepUrl) history.replaceState(null, '', location.pathname); visual.focusGroup = -1; visual.searchRatio = 0; document.querySelectorAll('.pw-category').forEach(function (button) { button.removeAttribute('aria-current'); }); }
  function showResults(sites, title, label, mode) { currentResults = sites; visibleCount = 10; currentMode = mode; categoryGrid.hidden = true; resultList.hidden = false; panelTitle.textContent = title; panelLabel.textContent = label; panelMeta.textContent = sites.length + (sites.length === 1 ? ' signal found' : ' signals found'); drawResults(); openPanel(); }
  function runSearch(query, options) {
    var value = query.trim(); if (!value) { showBrowse(); return; } var matches = searchSites(value); searchLive.textContent = matches.length + ' signals responding'; visual.focusGroup = -1; visual.searchRatio = Math.min(1, matches.length / 120 + .16); visual.burst = 1; showResults(matches, value, 'Search frequency', 'search'); if (!options || !options.skipHistory) history.replaceState(null, '', '?q=' + encodeURIComponent(value));
  }
  function showCategory(category, sourceButton, options) {
    var sites = category.sites.map(function (raw) { return siteByUrl.get(urlKey(raw.u)); }).filter(Boolean); showResults(sites, category.name, 'Constellation ' + String(categories.indexOf(category) + 1).padStart(2, '0'), 'category');
    document.querySelectorAll('.pw-category').forEach(function (button) { button.removeAttribute('aria-current'); }); if (sourceButton) sourceButton.setAttribute('aria-current', 'true'); visual.focusGroup = categories.indexOf(category); visual.searchRatio = 0; visual.burst = 1; if (!options || !options.skipHistory) history.replaceState(null, '', '?category=' + encodeURIComponent(category.id));
  }
  function showSaved() { var sites = getFavorites().map(function (url) { return siteByUrl.get(urlKey(url)); }).filter(Boolean); showResults(sites, 'Saved signals', 'Your private field', 'saved'); visual.searchRatio = .45; history.replaceState(null, '', '?view=saved'); }
  function showBrowse() { currentMode = 'browse'; resultList.hidden = true; empty.hidden = true; more.hidden = true; categoryGrid.hidden = false; panelTitle.textContent = 'All fields'; panelLabel.textContent = 'The whole observable web'; panelMeta.textContent = categories.length + ' constellations / ' + allSites.length.toLocaleString() + ' signals'; openPanel(); history.replaceState(null, '', '?view=fields'); }

  var categoryFragment = document.createDocumentFragment(); var gridFragment = document.createDocumentFragment();
  categories.forEach(function (category) {
    var rail = document.createElement('button'); rail.className = 'pw-category'; rail.type = 'button'; rail.innerHTML = category.name + '<span>' + category.sites.length + '</span>'; rail.addEventListener('click', function () { showCategory(category, rail); }); categoryFragment.appendChild(rail);
    var tile = document.createElement('button'); tile.className = 'pw-category-tile'; tile.type = 'button'; var strong = document.createElement('strong'); strong.textContent = category.name; var count = document.createElement('span'); count.textContent = category.sites.length + ' signals'; tile.append(strong, count); tile.addEventListener('click', function () { showCategory(category, rail); }); gridFragment.appendChild(tile);
  });
  document.getElementById('pw-category-rail').appendChild(categoryFragment); categoryGrid.appendChild(gridFragment);
  document.getElementById('pw-total').textContent = allSites.length.toLocaleString(); updateSavedCount();

  function createSiteCard(site, index, variant) {
    var card = document.createElement('article'); card.className = 'pw-site-card' + (variant ? ' pw-site-card--' + variant : ''); card.style.setProperty('--pw-delay', Math.min(index * 45, 360) + 'ms');
    var top = document.createElement('div'); top.className = 'pw-site-card__top';
    var identity = document.createElement('div'); identity.className = 'pw-site-card__identity';
    var logo = document.createElement('span'); logo.className = 'pw-site-card__logo'; var img = document.createElement('img'); img.src = faviconFor(site.url, 128); img.alt = ''; img.loading = 'lazy'; img.width = 42; img.height = 42; var fallback = document.createElement('b'); fallback.textContent = site.name.slice(0, 1).toUpperCase(); img.addEventListener('error', function () { img.hidden = true; }); logo.append(img, fallback);
    var filing = document.createElement('div'); var label = document.createElement('span'); label.textContent = variant === 'pick' ? 'Powerful pick ' + String(index + 1).padStart(2, '0') : 'Quick brief'; var host = document.createElement('small'); host.textContent = hostFor(site.url); filing.append(label, host); identity.append(logo, filing);
    var save = document.createElement('button'); save.className = 'pw-save pw-site-card__save'; save.type = 'button'; save.dataset.url = site.url; save.textContent = isFavorite(site.url) ? '✓' : '+'; save.setAttribute('aria-label', 'Save ' + site.name); save.setAttribute('aria-pressed', String(isFavorite(site.url))); save.addEventListener('click', function () { toggleFavorite(site); }); top.append(identity, save);
    var heading = document.createElement('h3'); var link = document.createElement('a'); link.href = site.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = site.name; heading.appendChild(link);
    var description = document.createElement('p'); description.className = 'pw-site-card__brief'; description.textContent = site.description || 'A useful corner of the web, filed for later.';
    var bottom = document.createElement('div'); bottom.className = 'pw-site-card__bottom'; var category = document.createElement('span'); category.textContent = site.categoryName; var visit = document.createElement('a'); visit.href = site.url; visit.target = '_blank'; visit.rel = 'noopener noreferrer'; visit.setAttribute('aria-label', 'Visit ' + site.name); visit.textContent = 'Visit ↗'; bottom.append(category, visit);
    card.append(top, heading, description, bottom);
    card.addEventListener('pointermove', function (event) { var rect = card.getBoundingClientRect(); card.style.setProperty('--pw-x', (event.clientX - rect.left) + 'px'); card.style.setProperty('--pw-y', (event.clientY - rect.top) + 'px'); });
    card.addEventListener('pointerleave', function () { card.style.removeProperty('--pw-x'); card.style.removeProperty('--pw-y'); });
    return card;
  }

  function renderDiscovery() {
    var ticker = document.getElementById('pw-ticker-track'); var tickerNames = categories.map(function (category) { return category.name + ' · ' + category.sites.length; }); ticker.textContent = tickerNames.concat(tickerNames).join('    ✦    ');
    var models = document.getElementById('pw-model-grid'); var modelFragment = document.createDocumentFragment(); modelWatch.forEach(function (site, index) { modelFragment.appendChild(createSiteCard(site, index, 'model')); }); models.appendChild(modelFragment);
    var picks = document.getElementById('pw-picks-grid'); var pickFragment = document.createDocumentFragment(); editorial.slice(0, 6).forEach(function (site, index) { pickFragment.appendChild(createSiteCard(site, index, 'pick')); }); picks.appendChild(pickFragment);
    var jump = document.getElementById('pw-jump'); var groups = document.getElementById('pw-directory-groups');
    categories.forEach(function (category, categoryIndex) {
      var anchor = document.createElement('a'); anchor.href = '#pw-shelf-' + category.id; anchor.textContent = String(categoryIndex + 1).padStart(2, '0') + ' ' + category.name; jump.appendChild(anchor);
      var seen = new Set(); var sites = category.sites.map(function (raw) { return siteByUrl.get(urlKey(raw.u)); }).filter(function (site) { if (!site || seen.has(site.url)) return false; seen.add(site.url); return true; }); var expanded = false;
      var shelf = document.createElement('section'); shelf.className = 'pw-category-shelf'; shelf.id = 'pw-shelf-' + category.id;
      var head = document.createElement('header'); var code = document.createElement('span'); code.className = 'pw-category-shelf__code'; code.textContent = String(categoryIndex + 1).padStart(2, '0'); var titleWrap = document.createElement('div'); var title = document.createElement('h3'); title.textContent = category.name; var countText = document.createElement('p'); countText.textContent = sites.length + ' websites in this field'; titleWrap.append(title, countText); var open = document.createElement('button'); open.type = 'button'; open.textContent = 'Search this field ↗'; open.addEventListener('click', function () { var rail = document.querySelector('.pw-category:nth-child(' + (categoryIndex + 1) + ')'); showCategory(category, rail); }); head.append(code, titleWrap, open);
      var cards = document.createElement('div'); cards.className = 'pw-category-shelf__grid';
      var toggle = document.createElement('button'); toggle.className = 'pw-category-shelf__more'; toggle.type = 'button'; toggle.addEventListener('click', function () { expanded = !expanded; drawShelf(); if (!expanded) shelf.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }); });
      function drawShelf() { var fragment = document.createDocumentFragment(); (expanded ? sites : sites.slice(0, 6)).forEach(function (site, index) { fragment.appendChild(createSiteCard(site, index)); }); cards.replaceChildren(fragment); toggle.textContent = expanded ? 'Collapse shelf ↑' : 'Show all ' + sites.length + ' websites ↓'; toggle.setAttribute('aria-expanded', String(expanded)); }
      shelf.append(head, cards, toggle); groups.appendChild(shelf); drawShelf();
    });
  }
  renderDiscovery();

  function showFeature(index) { if (!editorial.length) return; featureIndex = (index + editorial.length) % editorial.length; var site = editorial[featureIndex]; var box = document.getElementById('pw-feature'); box.classList.remove('is-switching'); void box.offsetWidth; box.classList.add('is-switching'); var link = document.getElementById('pw-feature-name'); link.textContent = site.name + ' ↗'; link.href = site.url; document.getElementById('pw-feature-meta').textContent = site.categoryName + ' / ' + hostFor(site.url); document.getElementById('pw-feature-index').textContent = String(featureIndex + 1).padStart(2, '0') + ' / ' + String(editorial.length).padStart(2, '0'); }
  showFeature(0); var featureTimer = setInterval(function () { if (!visual.paused && !panel.classList.contains('is-open')) showFeature(featureIndex + 1); }, 4600);

  document.getElementById('pw-search').addEventListener('submit', function (event) { event.preventDefault(); runSearch(searchInput.value); });
  searchInput.addEventListener('input', function () { clearTimeout(searchTimer); var value = searchInput.value.trim(); if (!value) { searchLive.textContent = 'Awaiting a signal'; visual.searchRatio = 0; if (currentMode === 'search') closePanel(); return; } var matches = searchSites(value); searchLive.textContent = matches.length + ' signals responding'; visual.searchRatio = Math.min(1, matches.length / 120 + .12); searchTimer = setTimeout(function () { if (value.length > 1) runSearch(value); }, 180); });
  document.querySelectorAll('[data-query]').forEach(function (button) { button.addEventListener('click', function () { searchInput.value = button.dataset.query; runSearch(button.dataset.query); }); });
  document.getElementById('pw-browse').addEventListener('click', showBrowse); document.getElementById('pw-saved').addEventListener('click', showSaved); document.getElementById('pw-close').addEventListener('click', closePanel); backdrop.addEventListener('click', closePanel);
  more.addEventListener('click', function () { visibleCount += 10; drawResults(); });
  function showRandomSignal() { var site = allSites[Math.floor(Math.random() * allSites.length)]; visual.burst = 2; showResults([site], 'A random signal', 'Field transmission', 'random'); }
  document.getElementById('pw-random').addEventListener('click', showRandomSignal); document.getElementById('pw-random-bottom').addEventListener('click', showRandomSignal);
  document.addEventListener('keydown', function (event) { if (event.key === '/' && document.activeElement !== searchInput) { event.preventDefault(); searchInput.focus(); } if (event.key === 'Escape') { if (panel.classList.contains('is-open')) closePanel(); else { searchInput.value = ''; searchLive.textContent = 'Awaiting a signal'; searchInput.blur(); visual.searchRatio = 0; } } });

  var hero = document.getElementById('pw-top'); var cinema = document.getElementById('pw-cinema'); var canvas = document.getElementById('pw-field'); var ctx = canvas.getContext('2d', { alpha: true }); var halo = document.getElementById('pw-cursor'); var coord = document.getElementById('pw-coordinate');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var typewriterText = 'A thousand links are noise until somebody tells you where to start. These are useful sites with plain-English briefs, real limits, and no paid placement deciding the order.';
  var typewriterCopy = document.getElementById('pw-typewriter-copy'); var typewriterStarted = false;
  function typeIntro() {
    if (typewriterStarted || !typewriterCopy) return; typewriterStarted = true;
    if (reduceMotion) { typewriterCopy.textContent = typewriterText; return; }
    var index = 0;
    function nextCharacter() {
      index += 1; typewriterCopy.textContent = typewriterText.slice(0, index);
      if (index < typewriterText.length) { var character = typewriterText.charAt(index - 1); setTimeout(nextCharacter, /[.!?]/.test(character) ? 190 : /[,;]/.test(character) ? 90 : 18 + Math.random() * 24); }
    }
    setTimeout(nextCharacter, 260);
  }
  var visual = { width: 0, height: 0, dpr: 1, particles: [], ripples: [], pointer: { x: -500, y: -500, tx: -500, ty: -500, active: false }, focusGroup: -1, searchRatio: 0, burst: 0, paused: reduceMotion, inView: true, frame: 0, last: 0, raf: 0 };
  var palette = ['#ff2a2a', '#ff6b3d', '#ffb2b2', '#f3f1e8'];
  function pseudo(index, salt) { var x = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453; return x - Math.floor(x); }
  function resizeField() {
    var rect = hero.getBoundingClientRect(); visual.width = rect.width; visual.height = rect.height; visual.dpr = Math.min(window.devicePixelRatio || 1, rect.width < 700 ? 1.2 : 1.5); canvas.width = Math.round(rect.width * visual.dpr); canvas.height = Math.round(rect.height * visual.dpr); canvas.style.width = rect.width + 'px'; canvas.style.height = rect.height + 'px'; ctx.setTransform(visual.dpr, 0, 0, visual.dpr, 0, 0);
    var targetCount = rect.width < 700 ? 105 : rect.width < 1100 ? 180 : 270; visual.particles = Array.from({ length: targetCount }, function (_, i) { return { x: pseudo(i, 1) * rect.width, y: pseudo(i, 2) * rect.height, vx: 0, vy: 0, group: i % categories.length, angle: pseudo(i, 3) * Math.PI * 2, radius: 14 + pseudo(i, 4) * 85, speed: .12 + pseudo(i, 5) * .28, size: .7 + pseudo(i, 6) * 1.8, alpha: .2 + pseudo(i, 7) * .7 }; });
    drawField(performance.now(), true);
  }
  function groupPoint(group, time) {
    var angle = group / categories.length * Math.PI * 2 + time * .000012 * (group % 2 ? 1 : -1); var centerX = visual.width * (visual.width < 700 ? .57 : .67); var centerY = visual.height * .48; var rx = visual.width * (visual.width < 700 ? .42 : .28); var ry = visual.height * .31;
    var focus = visual.focusGroup; if (focus >= 0) { if (group === focus) return { x: visual.width * .64, y: visual.height * .47, active: true }; rx *= 1.18; ry *= 1.18; }
    if (visual.searchRatio > 0) { rx *= 1 - visual.searchRatio * .55; ry *= 1 - visual.searchRatio * .55; }
    return { x: centerX + Math.cos(angle) * rx, y: centerY + Math.sin(angle) * ry, active: focus < 0 || group === focus };
  }
  function drawField(time, once) {
    visual.raf = 0; var dt = Math.min(32, time - (visual.last || time)); visual.last = time; visual.frame++;
    ctx.setTransform(visual.dpr, 0, 0, visual.dpr, 0, 0); ctx.clearRect(0, 0, visual.width, visual.height);
    var p = visual.pointer; p.x += (p.tx - p.x) * .16; p.y += (p.ty - p.y) * .16; halo.style.transform = 'translate3d(' + p.x + 'px,' + p.y + 'px,0)';
    var centers = categories.map(function (_, index) { return groupPoint(index, time); });
    ctx.lineWidth = .6; centers.forEach(function (center, index) { var next = centers[(index + 1) % centers.length]; ctx.strokeStyle = 'rgba(243,241,232,' + (visual.focusGroup < 0 ? '.045' : '.02') + ')'; ctx.beginPath(); ctx.moveTo(center.x, center.y); ctx.lineTo(next.x, next.y); ctx.stroke(); });
    visual.particles.forEach(function (point, index) {
      var center = centers[point.group]; var localAngle = point.angle + time * .0001 * point.speed; var compression = 1 - visual.searchRatio * .45; var targetX = center.x + Math.cos(localAngle) * point.radius * compression; var targetY = center.y + Math.sin(localAngle * 1.17) * point.radius * .68 * compression;
      var pull = center.active ? .014 : .006; point.vx += (targetX - point.x) * pull; point.vy += (targetY - point.y) * pull;
      if (p.active) { var dx = point.x - p.x; var dy = point.y - p.y; var distance = Math.sqrt(dx * dx + dy * dy) || 1; if (distance < 155) { var force = (1 - distance / 155) * (center.active ? .58 : .24); point.vx += dx / distance * force; point.vy += dy / distance * force; } }
      if (visual.burst > 0) { var bx = point.x - visual.width * .64; var by = point.y - visual.height * .47; var bd = Math.sqrt(bx * bx + by * by) || 1; point.vx += bx / bd * visual.burst * .42; point.vy += by / bd * visual.burst * .42; }
      point.vx *= .92; point.vy *= .92; point.x += point.vx * dt * .065; point.y += point.vy * dt * .065;
      var activeAlpha = center.active ? point.alpha : point.alpha * .09; if (index % 6 === 0 && center.active) { ctx.strokeStyle = 'rgba(243,241,232,' + activeAlpha * .08 + ')'; ctx.beginPath(); ctx.moveTo(point.x, point.y); ctx.lineTo(center.x, center.y); ctx.stroke(); }
      ctx.fillStyle = palette[point.group % palette.length]; ctx.globalAlpha = activeAlpha; ctx.beginPath(); ctx.arc(point.x, point.y, point.size * (center.active ? 1 : .7), 0, Math.PI * 2); ctx.fill();
    }); ctx.globalAlpha = 1; visual.burst *= .92; if (visual.burst < .01) visual.burst = 0;
    visual.ripples = visual.ripples.filter(function (ripple) { ripple.life += dt; var progress = ripple.life / 900; if (progress >= 1) return false; ctx.strokeStyle = 'rgba(216,255,69,' + (1 - progress) * .5 + ')'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(ripple.x, ripple.y, progress * 140, 0, Math.PI * 2); ctx.stroke(); return true; });
    if (!visual.paused && visual.inView && !once && !document.hidden) visual.raf = requestAnimationFrame(drawField);
  }
  function ensureAnimation() { if (!visual.raf && !visual.paused && visual.inView) visual.raf = requestAnimationFrame(drawField); }
  hero.addEventListener('pointermove', function (event) { visual.pointer.tx = event.clientX; visual.pointer.ty = event.clientY; visual.pointer.active = true; coord.textContent = 'x ' + String(Math.round(event.clientX)).padStart(3, '0') + ' / y ' + String(Math.round(event.clientY)).padStart(3, '0'); ensureAnimation(); });
  hero.addEventListener('pointerleave', function () { visual.pointer.active = false; });
  canvas.addEventListener('pointerdown', function (event) { visual.ripples.push({ x: event.clientX, y: event.clientY, life: 0 }); visual.burst = .7; ensureAnimation(); });
  window.addEventListener('resize', resizeField); document.addEventListener('visibilitychange', function () { if (document.hidden) cinema.pause(); else { if (!visual.paused && visual.inView) cinema.play().catch(function () {}); ensureAnimation(); } });
  var motionButton = document.getElementById('pw-motion'); function setMotion(paused) { visual.paused = paused; motionButton.setAttribute('aria-pressed', String(paused)); motionButton.textContent = paused ? 'Motion off' : 'Motion on'; if (paused) { cinema.pause(); if (visual.raf) { cancelAnimationFrame(visual.raf); visual.raf = 0; } drawField(performance.now(), true); } else { if (visual.inView) cinema.play().catch(function () {}); ensureAnimation(); } }
  motionButton.addEventListener('click', function () { setMotion(!visual.paused); });

  if ('IntersectionObserver' in window) {
    var heroObserver = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { visual.inView = entry.isIntersecting; if (!entry.isIntersecting) { cinema.pause(); if (visual.raf) { cancelAnimationFrame(visual.raf); visual.raf = 0; } } else if (!visual.paused) { cinema.play().catch(function () {}); ensureAnimation(); } }); }, { threshold: .08 }); heroObserver.observe(hero);
    var revealObserver = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }); }, { rootMargin: '0px 0px -8% 0px', threshold: .01 }); document.querySelectorAll('.pw-reveal').forEach(function (section) { revealObserver.observe(section); });
    var typeObserver = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { typeIntro(); typeObserver.disconnect(); } }); }, { threshold: .25 }); typeObserver.observe(document.querySelector('.pw-intro'));
  } else { document.querySelectorAll('.pw-reveal').forEach(function (section) { section.classList.add('is-visible'); }); typeIntro(); }

  var topButton = document.getElementById('pw-to-top'); function updateScrollProgress() { var max = Math.max(1, document.documentElement.scrollHeight - innerHeight); var ratio = Math.min(1, scrollY / max); topButton.style.setProperty('--pw-progress', (ratio * 360) + 'deg'); topButton.classList.toggle('is-visible', scrollY > Math.max(520, hero.offsetHeight * .65)); }
  addEventListener('scroll', updateScrollProgress, { passive: true }); topButton.addEventListener('click', function () { scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }); }); updateScrollProgress();

  resizeField(); setMotion(reduceMotion);
  var params = new URLSearchParams(location.search); var query = params.get('q'); var categoryId = params.get('category');
  if (query) { searchInput.value = query; runSearch(query, { skipHistory: true }); }
  else if (params.get('view') === 'saved') showSaved();
  else if (params.get('view') === 'fields') showBrowse();
  else if (categoryId) { var initial = categories.find(function (category) { return category.id === categoryId; }); if (initial) showCategory(initial, document.querySelector('.pw-category:nth-child(' + (categories.indexOf(initial) + 1) + ')'), { skipHistory: true }); }

  document.documentElement.classList.remove('desk-loading'); document.documentElement.setAttribute('data-theme', 'dark'); window.__PWL_DESK_READY__ = true;
  console.log('[living-index] Ready: ' + allSites.length + ' signals, ' + categories.length + ' constellations');
})();
