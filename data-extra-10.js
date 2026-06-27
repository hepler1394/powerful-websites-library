// data-extra-10.js — Wave 10: June 27, 2026 Fresh Picks
// 50 new websites curated June 27, 2026 — frontier AI chat, answer engines,
// coding agents, PKM, AI meetings, writing, UI component libraries, dev
// utilities, free backend/infra, and design assets.
// Schema matches data-extra-9.js: append categories to DATA, merge FRESH_PICKS.
(function () {
    const EXTRA10 = [
        // ─── 1. AI Chat & Models ─────────────────────────────────────────
        {
            id: "wave10-chat", name: "🤖 AI Chat & Models — June 2026", icon: "🤖", type: "agents",
            desc: "Frontier chat models and playgrounds worth a tab in mid-2026.",
            sites: [
                { n: "Qwen Chat", u: "https://chat.qwen.ai", d: "Alibaba's Qwen models in a clean free chat — strong coding, long context, image and doc understanding, and a web-search mode. A genuinely good free alternative.", l: "Free", s: "Open-model crowd 2026", k: "ai chat qwen alibaba free coding long context open model" },
                { n: "Kimi", u: "https://kimi.com", d: "Moonshot's Kimi — famous for huge context windows that swallow whole books and codebases, plus solid agentic browsing. Free and fast.", l: "Free", s: "Long-context fans 2026", k: "ai chat kimi moonshot long context free research browsing" },
                { n: "T3 Chat", u: "https://t3.chat", d: "Theo's blazing-fast chat front-end to every major model in one place — switch between Claude, GPT, Gemini and more mid-conversation. Cheap and snappy.", l: "$8/mo", s: "Dev favorite 2026", k: "ai chat multi model t3 claude gpt gemini fast switcher" },
                { n: "LMArena", u: "https://lmarena.ai", d: "Blind side-by-side battles between the top LLMs — vote on which answer is better and see the live leaderboard. The community ranking everyone cites.", l: "Free", s: "Benchmark standard 2026", k: "ai leaderboard arena compare llm benchmark vote ranking free" },
                { n: "Fireworks AI", u: "https://fireworks.ai", d: "Run open-source models (Llama, Qwen, DeepSeek) at production speed with a generous playground. The go-to for fast, cheap open-model inference.", l: "Free credits + pay-go", s: "Builders 2026", k: "ai inference open models fireworks fast api playground llama deepseek" }
            ]
        },

        // ─── 2. AI Answer Engines ────────────────────────────────────────
        {
            id: "wave10-search", name: "🔎 AI Answer Engines — June 2026", icon: "🔎", type: "agents",
            desc: "Search that actually answers — with sources you can check.",
            sites: [
                { n: "Felo", u: "https://felo.ai", d: "A free Perplexity-style answer engine that's strong on multilingual search and auto-builds a mind-map or slide deck from your results. Surprisingly polished.", l: "Free tier + Pro", s: "Perplexity alt 2026", k: "ai search answer engine felo perplexity alternative free sources mindmap" },
                { n: "Scira", u: "https://scira.ai", d: "Open-source AI search with a clean UI, real citations, and tools for weather, maps, and stocks. Self-hostable and genuinely free.", l: "Free / open source", s: "Open-source pick 2026", k: "ai search open source scira citations free self host answer engine" },
                { n: "Globe Explorer", u: "https://explorer.globe.engineer", d: "AI search that returns a structured Wikipedia-style page for any topic instead of a wall of text — branch into sub-topics visually. Great for learning.", l: "Free tier", s: "Researchers 2026", k: "ai search globe explorer wikipedia structured topics learning visual" },
                { n: "Exa", u: "https://exa.ai", d: "A search engine built for AI — meaning-based 'find me things like this' results and a clean API. The retrieval layer behind many AI apps.", l: "Free tier + API", s: "Dev infra 2026", k: "ai search exa neural semantic api retrieval rag developers" },
                { n: "Morphic", u: "https://morphic.sh", d: "An open-source, fully generative answer engine you can self-host — streams answers with sources, images, and follow-ups. Clean and hackable.", l: "Free / open source", s: "Self-hosters 2026", k: "ai search morphic open source self host generative answer engine" }
            ]
        },

        // ─── 3. AI Coding & Agents ───────────────────────────────────────
        {
            id: "wave10-agents", name: "🧑‍💻 AI Coding & Agents — June 2026", icon: "🧑‍💻", type: "agents",
            desc: "More of the coding-agent wave devs are shipping with.",
            sites: [
                { n: "Windsurf", u: "https://windsurf.com", d: "An agentic AI IDE (formerly Codeium) whose 'Cascade' flow keeps full context of your project and edits across files autonomously. A real Cursor rival.", l: "Free tier + Pro", s: "AI IDE pick 2026", k: "ai code editor windsurf codeium cascade agent ide cursor alternative" },
                { n: "marimo", u: "https://marimo.io", d: "A reactive Python notebook that's reproducible, git-friendly, and runs as an app or script — no hidden state. The notebook that fixes Jupyter's worst habits.", l: "Free / open source", s: "Python/data crowd 2026", k: "python notebook marimo reactive jupyter alternative reproducible data" },
                { n: "Val Town", u: "https://val.town", d: "Write, run, and deploy little serverless TypeScript functions from the browser — cron jobs, webhooks, APIs in seconds. A social pastebin that actually runs.", l: "Free tier + Pro", s: "Hacker favorite 2026", k: "serverless typescript val town deploy cron webhook api snippets free" },
                { n: "DeepWiki", u: "https://deepwiki.com", d: "Point it at any GitHub repo and get an instant, AI-generated wiki and architecture diagram you can ask questions about. Onboarding to a codebase in minutes.", l: "Free for public repos", s: "OSS explorers 2026", k: "ai github wiki deepwiki codebase docs diagram understand repo free" },
                { n: "Tabby", u: "https://tabby.tabbyml.com", d: "A self-hosted, open-source AI coding assistant — your own Copilot that runs on your hardware with no code leaving your network. The privacy-first option.", l: "Free / open source", s: "Self-hosters 2026", k: "ai code completion tabby self host open source copilot private local" }
            ]
        },

        // ─── 4. Notes & Knowledge ────────────────────────────────────────
        {
            id: "wave10-pkm", name: "🧠 Notes & Knowledge — June 2026", icon: "🧠", type: "productivity",
            desc: "Fresh PKM apps beyond Notion and Obsidian.",
            sites: [
                { n: "Capacities", u: "https://capacities.io", d: "An object-based note app where everything is a typed card — people, books, ideas — that link together. A more structured take on networked notes.", l: "Free tier + Pro", s: "PKM crowd 2026", k: "notes pkm capacities objects cards networked knowledge structured" },
                { n: "Heptabase", u: "https://heptabase.com", d: "Visual whiteboard notes for deep research — drop cards on an infinite canvas and connect ideas spatially. Loved by students and researchers.", l: "Paid (free trial)", s: "Researchers 2026", k: "notes whiteboard heptabase visual canvas research cards study pkm" },
                { n: "AFFiNE", u: "https://affine.pro", d: "Open-source all-in-one that merges docs, whiteboard, and database in one canvas — a local-first Notion + Miro you fully own. Free and self-hostable.", l: "Free / open source", s: "Open-source pick 2026", k: "notes docs whiteboard affine open source notion miro local first free" },
                { n: "Logseq", u: "https://logseq.com", d: "A privacy-first, outliner-style knowledge base on local markdown files — daily journals, backlinks, and queries. The open Roam alternative.", l: "Free / open source", s: "Outliner crowd 2026", k: "notes outliner logseq local markdown backlinks roam alternative privacy free" },
                { n: "AppFlowy", u: "https://appflowy.io", d: "An open-source Notion alternative built in Rust — docs, kanban, and databases that live on your machine. Fast, private, and free.", l: "Free / open source", s: "Privacy crowd 2026", k: "notes appflowy open source notion alternative rust local database kanban free" }
            ]
        },

        // ─── 5. AI Meetings & Focus ──────────────────────────────────────
        {
            id: "wave10-meetings", name: "🎙️ AI Meetings & Focus — June 2026", icon: "🎙️", type: "productivity",
            desc: "Capture conversations and protect your time.",
            sites: [
                { n: "Fathom", u: "https://fathom.video", d: "An AI notetaker that records, transcribes, and summarizes your calls free — with instant action items synced to your CRM. Genuinely useful free tier.", l: "Free + paid", s: "Sales/ops crowd 2026", k: "ai meeting notes fathom transcribe summary zoom recorder free action items" },
                { n: "Recall", u: "https://recall.ai", d: "Save any video, podcast, or article and get an AI summary that links into your growing knowledge base. A second brain that watches for you.", l: "Free tier + Pro", s: "Knowledge crowd 2026", k: "ai summary recall video podcast article knowledge base second brain bookmark" },
                { n: "Saner.AI", u: "https://saner.ai", d: "An ADHD-friendly AI assistant that turns scattered notes, tasks, and emails into one calm place you can just ask. Built for messy brains.", l: "Free trial + paid", s: "ADHD crowd 2026", k: "ai assistant saner adhd notes tasks email focus productivity calm" },
                { n: "Sunsama", u: "https://sunsama.com", d: "A daily planner that pulls tasks from everywhere and walks you through a calm shutdown and plan ritual. The antidote to a chaotic to-do list.", l: "Paid (free trial)", s: "Intentional planners 2026", k: "daily planner sunsama calendar tasks focus shutdown ritual productivity" },
                { n: "Akiflow", u: "https://akiflow.com", d: "A command-bar task manager that consolidates every tool into one inbox and time-blocks your day onto the calendar. Keyboard-driven and fast.", l: "Paid (free trial)", s: "Power planners 2026", k: "task manager akiflow time blocking calendar command bar inbox productivity" }
            ]
        },

        // ─── 6. Docs & Writing ───────────────────────────────────────────
        {
            id: "wave10-writing", name: "✍️ Docs & Writing — June 2026", icon: "✍️", type: "productivity",
            desc: "Better tools for writing, papers, and slides.",
            sites: [
                { n: "Typst", u: "https://typst.app", d: "A modern LaTeX replacement — write beautiful papers and PDFs with a clean syntax that compiles instantly in the browser. Academic writing without the pain.", l: "Free tier + Pro", s: "Academics 2026", k: "writing typst latex alternative papers pdf typesetting academic free" },
                { n: "Overleaf", u: "https://overleaf.com", d: "The collaborative LaTeX editor that runs in your browser — real-time co-editing, thousands of templates, and journal-ready output. The research standard.", l: "Free tier + paid", s: "Research standard 2026", k: "writing latex overleaf collaborate papers thesis academic template free" },
                { n: "Lex", u: "https://lex.page", d: "A minimalist writing app with an AI editor that gives feedback, breaks writer's block, and never gets in the way. From the Every team.", l: "Free tier + Pro", s: "Writers 2026", k: "writing lex ai editor minimalist feedback document free distraction free" },
                { n: "Marp", u: "https://marp.app", d: "Turn plain Markdown into polished slide decks — version-controllable, themeable, and exportable to PDF or HTML. Slides for people who hate slide tools.", l: "Free / open source", s: "Dev presenters 2026", k: "slides markdown marp presentation deck open source pdf export free" },
                { n: "Slidev", u: "https://sli.dev", d: "Developer-focused presentations in Markdown with live code, animations, and Vue components. The dev-conference slide tool of choice.", l: "Free / open source", s: "Dev presenters 2026", k: "slides slidev markdown developer presentation code vue open source free" }
            ]
        },

        // ─── 7. UI Components & Design ───────────────────────────────────
        {
            id: "wave10-ui", name: "🧩 UI Components & Design — June 2026", icon: "🧩", type: "design",
            desc: "Copy-paste component libraries devs are leaning on.",
            sites: [
                { n: "shadcn/ui", u: "https://ui.shadcn.com", d: "Not a dependency — beautifully designed components you copy into your project and own. The pattern that took over React UI in 2026.", l: "Free / open source", s: "React standard 2026", k: "ui components shadcn react tailwind radix copy paste design free open source" },
                { n: "Magic UI", u: "https://magicui.design", d: "150+ animated React + Tailwind components — shimmer buttons, marquees, particle effects — that drop straight into shadcn projects. Landing-page candy.", l: "Free / open source", s: "Frontend devs 2026", k: "ui components magic ui animated react tailwind framer motion landing free" },
                { n: "Aceternity UI", u: "https://ui.aceternity.com", d: "Jaw-dropping animated sections and effects you copy in — the source of half the slick hero sections you've seen this year. Free and gorgeous.", l: "Free + Pro", s: "Designer-devs 2026", k: "ui components aceternity animated react tailwind framer motion hero effects" },
                { n: "React Bits", u: "https://reactbits.dev", d: "A big open-source collection of animated, interactive React components and text effects — backgrounds, buttons, scroll animations. Endless inspiration.", l: "Free / open source", s: "Frontend devs 2026", k: "ui components react bits animated text effects backgrounds open source free" },
                { n: "tweakcn", u: "https://tweakcn.com", d: "A visual theme editor for shadcn/ui — tweak colors, radius, and fonts live, then export the CSS variables. Stop hand-editing theme tokens.", l: "Free", s: "shadcn users 2026", k: "ui theme editor tweakcn shadcn tailwind colors css variables visual free" }
            ]
        },

        // ─── 8. Developer Utilities ──────────────────────────────────────
        {
            id: "wave10-devtools", name: "🛠️ Developer Utilities — June 2026", icon: "🛠️", type: "developer",
            desc: "Tiny no-login tools that save you a dozen Google searches.",
            sites: [
                { n: "IT Tools", u: "https://it-tools.tech", d: "One open-source page with 100+ dev utilities — token generators, encoders, converters, formatters, crontab parsers. Bookmark it and never search again.", l: "Free / open source", s: "Dev staple 2026", k: "developer tools it-tools converters encoders formatters utilities free open source" },
                { n: "crontab.guru", u: "https://crontab.guru", d: "The cron schedule expression editor that translates '*/5 * * * *' into plain English instantly. The one bookmark every backend dev keeps.", l: "Free", s: "Backend staple 2026", k: "cron crontab guru schedule expression editor developer free parse" },
                { n: "Omatsuri", u: "https://omatsuri.app", d: "A PWA bundle of 12 polished browser tools — gradient generator, SVG cropper, image-to-base64, page break testing, and more. Clean and offline-capable.", l: "Free / open source", s: "Frontend devs 2026", k: "developer tools omatsuri gradient svg base64 utilities pwa free open source" },
                { n: "smalldev.tools", u: "https://smalldev.tools", d: "A fast set of everyday dev tools — formatters, escapers, lorem ipsum, fake data, hash generators — with a slick dark UI and no clutter.", l: "Free", s: "Web devs 2026", k: "developer tools smalldev formatters escape hash fake data lorem ipsum free" },
                { n: "cheat.sh", u: "https://cheat.sh", d: "The only cheatsheet you need — 'curl cheat.sh/tar' returns the commands you actually want, right in your terminal. Community-curated and lightning fast.", l: "Free / open source", s: "Terminal lovers 2026", k: "cheatsheet cheat.sh terminal commands reference curl developer free open source" }
            ]
        },

        // ─── 9. Free Backend & Infra ─────────────────────────────────────
        {
            id: "wave10-infra", name: "☁️ Free Backend & Infra — June 2026", icon: "☁️", type: "developer",
            desc: "Generous free tiers to ship a real app for $0.",
            sites: [
                { n: "Neon", u: "https://neon.tech", d: "Serverless Postgres that branches like git and scales to zero — spin up a database in seconds with a real free tier. The modern Postgres host.", l: "Free tier + pay-go", s: "Builders 2026", k: "database postgres neon serverless branching free tier backend infra" },
                { n: "Turso", u: "https://turso.tech", d: "SQLite at the edge — a database per user, replicated close to your users, with a huge free tier. Great for fast, distributed apps.", l: "Free tier + paid", s: "Edge devs 2026", k: "database sqlite turso edge libsql distributed free tier backend" },
                { n: "Xata", u: "https://xata.io", d: "A serverless Postgres platform with built-in full-text search, file storage, and a friendly UI — backend-as-a-service without the lock-in. Free to start.", l: "Free tier + paid", s: "Indie builders 2026", k: "database postgres xata serverless search files backend baas free tier" },
                { n: "Render", u: "https://render.com", d: "Deploy web apps, APIs, cron jobs, and databases from a git push with zero DevOps — the friendliest Heroku successor. Free static sites and services.", l: "Free tier + paid", s: "Indie hosting 2026", k: "hosting deploy render heroku alternative web apps cron database free tier paas" },
                { n: "Dub", u: "https://dub.co", d: "An open-source link shortener and analytics platform — branded short links, QR codes, and click stats with a real free plan. The modern Bitly.", l: "Free tier + paid", s: "Marketers/devs 2026", k: "link shortener dub open source analytics qr bitly alternative free branded" }
            ]
        },

        // ─── 10. Free Design Assets ──────────────────────────────────────
        {
            id: "wave10-assets", name: "🎨 Free Design Assets — June 2026", icon: "🎨", type: "design",
            desc: "Icons, fonts, colors, and backgrounds — free for any project.",
            sites: [
                { n: "Lucide", u: "https://lucide.dev", d: "1500+ clean, consistent open-source icons with packages for React, Vue, Svelte and more. The community fork that became the default icon set.", l: "Free / open source", s: "Dev standard 2026", k: "icons lucide open source svg react vue feather fork design free" },
                { n: "Fontshare", u: "https://fontshare.com", d: "A growing library of genuinely good fonts that are 100% free for commercial use — from the Indian Type Foundry. Quality you'd expect to pay for.", l: "Free (commercial OK)", s: "Designers 2026", k: "fonts fontshare free commercial typeface typography design itf" },
                { n: "Realtime Colors", u: "https://realtimecolors.com", d: "Preview a full color palette and font pairing on a real website mockup in real time, then export the variables. See your theme before you build it.", l: "Free", s: "Designer staple 2026", k: "color palette realtime colors theme preview font pairing export design free" },
                { n: "Pattern Monster", u: "https://pattern.monster", d: "A huge collection of customizable, repeatable SVG patterns — tweak colors, scale, and stroke, then copy the SVG or CSS. Free seamless backgrounds.", l: "Free", s: "Web designers 2026", k: "svg patterns pattern monster background seamless css generator design free" },
                { n: "Get Waves", u: "https://getwaves.io", d: "Generate smooth SVG wave dividers for your page sections in a click — adjust the curve and export. The classic free wave-shape maker.", l: "Free", s: "Web designers 2026", k: "svg waves getwaves divider generator section background design free" }
            ]
        }
    ];

    // Append to DATA array (same pattern as data-extra-2..9)
    if (typeof DATA !== 'undefined') {
        EXTRA10.forEach(function (cat) { DATA.push(cat); });
    }

    // ─── FRESH PICKS — prepend Wave 10 onto whatever earlier waves set ───
    const WAVE10_FRESH = [
        { u: "https://windsurf.com",      n: "Windsurf",        cat: "AI IDE" },
        { u: "https://chat.qwen.ai",      n: "Qwen Chat",       cat: "AI Chat" },
        { u: "https://t3.chat",           n: "T3 Chat",         cat: "AI Chat" },
        { u: "https://felo.ai",           n: "Felo",            cat: "AI Search" },
        { u: "https://ui.shadcn.com",     n: "shadcn/ui",       cat: "UI Kit" },
        { u: "https://neon.tech",         n: "Neon",            cat: "Database" },
        { u: "https://it-tools.tech",     n: "IT Tools",        cat: "Dev Tools" },
        { u: "https://capacities.io",     n: "Capacities",      cat: "Notes" },
        { u: "https://fathom.video",      n: "Fathom",          cat: "AI Notes" },
        { u: "https://lucide.dev",        n: "Lucide",          cat: "Icons" }
    ];
    window.FRESH_PICKS = WAVE10_FRESH.concat(window.FRESH_PICKS || []);
})();
