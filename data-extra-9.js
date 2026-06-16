// data-extra-9.js — Wave 9: June 2026 Fresh Picks
// 50 new websites curated June 15, 2026 — coding, AI, productivity, design,
// developer tools, learning, privacy, free utilities, money, and life.
// Schema matches data-extra-8.js: append categories to DATA, merge FRESH_PICKS.
(function () {
    const EXTRA9 = [
        // ─── 1. AI Coding & Agents ───────────────────────────────────────
        {
            id: "wave9-coding", name: "💻 AI Coding & Agents — June 2026", icon: "💻", type: "agents",
            desc: "The tools developers are actually shipping with in mid-2026.",
            sites: [
                { n: "Claude Code", u: "https://claude.com/claude-code", d: "Anthropic's agentic CLI that lives in your terminal — reads your whole repo, edits files, runs tests, and opens PRs. The power-user coding agent of 2026.", l: "Usage-based via Claude", s: "Dev community 2026", k: "ai coding agent terminal cli anthropic claude code repo" },
                { n: "Cursor", u: "https://cursor.com", d: "The AI-first code editor. A VS Code fork with tab-completion that predicts your next edit and a chat that edits across files. The default for AI-assisted coding.", l: "Free tier + Pro $20/mo", s: "Most-used AI editor 2026", k: "ai code editor cursor vscode autocomplete copilot alternative" },
                { n: "Zed", u: "https://zed.dev", d: "Blazing-fast collaborative editor written in Rust, with AI built in. Multiplayer coding, sub-millisecond keystrokes, and now an agent panel. The performance pick.", l: "Free / open source", s: "Performance crowd 2026", k: "code editor rust fast collaborative zed ai" },
                { n: "Aider", u: "https://aider.chat", d: "AI pair programming in your terminal that commits as it goes. Works with any model, maps your git repo, and writes clean commit messages. CLI-lover favorite.", l: "Free + your API key", s: "Terminal devs 2026", k: "ai pair programming terminal git aider commits cli" },
                { n: "v0", u: "https://v0.app", d: "Vercel's generative UI tool — describe a component or page, get production React + Tailwind + shadcn you can paste in. Fastest UI-to-code in 2026.", l: "Free tier + Premium", s: "Frontend devs 2026", k: "ai ui generator react tailwind shadcn vercel v0 frontend" }
            ]
        },

        // ─── 2. AI Video & Image ─────────────────────────────────────────
        {
            id: "wave9-visual", name: "🎨 AI Video & Image — June 2026", icon: "🎨", type: "visual",
            desc: "Frontier generative media tools as of mid-2026.",
            sites: [
                { n: "Krea", u: "https://krea.ai", d: "Real-time AI canvas — draw a rough shape and watch a photoreal image render live as you move. Combines image, video, and upscaling in one slick studio.", l: "Free tier + Pro", s: "Designer favorite 2026", k: "ai image realtime canvas krea generator upscale video" },
                { n: "Runway", u: "https://runwayml.com", d: "Pro-grade AI video studio. Gen-4 does motion brush, camera control, and lip-sync. The tool indie filmmakers and ad agencies actually pay for.", l: "Free trial + paid plans", s: "Filmmaker standard 2026", k: "ai video runway gen-4 motion film editing generator" },
                { n: "Kling", u: "https://klingai.com", d: "Kuaishou's video model with some of the best physics and motion realism available. Long clips, start/end-frame control, free credits daily.", l: "Free daily credits", s: "Viral 2026", k: "ai video kling chinese physics motion generator free" },
                { n: "Recraft", u: "https://www.recraft.ai", d: "AI image generator built for brand work — consistent style sets, vector output, mockups, and infinite canvas. The designer's production tool.", l: "Free tier + Pro", s: "Brand designers 2026", k: "ai image vector brand recraft logo design consistent style" },
                { n: "Topaz Labs", u: "https://www.topazlabs.com", d: "The gold standard for AI upscaling and video enhancement. Sharpen, denoise, deblur, and 4x photos or restore old footage. Used by pros everywhere.", l: "Paid (free trial)", s: "Photo/video pros 2026", k: "ai upscale enhance denoise topaz photo video restore" }
            ]
        },

        // ─── 3. Productivity & Notes ─────────────────────────────────────
        {
            id: "wave9-productivity", name: "📓 Productivity & Notes — June 2026", icon: "📓", type: "productivity",
            desc: "Get organized and think clearer.",
            sites: [
                { n: "Notion", u: "https://notion.so", d: "All-in-one workspace: docs, wikis, databases, and projects with AI baked in. The flexible home base for personal and team knowledge.", l: "Free for personal", s: "Everyone 2026", k: "notes docs wiki database workspace notion productivity ai" },
                { n: "Obsidian", u: "https://obsidian.md", d: "Local-first markdown notes you fully own. Link your thoughts into a knowledge graph, extend it with 2000+ plugins. The PKM power tool.", l: "Free for personal", s: "PKM crowd 2026", k: "notes markdown local obsidian knowledge graph plugins private" },
                { n: "Todoist", u: "https://todoist.com", d: "The clean, fast task manager that just works. Natural-language input ('every Mon 9am'), projects, and cross-device sync. A reliable classic.", l: "Free tier + Pro", s: "Task-app staple 2026", k: "todo tasks productivity todoist gtd reminders projects" },
                { n: "Reclaim", u: "https://reclaim.ai", d: "AI calendar that auto-schedules your tasks, habits, and focus time around meetings — and defends it. Stop tetris-ing your own week.", l: "Free tier + paid", s: "Busy pros 2026", k: "ai calendar scheduling focus time reclaim productivity habits" },
                { n: "Raycast", u: "https://raycast.com", d: "A launcher that replaces Spotlight and half your apps — clipboard history, snippets, window management, AI, and an extension store. Mac power-user essential.", l: "Free + Pro", s: "Mac power users 2026", k: "launcher productivity mac raycast spotlight clipboard ai extensions" }
            ]
        },

        // ─── 4. Design & Creative ────────────────────────────────────────
        {
            id: "wave9-design", name: "🖌️ Design & Creative — June 2026", icon: "🖌️", type: "design",
            desc: "Make things look great, no design degree required.",
            sites: [
                { n: "Figma", u: "https://figma.com", d: "The industry-standard collaborative design tool. UI design, prototyping, whiteboarding (FigJam), and now Figma Make for AI-to-design. Free for individuals.", l: "Free starter plan", s: "Design standard 2026", k: "design ui prototype figma collaborate whiteboard free" },
                { n: "Canva", u: "https://canva.com", d: "Drag-and-drop design for everyone — social posts, presentations, videos, print. Huge template library plus Magic Studio AI tools. The non-designer's superpower.", l: "Free tier + Pro", s: "Everyone 2026", k: "design templates canva social presentation poster free ai" },
                { n: "Coolors", u: "https://coolors.co", d: "Generate beautiful color palettes in seconds — hit spacebar to shuffle, lock the ones you love, export anywhere. The fastest palette tool online.", l: "Free", s: "Designer staple 2026", k: "color palette generator coolors design hex scheme free" },
                { n: "Photopea", u: "https://photopea.com", d: "A full Photoshop clone that runs free in your browser — opens PSD, XCF, Sketch files. No install, no account. The best free image editor on the web.", l: "Free (ad-supported)", s: "Free Photoshop 2026", k: "photo editor photopea photoshop free browser psd image" },
                { n: "Unsplash", u: "https://unsplash.com", d: "Gorgeous, genuinely free high-res photos for any project, no attribution required. The go-to source for hero images and backgrounds.", l: "Free", s: "Free stock standard 2026", k: "free photos stock images unsplash high res hero background" }
            ]
        },

        // ─── 5. Developer Tools ──────────────────────────────────────────
        {
            id: "wave9-devtools", name: "🛠️ Developer Tools — June 2026", icon: "🛠️", type: "developer",
            desc: "Free utilities every developer should bookmark.",
            sites: [
                { n: "DevDocs", u: "https://devdocs.io", d: "Every programming language and framework's docs in one fast, searchable, offline-capable app. Tab between Python, React, MDN, and 100+ more instantly.", l: "Free / open source", s: "Dev staple 2026", k: "documentation devdocs api reference offline search developer" },
                { n: "RegExr", u: "https://regexr.com", d: "Learn, build, and test regular expressions with live highlighting and a cheat-sheet sidebar. Finally understand that regex you copied off Stack Overflow.", l: "Free", s: "Dev favorite 2026", k: "regex tester regexr pattern match learn developer tool" },
                { n: "JSON Crack", u: "https://jsoncrack.com", d: "Paste JSON, YAML, or CSV and instantly see it as an interactive node graph. Makes huge nested API responses actually readable.", l: "Free + premium", s: "Dev 2026", k: "json visualizer graph jsoncrack yaml csv api developer" },
                { n: "Excalidraw", u: "https://excalidraw.com", d: "Hand-drawn-style whiteboard for diagrams, architecture sketches, and flowcharts. No login, exports to PNG/SVG, has a library of shapes. Engineers love it.", l: "Free / open source", s: "Engineer favorite 2026", k: "diagram whiteboard excalidraw sketch architecture flowchart free" },
                { n: "ray.so", u: "https://ray.so", d: "Turn a code snippet into a beautiful image for tweets, slides, and docs. Pick a theme, set padding, export. The cleanest code-screenshot tool.", l: "Free", s: "Dev sharing 2026", k: "code screenshot image rayso snippet share carbon developer" }
            ]
        },

        // ─── 6. Learning & Knowledge ─────────────────────────────────────
        {
            id: "wave9-learning", name: "📚 Learning & Knowledge — June 2026", icon: "📚", type: "learning",
            desc: "Level up your skills for free.",
            sites: [
                { n: "freeCodeCamp", u: "https://freecodecamp.org", d: "Thousands of hours of free coding curriculum with hands-on projects and real certifications. From HTML to machine learning. Nonprofit, no paywall.", l: "Free", s: "Learn-to-code standard 2026", k: "learn coding free freecodecamp programming certification web dev" },
                { n: "Khan Academy", u: "https://khanacademy.org", d: "Free world-class lessons in math, science, economics, and more — now with the Khanmigo AI tutor. The gold standard for self-paced learning.", l: "Free", s: "Education staple 2026", k: "learn math science free khan academy tutor ai education" },
                { n: "Brilliant", u: "https://brilliant.org", d: "Learn math, science, and CS by solving interactive puzzles instead of watching lectures. Builds real intuition in 15 minutes a day.", l: "Free trial + subscription", s: "STEM learners 2026", k: "learn math science interactive brilliant puzzles cs stem" },
                { n: "Anki", u: "https://apps.ankiweb.net", d: "The legendary spaced-repetition flashcard app. Remember anything long-term — languages, med school, exams. Powerful, free, and a bit nerdy.", l: "Free (paid iOS app)", s: "Students & med 2026", k: "flashcards spaced repetition anki memory study learn language" },
                { n: "Wikipedia", u: "https://wikipedia.org", d: "Humanity's free encyclopedia. Still one of the most valuable sites on the internet — and a great rabbit hole. Donate if it's useful to you.", l: "Free", s: "Forever 2026", k: "encyclopedia knowledge wikipedia free reference learn research" }
            ]
        },

        // ─── 7. Privacy & Security ───────────────────────────────────────
        {
            id: "wave9-privacy", name: "🔒 Privacy & Security — June 2026", icon: "🔒", type: "security",
            desc: "Protect your accounts, data, and identity.",
            sites: [
                { n: "Bitwarden", u: "https://bitwarden.com", d: "Open-source password manager with a genuinely generous free tier — unlimited passwords across all devices. The trusted, auditable choice.", l: "Free (unlimited)", s: "Security pick 2026", k: "password manager bitwarden free open source vault security 2fa" },
                { n: "Proton", u: "https://proton.me", d: "Encrypted email, VPN, cloud, calendar, and password manager from Switzerland. Privacy-first, with a free tier. The Google alternative for the security-minded.", l: "Free tier + paid", s: "Privacy crowd 2026", k: "encrypted email vpn proton privacy secure google alternative" },
                { n: "Have I Been Pwned", u: "https://haveibeenpwned.com", d: "Type your email to see every data breach it's been caught in. Free, run by a respected researcher. Check it, then change those passwords.", l: "Free", s: "Security staple 2026", k: "data breach check email password pwned leak security free" },
                { n: "uBlock Origin", u: "https://ublockorigin.com", d: "The most efficient, open-source content blocker — kills ads, trackers, and malware domains with almost no performance hit. A must-install browser extension.", l: "Free / open source", s: "Privacy essential 2026", k: "ad blocker ublock origin tracker privacy extension browser free" },
                { n: "Mullvad VPN", u: "https://mullvad.net", d: "A no-nonsense VPN that takes anonymity seriously — flat €5/mo, no email needed, no logs, accepts cash. The privacy purist's choice.", l: "€5/month flat", s: "Privacy purists 2026", k: "vpn mullvad privacy anonymous no logs secure" }
            ]
        },

        // ─── 8. Free Utilities ───────────────────────────────────────────
        {
            id: "wave9-utilities", name: "⚡ Free Utilities — June 2026", icon: "⚡", type: "utility",
            desc: "Little tools that solve annoying problems instantly.",
            sites: [
                { n: "TinyWow", u: "https://tinywow.com", d: "Hundreds of free file tools in one place — PDF edit/merge/convert, image resize, video trim, and AI writers. No login, no watermark. Wildly handy.", l: "Free", s: "Utility favorite 2026", k: "free tools pdf convert image video tinywow file utility" },
                { n: "Squoosh", u: "https://squoosh.app", d: "Google's image compressor — shrink any photo with a live before/after slider and total control over quality. Runs entirely in your browser.", l: "Free / open source", s: "Web devs 2026", k: "image compress optimize squoosh google webp resize free" },
                { n: "12ft", u: "https://12ft.io", d: "Paste a paywalled article URL and read it cleanly. Strips overlays and soft paywalls. (Support journalism you value — but great for the occasional hard wall.)", l: "Free", s: "Reader trick 2026", k: "paywall bypass read article 12ft clean reader free" },
                { n: "Remove.bg", u: "https://remove.bg", d: "Erase any image background in five seconds, automatically. Perfect for product photos, profile pics, and memes. The original one-click cutout tool.", l: "Free (low-res) + paid", s: "Everyone 2026", k: "remove background image cutout transparent removebg free photo" },
                { n: "Wormhole", u: "https://wormhole.app", d: "Send files up to 10 GB with end-to-end encryption and a link that auto-expires. No account, no size-shaming. The clean WeTransfer alternative.", l: "Free", s: "File-share pick 2026", k: "file transfer send large wormhole encrypted wetransfer free" }
            ]
        },

        // ─── 9. Money & Finance ──────────────────────────────────────────
        {
            id: "wave9-money", name: "💰 Money & Finance — June 2026", icon: "💰", type: "finance",
            desc: "Tools to budget, save, and understand your money.",
            sites: [
                { n: "Wise", u: "https://wise.com", d: "Send money abroad at the real exchange rate with tiny, transparent fees. A multi-currency account and card that beat the banks. Borderless by design.", l: "Free account, low fees", s: "Expat & freelancer 2026", k: "money transfer currency wise international fees card bank" },
                { n: "NerdWallet", u: "https://nerdwallet.com", d: "Straight-talking comparisons and calculators for credit cards, loans, mortgages, and savings. Figure out the actually-best financial product for you, free.", l: "Free", s: "Personal finance 2026", k: "finance compare credit card loan calculator nerdwallet money free" },
                { n: "Undebt.it", u: "https://undebt.it", d: "A free debt-payoff planner that builds snowball or avalanche schedules, tracks every account, and shows your real payoff date. Quietly excellent for getting out of debt.", l: "Free + cheap pro", s: "Debt-payoff crowd 2026", k: "debt payoff snowball avalanche planner undebt budget money free" },
                { n: "You Need A Budget", u: "https://ynab.com", d: "The budgeting method (and app) that changes how you think about money — give every dollar a job. Steep at first, life-changing for many. Free for students.", l: "Paid (34-day trial)", s: "Budgeting cult 2026", k: "budget ynab money zero based envelope finance planning" },
                { n: "AnnualCreditReport", u: "https://annualcreditreport.com", d: "The only federally authorized site for your free credit reports from all three bureaus. Now available weekly. Check it for errors and fraud — free, always.", l: "Free (official)", s: "Credit essential 2026", k: "credit report free official annual equifax experian transunion" }
            ]
        },

        // ─── 10. Health & Life ───────────────────────────────────────────
        {
            id: "wave9-life", name: "🌿 Health & Life — June 2026", icon: "🌿", type: "life",
            desc: "Tools for a calmer, healthier day-to-day.",
            sites: [
                { n: "Insight Timer", u: "https://insighttimer.com", d: "The largest free library of guided meditations, sleep stories, and calming music — over 200,000 tracks. No paywall on the core experience.", l: "Free + optional Plus", s: "Meditation pick 2026", k: "meditation sleep mindfulness insight timer calm free relax" },
                { n: "Open Food Facts", u: "https://world.openfoodfacts.org", d: "A free, open database of food products — scan a barcode to see ingredients, additives, and Nutri-Score. The transparent, community-run alternative to closed apps.", l: "Free / open data", s: "Health-conscious 2026", k: "food nutrition barcode ingredients open food facts health free" },
                { n: "Couch to 5K (NHS)", u: "https://www.nhs.uk/live-well/exercise/running-and-aerobic-exercises/get-running-with-couch-to-5k/", d: "The famous free running plan that takes total beginners to a 5K in nine weeks. Backed by the NHS, no app purchase needed. A gentle on-ramp to fitness.", l: "Free", s: "Beginner runners 2026", k: "running fitness couch to 5k beginner exercise nhs free health" },
                { n: "MyFitnessPal", u: "https://myfitnesspal.com", d: "The biggest food and exercise tracker, with a massive barcode database. Log meals, track calories and macros, see trends. The default calorie counter.", l: "Free tier + premium", s: "Fitness staple 2026", k: "calorie tracker food log macros myfitnesspal diet fitness health" },
                { n: "988 Lifeline", u: "https://988lifeline.org", d: "Free, confidential 24/7 support in the US for anyone in emotional distress or crisis — call or text 988, or chat online. Real humans, any time. Worth a bookmark.", l: "Free / 24-7", s: "Always 2026", k: "mental health crisis support 988 lifeline help free confidential" }
            ]
        }
    ];

    // Append to DATA array (same pattern as data-extra-2..8)
    if (typeof DATA !== 'undefined') {
        EXTRA9.forEach(function (cat) { DATA.push(cat); });
    }

    // ─── FRESH PICKS — prepend Wave 9 onto whatever earlier waves set ───
    // Don't clobber data-extra-8's list; merge so both show in "Fresh This Week".
    const WAVE9_FRESH = [
        { u: "https://claude.com/claude-code", n: "Claude Code", cat: "AI Coding" },
        { u: "https://cursor.com",             n: "Cursor",      cat: "AI Editor" },
        { u: "https://v0.app",                 n: "v0",          cat: "AI UI" },
        { u: "https://krea.ai",                n: "Krea",        cat: "AI Image" },
        { u: "https://klingai.com",            n: "Kling",       cat: "AI Video" },
        { u: "https://reclaim.ai",             n: "Reclaim",     cat: "Calendar" },
        { u: "https://jsoncrack.com",          n: "JSON Crack",  cat: "Dev Tool" },
        { u: "https://recraft.ai",             n: "Recraft",     cat: "AI Design" }
    ];
    window.FRESH_PICKS = WAVE9_FRESH.concat(window.FRESH_PICKS || []);
})();
