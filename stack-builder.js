(function () {
  'use strict';

  var STORAGE_KEY = 'pwl_saved_stacks_v1';
  var PROFILES = [
    { id: 'website', match: /website|landing|app|portfolio|saas|code|develop|launch/i, stages: [
      ['Plan', ['research', 'planning', 'idea', 'wireframe']],
      ['Build', ['code', 'developer', 'website', 'frontend', 'no-code']],
      ['Design', ['design', 'ui', 'image', 'font', 'color']],
      ['Ship', ['host', 'deploy', 'domain', 'analytics', 'seo']]
    ]},
    { id: 'creator', match: /podcast|video|creator|youtube|music|audio|newsletter|content/i, stages: [
      ['Research', ['research', 'trend', 'search', 'topic']],
      ['Create', ['writing', 'video', 'audio', 'design', 'creator']],
      ['Polish', ['edit', 'enhance', 'remove', 'convert']],
      ['Publish', ['publish', 'social', 'newsletter', 'podcast', 'host']]
    ]},
    { id: 'privacy', match: /private|privacy|secure|vpn|block|anonymous|tracking/i, stages: [
      ['Browse', ['privacy browser', 'browser', 'anonymous']],
      ['Protect', ['ad blocker', 'tracker', 'block']],
      ['Connect', ['vpn', 'dns', 'proxy']],
      ['Verify', ['security', 'breach', 'scan', 'password']]
    ]},
    { id: 'learn', match: /learn|study|school|course|teach|education|practice/i, stages: [
      ['Understand', ['course', 'learn', 'explain', 'education']],
      ['Practice', ['practice', 'quiz', 'exercise', 'code']],
      ['Capture', ['notes', 'organize', 'bookmark', 'knowledge']],
      ['Deepen', ['research', 'book', 'paper', 'library']]
    ]},
    { id: 'research', match: /research|compare|investigate|fact|source|paper|data/i, stages: [
      ['Discover', ['search', 'research', 'discovery', 'academic']],
      ['Read', ['reader', 'paper', 'book', 'archive']],
      ['Analyze', ['data', 'compare', 'visualize', 'analysis']],
      ['Organize', ['notes', 'citation', 'bookmark', 'organize']]
    ]}
  ];
  var FALLBACK = { id: 'general', stages: [
    ['Discover', ['search', 'research', 'directory']],
    ['Create', ['create', 'ai', 'tool']],
    ['Organize', ['productivity', 'notes', 'organize']],
    ['Share', ['share', 'publish', 'collaborate']]
  ]};
  var state = { brief: '', profile: FALLBACK, stages: [], offsets: [0, 0, 0, 0] };

  function allSites() {
    var data = window.DATA || [];
    var seen = new Set();
    return data.flatMap(function (category) {
      return (category.sites || []).map(function (site) {
        return Object.assign({}, site, { category: category.name || '', categoryId: category.id || '' });
      });
    }).filter(function (site) {
      if (!site.u) return false;
      var key = site.u.replace(/\/+$/, '').toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function scoreSite(site, terms, brief) {
    var name = (site.n || '').toLowerCase();
    var category = ((site.category || '') + ' ' + (site.categoryId || '')).toLowerCase();
    var description = (site.d || '').toLowerCase();
    var score = 0;
    terms.forEach(function (term) {
      if (name.includes(term)) score += 9;
      if (category.includes(term)) score += 6;
      if (description.includes(term)) score += 3;
    });
    brief.toLowerCase().split(/[^a-z0-9]+/).filter(function (word) { return word.length > 3; }).forEach(function (word) {
      if (name.includes(word)) score += 5;
      if (category.includes(word)) score += 3;
      if (description.includes(word)) score += 2;
    });
    if (!site.l || /none|free|open source/i.test(site.l)) score += 1;
    return score;
  }

  function candidatesFor(terms, brief) {
    return allSites().map(function (site) {
      return { site: site, score: scoreSite(site, terms, brief) };
    }).filter(function (item) { return item.score > 0; }).sort(function (a, b) {
      return b.score - a.score || (a.site.n || '').localeCompare(b.site.n || '');
    }).map(function (item) { return item.site; });
  }

  function build(brief) {
    state.brief = brief.trim();
    state.profile = PROFILES.find(function (profile) { return profile.match.test(state.brief); }) || FALLBACK;
    state.offsets = [0, 0, 0, 0];
    var used = new Set();
    state.stages = state.profile.stages.map(function (stage, index) {
      var candidates = candidatesFor(stage[1], state.brief).filter(function (site) { return !used.has(site.u); });
      var site = candidates[state.offsets[index]] || candidates[0] || null;
      if (site) used.add(site.u);
      return { label: stage[0], terms: stage[1], site: site, candidates: candidates };
    });
    render();
  }

  function swap(index) {
    var stage = state.stages[index];
    if (!stage || stage.candidates.length < 2) return;
    var used = new Set(state.stages.filter(function (_, i) { return i !== index; }).map(function (item) { return item.site && item.site.u; }));
    for (var tries = 0; tries < stage.candidates.length; tries++) {
      state.offsets[index] = (state.offsets[index] + 1) % stage.candidates.length;
      var candidate = stage.candidates[state.offsets[index]];
      if (!used.has(candidate.u)) { stage.site = candidate; break; }
    }
    render();
  }

  function getSaved() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch (_) { return []; }
  }

  function saveStack() {
    if (!state.stages.length) return;
    var saved = getSaved();
    var item = { id: Date.now().toString(36), brief: state.brief, profile: state.profile.id, sites: state.stages.map(function (stage) { return { label: stage.label, site: stage.site }; }) };
    saved.unshift(item);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved.slice(0, 10)));
    renderSaved();
    notify('Stack saved on this device');
  }

  function stackText() {
    return '# Tool stack: ' + state.brief + '\n\n' + state.stages.map(function (stage, index) {
      return (index + 1) + '. **' + stage.label + ' — ' + stage.site.n + '**\n   ' + stage.site.u + '\n   ' + (stage.site.d || '');
    }).join('\n\n') + '\n\nBuilt with Powerful Websites Library';
  }

  function copyStack() {
    navigator.clipboard.writeText(stackText()).then(function () { notify('Stack copied as Markdown'); });
  }

  function exportStack() {
    var payload = { brief: state.brief, createdAt: new Date().toISOString(), stages: state.stages.map(function (stage) { return { stage: stage.label, name: stage.site.n, url: stage.site.u, description: stage.site.d }; }) };
    var url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }));
    var anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'powerful-websites-stack.json';
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function openAll() {
    state.stages.forEach(function (stage) { if (stage.site) window.open(stage.site.u, '_blank', 'noopener'); });
  }

  function notify(message) {
    if (typeof window.showToast === 'function') window.showToast(message);
  }

  function renderSaved() {
    var list = document.getElementById('stackSavedList');
    var count = document.getElementById('stackSavedCount');
    if (!list || !count) return;
    var saved = getSaved();
    count.textContent = saved.length + '/10';
    list.replaceChildren();
    saved.slice(0, 4).forEach(function (item) {
      var button = document.createElement('button');
      button.type = 'button';
      button.textContent = item.brief;
      button.addEventListener('click', function () { build(item.brief); });
      list.appendChild(button);
    });
  }

  function render() {
    var output = document.getElementById('stackBuilderOutput');
    var heading = document.getElementById('stackBuilderHeading');
    if (!output || !heading) return;
    heading.textContent = state.brief ? 'A ' + state.stages.length + '-step stack for “' + state.brief + '”' : 'Your stack will appear here';
    output.replaceChildren();
    if (!state.stages.length) {
      var empty = document.createElement('div');
      empty.className = 'stack-builder__empty';
      empty.textContent = 'Describe a job to assemble a focused toolchain from the live library.';
      output.appendChild(empty);
      return;
    }
    state.stages.forEach(function (stage, index) {
      if (!stage.site) return;
      var row = document.createElement('article');
      row.className = 'stack-stage';
      var number = document.createElement('span');
      number.className = 'stack-stage__index';
      number.textContent = String(index + 1).padStart(2, '0');
      var body = document.createElement('div');
      body.className = 'stack-stage__body';
      var label = document.createElement('span');
      label.className = 'stack-stage__label';
      label.textContent = stage.label;
      var link = document.createElement('a');
      link.className = 'stack-stage__name';
      link.href = stage.site.u;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = stage.site.n;
      var desc = document.createElement('p');
      desc.className = 'stack-stage__desc';
      desc.textContent = stage.site.d || stage.site.category;
      body.append(label, link, desc);
      var swapButton = document.createElement('button');
      swapButton.className = 'stack-stage__swap';
      swapButton.type = 'button';
      swapButton.title = 'Try another tool for ' + stage.label;
      swapButton.setAttribute('aria-label', 'Try another tool for ' + stage.label);
      swapButton.textContent = '↻';
      swapButton.addEventListener('click', function () { swap(index); });
      row.append(number, body, swapButton);
      output.appendChild(row);
    });
  }

  function mount() {
    var anchor = document.getElementById('freshRail') || document.getElementById('mainContent');
    if (!anchor || !window.DATA || !window.DATA.length) return;
    var section = document.createElement('section');
    section.className = 'stack-builder';
    section.id = 'stackBuilder';
    section.innerHTML = '<div class="stack-builder__shell"><div class="stack-builder__brief"><span>WORKSPACE BUILDER</span><h2>Build a stack, not a bookmark pile.</h2><p>Describe the job. The library will assemble a focused sequence from the live catalog. Reroll any step, then save or export the result.</p><form class="stack-builder__form" id="stackBuilderForm"><label for="stackBrief">What are you trying to accomplish?</label><textarea id="stackBrief" maxlength="240">Launch a polished portfolio website</textarea><button type="submit">Build my toolchain</button></form><div class="stack-builder__presets"><button type="button" data-stack-preset="Research a complicated topic">Research</button><button type="button" data-stack-preset="Create and launch a podcast">Podcast</button><button type="button" data-stack-preset="Set up a private browsing stack">Privacy</button><button type="button" data-stack-preset="Learn web development">Learn</button></div><div class="stack-builder__saved"><div class="stack-builder__saved-head"><span>Saved stacks</span><span id="stackSavedCount">0/10</span></div><div class="stack-builder__saved-list" id="stackSavedList"></div></div></div><div class="stack-builder__output"><div class="stack-builder__output-head"><div><span>LIVE CATALOG MATCH</span><h3 id="stackBuilderHeading">Your stack will appear here</h3></div><div class="stack-builder__actions"><button type="button" id="stackSave">Save</button><button type="button" id="stackCopy">Copy</button><button type="button" id="stackExport">JSON</button><button type="button" id="stackOpen">Open all</button></div></div><div class="stack-builder__stages" id="stackBuilderOutput"></div></div></div>';
    anchor.parentNode.insertBefore(section, anchor);
    document.getElementById('stackBuilderForm').addEventListener('submit', function (event) { event.preventDefault(); build(document.getElementById('stackBrief').value); });
    section.querySelectorAll('[data-stack-preset]').forEach(function (button) { button.addEventListener('click', function () { document.getElementById('stackBrief').value = button.dataset.stackPreset; build(button.dataset.stackPreset); }); });
    document.getElementById('stackSave').addEventListener('click', saveStack);
    document.getElementById('stackCopy').addEventListener('click', copyStack);
    document.getElementById('stackExport').addEventListener('click', exportStack);
    document.getElementById('stackOpen').addEventListener('click', openAll);
    renderSaved();
    build(document.getElementById('stackBrief').value);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
