// catalog-audit.js — September 27, 2026 catalog audit.
// Runs after merge-categories.js and access-map.js, before reference-desk.js.
// Every URL in the catalog was fetched on this date. This file removes sites
// that are gone, hijacked, or discontinued; moves sites that changed address;
// and records whether each site needs a login (site.a).
(function () {
  'use strict';
  if (typeof DATA === 'undefined') return;

  function key(url) {
    var raw = String(url || '').trim();
    try { var p = new URL(raw); return p.hostname.replace(/^www\./, '').toLowerCase() + p.pathname.replace(/\/+$/, '').toLowerCase(); }
    catch (e) { return raw.replace(/^https?:\/\/(www\.)?/i, '').replace(/\/+$/, '').toLowerCase(); }
  }

  var REMOVE = [
    // Hijacked or now serving spam, casinos, or unrelated redirects
    'https://autogen-studio.com', 'https://time4tv.stream', 'https://www.hesgoal.live', 'https://www.soap2day.ac',
    'https://cataz.to', 'https://123tvnow.com', 'https://www.picuki.com/', 'https://surfer.ai',
    // Shut down, discontinued, or domain gone
    'https://sora.com', 'https://openai.com/sora', 'https://haiper.ai/', 'https://yuzu-emu.org/', 'https://ryujinx.org/',
    'https://citra-emu.org/', 'https://www.emulatorgames.net/', 'https://gitaroo.com/', 'https://www.my90stv.com/',
    'https://www.freeformatter.com', 'https://dora.run', 'https://www.dora.run', 'https://wunderbucket.io',
    'https://screens.guru', 'https://www.unscreen.com', 'https://12ft.io', 'https://www.remove.video', 'https://video2me.net/',
    'https://gitlab.com/magnolia1234/bypass-paywalls-firefox-clean', 'https://www.bromite.org',
    'https://f-droid.org/packages/us.spotco.fennec_dos', 'https://atlasvpn.com', 'https://outline.com', 'https://www.crackle.com',
    'https://phind.com', 'https://coral.cohere.com', 'https://openai.com/chatgpt', 'https://multion.ai', 'https://aibrowser.surf',
    'https://labs.google/experiments/disco', 'https://labs.google/experiments/say-what-you-see', 'https://labs.google/experiments/aisoma',
    'https://play.ai', 'https://tome.app', 'https://www.polywork.com', 'https://compensation.one', 'https://www.seatguru.com/',
    'https://workfrom.co', 'https://zapper.fi/', 'https://nitter.net/', 'https://hashtagify.me/', 'https://sourcegraph.com/cody',
    'https://www.nba.com/watch/free-preview', 'https://www.xda-developers.com/', 'https://tweetdeck.twitter.com/',
    'https://chrome.google.com/webstore/detail/recipe-filter/hlgmmbgedempkjpnkjkombgndbbkndhm', 'https://singlelogin.re/', 'https://yts.mx',
    // Rebrands already listed under their new name
    'https://www.freepik.com/ai/image-generator', 'https://freepik.com/ai', 'https://www.freepik.com/pikaso',
    'https://labs.google/fx/tools/image-fx', 'https://labs.google/fx/tools/whisk', 'https://codeium.com/windsurf', 'https://codeium.com',
    'https://www.usegalileo.ai',
    // Streaming and download mirrors whose domains no longer resolve
    'https://www.cineby.gd', 'https://cineby.app', 'https://cinebolt.net', 'https://nepu.to', 'https://flickystream.ru', 'https://xprime.today',
    'https://popcornmovies.org', 'https://456movie.net', 'https://brocoflix.xyz', 'https://yflix.to', 'https://dopebox.to', 'https://sflix.fi',
    'https://www.showboxmovies.net', 'https://iomovies.stream', 'https://gog-games.to', 'https://torrentgalaxy.to', 'https://sporthd.live',
    'https://freelivesports.to', 'https://www.feed2all.co', 'https://mfcr.gg'
  ];

  // Old URL -> changes. Name changes are kept honest with "formerly".
  var UPDATE = {
    'https://labs.google/experiments/stitch': { u: 'https://stitch.withgoogle.com', n: 'Stitch (formerly Galileo AI)' },
    'https://labs.google/experiments/opal': { u: 'https://opal.google' },
    'https://labs.google/experiments/mixboard': { u: 'https://mixboard.google.com' },
    'https://labs.google/experiments/pomelli': { u: 'https://labs.google.com/pomelli/about' },
    'https://labs.google/experiments/food-mood': { u: 'https://artsandculture.google.com/experiment/food-mood/HwHnGalZ3up0EA' },
    'https://labs.google/fx/tools/text-fx': { u: 'https://textfx.withgoogle.com' },
    'https://annas-archive.org/': { u: 'https://annas-archive.li' },
    'https://sci-hub.se': { u: 'https://sci-hub.ru' },
    'https://libgen.is/': { u: 'https://libgen.li' },
    'https://tails.boum.org': { u: 'https://tails.net' },
    'https://mullvadbrowser.net': { u: 'https://mullvad.net/en/browser' },
    'https://www.freecadweb.org': { u: 'https://www.freecad.org' },
    'https://iorate.github.io/ublacklist': { u: 'https://ublacklist.github.io' },
    'https://hubblesite.org': { u: 'https://science.nasa.gov/mission/hubble', n: 'NASA Hubble' },
    'https://otta.com': { u: 'https://www.welcometothejungle.com/en', n: 'Welcome to the Jungle (formerly Otta)' },
    'https://nomadlist.com/': { u: 'https://nomads.com', n: 'Nomads.com (formerly Nomad List)' },
    'https://myfridgefood.com/': { u: 'https://www.myfridgefood.com' },
    'https://rendernet.ai/': { u: 'https://affogato.ai', n: 'Affogato (formerly RenderNet)' },
    'https://podcastle.ai': { u: 'https://async.com', n: 'Async (formerly Podcastle)' },
    'https://quizizz.com': { u: 'https://wayground.com', n: 'Wayground (formerly Quizizz)' },
    'https://edu.gcfglobal.org': { u: 'https://www.learnfree.org', n: 'LearnFree (formerly GCFGlobal)' },
    'https://lmarena.ai': { u: 'https://arena.ai', n: 'Arena (formerly LMArena)' },
    'https://photomosh.com': { u: 'https://moshpro.app', n: 'Mosh-Pro (formerly PhotoMosh)' },
    'https://windsurf.com': { u: 'https://devin.ai', n: 'Devin Desktop (formerly Windsurf)' },
    'https://podcasters.spotify.com': { u: 'https://creators.spotify.com', n: 'Spotify for Creators' },
    'https://app.netlify.com/drop': { d: 'Drag a folder onto the page to get a live HTTPS URL for a static site.', l: 'Anonymous drops expire after an hour unless you claim them with an account' },
    'https://flowith.net': { u: 'https://flowith.io' },
    'https://www.notion.so/product/ai': { u: 'https://www.notion.com/product/ai' },
    'https://chat.qwenlm.ai': { u: 'https://chat.qwen.ai' },
    'https://runwayml.com': { u: 'https://runway.com' },
    'https://bluemaxima.org/flashpoint': { u: 'https://flashpointarchive.org' },
    'https://klingai.com': { u: 'https://kling.ai' },
    'https://tubi.tv': { u: 'https://tubitv.com' },
    'https://plex.tv': { u: 'https://watch.plex.tv' },
    'https://simplepdf.eu': { u: 'https://simplepdf.com' },
    'https://copilot.microsoft.com/images/create': { u: 'https://www.bing.com/images/create', n: 'Bing Image Creator' },
    'https://riverside.fm': { u: 'https://riverside.com' },
    'https://www.listnr.tech': { u: 'https://listnr.ai' },
    'https://railway.app': { u: 'https://railway.com' },
    'https://www.notion.so': { u: 'https://www.notion.com' },
    'https://notion.so': { u: 'https://www.notion.com' },
    'https://www.waterfox.net': { u: 'https://www.waterfox.com' },
    'https://browser.kagi.com': { u: 'https://orionbrowser.com' },
    'https://www.mozilla.org/firefox': { u: 'https://www.firefox.com' },
    'https://mozilla.org/firefox': { u: 'https://www.firefox.com' },
    'https://www.mozilla.org/firefox/browsers/mobile/focus': { u: 'https://www.firefox.com/en-US/mobile/focus' },
    'https://getlantern.org': { u: 'https://lantern.io' },
    'https://www.flightyapp.com': { u: 'https://flighty.com' },
    'https://hydrahd.io': { u: 'https://hydrahd.ws' },
    'https://azmovies.ag': { u: 'https://azmovies.to' },
    'https://home.nbabite.is': { u: 'https://nbabitez.is' },
    'https://totalsportek24.is': { u: 'https://totalsporteki.is' },
    'https://the.buffstream.io': { u: 'https://ms.buffstream.io' },
    'https://appdoze.com': { u: 'https://appdoze.net' },
    'https://720pstream.me': { u: 'https://720pstream.cx' },
    'https://ankergames.com': { u: 'https://www.ankergames.de' },
    'https://chat.openai.com': { u: 'https://chatgpt.com' },
    'https://vipleague.im': { u: 'https://vipleague.me' },
    'https://firebase.google.com/studio': { u: 'https://firebase.studio' },
    'https://msty.app': { u: 'https://msty.ai' },
    'https://gpt4all.io': { u: 'https://www.nomic.ai/gpt4all' },
    'https://cursor.sh': { u: 'https://cursor.com' },
    'https://koboldai.net': { u: 'https://lite.koboldai.net' },
    'https://pinokio.computer': { u: 'https://pinokio.co' },
    'https://library.relume.io': { u: 'https://www.relume.ai' },
    'https://v0.dev': { u: 'https://v0.app' },
    'https://durable.co': { u: 'https://durable.com' },
    'https://www.monarchmoney.com': { u: 'https://www.monarch.com' },
    'https://www.everydollar.com': { u: 'https://www.ramseysolutions.com/money/everydollar' },
    'https://www.bingingwithbabish.com/': { u: 'https://www.babi.sh' },
    'https://www.skyscanner.net': { u: 'https://www.skyscanner.com' },
    'https://macrofactorapp.com/': { u: 'https://macrofactor.com' },
    'https://www.arkhamintelligence.com/': { u: 'https://info.arkm.com' },
    'https://carrd.co/': { u: 'https://carrd.com' },
    'https://developers.google.com/web/tools/lighthouse': { u: 'https://developer.chrome.com/docs/lighthouse/overview' },
    'https://blackforestlabs.ai': { u: 'https://bfl.ai' },
    'https://magnific.ai': { u: 'https://www.magnific.com', n: 'Magnific (formerly Freepik AI)' },
    'https://tabby.tabbyml.com': { u: 'https://www.tabbyml.com' },
    'https://fathom.video': { u: 'https://www.fathom.ai' },
    'https://appflowy.io': { u: 'https://appflowy.com' },
    'https://neon.tech': { u: 'https://neon.com' },
    'https://recall.ai': { u: 'https://www.recall.it', n: 'Recall' }
  };

  var removeSet = new Set(REMOVE.map(key));
  var updates = new Map(Object.keys(UPDATE).map(function (u) { return [key(u), UPDATE[u]]; }));
  var access = window.PWL_ACCESS || {};
  var removed = 0, moved = 0, seen = new Set();

  DATA.forEach(function (cat) {
    if (!Array.isArray(cat.sites)) return;
    cat.sites = cat.sites.filter(function (site) {
      var k = key(site.u);
      if (removeSet.has(k)) { removed++; return false; }
      if (!site.a && access[k]) site.a = access[k];
      var change = updates.get(k);
      if (change) { Object.keys(change).forEach(function (f) { site[f] = change[f]; }); moved++; }
      var nk = key(site.u);
      if (seen.has(nk)) return false;
      seen.add(nk);
      return true;
    });
  });

  console.log('[catalog-audit] Removed ' + removed + ', updated ' + moved + ', access known for ' +
    DATA.reduce(function (n, c) { return n + c.sites.filter(function (s) { return s.a; }).length; }, 0) + ' sites');
})();
