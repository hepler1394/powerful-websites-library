// data-extra-14.js — September 2026 additions: 90 free sites, most usable with no login.
// Every entry was fetched and checked on September 27, 2026. a = access
// (open: no account needed, optional: works without one, account adds saving).
(function () {
  'use strict';
  if (typeof DATA === 'undefined') return;

  var CATEGORIES = [
    {
      id: 'sep-2026-ai-general',
      group: 'ai-general',
      name: "General AI Tools",
      icon: '',
      desc: 'September 2026 additions.',
      sites: [
        { n: "Artificial Analysis", u: "https://artificialanalysis.ai", d: "Compare AI models and API providers on independent quality, speed, latency and price benchmarks.", l: "Benchmarks use their own methods and change often", s: "Checked Sep 2026", a: "open", k: "llm benchmark compare models leaderboard price speed" },
        { n: "Future Tools", u: "https://futuretools.io", d: "Browse Matt Wolfe's curated directory of AI tools and news, filtered by category and pricing.", l: "Many listed tools are paid; newsletter prompts on the page", s: "Checked Sep 2026", a: "open", k: "ai tools directory matt wolfe news" },
        { n: "GPTZero", u: "https://gptzero.me", d: "Paste text to estimate how much was written by AI, with sentence-level highlighting.", l: "Free scans are capped; detection can misjudge human writing", s: "Checked Sep 2026", a: "optional", k: "ai detector chatgpt checker writing" },
        { n: "Tactiq YouTube Transcript", u: "https://tactiq.io/tools/youtube-transcript", d: "Paste a YouTube link to get the full transcript with timestamps to read, copy or summarize.", l: "Only works on videos that have captions", s: "Checked Sep 2026", a: "open", k: "youtube transcript captions text summarize" },
        { n: "There's An AI For That", u: "https://theresanaiforthat.com", d: "Search a large, daily-updated database of AI tools by task, with ratings and free-tier filters.", l: "Sponsored listings mixed in; account needed to save tools", s: "Checked Sep 2026", a: "optional", k: "ai tools directory search database" }
      ]
    },
    {
      id: 'sep-2026-ai-creative',
      group: 'ai-creative',
      name: "AI Image, Video & Audio",
      icon: '',
      desc: 'September 2026 additions.',
      sites: [
        { n: "Huemint", u: "https://huemint.com", d: "Generate color palettes with AI and preview them on logos, websites and illustrations.", l: "Palettes only; copy the hex codes to keep them", s: "Checked Sep 2026", a: "open", k: "ai color palette generator brand design" },
        { n: "Magic Eraser", u: "https://magicstudio.com/magiceraser", d: "Brush over people, text or objects in a photo and AI fills in the background.", l: "Free downloads are low resolution with a small logo", s: "Checked Sep 2026", a: "open", k: "remove object photo eraser inpaint cleanup" },
        { n: "MVSEP", u: "https://mvsep.com/en", d: "Split a song into vocals, drums, bass and other stems using a range of open AI separation models.", l: "Guests wait longer in the queue and get MP3 output only", s: "Checked Sep 2026", a: "open", k: "stem splitter vocal remover karaoke music separation" },
        { n: "Raphael AI", u: "https://raphael.app", d: "Generate images from text prompts with no sign-up and no daily generation limit in basic mode.", l: "Free images are watermarked and lower resolution", s: "Checked Sep 2026", a: "open", k: "ai image generator text to image free unlimited" },
        { n: "TTSMaker", u: "https://ttsmaker.com", d: "Turn text into speech in 100+ languages and download the audio, including for commercial use.", l: "About 20,000 characters per week on most voices; Pro for more", s: "Checked Sep 2026", a: "open", k: "text to speech tts voice audio mp3 narration" },
        { n: "Upscale.media", u: "https://www.upscale.media", d: "Upload a photo to enlarge it 2x or 4x with AI while keeping edges and textures sharp.", l: "Guests get lower resolution caps; more needs credits", s: "Checked Sep 2026", a: "open", k: "ai upscale enlarge image enhance photo" }
      ]
    },
    {
      id: 'sep-2026-ai-assistants',
      group: 'ai-assistants',
      name: "AI Assistants & Agents",
      icon: '',
      desc: 'September 2026 additions.',
      sites: [
        { n: "Duck.ai", u: "https://duck.ai", d: "Chat with models like GPT, Claude and Llama anonymously through DuckDuckGo, with no account.", l: "Daily usage limits; newest models need a paid plan", s: "Checked Sep 2026", a: "open", k: "ai chat private anonymous chatgpt claude duckduckgo" },
        { n: "Kagi Translate", u: "https://translate.kagi.com", d: "Translate text, web pages and documents with AI models, with tone and formality options.", l: "Some longer or document jobs ask for a Kagi account", s: "Checked Sep 2026", a: "open", k: "translate ai translation languages kagi" },
        { n: "Lumo", u: "https://lumo.proton.me", d: "Ask a private AI assistant from Proton that keeps chats encrypted and does not train on them.", l: "Guest chats are not saved and have lower limits", s: "Checked Sep 2026", a: "open", k: "ai chat private encrypted proton assistant" },
        { n: "Z.ai", u: "https://chat.z.ai", d: "Chat with the open-weight GLM models for coding, writing and building simple web pages.", l: "Run by Zhipu AI in China; sign in to keep history", s: "Checked Sep 2026", a: "optional", k: "ai chat glm zhipu coding assistant" }
      ]
    },
    {
      id: 'sep-2026-writing-research',
      group: 'writing-research',
      name: "Writing & Research",
      icon: '',
      desc: 'September 2026 additions.',
      sites: [
        { n: "DeepL Translator", u: "https://www.deepl.com/en/translator", d: "Translate text and documents between 30+ languages with natural wording and alternate phrasings.", l: "Text length and document translations are limited when free", s: "Checked Sep 2026", a: "optional", k: "translate translation languages documents" },
        { n: "Etymonline", u: "https://www.etymonline.com", d: "Look up the origin and history of English words, phrases and idioms.", l: "English words only; ads unless you pay for premium", s: "Checked Sep 2026", a: "open", k: "etymology word origin dictionary history" },
        { n: "Google Ngram Viewer", u: "https://books.google.com/ngrams", d: "Chart how often words or phrases appear in millions of books over the centuries.", l: "Reflects published books only, not speech or the web", s: "Checked Sep 2026", a: "open", k: "ngram word frequency books language trends" },
        { n: "LanguageTool", u: "https://languagetool.org", d: "Paste text to catch grammar, spelling and punctuation errors in more than 30 languages.", l: "Longer texts and style suggestions need Premium", s: "Checked Sep 2026", a: "optional", k: "grammar checker spelling proofread grammarly alternative" },
        { n: "RhymeZone", u: "https://www.rhymezone.com", d: "Find rhymes, near rhymes, synonyms and related words for songwriting, poetry and everyday writing.", l: "Ads on the page", s: "Checked Sep 2026", a: "open", k: "rhymes rhyming dictionary thesaurus lyrics poetry" },
        { n: "WordCounter", u: "https://wordcounter.net", d: "Paste text to count words and characters, see reading time and check keyword density.", l: "Ads on the page", s: "Checked Sep 2026", a: "open", k: "word count character counter essay" },
        { n: "ZoteroBib", u: "https://zbib.org", d: "Paste a URL, DOI or ISBN to build a bibliography in APA, MLA, Chicago or thousands of other styles.", l: "Bibliography lives in your browser; use Zotero for big libraries", s: "Checked Sep 2026", a: "open", k: "citation bibliography apa mla chicago generator" }
      ]
    },
    {
      id: 'sep-2026-design-media',
      group: 'design-media',
      name: "Design & Media",
      icon: '',
      desc: 'September 2026 additions.',
      sites: [
        { n: "Adobe Color", u: "https://color.adobe.com", d: "Build color palettes from harmony rules or a photo, and check them for contrast and color blindness issues.", l: "Saving palettes to Libraries needs an Adobe account", s: "Checked Sep 2026", a: "optional", k: "color palette wheel harmony contrast accessibility" },
        { n: "AudioMass", u: "https://audiomass.co", d: "Trim, cut, fade and apply effects to audio files in an open-source waveform editor that runs in the browser.", l: "Long recordings can lag since everything runs in the tab", s: "Checked Sep 2026", a: "open", k: "audio editor waveform trim cut mp3 wav effects" },
        { n: "Icones", u: "https://icones.js.org", d: "Search over 200,000 open-source icons from 150+ sets and copy them as SVG, PNG or code components.", l: "Check each icon set license before commercial use", s: "Checked Sep 2026", a: "open", k: "icons svg iconify search copy react vue" },
        { n: "iLoveIMG", u: "https://www.iloveimg.com", d: "Compress, resize, crop, convert and watermark batches of images, from the team behind iLovePDF.", l: "Free tier caps batch size; some tools need Premium", s: "Checked Sep 2026", a: "open", k: "image compress resize crop convert jpg png heic bulk" },
        { n: "MockUPhone", u: "https://mockuphone.com", d: "Drop an app screenshot into iPhone, Android, iPad or TV frames and download the device mockup.", l: "Fixed set of device frames and angles", s: "Checked Sep 2026", a: "open", k: "mockup device frame iphone screenshot app store" },
        { n: "Openverse", u: "https://openverse.org", d: "Search more than 800 million Creative Commons and public-domain images and audio clips in one place.", l: "Always confirm the license and credit shown on each work", s: "Checked Sep 2026", a: "open", k: "creative commons images audio stock public domain search" },
        { n: "unDraw", u: "https://undraw.co", d: "Search open-source illustrations, recolor them to your brand color and download SVG or PNG files.", l: "One flat illustration style across the library", s: "Checked Sep 2026", a: "open", k: "illustrations svg free open source recolor" },
        { n: "Wordmark", u: "https://wordmark.it", d: "Type a word and see it rendered in every font installed on your computer to pick a typeface fast.", l: "Needs Chrome or Edge to read your installed fonts", s: "Checked Sep 2026", a: "open", k: "fonts preview typeface installed compare logo" }
      ]
    },
    {
      id: 'sep-2026-developer',
      group: 'developer',
      name: "Developer Tools",
      icon: '',
      desc: 'September 2026 additions.',
      sites: [
        { n: "Compiler Explorer", u: "https://godbolt.org", d: "Write C, C++, Rust, Go and dozens of other languages and see the compiled assembly side by side.", l: "Execution time and output size are capped", s: "Checked Sep 2026", a: "open", k: "godbolt compiler assembly c++ rust online" },
        { n: "dbdiagram.io", u: "https://dbdiagram.io", d: "Type table definitions in a simple text syntax and get a database relationship diagram you can export.", l: "Sign in to save diagrams; some exports are paid", s: "Checked Sep 2026", a: "optional", k: "database erd schema diagram sql dbml" },
        { n: "HTTPie for Web", u: "https://httpie.io/app", d: "Build and send REST, GraphQL and HTTP requests from the browser to test APIs.", l: "Sign in to sync collections across devices", s: "Checked Sep 2026", a: "open", k: "api client rest http request postman alternative graphql" },
        { n: "jq playground", u: "https://play.jqlang.org", d: "Test jq filters against sample JSON and see the output instantly before using them in scripts.", l: "Big JSON inputs get slow in the browser", s: "Checked Sep 2026", a: "open", k: "jq json filter query playground" },
        { n: "JWT.io", u: "https://www.jwt.io", d: "Paste a JSON Web Token to decode its header and payload and check the signature.", l: "Avoid pasting live production tokens into any website", s: "Checked Sep 2026", a: "open", k: "jwt decode token auth json web token debugger" },
        { n: "MxToolbox", u: "https://mxtoolbox.com", d: "Look up MX, SPF, DKIM, DNS and blacklist records to diagnose email delivery problems.", l: "Pushes paid monitoring plans; ads on the page", s: "Checked Sep 2026", a: "open", k: "dns mx spf dkim dmarc email blacklist lookup" },
        { n: "PageSpeed Insights", u: "https://pagespeed.web.dev", d: "Enter a URL to get Google speed scores, Core Web Vitals and specific fixes for mobile and desktop.", l: "Tests one URL at a time; scores vary run to run", s: "Checked Sep 2026", a: "open", k: "page speed lighthouse core web vitals performance seo" },
        { n: "ShellCheck", u: "https://www.shellcheck.net", d: "Paste a bash or sh script to find bugs, quoting mistakes and unsafe patterns with explanations.", l: "Shell scripts only", s: "Checked Sep 2026", a: "open", k: "bash shell script lint check bugs" }
      ]
    },
    {
      id: 'sep-2026-productivity',
      group: 'productivity',
      name: "Productivity & Notes",
      icon: '',
      desc: 'September 2026 additions.',
      sites: [
        { n: "Flowchart Fun", u: "https://flowchart.fun", d: "Type an indented list and it turns into a flowchart or mind map you can style and export.", l: "Some themes and export formats need Pro", s: "Checked Sep 2026", a: "open", k: "flowchart text to diagram mind map" },
        { n: "Mermaid Live Editor", u: "https://mermaid.live", d: "Write Mermaid text to draw flowcharts, sequence diagrams and Gantt charts, then export PNG or SVG.", l: "Diagram is stored in the share URL, so long charts make long links", s: "Checked Sep 2026", a: "open", k: "mermaid diagram flowchart sequence gantt editor" },
        { n: "Rallly", u: "https://rallly.co", d: "Make a meeting poll with date options and let people vote without anyone creating an account.", l: "Sign in to manage polls from other devices", s: "Checked Sep 2026", a: "open", k: "meeting poll schedule doodle alternative open source" },
        { n: "WBO Whiteboard", u: "https://wbo.ophir.dev", d: "Open a shared whiteboard, send the link and sketch together in real time.", l: "Anyone with the board link can see and edit it", s: "Checked Sep 2026", a: "open", k: "whiteboard collaborative drawing open source" },
        { n: "Wheel of Names", u: "https://wheelofnames.com", d: "Enter names or options and spin a wheel to pick a random winner, ideal for classrooms and giveaways.", l: "Saving wheels to the cloud needs an account", s: "Checked Sep 2026", a: "open", k: "random picker spinner wheel names giveaway" },
        { n: "When2meet", u: "https://www.when2meet.com", d: "Create a grid of times, share the link and see when everyone in a group is free.", l: "Dated design; no calendar sync", s: "Checked Sep 2026", a: "open", k: "schedule meeting availability group poll time" },
        { n: "ZenPen", u: "https://zenpen.io", d: "Write in a full-screen, distraction-free editor with a word count and a word goal.", l: "Text stays in your browser storage; copy it out to keep it", s: "Checked Sep 2026", a: "open", k: "writing editor minimal distraction free focus" }
      ]
    },
    {
      id: 'sep-2026-learning',
      group: 'learning',
      name: "Learning & Education",
      icon: '',
      desc: 'September 2026 additions.',
      sites: [
        { n: "Flexbox Froggy", u: "https://flexboxfroggy.com", d: "Learn CSS flexbox by writing properties that move frogs onto lily pads across 24 levels.", l: "Covers flexbox only", s: "Checked Sep 2026", a: "open", k: "css flexbox game learn web" },
        { n: "Learn Git Branching", u: "https://learngitbranching.js.org", d: "Learn Git commands through visual puzzles that show how branches, merges and rebases move.", l: "Simulated Git, not connected to real repositories", s: "Checked Sep 2026", a: "open", k: "git tutorial branching rebase learn interactive" },
        { n: "Monkeytype", u: "https://monkeytype.com", d: "Take customizable typing tests by time or word count and track your words per minute.", l: "Sign in to save results and history", s: "Checked Sep 2026", a: "optional", k: "typing test wpm speed practice keyboard" },
        { n: "musictheory.net", u: "https://www.musictheory.net", d: "Learn notes, rhythm, scales and chords with short lessons, ear trainers and practice exercises.", l: "Ads on the site; the mobile apps are paid", s: "Checked Sep 2026", a: "open", k: "music theory lessons ear training chords scales" },
        { n: "Nicky Case", u: "https://ncase.me", d: "Play through interactive explainers on trust, voting, epidemics and more that teach by letting you tinker.", l: "A set of standalone projects, not a structured course", s: "Checked Sep 2026", a: "open", k: "explorable explanations interactive game theory learn" },
        { n: "Seeing Theory", u: "https://seeing-theory.brown.edu", d: "Learn probability and statistics through interactive visual chapters from Brown University.", l: "Covers introductory statistics only", s: "Checked Sep 2026", a: "open", k: "statistics probability visual learn brown" },
        { n: "SQLBolt", u: "https://sqlbolt.com", d: "Work through interactive SQL lessons with exercises you solve against sample tables in the browser.", l: "Stops at intermediate topics", s: "Checked Sep 2026", a: "open", k: "sql tutorial learn database queries interactive" }
      ]
    },
    {
      id: 'sep-2026-privacy',
      group: 'privacy',
      name: "Privacy & Security",
      icon: '',
      desc: 'September 2026 additions.',
      sites: [
        { n: "Cover Your Tracks", u: "https://coveryourtracks.eff.org", d: "Test how well your browser blocks trackers and whether its fingerprint makes you unique, from the EFF.", l: "Tests only; it does not change any settings", s: "Checked Sep 2026", a: "open", k: "browser fingerprint tracking test eff privacy" },
        { n: "Jimpl", u: "https://jimpl.com", d: "View the EXIF data in a photo, including GPS location, and strip it before you share.", l: "Photos upload to their server and are deleted within 24 hours", s: "Checked Sep 2026", a: "open", k: "exif metadata viewer remove gps location photo" },
        { n: "JustDeleteMe", u: "https://justdeleteme.xyz", d: "Find direct links and difficulty ratings for deleting your account on hundreds of websites.", l: "Links go stale when sites change their settings pages", s: "Checked Sep 2026", a: "open", k: "delete account remove data directory" },
        { n: "PrivateBin", u: "https://privatebin.net", d: "Share text through an encrypted paste that can expire or burn after reading.", l: "Pastes expire; the server never sees the key in the link", s: "Checked Sep 2026", a: "open", k: "pastebin encrypted paste share text burn after reading" },
        { n: "ProtectedText", u: "https://www.protectedtext.com", d: "Pick any URL, set a password and keep encrypted notes there with no account or email.", l: "Lose the password and the note cannot be recovered", s: "Checked Sep 2026", a: "open", k: "encrypted notepad notes password private" },
        { n: "Send", u: "https://send.vis.ee", d: "Share files up to 2.5 GB with end-to-end encryption and a link that expires on its own.", l: "Community-run instance; 2.5 GB per upload", s: "Checked Sep 2026", a: "open", k: "encrypted file sharing firefox send expire link" },
        { n: "ToS;DR", u: "https://tosdr.org/en", d: "See plain-English grades and key points from the terms of service of popular websites.", l: "Covers popular services only; some grades are outdated", s: "Checked Sep 2026", a: "open", k: "terms of service privacy policy ratings summary" }
      ]
    },
    {
      id: 'sep-2026-files',
      group: 'files',
      name: "Files, PDFs & Documents",
      icon: '',
      desc: 'September 2026 additions.',
      sites: [
        { n: "BentoPDF", u: "https://www.bentopdf.com", d: "Merge, split, compress, convert and edit PDFs in your browser without uploading the files anywhere.", l: "Very large PDFs are limited by your device memory", s: "Checked Sep 2026", a: "open", k: "pdf merge split compress edit convert private offline" },
        { n: "cobalt", u: "https://cobalt.tools", d: "Paste a public video or audio link and save the file, with no ads, trackers or account.", l: "Some services stop working when platforms change; single links only", s: "Checked Sep 2026", a: "open", k: "media downloader video audio save link youtube tiktok" },
        { n: "ezyZip", u: "https://www.ezyzip.com", d: "Open, extract or create ZIP, RAR, 7z and other archives right in the browser without installing software.", l: "Ads on the page; huge archives are slow in a browser tab", s: "Checked Sep 2026", a: "open", k: "unzip zip rar 7z extract archive compress" },
        { n: "OCR.space", u: "https://ocr.space", d: "Upload an image or scanned PDF and pull out the text, or turn the scan into a searchable PDF.", l: "Free web tool caps files at 5 MB; ads on the page", s: "Checked Sep 2026", a: "open", k: "ocr image to text scan extract text searchable pdf" },
        { n: "PairDrop", u: "https://pairdrop.net", d: "Send files between your phone and computer on the same network by opening the page on both devices.", l: "Both devices must have the page open at the same time", s: "Checked Sep 2026", a: "open", k: "airdrop file transfer p2p share local network phone" },
        { n: "RecordScreen.io", u: "https://recordscreen.io", d: "Record your screen, with optional webcam, straight from the browser and download the video.", l: "No trimming or editing tools; download before closing the tab", s: "Checked Sep 2026", a: "open", k: "screen recorder capture webcam browser video" },
        { n: "SwissTransfer", u: "https://www.swisstransfer.com/en", d: "Send files up to 50 GB by link or email from Swiss servers, kept online for up to 30 days.", l: "Transfers expire after 30 days at most; processing is on their servers", s: "Checked Sep 2026", a: "open", k: "wetransfer large file send share swiss" },
        { n: "VERT", u: "https://vert.sh", d: "Convert images, audio, documents and video between formats, with most conversions done on your own device.", l: "Video conversion is sent to their server; other types run locally", s: "Checked Sep 2026", a: "open", k: "file converter open source image audio document video" }
      ]
    },
    {
      id: 'sep-2026-money-career',
      group: 'money-career',
      name: "Money & Career",
      icon: '',
      desc: 'September 2026 additions.',
      sites: [
        { n: "FI Calc", u: "https://ficalc.app", d: "Test a retirement plan against historical market data and compare withdrawal strategies.", l: "Uses US historical returns; not financial advice", s: "Checked Sep 2026", a: "open", k: "retirement fire calculator withdrawal simulation" },
        { n: "HiringCafe", u: "https://hiringcafe.com", d: "Search millions of jobs pulled straight from company career pages, with salary and remote filters.", l: "Sign in to save jobs and searches", s: "Checked Sep 2026", a: "open", k: "job search remote jobs salary filter" },
        { n: "Invoice Generator", u: "https://invoice-generator.com", d: "Fill in line items, taxes and your logo to download a clean PDF invoice in a minute.", l: "Sign in to keep an invoice history", s: "Checked Sep 2026", a: "optional", k: "invoice pdf freelancer billing template" },
        { n: "Layoffs.fyi", u: "https://layoffs.fyi", d: "Track tech and startup layoffs by company, date and headcount in a regularly updated table.", l: "Focused on tech and startup companies", s: "Checked Sep 2026", a: "open", k: "layoffs tracker tech jobs" },
        { n: "Occupational Outlook Handbook", u: "https://www.bls.gov/ooh", d: "Look up pay, job outlook, education needed and daily duties for hundreds of US careers.", l: "US jobs and wage data only", s: "Checked Sep 2026", a: "open", k: "career salary job outlook bls occupations" },
        { n: "Omni Calculator", u: "https://www.omnicalculator.com", d: "Pick from thousands of calculators for finance, health, physics and everyday math, each explained.", l: "Ads on the free pages", s: "Checked Sep 2026", a: "open", k: "calculator finance loan math conversion" },
        { n: "SmartAsset Paycheck Calculator", u: "https://smartasset.com/taxes/paycheck-calculator", d: "Estimate take-home pay after federal, state and local taxes for hourly or salaried jobs.", l: "US only; an estimate, not a payroll figure", s: "Checked Sep 2026", a: "open", k: "paycheck take home pay tax calculator salary" }
      ]
    },
    {
      id: 'sep-2026-entertainment',
      group: 'entertainment',
      name: "Games, Movies & Streaming",
      icon: '',
      desc: 'September 2026 additions.',
      sites: [
        { n: "A Soft Murmur", u: "https://asoftmurmur.com", d: "Mix rain, thunder, waves, wind and other ambient sounds to focus, relax or sleep.", l: "A few extra sound packs are paid", s: "Checked Sep 2026", a: "open", k: "ambient sounds rain noise focus sleep" },
        { n: "Generative.fm", u: "https://generative.fm", d: "Stream endless ambient music generated live in your browser for focus, sleep or relaxing.", l: "Ambient style only", s: "Checked Sep 2026", a: "open", k: "ambient generative music focus sleep" },
        { n: "HowLongToBeat", u: "https://howlongtobeat.com", d: "Look up how many hours it takes to finish a video game, from main story to full completion.", l: "Sign in to track a backlog", s: "Checked Sep 2026", a: "open", k: "video game length hours backlog" },
        { n: "JustWatch", u: "https://www.justwatch.com", d: "Search any movie or show to see which streaming services, rentals or free sites carry it in your country.", l: "Watchlists and alerts need an account", s: "Checked Sep 2026", a: "optional", k: "streaming where to watch movies tv guide" },
        { n: "Lichess", u: "https://lichess.org", d: "Play chess against people or the computer, solve puzzles and analyze games, all free with no ads.", l: "Rated games need a free account", s: "Checked Sep 2026", a: "open", k: "chess play online puzzles analysis" },
        { n: "Music-Map", u: "https://www.music-map.com", d: "Type an artist and see a map of similar artists, with closer names being more alike.", l: "Suggestions only; no playback", s: "Checked Sep 2026", a: "open", k: "music discovery similar artists bands" },
        { n: "Quick, Draw!", u: "https://quickdraw.withgoogle.com", d: "Doodle a prompt in 20 seconds while a neural network tries to guess what you are drawing.", l: "Your doodles are added to a public dataset", s: "Checked Sep 2026", a: "open", k: "drawing game ai google doodle" },
        { n: "Sporcle", u: "https://www.sporcle.com", d: "Play thousands of timed trivia quizzes on geography, movies, sports, history and more.", l: "Ads on free quizzes", s: "Checked Sep 2026", a: "open", k: "trivia quiz games geography" }
      ]
    },
    {
      id: 'sep-2026-more',
      group: 'more',
      name: "Everyday & Unusual",
      icon: '',
      desc: 'September 2026 additions.',
      sites: [
        { n: "iFixit", u: "https://www.ifixit.com", d: "Follow free step-by-step repair guides for phones, laptops, consoles, appliances and more.", l: "Guides are community-written, so quality varies", s: "Checked Sep 2026", a: "open", k: "repair guide fix phone laptop teardown" },
        { n: "ManualsLib", u: "https://www.manualslib.com", d: "Search and read over 3 million product manuals and download them as PDF files.", l: "Cluttered with ads", s: "Checked Sep 2026", a: "open", k: "manuals user guide pdf appliance device" },
        { n: "OpenStreetMap", u: "https://www.openstreetmap.org", d: "Browse and search a free, community-built world map with directions for driving, cycling and walking.", l: "Directions are basic compared with dedicated navigation apps", s: "Checked Sep 2026", a: "open", k: "map open source directions navigation" },
        { n: "Passport Index", u: "https://www.passportindex.org", d: "Compare passports and see which countries you can visit visa-free, on arrival or with an eVisa.", l: "Visa rules change; confirm with official sources before travel", s: "Checked Sep 2026", a: "open", k: "passport visa free travel countries" },
        { n: "PCPartPicker", u: "https://pcpartpicker.com", d: "Plan a PC build with automatic compatibility checks, wattage estimates and price comparisons.", l: "Account needed to save builds; share via permalink otherwise", s: "Checked Sep 2026", a: "optional", k: "pc build parts compatibility price computer" },
        { n: "Plain Old Recipe", u: "https://plainoldrecipe.com", d: "Paste a recipe URL and get just the ingredients and steps, without the life story and ads.", l: "Some recipe sites cannot be parsed", s: "Checked Sep 2026", a: "open", k: "recipe cleaner ingredients cooking no ads" },
        { n: "TestUFO", u: "https://testufo.com", d: "Check your monitor for motion blur, ghosting, refresh rate and frame skipping with animated tests.", l: "Results depend on browser and display settings", s: "Checked Sep 2026", a: "open", k: "monitor test refresh rate ghosting 144hz" },
        { n: "Zoom Earth", u: "https://zoom.earth", d: "Watch near-live satellite images, radar, wind and hurricane tracks on an interactive world map.", l: "Fire and storm data are approximate; not for emergencies", s: "Checked Sep 2026", a: "open", k: "weather radar satellite hurricane map" }
      ]
    }
  ];

  CATEGORIES.forEach(function (category) { DATA.push(category); });
})();
