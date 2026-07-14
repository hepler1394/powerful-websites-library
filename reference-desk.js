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
  function normalize(value) { return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); }
  function hostFor(url) {
    try { return new URL(url).hostname.replace(/^www\./, ''); } catch (error) { return url; }
  }

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
    return filingGroups.find(function (group) { return group.id === id; });
  }

  rawCategories.forEach(function (category) {
    var group = filingGroupFor(category);
    category.sites.forEach(function (site) {
      var destination = normalize(site.n) === 'squoosh'
        ? filingGroups.find(function (item) { return item.id === 'design-media'; })
        : group;
      destination.sites.push(site);
    });
  });

  // The legacy merger keeps the first URL it sees. Because Top Picks is first in
  // DATA, some flagship sites were removed from their real categories. Re-file
  // those missing entries so they remain searchable and browsable.
  if (topCategory) {
    var filedUrls = new Set();
    filingGroups.forEach(function (group) {
      group.sites.forEach(function (site) { filedUrls.add(cleanUrl(site.u).toLowerCase()); });
    });
    topCategory.sites.forEach(function (site) {
      var key = cleanUrl(site.u).toLowerCase();
      if (!key || filedUrls.has(key)) return;
      filingGroupFor({ id: 'editor-pick', name: site.s || site.n }).sites.push(site);
      filedUrls.add(key);
    });
  }
  var categories = filingGroups.filter(function (group) { return group.sites.length; });

  categories.forEach(function (category) {
    category.sites.forEach(function (raw) {
      var url = cleanUrl(raw.u);
      if (!url || siteByUrl.has(url.toLowerCase())) return;
      var site = {
        name: raw.n || hostFor(url), url: url, description: raw.d || '', limit: raw.l || '', source: raw.s || '',
        categoryId: category.id, categoryName: category.name || category.id
      };
      site.search = normalize([site.name, site.description, site.limit, site.categoryName, site.source].join(' '));
      siteByUrl.set(url.toLowerCase(), site);
      allSites.push(site);
    });
  });

  function findSite(name) {
    var key = normalize(name);
    return allSites.find(function (site) { return normalize(site.name) === key; });
  }

  var editorialNames = ['Photopea', 'Have I Been Pwned', 'NotebookLM', 'CodePen', 'Squoosh', 'Neal.fun'];
  var editorial = editorialNames.map(findSite).filter(Boolean);
  if (editorial.length < 6 && topCategory) {
    topCategory.sites.forEach(function (raw) {
      if (editorial.length >= 6) return;
      var match = siteByUrl.get(cleanUrl(raw.u).toLowerCase()) || findSite(raw.n);
      if (match && !editorial.includes(match)) editorial.push(match);
    });
  }

  var icons = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>',
    bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-4-6 4V4.75Z"></path></svg>'
  };

  Array.from(document.body.children).forEach(function (node) { node.classList.add('desk-legacy'); });
  document.body.className = 'desk-body';
  var deskRoot = document.createElement('div');
  deskRoot.className = 'desk-root';
  deskRoot.innerHTML = [
    '<a class="desk-skip" href="#desk-main">Skip to the index</a>',
    '<header class="desk-header"><div class="desk-shell desk-header__inner">',
      '<a class="desk-brand" href="./" aria-label="Powerful Websites home"><span class="desk-brand__mark">Powerful Websites</span><span class="desk-brand__edition">Internet reference desk</span></a>',
      '<nav class="desk-nav" aria-label="Primary"><a href="faq.html">How it works</a><button type="button" id="desk-browse-button">Browse</button><button type="button" id="desk-saved-button">Saved <span class="desk-nav__count" id="desk-saved-count">0</span></button></nav>',
    '</div></header>',
    '<main class="desk-main" id="desk-main">',
      '<section class="desk-hero"><div class="desk-shell">',
        '<p class="desk-kicker">Independent index · <span id="desk-total-count"></span> sites · honest limitations</p>',
        '<h1>The useful web,<br>properly indexed.</h1>',
        '<p class="desk-lede">Not another wall of tools. Search for the job in front of you, or open the archive when you want to wander.</p>',
        '<form class="desk-search" id="desk-search-form" role="search">',
          '<div class="desk-search__box">', icons.search,
            '<input id="desk-search-input" type="search" autocomplete="off" spellcheck="false" placeholder="What do you need to do?" aria-label="Search the website index">',
            '<button class="desk-search__clear" id="desk-search-clear" type="button" aria-label="Clear search" hidden>Clear</button>',
          '</div>',
          '<div class="desk-trails" aria-label="Useful starting points"><span>Useful trails</span><button type="button" data-query="pdf">Work with a PDF</button><button type="button" data-query="privacy security">Check my privacy</button><button type="button" data-query="design image editor">Make something visual</button><button type="button" data-query="learning education">Learn a subject</button><button type="button" data-query="developer code">Build for the web</button></div>',
        '</form>',
      '</div></section>',
      '<section class="desk-section" id="desk-shortlist-section"><div class="desk-shell">',
        '<div class="desk-section__head"><div><p class="desk-label">Start here</p><h2>The short list</h2></div><p class="desk-section__note">Six dependable places worth knowing. Chosen for usefulness, not sponsorship or novelty.</p></div>',
        '<div class="desk-shortlist" id="desk-shortlist"></div>',
      '</div></section>',
      '<section class="desk-archive" id="desk-archive"><div class="desk-shell">',
        '<details id="desk-archive-details"><summary><span><span class="desk-label">Browse only when needed</span><span class="desk-archive__title">Open the full archive</span></span><span class="desk-archive__toggle"><span class="desk-archive__meta">' + categories.length + ' categories</span>' + icons.plus + '</span></summary><div class="desk-categories" id="desk-categories"></div></details>',
      '</div></section>',
      '<section class="desk-results" id="desk-results" hidden><div class="desk-shell">',
        '<div class="desk-results__bar"><div class="desk-results__copy"><p class="desk-label" id="desk-results-label">Index results</p><h2 id="desk-results-title">Results</h2><p id="desk-results-meta"></p></div><div class="desk-results__actions"><button class="desk-button" id="desk-results-clear" type="button">Back to start</button></div></div>',
        '<div class="desk-result-list" id="desk-result-list"></div><div class="desk-empty" id="desk-empty" hidden><h3>Nothing filed under that yet.</h3><p>Try a simpler job or open the archive by category.</p></div><div class="desk-load-wrap"><button class="desk-button desk-load" id="desk-load-more" type="button" hidden>Show more</button></div>',
      '</div></section>',
    '</main>',
    '<footer class="desk-footer"><div class="desk-shell desk-footer__inner"><p>Useful links, direct routes, honest caveats. No paid placement.</p><p><a href="faq.html">How the index works</a> · Updated as the web changes.</p></div></footer>',
    '<div class="desk-toast" id="desk-toast" role="status" aria-live="polite" hidden></div>'
  ].join('');
  document.body.appendChild(deskRoot);

  var searchInput = document.getElementById('desk-search-input');
  var searchClear = document.getElementById('desk-search-clear');
  var shortlistSection = document.getElementById('desk-shortlist-section');
  var resultsSection = document.getElementById('desk-results');
  var resultList = document.getElementById('desk-result-list');
  var resultsTitle = document.getElementById('desk-results-title');
  var resultsLabel = document.getElementById('desk-results-label');
  var resultsMeta = document.getElementById('desk-results-meta');
  var emptyState = document.getElementById('desk-empty');
  var loadMore = document.getElementById('desk-load-more');
  var archive = document.getElementById('desk-archive-details');
  var currentResults = [];
  var visibleCount = 12;
  var currentMode = 'home';
  var toastTimer;

  function getFavorites() {
    try {
      var stored = JSON.parse(localStorage.getItem('pwl_favorites') || '[]');
      return Array.isArray(stored) ? stored : [];
    } catch (error) { return []; }
  }

  function isFavorite(url) { return getFavorites().includes(url); }
  function updateSavedCount() { document.getElementById('desk-saved-count').textContent = getFavorites().length; }
  function showToast(message) {
    var toast = document.getElementById('desk-toast');
    toast.textContent = message; toast.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { toast.hidden = true; }, 1800);
  }

  function toggleFavorite(site) {
    var favorites = getFavorites();
    var index = favorites.indexOf(site.url);
    if (index >= 0) { favorites.splice(index, 1); showToast('Removed from saved sites'); }
    else { favorites.push(site.url); showToast('Saved for later'); }
    localStorage.setItem('pwl_favorites', JSON.stringify(favorites));
    updateSavedCount();
    document.querySelectorAll('.desk-save[data-url]').forEach(function (button) {
      if (button.dataset.url === site.url) button.setAttribute('aria-pressed', String(index < 0));
    });
    if (currentMode === 'saved') showSaved();
  }

  function createEntry(site) {
    var article = document.createElement('article');
    article.className = 'desk-entry';

    var top = document.createElement('div'); top.className = 'desk-entry__top';
    var siteMeta = document.createElement('div'); siteMeta.className = 'desk-entry__site';
    var image = document.createElement('img'); image.className = 'desk-entry__favicon'; image.width = 28; image.height = 28; image.loading = 'lazy'; image.alt = '';
    image.src = 'https://www.google.com/s2/favicons?domain=' + encodeURIComponent(hostFor(site.url)) + '&sz=64';
    var host = document.createElement('span'); host.className = 'desk-entry__host'; host.textContent = hostFor(site.url);
    siteMeta.append(image, host);
    var save = document.createElement('button'); save.className = 'desk-save'; save.type = 'button'; save.dataset.url = site.url;
    save.setAttribute('aria-label', 'Save ' + site.name); save.setAttribute('aria-pressed', String(isFavorite(site.url))); save.innerHTML = icons.bookmark;
    save.addEventListener('click', function () { toggleFavorite(site); });
    top.append(siteMeta, save);

    var heading = document.createElement('h3');
    var link = document.createElement('a'); link.href = site.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = site.name;
    link.addEventListener('click', function () {
      try {
        var recent = JSON.parse(localStorage.getItem('pwl_recently_viewed') || '[]');
        recent = Array.isArray(recent) ? recent.filter(function (url) { return url !== site.url; }) : [];
        recent.unshift(site.url); localStorage.setItem('pwl_recently_viewed', JSON.stringify(recent.slice(0, 30)));
      } catch (error) { /* local storage can be unavailable in strict privacy modes */ }
    });
    heading.appendChild(link);
    var description = document.createElement('p'); description.className = 'desk-entry__desc'; description.textContent = site.description;
    var bottom = document.createElement('div'); bottom.className = 'desk-entry__bottom';
    var category = document.createElement('span'); category.className = 'desk-entry__category'; category.textContent = site.categoryName;
    bottom.appendChild(category);
    if (site.limit && !/^none\b/i.test(site.limit)) {
      var limit = document.createElement('span'); limit.className = 'desk-entry__limit'; limit.textContent = site.limit; bottom.appendChild(limit);
    }
    article.append(top, heading, description, bottom);
    return article;
  }

  function renderEntries(container, sites) {
    var fragment = document.createDocumentFragment();
    sites.forEach(function (site) { fragment.appendChild(createEntry(site)); });
    container.replaceChildren(fragment);
  }

  function scoreSite(site, terms) {
    var name = normalize(site.name); var category = normalize(site.categoryName); var score = 0;
    terms.forEach(function (term) {
      if (name === term) score += 40;
      else if (name.indexOf(term) === 0) score += 18;
      else if (name.includes(term)) score += 10;
      if (category.includes(term)) score += 6;
      if (site.search.includes(term)) score += 2;
    });
    return score;
  }

  function searchSites(query) {
    var terms = normalize(query).split(' ').filter(Boolean);
    if (!terms.length) return [];
    return allSites.map(function (site) { return { site: site, score: scoreSite(site, terms) }; })
      .filter(function (item) { return item.score > 0 && terms.every(function (term) { return item.site.search.includes(term); }); })
      .sort(function (a, b) { return b.score - a.score || a.site.name.localeCompare(b.site.name); })
      .map(function (item) { return item.site; });
  }

  function drawResults() {
    renderEntries(resultList, currentResults.slice(0, visibleCount));
    emptyState.hidden = currentResults.length !== 0;
    loadMore.hidden = visibleCount >= currentResults.length;
  }

  function showResults(sites, title, label, mode) {
    currentResults = sites; visibleCount = 12; currentMode = mode;
    resultsTitle.textContent = title; resultsLabel.textContent = label;
    resultsMeta.textContent = sites.length + (sites.length === 1 ? ' site' : ' sites') + ' in the index';
    shortlistSection.hidden = true; resultsSection.hidden = false; drawResults();
  }

  function resetHome(options) {
    currentMode = 'home'; currentResults = []; visibleCount = 12;
    searchInput.value = ''; searchClear.hidden = true; shortlistSection.hidden = false; resultsSection.hidden = true;
    document.querySelectorAll('.desk-category').forEach(function (button) { button.removeAttribute('aria-current'); });
    if (!options || !options.keepArchive) archive.open = false;
    if (!options || !options.skipHistory) history.replaceState(null, '', location.pathname);
  }

  function runSearch(query, options) {
    var value = query.trim();
    searchInput.value = value; searchClear.hidden = !value;
    if (!value) { resetHome({ keepArchive: true }); return; }
    showResults(searchSites(value), '“' + value + '”', 'Search results', 'search');
    document.querySelectorAll('.desk-category').forEach(function (button) { button.removeAttribute('aria-current'); });
    if (!options || !options.skipHistory) history.replaceState(null, '', '?q=' + encodeURIComponent(value));
    if (options && options.scroll) resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function showCategory(category, button) {
    searchInput.value = ''; searchClear.hidden = true;
    document.querySelectorAll('.desk-category').forEach(function (item) { item.removeAttribute('aria-current'); });
    if (button) button.setAttribute('aria-current', 'true');
    var sites = category.sites.map(function (raw) { return siteByUrl.get(cleanUrl(raw.u).toLowerCase()); }).filter(Boolean);
    showResults(sites, category.name, 'Archive category', 'category');
    history.replaceState(null, '', '?category=' + encodeURIComponent(category.id));
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function showSaved() {
    var favorites = getFavorites();
    var sites = favorites.map(function (url) { return siteByUrl.get(cleanUrl(url).toLowerCase()); }).filter(Boolean);
    searchInput.value = ''; searchClear.hidden = true;
    showResults(sites, 'Saved sites', 'Your reference shelf', 'saved');
    history.replaceState(null, '', '?view=saved');
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  document.getElementById('desk-total-count').textContent = allSites.length.toLocaleString();
  renderEntries(document.getElementById('desk-shortlist'), editorial.slice(0, 6));
  updateSavedCount();

  var categoryFragment = document.createDocumentFragment();
  categories.slice().sort(function (a, b) { return a.name.localeCompare(b.name); }).forEach(function (category) {
    var button = document.createElement('button'); button.type = 'button'; button.className = 'desk-category'; button.dataset.category = category.id;
    var name = document.createElement('span'); name.className = 'desk-category__name'; name.textContent = category.name;
    var count = document.createElement('span'); count.className = 'desk-category__count'; count.textContent = category.sites.length;
    button.append(name, count); button.addEventListener('click', function () { showCategory(category, button); }); categoryFragment.appendChild(button);
  });
  document.getElementById('desk-categories').appendChild(categoryFragment);

  document.getElementById('desk-search-form').addEventListener('submit', function (event) { event.preventDefault(); runSearch(searchInput.value, { scroll: true }); });
  searchInput.addEventListener('input', function () { runSearch(searchInput.value, { skipHistory: false }); });
  searchClear.addEventListener('click', function () { resetHome({ keepArchive: true }); searchInput.focus(); });
  document.querySelectorAll('[data-query]').forEach(function (button) { button.addEventListener('click', function () { runSearch(button.dataset.query, { scroll: true }); }); });
  document.getElementById('desk-browse-button').addEventListener('click', function () { archive.open = true; document.getElementById('desk-archive').scrollIntoView({ behavior: 'smooth' }); });
  document.getElementById('desk-saved-button').addEventListener('click', showSaved);
  document.getElementById('desk-results-clear').addEventListener('click', function () { resetHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  loadMore.addEventListener('click', function () { visibleCount += 12; drawResults(); });
  document.addEventListener('keydown', function (event) {
    if (event.key === '/' && document.activeElement !== searchInput) { event.preventDefault(); searchInput.focus(); }
    if (event.key === 'Escape' && document.activeElement === searchInput) { resetHome({ keepArchive: true }); searchInput.blur(); }
  });

  var params = new URLSearchParams(location.search);
  var query = params.get('q'); var categoryId = params.get('category');
  if (query) runSearch(query, { skipHistory: true });
  else if (params.get('view') === 'saved') showSaved();
  else if (categoryId) {
    var initialCategory = categories.find(function (category) { return category.id === categoryId; });
    var initialButton = document.querySelector('.desk-category[data-category="' + CSS.escape(categoryId) + '"]');
    if (initialCategory) { archive.open = true; showCategory(initialCategory, initialButton); }
  }

  document.documentElement.classList.remove('desk-loading');
  document.documentElement.setAttribute('data-theme', 'light');
  window.__PWL_DESK_READY__ = true;
  console.log('[reference-desk] Ready: ' + allSites.length + ' sites, ' + categories.length + ' categories');
})();
