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

  // ---- October 13, 2026 re-check. Every URL fetched again; DNS and TLS failures
  // confirmed twice and cross-checked against a browser-like client.
  var REMOVE_OCT = [
    'https://methstreams.com', 'https://apkcombo.com/', 'https://smalldev.tools',      // domains no longer resolve
    'https://sportsbay.run',                                                             // now redirects to an ad-tracking parking page
    'https://currenzy.app',                                                              // certificate expired, site abandoned
    'https://thetvapp.to', 'https://watch.vidora.su', 'https://myflixer.to', 'https://vumoo.to',
    'https://crackstreams.dev', 'https://sflix.to', 'https://hurawatchz.to',             // mirrors offline for weeks
    'https://skybox.blockadelabs.com',                                                   // returns a server error on every request
    'https://notebooklm.google'                                                          // duplicate of the NotebookLM entry
  ];
  var UPDATE_OCT = {
    'https://notebooklm.google.com': { u: 'https://notebook.google.com', n: 'NotebookLM (Gemini Notebook)' },
    'https://glassmorphism.com': { u: 'https://hype4.academy/tools/glassmorphism-generator' },
    'https://github.dev': { u: 'https://vscode.dev/github/' },
    'https://1.1.1.1': { u: 'https://one.one.one.one' },
    'https://totalsporteki.is': { u: 'https://totalsporteke.is' },
    'https://stream2watch.ws': { u: 'https://wheresports.com', n: 'WhereSports (formerly Stream2Watch)' },
    'https://nbabitez.is': { u: 'https://nbabitez.com' },
    'https://vipleague.me': { u: 'https://vipleague.vg', n: 'VIPLeague' },
    'https://labs.google/fx/tools/flow': { u: 'https://flow.google.com' },
    'https://labs.google/fx/tools/music-fx': { u: 'https://www.flowmusic.app', n: 'Flow Music (formerly MusicFX)' },
    'https://zoom.us': { u: 'https://www.zoom.com' },
    'https://perplexity.com': { u: 'https://www.perplexity.ai/comet' }
  };
  // Access flags that were still missing after the September pass.
  var ACCESS_OCT = {
    'https://lostgamer.io': 'open', 'https://www.bensound.com': 'optional', 'https://learn-anything.xyz': 'open',
    'https://www.relume.ai': 'account', 'https://library.relume.io': 'account', 'https://www.google.com/earth/versions/#earth-pro': 'open',
    'https://www.screen.studio': 'account', 'https://explorer.globe.engineer': 'open'
  };
  // Description rewrites: superlatives and sales copy replaced with what the site does and what it costs you.
  var REWRITE = {
    'https://anythingllm.com': 'Private desktop assistant that chats with your own documents using a local or hosted model.',
    'https://www.granola.ai': 'Meeting notes app that transcribes in the background and tidies your own notes afterwards.',
    'https://www.midjourney.com': 'Image generator known for painterly, photoreal output, now usable in the browser as well as Discord.',
    'https://www.krea.ai': 'Sketch on a canvas and watch an AI image update in real time as you draw.',
    'https://www.retroarch.com/': 'Frontend that bundles emulators for dozens of consoles under one interface. Runs on almost everything.',
    'https://www.ppsspp.org/': 'PSP emulator that upscales games to HD on PC, Android and iOS.',
    'https://suno.com/': 'Generate complete songs with vocals from a text prompt.',
    'https://www.udio.com/': 'Song generator with fine control over structure and tags, a close rival to Suno.',
    'https://everynoise.com/': 'A scatter plot of every music genre Spotify knows about, each one playable. Good for finding obscure scenes.',
    'https://bandcamp.com/': 'Buy and stream music directly from independent artists, who keep most of the money.',
    'https://smallpdf.com': 'PDF toolkit for compressing, converting, merging, editing and signing.',
    'https://www.capcut.com/': 'Video editor for short-form clips with transitions, captions and effects, on web, desktop and phone.',
    'https://handbrake.fr/': 'Open-source video transcoder for shrinking large files and converting formats.',
    'https://async.com': 'Record, edit, transcribe and clean up podcast audio in one place.',
    'https://learn-anything.xyz': 'Knowledge maps that lay out a sensible order to learn a topic.',
    'https://apps.ankiweb.net': 'Spaced-repetition flashcards. Study anything and let the schedule decide when to review.',
    'https://thecrashcourse.com': 'Free educational video series on history, science, literature, psychology and coding.',
    'https://app.thestorygraph.com/': 'Book tracker with mood-based recommendations, charts and half-star ratings. A Goodreads alternative.',
    'https://www.notion.com': 'Workspace for notes, docs, wikis and project tracking. Free for personal use.',
    'https://10minutemail.com': 'Disposable email address that expires after ten minutes.',
    'https://bitwarden.com': 'Open-source password manager with unlimited passwords and cross-device sync on the free plan.',
    'https://authy.com': 'Two-factor authenticator app with encrypted cloud backup of your codes.',
    'https://mullvad.net/en/browser': 'Tor Browser without the Tor network: strong anti-fingerprinting defaults, built with the Tor Project.',
    'https://ublockorigin.com': 'Open-source ad and tracker blocker. Lightweight and widely recommended.',
    'https://flighty.com': 'Flight tracker with alerts for delays and gate changes, often before the airline announces them.',
    'https://hydrahd.ws': 'Aggregates several streaming sources per movie and auto-tests them before playing.',
    'https://moviemaze.cc': 'Filters by year, genre, rating and country make it easier to browse than most pirate sites.',
    'https://www.stremio.com': 'Desktop app that streams torrents in real time. With the Torrentio add-on it behaves like a streaming service.',
    'https://bingeflix.tv': 'Movies, TV, anime, a manga reader and live channels in a single interface.',
    'https://podcast.adobe.com/enhance': "Adobe's AI mic filter. Makes a laptop recording sound like a studio mic.",
    'https://www.canva.com/presentations': 'Generate a slide deck from a topic prompt, then edit it in Canva.',
    'https://github.com/features/copilot': 'AI pair programmer in VS Code, JetBrains and Neovim. The free tier gives 2,000 completions a month.',
    'https://www.framer.com/ai': 'Describe a site and Framer builds and publishes a draft you can edit.',
    'https://www.reddit.com/r/personalfinance/wiki/index': 'Step-by-step personal finance guide written and maintained by the community.',
    'https://www.coupert.com': 'Browser extension that tries coupon codes at checkout automatically.',
    'https://neetcode.io': 'Curated LeetCode roadmap with video solutions for interview prep.',
    'https://godotengine.org': 'Free, open-source 2D and 3D game engine with its own scripting language and a large community.',
    'https://nomads.com': 'Crowdsourced data on cities for remote workers: cost, internet, weather, safety.',
    'https://www.skyscanner.com': 'Compare flights, hotels and car hire across many booking sites.',
    'https://www.allrecipes.com/': 'Huge crowdsourced recipe site. The reviews tell you how people actually changed the dish.',
    'https://www.halfbakedharvest.com/': 'Comfort-food recipes with heavy photography. Long pages; skip to the recipe card.',
    'https://www.hevyapp.com/': 'Workout tracker for weightlifting with a clean log for sets, reps and personal records.',
    'https://www.appbrain.com/': 'Android app discovery and market statistics.',
    'https://www.coingecko.com/': 'Independent cryptocurrency price and market data aggregator.',
    'https://defillama.com/': 'Tracks total value locked and yields across DeFi protocols.',
    'https://imgur.com/': 'Image host with direct links, the default for sharing on Reddit and forums.',
    'https://archive.ph/': 'Take a snapshot of a web page that stays up after the original changes or disappears.',
    'https://www.gapminder.org/': 'Interactive charts that correct common misconceptions about global health and wealth.',
    'https://earth.nullschool.net': 'Animated global map of wind, ocean currents and air quality from forecast models.',
    'https://www.beehiiv.com': 'Newsletter platform with built-in monetization and referral tools.',
    'https://www.magnific.com': 'AI image upscaler that adds invented detail as it enlarges, so check it on faces.',
    'https://arc.net/search': "The Browser Company's mobile browser that builds a summary page from several sources for each query.",
    'https://affine.pro': 'Open-source workspace that merges docs, whiteboard and database on one local-first canvas.',
    'https://vimm.net/': "Long-running, ad-free archive of classic console ROMs and emulators.",
    'https://lofigirl.com/': "The 24/7 lofi hip hop radio stream for studying, playable in the browser.",
    'https://thepiratebay.org': "The oldest torrent index still running. Expect pop-ups and fake download buttons.",
    'https://www.torproject.org': "Routes all traffic through the Tor network. The reference tool for anonymous browsing.",
    'https://one.one.one.one': "Cloudflare's free DNS resolver and WARP VPN app, for phones and desktops.",
    'https://chat.mistral.ai': "Mistral's free chatbot, fast and multilingual, built on its own open-weight models.",
    'https://fal.ai/': "Hosted APIs for image and video models such as Flux and SDXL, with a free trial allowance.",
    'https://apps.qoo-app.com/en': "App store for Japanese and other Asian mobile games not released globally.",
    'https://www.screen.studio': "Mac screen recorder that adds automatic zooms and smooth cursor motion to tutorials.",
    'https://zed.dev': "Fast collaborative code editor written in Rust, with multiplayer editing and a built-in AI assistant.",
    'https://anytype.io': "Local-first, encrypted Notion alternative. Data lives on your device and syncs peer to peer. Open source.",
    'https://submagic.co': "AI captions for short-form video, animated and synced for TikTok, Reels and Shorts.",
    'https://www.topazlabs.com': "Desktop AI upscaling and video enhancement: sharpen, denoise, deblur and restore old footage.",
    'https://t3.chat': "One chat front-end for Claude, GPT, Gemini and others. Switch models mid-conversation.",
    'https://ui.shadcn.com': "React components you copy into your project and own, rather than install as a dependency.",
    'https://ui.aceternity.com': "Animated sections and effects for React and Tailwind that you copy into a project.",
    'https://cheat.sh': "Command-line cheatsheets: curl cheat.sh/tar returns the commands you actually want.",
    'https://www.perplexity.ai/pages': "Turn a Perplexity research thread into a cited, shareable article page.",
    'https://typst.app': "A modern alternative to LaTeX with cleaner syntax that compiles in the browser.",
    'https://linear.app': "Fast, keyboard-first issue tracker for software teams, with roadmaps built in."
  };
  REMOVE_OCT.forEach(function (u) { REMOVE.push(u); });
  Object.keys(UPDATE_OCT).forEach(function (u) { UPDATE[u] = UPDATE_OCT[u]; });

  var removeSet = new Set(REMOVE.map(key));
  var updates = new Map(Object.keys(UPDATE).map(function (u) { return [key(u), UPDATE[u]]; }));
  var rewrites = new Map(Object.keys(REWRITE).map(function (u) { return [key(u), REWRITE[u]]; }));
  var accessFix = new Map(Object.keys(ACCESS_OCT).map(function (u) { return [key(u), ACCESS_OCT[u]]; }));
  var access = window.PWL_ACCESS || {};
  var removed = 0, moved = 0, seen = new Set();

  DATA.forEach(function (cat) {
    if (!Array.isArray(cat.sites)) return;
    cat.sites = cat.sites.filter(function (site) {
      var k = key(site.u);
      if (removeSet.has(k)) { removed++; return false; }
      if (!site.a && access[k]) site.a = access[k];
      if (!site.a && accessFix.has(k)) site.a = accessFix.get(k);
      if (rewrites.has(k)) site.d = rewrites.get(k);
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
