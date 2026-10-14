// data-extra-15.js — October 2026 additions. Every entry was fetched and checked on October 13, 2026.
// a = access (open: no account needed, optional: works without one, account: sign-in required).
(function () {
  'use strict';
  if (typeof DATA === 'undefined') return;

  var CATEGORIES = [
    {
      id: 'oct-2026-ai-assistants',
      group: 'ai-assistants',
      name: "AI Assistants & Agents",
      icon: '',
      desc: 'October 2026 additions.',
      sites: [
        { n: "Devv", u: "https://devv.ai", d: "AI search for programmers that pulls from docs, GitHub and Stack Overflow.", l: "Daily cap without an account", s: "Checked Oct 2026", a: "optional", k: "programming search ai docs" },
        { n: "Groq Chat", u: "https://chat.groq.com", d: "Chat with open models like Llama and Qwen running on Groq hardware, which answers almost instantly.", l: "Rate limits on the free tier; models are open-weight only", s: "Checked Oct 2026", a: "account", k: "groq fast inference llama chatbot" },
        { n: "Hugging Face Open LLM Leaderboard", u: "https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard", d: "Benchmark scores for open-weight models so you can pick one to run locally.", l: "Scores do not capture chat quality", s: "Checked Oct 2026", a: "open", k: "open models benchmark leaderboard" },
        { n: "Hugging Face Spaces", u: "https://huggingface.co/spaces", d: "Thousands of community-hosted AI demos: image generators, voice cloning, OCR, upscalers, all runnable in the browser.", l: "Popular demos queue; some need a free account or GPU grant", s: "Checked Oct 2026", a: "optional", k: "huggingface demos gradio ai models try" },
        { n: "Kagi FastGPT", u: "https://kagi.com/fastgpt", d: "Ask a question and get a short, cited answer built from a live web search. No account, no history kept.", l: "Answers are brief; a few queries per day without a Kagi plan", s: "Checked Oct 2026", a: "open", k: "ai search answer engine cited" },
        { n: "LibreChat", u: "https://www.librechat.ai", d: "Open-source ChatGPT clone you host yourself, supporting every major provider and agents.", l: "Self-hosted", s: "Checked Oct 2026", a: "open", k: "self hosted chat interface open source" },
        { n: "Meta AI", u: "https://www.meta.ai", d: "Llama-powered chat and image generation, with a public feed of what others make.", l: "Sign-in needed outside the basic chat", s: "Checked Oct 2026", a: "optional", k: "meta llama chat image" },
        { n: "Microsoft Copilot", u: "https://copilot.microsoft.com", d: "GPT-based assistant with web search, image generation and document help. Works without signing in.", l: "Longer sessions and history need a Microsoft account", s: "Checked Oct 2026", a: "optional", k: "copilot bing chat gpt free" },
        { n: "Phind", u: "https://www.phind.com", d: "Search engine tuned for developers that answers with code and links to the sources.", l: "Best models are limited per day", s: "Checked Oct 2026", a: "optional", k: "developer search code answers" },
        { n: "Together Chat", u: "https://chat.together.ai", d: "Try open-weight models such as DeepSeek, Llama and Qwen side by side in one chat window.", l: "Free usage is capped per day", s: "Checked Oct 2026", a: "account", k: "open models chat deepseek llama compare" }
      ]
    },
    {
      id: 'oct-2026-ai-creative',
      group: 'ai-creative',
      name: "AI Image, Video & Audio",
      icon: '',
      desc: 'October 2026 additions.',
      sites: [
        { n: "Animated Drawings", u: "https://sketch.metademolab.com", d: "Upload a child's drawing of a character and Meta's model makes it dance and walk.", l: "Works best on single figures with clear limbs", s: "Checked Oct 2026", a: "open", k: "animate drawing kids meta" },
        { n: "Bigjpg", u: "https://bigjpg.com", d: "AI upscaler tuned for anime and illustration, with noise reduction. Works without an account.", l: "Free runs are 4x max and queue", s: "Checked Oct 2026", a: "open", k: "upscale image anime ai enlarge" },
        { n: "Kokoro TTS", u: "https://huggingface.co/spaces/hexgrad/Kokoro-TTS", d: "Natural text-to-speech from an 82M-parameter open model, free to try with several voices.", l: "Short clips; may queue", s: "Checked Oct 2026", a: "open", k: "text to speech open source voices" },
        { n: "Perchance AI Image", u: "https://perchance.org/ai-text-to-image-generator", d: "Unlimited free text-to-image generation with no login, styles and negative prompts included.", l: "Occasional queue; no upscaling", s: "Checked Oct 2026", a: "open", k: "ai image generator unlimited free" },
        { n: "Pollinations", u: "https://pollinations.ai", d: "Open AI image, text and audio generation with no account. Images come from a plain URL you can paste anywhere.", l: "Generations queue at busy times; quality varies by model", s: "Checked Oct 2026", a: "open", k: "ai image generator free no signup api" }
      ]
    },
    {
      id: 'oct-2026-ai-general',
      group: 'ai-general',
      name: "General AI Tools",
      icon: '',
      desc: 'October 2026 additions.',
      sites: [
        { n: "AI Incident Database", u: "https://incidentdatabase.ai", d: "Catalog of real-world harms caused by AI systems, for anyone deciding how much to trust one.", l: "None", s: "Checked Oct 2026", a: "open", k: "ai incidents harms database" },
        { n: "Epoch AI", u: "https://epoch.ai", d: "Research and charts on compute, data and the trajectory of AI capabilities.", l: "None", s: "Checked Oct 2026", a: "open", k: "ai trends data research charts" },
        { n: "LLM Pricing Compare", u: "https://www.llm-prices.com", d: "One table of input and output token prices for every major model, updated as providers change them.", l: "Prices change often", s: "Checked Oct 2026", a: "open", k: "llm api prices compare tokens" },
        { n: "Tokenizer", u: "https://platform.openai.com/tokenizer", d: "Paste text and see how many tokens it costs and how it is split.", l: "OpenAI tokenizers only", s: "Checked Oct 2026", a: "open", k: "count tokens tokenizer" }
      ]
    },
    {
      id: 'oct-2026-writing-research',
      group: 'writing-research',
      name: "Writing & Research",
      icon: '',
      desc: 'October 2026 additions.',
      sites: [
        { n: "Calmly Writer", u: "https://www.calmlywriter.com/online", d: "A distraction-free writing page with focus mode, word count and local autosave.", l: "Documents stay in this browser unless you export", s: "Checked Oct 2026", a: "open", k: "distraction free writing editor minimal" },
        { n: "LibreTranslate", u: "https://libretranslate.com", d: "Open-source machine translation you can self-host. The public demo translates text and files without tracking.", l: "Quality trails DeepL and Google on long text", s: "Checked Oct 2026", a: "open", k: "translate open source privacy" },
        { n: "Linguee", u: "https://www.linguee.com", d: "Bilingual dictionary paired with millions of example sentences from translated websites.", l: "Owned by DeepL; pushes its app", s: "Checked Oct 2026", a: "open", k: "dictionary bilingual examples translation" },
        { n: "Power Thesaurus", u: "https://www.powerthesaurus.org", d: "Crowdsourced thesaurus with synonyms ranked by votes, plus antonyms and example sentences.", l: "Ads; some filters are behind a paid plan", s: "Checked Oct 2026", a: "open", k: "synonyms thesaurus antonyms" },
        { n: "Rentry", u: "https://rentry.co", d: "Publish a Markdown page at a custom URL in seconds. Edit later with the code it gives you.", l: "Pages are public; keep the edit code safe", s: "Checked Oct 2026", a: "open", k: "markdown pastebin publish page" },
        { n: "Reverso Context", u: "https://context.reverso.net", d: "See how a word or phrase is actually used, with real bilingual sentence examples in 20+ languages.", l: "Examples come from web text, so check tone", s: "Checked Oct 2026", a: "open", k: "translation examples context language learning" },
        { n: "Semantic Scholar", u: "https://www.semanticscholar.org", d: "Free academic search across 200M+ papers with citation graphs and TL;DR summaries.", l: "Not every paper has a free PDF", s: "Checked Oct 2026", a: "open", k: "academic papers search citations" },
        { n: "SMMRY", u: "https://smmry.com", d: "Paste text or a URL and get it cut to a chosen number of sentences. No AI hallucination, just extraction.", l: "Keeps original sentences, so summaries can read choppy", s: "Checked Oct 2026", a: "open", k: "summarize article text shorten" },
        { n: "StackEdit", u: "https://stackedit.io", d: "In-browser Markdown editor with live preview that can sync to Google Drive, Dropbox or GitHub.", l: "Sync needs those accounts; otherwise local only", s: "Checked Oct 2026", a: "open", k: "markdown editor preview sync" },
        { n: "WordHippo", u: "https://www.wordhippo.com", d: "One box for synonyms, antonyms, definitions, example sentences, translations and rhymes.", l: "Heavy ads", s: "Checked Oct 2026", a: "open", k: "synonyms antonyms translate word forms" }
      ]
    },
    {
      id: 'oct-2026-design-media',
      group: 'design-media',
      name: "Design & Media",
      icon: '',
      desc: 'October 2026 additions.',
      sites: [
        { n: "Animista", u: "https://animista.net", d: "Pick a CSS animation, tweak timing and easing, and copy the keyframes.", l: "Ads", s: "Checked Oct 2026", a: "open", k: "css animation keyframes generator" },
        { n: "AutoDraw", u: "https://www.autodraw.com", d: "Doodle something and Google's model suggests a clean clip-art version of it.", l: "Limited shape library", s: "Checked Oct 2026", a: "open", k: "drawing clipart ai sketch" },
        { n: "Blockbench", u: "https://web.blockbench.net", d: "Low-poly 3D modeling, texturing and animation in the browser. The standard tool for Minecraft models.", l: "Aimed at low-poly work", s: "Checked Oct 2026", a: "open", k: "3d modeling low poly minecraft animation" },
        { n: "Boxy SVG", u: "https://boxy-svg.com/app", d: "Clean vector editor built around real SVG, so what you draw is what you ship.", l: "Free in the browser; the desktop app is paid", s: "Checked Oct 2026", a: "open", k: "svg editor vector icons" },
        { n: "Coverr", u: "https://coverr.co", d: "Free stock video clips for websites and social posts, downloadable without an account.", l: "Some premium clips mixed in", s: "Checked Oct 2026", a: "open", k: "free stock video clips background" },
        { n: "Dither it!", u: "https://ditherit.com", d: "Dither an image to a tiny palette for retro looks or small file sizes. Runs entirely in the browser.", l: "None", s: "Checked Oct 2026", a: "open", k: "dither image retro palette" },
        { n: "Iconify", u: "https://icon-sets.iconify.design", d: "Search 200,000+ open-source icons from 150 sets at once and copy them as SVG, React or CSS.", l: "None", s: "Checked Oct 2026", a: "open", k: "icons search svg react icon sets" },
        { n: "Lospec Palette List", u: "https://lospec.com/palette-list", d: "Thousands of curated pixel-art color palettes, downloadable in formats for Aseprite, Photoshop and GIMP.", l: "None", s: "Checked Oct 2026", a: "open", k: "pixel art palettes colors" },
        { n: "miniPaint", u: "https://viliusle.github.io/miniPaint/", d: "Lightweight open-source image editor with layers, filters and effects. Loads instantly, nothing uploads.", l: "Basic compared with Photopea", s: "Checked Oct 2026", a: "open", k: "image editor layers browser open source" },
        { n: "Mosh (formerly Photomosh)", u: "https://moshpro.app", d: "Apply glitch, VHS, dither and scanline effects to images or video and export GIF or MP4.", l: "Pro effects are paid", s: "Checked Oct 2026", a: "open", k: "glitch effect vhs image video" },
        { n: "Online Video Cutter", u: "https://online-video-cutter.com", d: "Trim, crop, rotate and adjust speed on a video clip in the browser. Files up to 4 GB.", l: "Big files upload to their server", s: "Checked Oct 2026", a: "open", k: "trim video cut crop online" },
        { n: "Piskel", u: "https://www.piskelapp.com/p/create/sprite", d: "Pixel-art and sprite animation editor with onion skinning and GIF or spritesheet export.", l: "Saving to the cloud needs an account", s: "Checked Oct 2026", a: "open", k: "pixel art sprite animation gif" },
        { n: "Screely", u: "https://screely.com", d: "Turn a plain screenshot into a browser-window mockup with a background in one click.", l: "Few customization options", s: "Checked Oct 2026", a: "open", k: "screenshot browser mockup" },
        { n: "SculptGL", u: "https://stephaneginier.com/sculptgl/", d: "Digital clay sculpting in WebGL with symmetry, dynamic topology and OBJ export.", l: "No layers or retopology", s: "Checked Oct 2026", a: "open", k: "3d sculpting webgl clay" },
        { n: "Strudel", u: "https://strudel.cc", d: "Live-code music patterns in the browser with the TidalCycles language. Edit, hear it change instantly.", l: "Steep learning curve", s: "Checked Oct 2026", a: "open", k: "live coding music tidal patterns" },
        { n: "SVG Repo", u: "https://www.svgrepo.com", d: "500,000+ free SVG icons and vectors, searchable and editable in the browser before download.", l: "Check each icon's license; some require attribution", s: "Checked Oct 2026", a: "open", k: "svg icons vectors free download" },
        { n: "Three.js Editor", u: "https://threejs.org/editor/", d: "Build and inspect 3D scenes in the browser, import models and export the scene as JSON or GLB.", l: "No undo history across reloads", s: "Checked Oct 2026", a: "open", k: "3d editor scene webgl" },
        { n: "Type Scale", u: "https://typescale.com", d: "Choose a base size and ratio to generate a harmonious type scale, previewed live in any Google Font.", l: "None", s: "Checked Oct 2026", a: "open", k: "typography scale font sizes css" },
        { n: "Vectorpea", u: "https://www.vectorpea.com", d: "Photopea's vector sibling: open and edit AI, SVG and PDF files in the browser with pen, shape and text tools.", l: "Ads; export sizes limited without Premium", s: "Checked Oct 2026", a: "open", k: "vector editor illustrator alternative svg ai" }
      ]
    },
    {
      id: 'oct-2026-developer',
      group: 'developer',
      name: "Developer Tools",
      icon: '',
      desc: 'October 2026 additions.',
      sites: [
        { n: "Choose a License", u: "https://choosealicense.com", d: "GitHub's plain-language guide to picking an open-source license.", l: "None", s: "Checked Oct 2026", a: "open", k: "open source license mit gpl" },
        { n: "Cloudflare Radar", u: "https://radar.cloudflare.com", d: "Live internet traffic, outage, attack and adoption data from Cloudflare's network, plus a URL scanner.", l: "None", s: "Checked Oct 2026", a: "open", k: "internet traffic outages trends scanner" },
        { n: "DB Fiddle", u: "https://www.db-fiddle.com", d: "Run SQL against MySQL, PostgreSQL or SQLite in the browser and share the fiddle.", l: "Small datasets only", s: "Checked Oct 2026", a: "open", k: "sql playground mysql postgres sqlite" },
        { n: "DNS Checker", u: "https://dnschecker.org", d: "See how a domain's DNS records resolve from dozens of locations worldwide.", l: "Ads", s: "Checked Oct 2026", a: "open", k: "dns propagation lookup records" },
        { n: "GitHub1s", u: "https://github1s.com", d: "Add '1s' after 'github' in any repo URL to read it in a VS Code interface.", l: "Read only", s: "Checked Oct 2026", a: "open", k: "github vscode browse repository" },
        { n: "Go Playground", u: "https://go.dev/play/", d: "Run and share Go code in the browser with the latest Go release.", l: "No network access from programs", s: "Checked Oct 2026", a: "open", k: "go golang playground" },
        { n: "grep.app", u: "https://grep.app", d: "Regex search across half a million public GitHub repositories, instantly.", l: "Public repos only", s: "Checked Oct 2026", a: "open", k: "code search github regex" },
        { n: "Grid Garden", u: "https://cssgridgarden.com", d: "Learn CSS grid by watering carrots across 28 levels.", l: "None", s: "Checked Oct 2026", a: "open", k: "learn css grid game" },
        { n: "httpbin", u: "https://httpbin.org", d: "A test HTTP service that echoes requests, returns any status code, delays, redirects and more.", l: "None", s: "Checked Oct 2026", a: "open", k: "http testing echo request" },
        { n: "jq play", u: "https://play.jqlang.org", d: "Test jq filters against JSON live and copy a shareable link.", l: "None", s: "Checked Oct 2026", a: "open", k: "jq json filter playground" },
        { n: "npm trends", u: "https://npmtrends.com", d: "Compare npm packages by weekly downloads, stars and last update on one chart.", l: "None", s: "Checked Oct 2026", a: "open", k: "compare npm packages downloads" },
        { n: "Oh Shit, Git!?!", u: "https://ohshitgit.com", d: "Plain-English fixes for the git mistakes everyone makes, with the exact commands.", l: "None", s: "Checked Oct 2026", a: "open", k: "git mistakes fix undo" },
        { n: "OneCompiler", u: "https://onecompiler.com", d: "Run code in 70+ languages, from Python to COBOL, plus SQL and HTML, without installing anything.", l: "Ads; execution time limits", s: "Checked Oct 2026", a: "open", k: "online compiler run code languages" },
        { n: "Python Tutor", u: "https://pythontutor.com", d: "Step through Python, JavaScript, C or Java code and watch variables and the call stack change.", l: "Short programs only", s: "Checked Oct 2026", a: "open", k: "visualize code execution python debug learn" },
        { n: "quicktype", u: "https://app.quicktype.io", d: "Paste JSON and generate typed models in TypeScript, Go, Rust, Swift, Kotlin and more.", l: "None", s: "Checked Oct 2026", a: "open", k: "json to types code generation" },
        { n: "Rust Playground", u: "https://play.rust-lang.org", d: "Compile and run Rust snippets in the browser with stable, beta and nightly toolchains.", l: "Limited crates", s: "Checked Oct 2026", a: "open", k: "rust playground compile run" },
        { n: "SQLite Viewer", u: "https://sqliteviewer.app", d: "Open a .sqlite or .db file in the browser and browse tables. Files never leave your machine.", l: "Read only", s: "Checked Oct 2026", a: "open", k: "sqlite viewer database browser" },
        { n: "Swagger Editor", u: "https://editor.swagger.io", d: "Write an OpenAPI spec and see the documented API render live, with client generation.", l: "None", s: "Checked Oct 2026", a: "open", k: "openapi swagger api spec editor" },
        { n: "Tailwind Play", u: "https://play.tailwindcss.com", d: "Official Tailwind CSS sandbox with autocomplete, config editing and shareable links.", l: "None", s: "Checked Oct 2026", a: "open", k: "tailwind css playground" },
        { n: "TypeScript Playground", u: "https://www.typescriptlang.org/play", d: "Write TypeScript, see the compiled JavaScript and type errors, and share a link.", l: "None", s: "Checked Oct 2026", a: "open", k: "typescript playground compiler" }
      ]
    },
    {
      id: 'oct-2026-productivity',
      group: 'productivity',
      name: "Productivity & Notes",
      icon: '',
      desc: 'October 2026 additions.',
      sites: [
        { n: "aNotepad", u: "https://anotepad.com", d: "A notepad in the browser. Write, save with a link, come back later. No sign-up.", l: "Notes are public if someone has the link", s: "Checked Oct 2026", a: "open", k: "online notepad quick note" },
        { n: "Convert Case", u: "https://convertcase.net", d: "Switch text between upper, lower, title, sentence and alternating case, plus a few odd ones.", l: "None", s: "Checked Oct 2026", a: "open", k: "case converter text uppercase" },
        { n: "Crab Fit", u: "https://crab.fit", d: "Availability finder that works across time zones and syncs with your Google Calendar if you want.", l: "None", s: "Checked Oct 2026", a: "open", k: "find time zones availability" },
        { n: "HackMD", u: "https://hackmd.io", d: "Collaborative Markdown notes with live preview, slides, and GitHub sync.", l: "Guest notes are limited; account for history", s: "Checked Oct 2026", a: "optional", k: "markdown notes collaborative" },
        { n: "Keybr", u: "https://www.keybr.com", d: "Teaches touch typing by generating words from the letters you are slowest on.", l: "None", s: "Checked Oct 2026", a: "open", k: "learn touch typing practice" },
        { n: "Kill the Newsletter", u: "https://kill-the-newsletter.com", d: "Turns any email newsletter into an RSS feed so it lands in your reader, not your inbox.", l: "None", s: "Checked Oct 2026", a: "open", k: "newsletter to rss feed" },
        { n: "Markmap", u: "https://markmap.js.org/repl", d: "Type a Markdown outline and it becomes an interactive mind map. Open source.", l: "None", s: "Checked Oct 2026", a: "open", k: "mind map markdown outline" },
        { n: "Online Stopwatch", u: "https://www.online-stopwatch.com", d: "Big, full-screen timers, countdowns and classroom timers that work on any device.", l: "Ads", s: "Checked Oct 2026", a: "open", k: "timer countdown stopwatch classroom" },
        { n: "World Time Buddy", u: "https://www.worldtimebuddy.com", d: "Line up several cities on one slider to find a meeting hour that works for everyone.", l: "Four cities free", s: "Checked Oct 2026", a: "open", k: "time zone converter meeting planner" }
      ]
    },
    {
      id: 'oct-2026-learning',
      group: 'learning',
      name: "Learning & Education",
      icon: '',
      desc: 'October 2026 additions.',
      sites: [
        { n: "Blockly Games", u: "https://blockly.games", d: "Google's drag-and-drop puzzles that teach programming logic to kids before they type code.", l: "None", s: "Checked Oct 2026", a: "open", k: "kids coding puzzles blocks" },
        { n: "Code.org", u: "https://code.org", d: "Free coding courses and Hour of Code activities for K-12, used in schools worldwide.", l: "Progress saving needs an account", s: "Checked Oct 2026", a: "optional", k: "learn coding kids school hour of code" },
        { n: "Full Stack Open", u: "https://fullstackopen.com", d: "University of Helsinki's free course on modern web development with React, Node, GraphQL and TypeScript.", l: "Certificates need registration", s: "Checked Oct 2026", a: "open", k: "react node course university free" },
        { n: "Lingva Translate", u: "https://lingva.ml", d: "A front-end for Google Translate that strips the tracking.", l: "Depends on Google's service staying reachable", s: "Checked Oct 2026", a: "open", k: "google translate privacy front end" },
        { n: "NASA's Eyes", u: "https://science.nasa.gov/eyes/", d: "Fly through the solar system and ride along with NASA missions in real time, in 3D.", l: "Heavy on older devices", s: "Checked Oct 2026", a: "open", k: "solar system 3d nasa missions" },
        { n: "Open Culture", u: "https://www.openculture.com", d: "A daily-updated index of free courses, audiobooks, movies, language lessons and textbooks around the web.", l: "Links go stale over time", s: "Checked Oct 2026", a: "open", k: "free courses audiobooks movies index" },
        { n: "OpenGuessr", u: "https://openguessr.com", d: "Free GeoGuessr alternative: get dropped in Street View and guess where you are.", l: "Fewer game modes than the paid original", s: "Checked Oct 2026", a: "open", k: "geoguessr free geography game" },
        { n: "PBS Kids", u: "https://pbskids.org", d: "Free games and full episodes from PBS children's shows, no account and no ads.", l: "US-focused", s: "Checked Oct 2026", a: "open", k: "kids games shows free" },
        { n: "Starfall", u: "https://www.starfall.com", d: "Phonics, reading and early math games for pre-K to grade 3.", l: "Some content needs a paid membership", s: "Checked Oct 2026", a: "open", k: "kids reading phonics games" },
        { n: "Storyline Online", u: "https://storylineonline.net", d: "Actors read children's picture books aloud on video, with activity guides for teachers.", l: "None", s: "Checked Oct 2026", a: "open", k: "kids books read aloud video" },
        { n: "Teach Yourself CS", u: "https://teachyourselfcs.com", d: "The one-page roadmap to a self-taught computer science education: nine subjects, one book and one course each.", l: "Books cost money or a library card", s: "Checked Oct 2026", a: "open", k: "computer science self study roadmap" },
        { n: "Wordnik", u: "https://www.wordnik.com", d: "Every definition of a word from many dictionaries at once, with real example sentences and related words.", l: "None", s: "Checked Oct 2026", a: "open", k: "dictionary definitions examples" },
        { n: "YouGlish", u: "https://youglish.com", d: "Type a word and jump to YouTube clips where native speakers say it, in context.", l: "English, plus a dozen other languages", s: "Checked Oct 2026", a: "open", k: "pronunciation youtube context english" }
      ]
    },
    {
      id: 'oct-2026-privacy',
      group: 'privacy',
      name: "Privacy & Security",
      icon: '',
      desc: 'October 2026 additions.',
      sites: [
        { n: "AmIUnique", u: "https://amiunique.org", d: "Research project that shows how identifiable your browser is against a large sample.", l: "None", s: "Checked Oct 2026", a: "open", k: "browser fingerprint unique test" },
        { n: "Brave Search", u: "https://search.brave.com", d: "Independent search index with no tracking, an AI answer summary, and Goggles to re-rank results.", l: "Index is smaller than Google's for obscure queries", s: "Checked Oct 2026", a: "open", k: "private search engine no tracking" },
        { n: "Element", u: "https://app.element.io", d: "Chat on the open Matrix network from the browser, with encrypted rooms and bridges to other services.", l: "Account on a Matrix server required", s: "Checked Oct 2026", a: "account", k: "matrix chat encrypted open source" },
        { n: "Ente", u: "https://ente.com", d: "End-to-end encrypted photo backup with face and object search, as an open-source Google Photos alternative.", l: "10 GB free; the rest is paid", s: "Checked Oct 2026", a: "account", k: "encrypted photo backup google photos alternative" },
        { n: "exif.tools", u: "https://exif.tools", d: "View every bit of metadata in a photo, including GPS location, before you share it.", l: "Viewing only; strip metadata with your editor", s: "Checked Oct 2026", a: "open", k: "exif metadata photo gps viewer" },
        { n: "Exploit Database", u: "https://www.exploit-db.com", d: "Archive of public exploits and vulnerable software, maintained by OffSec.", l: "For research and defense", s: "Checked Oct 2026", a: "open", k: "exploits vulnerabilities cve archive" },
        { n: "ICANN Lookup", u: "https://lookup.icann.org", d: "Official registration data for any domain: registrar, dates, name servers.", l: "Owner details are usually redacted", s: "Checked Oct 2026", a: "open", k: "whois domain lookup" },
        { n: "Jitsi Meet", u: "https://meet.jit.si", d: "Start an encrypted video call by typing a room name. No account, no app, no time limit.", l: "Large rooms get choppy on the public server", s: "Checked Oct 2026", a: "open", k: "video call free no account zoom alternative" },
        { n: "Mail.tm", u: "https://mail.tm", d: "Disposable email with a clean interface and an API, no registration.", l: "Addresses are temporary", s: "Checked Oct 2026", a: "open", k: "temporary email disposable" },
        { n: "Scamadviser", u: "https://www.scamadviser.com", d: "Trust score for any online shop or site based on age, ownership, reviews and hosting.", l: "Scores are heuristic, not proof", s: "Checked Oct 2026", a: "open", k: "is this site a scam check shop" },
        { n: "SimpleX Chat", u: "https://simplex.chat", d: "Messenger with no user identifiers at all, not even random ones. Open source, end-to-end encrypted.", l: "Small user base; app required", s: "Checked Oct 2026", a: "open", k: "private messenger no phone number" },
        { n: "Spamhaus IP Check", u: "https://check.spamhaus.org", d: "See whether your IP or domain is on a blocklist, and why.", l: "None", s: "Checked Oct 2026", a: "open", k: "ip blocklist check spam" },
        { n: "Startpage", u: "https://www.startpage.com", d: "Google results delivered through a proxy that strips your IP and cookies, with anonymous view for sites.", l: "Ads in results", s: "Checked Oct 2026", a: "open", k: "private search google results anonymous" },
        { n: "Syncthing", u: "https://syncthing.net", d: "Sync folders between your own devices directly, with no cloud in the middle.", l: "Devices must be online at the same time", s: "Checked Oct 2026", a: "open", k: "file sync devices peer to peer" },
        { n: "Tailscale", u: "https://tailscale.com", d: "Private network between your devices over WireGuard, set up in minutes. Free for personal use.", l: "Account needed; 100 devices on the free plan", s: "Checked Oct 2026", a: "account", k: "vpn mesh network wireguard devices" },
        { n: "ToffeeShare", u: "https://toffeeshare.com", d: "Peer-to-peer file transfer straight from your browser to theirs, end-to-end encrypted, no size limit.", l: "Both tabs must stay open during transfer", s: "Checked Oct 2026", a: "open", k: "p2p file transfer direct browser" },
        { n: "Whonix", u: "https://www.whonix.org", d: "An operating system that routes everything through Tor inside a VM, for when a browser is not enough.", l: "Needs VirtualBox or Qubes", s: "Checked Oct 2026", a: "open", k: "tor operating system anonymous vm" }
      ]
    },
    {
      id: 'oct-2026-files',
      group: 'files',
      name: "Files, PDFs & Documents",
      icon: '',
      desc: 'October 2026 additions.',
      sites: [
        { n: "Catbox", u: "https://catbox.moe", d: "Permanent hosting for images and small files with a direct link. Used widely on forums.", l: "200 MB per file", s: "Checked Oct 2026", a: "open", k: "image host file host permanent" },
        { n: "Gofile", u: "https://gofile.io", d: "Upload files of any size and share a link, no account needed.", l: "Files expire after inactivity", s: "Checked Oct 2026", a: "open", k: "file hosting share large files" },
        { n: "Mathcha", u: "https://www.mathcha.io", d: "Visual math editor for equations, diagrams and notes that exports to LaTeX and images.", l: "Account needed to save online", s: "Checked Oct 2026", a: "open", k: "math editor latex equations" },
        { n: "Microsoft Math Solver", u: "https://mathsolver.microsoft.com", d: "Type or photograph a math problem and get step-by-step solutions and graphs.", l: "Steps can be terse for calculus", s: "Checked Oct 2026", a: "open", k: "math solver steps algebra" },
        { n: "Pandoc Try", u: "https://pandoc.org/try/", d: "Convert between Markdown, HTML, LaTeX, DOCX, RST and more using the real pandoc.", l: "Short documents only", s: "Checked Oct 2026", a: "open", k: "markdown convert pandoc latex docx" },
        { n: "PDFescape", u: "https://www.pdfescape.com/open/", d: "Fill forms, annotate and edit text in a PDF directly in the browser.", l: "10 MB and 100 pages per file free", s: "Checked Oct 2026", a: "open", k: "edit pdf fill form annotate" },
        { n: "Pixeldrain", u: "https://pixeldrain.com", d: "Fast, simple file sharing with direct links and no sign-up.", l: "Free files expire after 120 days without views", s: "Checked Oct 2026", a: "open", k: "file sharing upload direct link" },
        { n: "Rustpad", u: "https://rustpad.io", d: "Collaborative plain-text editor: share the URL and type together in real time.", l: "Documents vanish after a day of inactivity", s: "Checked Oct 2026", a: "open", k: "collaborative text editor realtime" },
        { n: "Scribe OCR", u: "https://scribeocr.com", d: "Open-source OCR that runs in the browser and lets you proofread the recognized text over the scan.", l: "Slow on long documents", s: "Checked Oct 2026", a: "open", k: "ocr scan to text local" },
        { n: "Tables Generator", u: "https://www.tablesgenerator.com", d: "Build a table visually and get it as LaTeX, Markdown, HTML, plain text or MediaWiki.", l: "None", s: "Checked Oct 2026", a: "open", k: "table generator latex markdown" }
      ]
    },
    {
      id: 'oct-2026-money-career',
      group: 'money-career',
      name: "Money & Career",
      icon: '',
      desc: 'October 2026 additions.',
      sites: [
        { n: "FIRECalc", u: "https://www.firecalc.com", d: "Test whether a retirement plan would have survived every historical market period since 1871.", l: "Dated interface", s: "Checked Oct 2026", a: "open", k: "retirement calculator fire withdrawal" },
        { n: "FlowCV", u: "https://flowcv.com", d: "Resume and cover letter builder with clean templates and a free tier that does not watermark.", l: "Some templates and multiple resumes need a plan", s: "Checked Oct 2026", a: "optional", k: "resume builder templates" },
        { n: "GoodRx", u: "https://www.goodrx.com", d: "Compare prescription prices at nearby pharmacies and print a coupon.", l: "US only", s: "Checked Oct 2026", a: "open", k: "prescription prices coupons pharmacy" },
        { n: "Keepa", u: "https://keepa.com", d: "Amazon price history charts and drop alerts, so you know whether a 'deal' is one.", l: "Some charts need a subscription", s: "Checked Oct 2026", a: "optional", k: "amazon price history tracker" },
        { n: "Kelley Blue Book", u: "https://www.kbb.com", d: "What a car is worth, new or used, and what you should pay.", l: "US market", s: "Checked Oct 2026", a: "open", k: "car value used price" },
        { n: "MissingMoney", u: "https://www.missingmoney.com", d: "Search unclaimed property databases from US states for money owed to you or relatives.", l: "US only", s: "Checked Oct 2026", a: "open", k: "unclaimed money search" },
        { n: "NHTSA Recalls", u: "https://www.nhtsa.gov/recalls", d: "Enter a VIN and see every open safety recall on the vehicle.", l: "US vehicles", s: "Checked Oct 2026", a: "open", k: "car recall vin check" },
        { n: "OpenResume", u: "https://www.open-resume.com", d: "Free open-source resume builder that also parses existing PDFs. Data stays in your browser.", l: "One template", s: "Checked Oct 2026", a: "open", k: "resume builder free open source" },
        { n: "RTINGS", u: "https://www.rtings.com", d: "Lab-tested reviews of TVs, monitors, headphones and more with measured data, not opinions.", l: "Full comparison tools need a membership", s: "Checked Oct 2026", a: "open", k: "product reviews tested tv monitor headphones" },
        { n: "Slickdeals", u: "https://slickdeals.net", d: "Community-voted deals and coupons with the fakes voted down.", l: "US-centric", s: "Checked Oct 2026", a: "open", k: "deals coupons community" }
      ]
    },
    {
      id: 'oct-2026-entertainment',
      group: 'entertainment',
      name: "Games, Movies & Streaming",
      icon: '',
      desc: 'October 2026 additions.',
      sites: [
        { n: "Blob Opera", u: "https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw", d: "Drag four blobs to make them sing opera in harmony. Record and share the result.", l: "None", s: "Checked Oct 2026", a: "open", k: "fun music blobs google" },
        { n: "EmulatorJS", u: "https://emulatorjs.org", d: "Open-source browser emulator for NES through PS1 and more. Bring your own ROMs.", l: "No games included", s: "Checked Oct 2026", a: "open", k: "emulator browser roms open source" },
        { n: "Internet Arcade", u: "https://archive.org/details/internetarcade", d: "Play 2,000+ classic arcade machines emulated in the browser by the Internet Archive.", l: "Keyboard controls vary by game", s: "Checked Oct 2026", a: "open", k: "arcade games emulator browser classic" },
        { n: "Minecraft Classic", u: "https://classic.minecraft.net", d: "The 2009 version of Minecraft, free in the browser, with multiplayer links.", l: "Creative mode with 32 blocks", s: "Checked Oct 2026", a: "open", k: "minecraft free browser classic" },
        { n: "NTS Radio", u: "https://www.nts.live", d: "Two live channels and a huge archive of genre-spanning DJ shows from London.", l: "None", s: "Checked Oct 2026", a: "open", k: "radio music shows archive" },
        { n: "Podcast Index", u: "https://podcastindex.org", d: "Open podcast directory with a search anyone can use and feeds any app can read.", l: "Search is plain", s: "Checked Oct 2026", a: "open", k: "podcast search directory open" },
        { n: "Poki", u: "https://poki.com", d: "Thousands of browser games that load fast, with no sign-up and few ads.", l: "Ads between games", s: "Checked Oct 2026", a: "open", k: "browser games free play" },
        { n: "Poolsuite", u: "https://poolsuite.net", d: "Summer radio in a 1990s Mac interface. Just press play.", l: "None", s: "Checked Oct 2026", a: "open", k: "music radio retro vibes" },
        { n: "Songsterr", u: "https://www.songsterr.com", d: "Guitar, bass and drum tabs that play back in sync so you can learn at any speed.", l: "Some features need a plan", s: "Checked Oct 2026", a: "open", k: "guitar tabs playback" },
        { n: "Virtual Piano", u: "https://virtualpiano.net", d: "Play a piano with your computer keyboard and learn songs from its sheet library.", l: "Ads", s: "Checked Oct 2026", a: "open", k: "piano keyboard play online" },
        { n: "Webtoon", u: "https://www.webtoons.com", d: "Thousands of comics made for scrolling on a phone, free to read with new episodes weekly.", l: "Newest episodes may need coins", s: "Checked Oct 2026", a: "optional", k: "comics manhwa free read" }
      ]
    },
    {
      id: 'oct-2026-more',
      group: 'more',
      name: "Everyday & Unusual",
      icon: '',
      desc: 'October 2026 additions.',
      sites: [
        { n: "800notes", u: "https://800notes.com", d: "Look up who is calling from an unknown number using other people's reports.", l: "Crowd reports; not verified", s: "Checked Oct 2026", a: "open", k: "reverse phone lookup unknown caller" },
        { n: "A Better Route Planner", u: "https://abetterrouteplanner.com", d: "EV trip planning that accounts for your car model, charging speed and weather.", l: "Live data needs a plan", s: "Checked Oct 2026", a: "optional", k: "ev route planner charging trip" },
        { n: "Ballotpedia", u: "https://ballotpedia.org", d: "Neutral encyclopedia of US elections, candidates and ballot measures down to the local level.", l: "US only", s: "Checked Oct 2026", a: "open", k: "elections candidates ballot measures" },
        { n: "Based Cooking", u: "https://based.cooking", d: "Plain recipes with no ads, no popups and no essays. Open source.", l: "Small collection", s: "Checked Oct 2026", a: "open", k: "simple recipes no ads" },
        { n: "Calm Breathe", u: "https://www.calm.com/breathe", d: "A guided breathing bubble. Nothing to install, nothing to sign up for.", l: "None", s: "Checked Oct 2026", a: "open", k: "breathing exercise calm anxiety" },
        { n: "CourtListener", u: "https://www.courtlistener.com", d: "Free search of millions of US court opinions and PACER documents.", l: "US only", s: "Checked Oct 2026", a: "open", k: "court opinions legal search cases" },
        { n: "Down for Everyone or Just Me", u: "https://downforeveryoneorjustme.com", d: "Type a site and find out whether it is actually down.", l: "None", s: "Checked Oct 2026", a: "open", k: "is site down check" },
        { n: "Drugs.com Interactions Checker", u: "https://www.drugs.com/drug_interactions.html", d: "Enter medications and supplements and see interactions and their severity.", l: "Not a substitute for a pharmacist", s: "Checked Oct 2026", a: "open", k: "drug interactions checker medication" },
        { n: "Fake Name Generator", u: "https://www.fakenamegenerator.com", d: "Generate a complete fake identity for testing forms and signing up for junk.", l: "Do not use for fraud", s: "Checked Oct 2026", a: "open", k: "fake identity test data generator" },
        { n: "FindHelp", u: "https://www.findhelp.org", d: "Enter a ZIP code and find free or reduced-cost food, housing, health and legal help nearby.", l: "US only", s: "Checked Oct 2026", a: "open", k: "social services help food housing" },
        { n: "Flight Connections", u: "https://www.flightconnections.com", d: "Click an airport and see every direct route from it, by airline and day of the week.", l: "Some filters are paid", s: "Checked Oct 2026", a: "open", k: "direct flights routes airport" },
        { n: "Google Arts & Culture", u: "https://artsandculture.google.com", d: "Zoom into museum collections at gigapixel detail, tour sites in Street View, and play art experiments.", l: "None", s: "Checked Oct 2026", a: "open", k: "museums art virtual tours" },
        { n: "Google Flights", u: "https://www.google.com/travel/flights", d: "Fast flight search with a price calendar, price tracking and an 'explore anywhere' map.", l: "Tracking alerts need a Google account", s: "Checked Oct 2026", a: "open", k: "flights search cheap calendar" },
        { n: "Justia", u: "https://www.justia.com", d: "Free US case law, codes, regulations and a lawyer directory.", l: "US only", s: "Checked Oct 2026", a: "open", k: "legal law cases statutes free" },
        { n: "Liftosaur", u: "https://www.liftosaur.com", d: "Weightlifting tracker where programs are scripts, with built-in 5/3/1, GZCLP and more.", l: "Account only for cloud sync", s: "Checked Oct 2026", a: "open", k: "weightlifting tracker programs" },
        { n: "MedlinePlus", u: "https://medlineplus.gov", d: "Plain-language health information from the US National Library of Medicine, with no ads.", l: "US-centric", s: "Checked Oct 2026", a: "open", k: "health information conditions medicine" },
        { n: "Metronome Online", u: "https://www.metronomeonline.com", d: "A metronome with tap tempo and time signatures.", l: "None", s: "Checked Oct 2026", a: "open", k: "metronome bpm music practice" },
        { n: "NHS Health A to Z", u: "https://www.nhs.uk/conditions/", d: "The UK health service's guide to conditions, symptoms and treatments, written to be read by anyone.", l: "UK guidance", s: "Checked Oct 2026", a: "open", k: "health conditions symptoms nhs" },
        { n: "Online Sequencer", u: "https://onlinesequencer.net", d: "Make music in a piano-roll grid with dozens of instruments and share it.", l: "Ads", s: "Checked Oct 2026", a: "open", k: "music sequencer piano roll" },
        { n: "OpenSecrets", u: "https://www.opensecrets.org", d: "Follow the money in US politics: donors, lobbying and spending for every candidate.", l: "US only", s: "Checked Oct 2026", a: "open", k: "campaign finance lobbying money politics" },
        { n: "Petfinder", u: "https://www.petfinder.com", d: "Search adoptable pets from 11,000+ shelters and rescues by location, breed and age.", l: "North America", s: "Checked Oct 2026", a: "open", k: "adopt pet shelter dogs cats" },
        { n: "Pixel Thoughts", u: "https://www.pixelthoughts.co", d: "Type a worry, watch it shrink into a star for sixty seconds.", l: "None", s: "Checked Oct 2026", a: "open", k: "stress relief meditation" },
        { n: "PlugShare", u: "https://www.plugshare.com", d: "Map of EV charging stations with user check-ins and reviews.", l: "Trip planner needs an account", s: "Checked Oct 2026", a: "open", k: "ev charging map stations" },
        { n: "Random.org", u: "https://www.random.org", d: "True random numbers from atmospheric noise: dice, lists, coin flips, lottery draws.", l: "None", s: "Checked Oct 2026", a: "open", k: "random number generator true" },
        { n: "Secret Flying", u: "https://www.secretflying.com", d: "Error fares and unusually cheap flights posted as they appear.", l: "Deals vanish fast", s: "Checked Oct 2026", a: "open", k: "cheap flights error fares deals" },
        { n: "Sherpa", u: "https://apply.joinsherpa.com/explore", d: "Visa and entry requirements for any passport and destination, updated continually.", l: "Visa applications cost money", s: "Checked Oct 2026", a: "open", k: "visa requirements travel entry" },
        { n: "Sleep Calculator", u: "https://sleepcalculator.com", d: "Enter when you need to wake and get bedtimes that line up with 90-minute sleep cycles.", l: "Rule of thumb, not science", s: "Checked Oct 2026", a: "open", k: "sleep cycle bedtime calculator" },
        { n: "Submarine Cable Map", u: "https://www.submarinecablemap.com", d: "Every undersea cable that carries the internet, with landing points and owners.", l: "None", s: "Checked Oct 2026", a: "open", k: "internet cables map infrastructure" },
        { n: "The Useless Web", u: "https://theuselessweb.com", d: "One button. One pointless website. Again.", l: "None", s: "Checked Oct 2026", a: "open", k: "fun random useless sites" },
        { n: "USDA FoodData Central", u: "https://fdc.nal.usda.gov", d: "The official nutrition database behind most calorie apps, searchable for free.", l: "Dense interface", s: "Checked Oct 2026", a: "open", k: "nutrition database calories food" },
        { n: "Wanderlog", u: "https://wanderlog.com", d: "Plan a trip on a map with your group, import bookings, and get a day-by-day itinerary.", l: "Offline access and some tools are paid", s: "Checked Oct 2026", a: "optional", k: "trip planner itinerary map" },
        { n: "Worldometer", u: "https://www.worldometers.info", d: "Live counters for world population, births, CO2, and country statistics.", l: "Figures are estimates", s: "Checked Oct 2026", a: "open", k: "world population live statistics" },
        { n: "Zillow", u: "https://www.zillow.com", d: "Home listings, rentals and estimated values for most of the US.", l: "Estimates can be off", s: "Checked Oct 2026", a: "open", k: "homes for sale rent values" }
      ]
    }
  ];

  CATEGORIES.forEach(function (category) { DATA.push(category); });
})();
