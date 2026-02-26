// data-extra-4.js — Wave 4: Niche Power Tools, Dev Resources, Career, Finance, Design
// Deep research: Product Hunt, Hacker News, GitHub Trending, X viral threads Feb 2026
(function () {
    const EXTRA4 = [
        {
            id: "dev-resources", name: "🛠️ Developer Resources", icon: "🛠️", type: "free",
            desc: "Reference docs, learning platforms, API tools, and dev utilities every programmer needs.",
            sites: [
                { n: "DevDocs", u: "https://devdocs.io", d: "Unified documentation browser for 100+ frameworks and languages. Offline support, fast search.", l: "None", s: "GitHub 35k+ stars" },
                { n: "Roadmap.sh", u: "https://roadmap.sh", d: "Community-built career roadmaps for devs. Frontend, backend, DevOps, AI, and more.", l: "None", s: "GitHub 300k+ stars" },
                { n: "CodePen", u: "https://codepen.io", d: "Browser-based frontend playground. Build, test, and share HTML/CSS/JS snippets live.", l: "Free tier available", s: "Frontend dev community" },
                { n: "StackBlitz", u: "https://stackblitz.com", d: "Full VS Code IDE in your browser. Run Node, React, Next.js projects instantly — no setup.", l: "Free tier available", s: "Developer community" },
                { n: "Hoppscotch", u: "https://hoppscotch.io", d: "Open-source Postman alternative. Test REST, GraphQL, WebSocket APIs in browser.", l: "Free open-source", s: "GitHub 65k+ stars" },
                { n: "QuickRef", u: "https://quickref.me", d: "Quick reference cheat sheets for 100+ tools — Git, Vim, Regex, Docker, bash, CSS.", l: "None", s: "GitHub trending" },
                { n: "ExplainShell", u: "https://explainshell.com", d: "Paste any shell command and get an explanation of every flag and argument.", l: "None", s: "Hacker News" },
                { n: "Regex101", u: "https://regex101.com", d: "Build and debug regular expressions with real-time match highlighting and explanation.", l: "None", s: "Developer standard" },
                { n: "Transform.tools", u: "https://transform.tools", d: "Convert between JSON, YAML, TS types, GraphQL, and 20+ data formats instantly.", l: "None", s: "GitHub trending" },
                { n: "TLDraw", u: "https://www.tldraw.com", d: "Infinite collaborative whiteboard for sketching architecture diagrams and wireframes.", l: "Free tier available", s: "GitHub 35k+ stars" },
                { n: "JSON Crack", u: "https://jsoncrack.com", d: "Visualize any JSON as an interactive node graph. Explore complex nested data visually.", l: "Free tier", s: "GitHub 30k+ stars viral" },
                { n: "Warp Terminal", u: "https://www.warp.dev", d: "AI-native terminal for Mac. Autocomplete commands, explain errors, share sessions.", l: "Free for individuals", s: "Viral dev X community" },
                { n: "Bun.sh", u: "https://bun.sh", d: "Drop-in Node.js replacement. 4x faster installs, built-in bundler, TypeScript by default.", l: "Free open-source", s: "GitHub 75k+ stars" },
                { n: "Fly.io", u: "https://fly.io", d: "Deploy apps globally near your users. Free tier includes 3 shared VMs + 3GB storage.", l: "Free tier generous", s: "Developer community" },
                { n: "Railway", u: "https://railway.app", d: "Deploy any app with git push. Databases, cron jobs, private networking. $5 free credit.", l: "Free $5/month credit", s: "Developer community" }
            ]
        },
        {
            id: "finance-investing", name: "💰 Finance & Investing", icon: "💰", type: "free",
            desc: "Free tools for investing, budgeting, compound interest calculators, and financial education.",
            sites: [
                { n: "Portfolio Visualizer", u: "https://www.portfoliovisualizer.com", d: "Backtest any investment portfolio. See historical returns, drawdowns, risk metrics.", l: "Free tier available", s: "Investing community" },
                { n: "Finviz", u: "https://finviz.com", d: "Stock screener and market heat maps. Visual overview of any stock or entire market.", l: "Free basic; Elite for real-time", s: "Stock trading community" },
                { n: "TradingView (Free)", u: "https://www.tradingview.com", d: "World-class charting for stocks, forex, crypto. Free tier very powerful with community scripts.", l: "Free tier excellent", s: "Trading community" },
                { n: "Investopedia", u: "https://www.investopedia.com", d: "Financial education dictionary. Learn any investing concept with clear, expert explanations.", l: "None", s: "Finance education" },
                { n: "Macrotrends", u: "https://www.macrotrends.net", d: "60 years of financial data on any stock — revenue, margins, debt, cash flow charts.", l: "None", s: "Fundamental investing" },
                { n: "Simply Wall St", u: "https://simplywall.st", d: "Visual snowflake analysis for stocks. At-a-glance valuation, dividends, growth health.", l: "Free: 5 stocks", s: "Retail investing community" },
                { n: "Compound Interest Calc", u: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator", d: "SEC's official compound interest calculator. See exactly how your money grows over time.", l: "None", s: "Personal finance" },
                { n: "YNAB (Trial)", u: "https://www.ynab.com", d: "Zero-based budgeting app. Give every dollar a job. Average user saves $600 in first 2 months.", l: "Free 34-day trial", s: "Personal finance community" },
                { n: "Copilot Money", u: "https://copilot.money", d: "Beautiful iOS/Mac budgeting app. Auto-categorizes spending, tracks net worth and goals.", l: "Free trial", s: "Personal finance community" },
                { n: "Monarch Money", u: "https://www.monarchmoney.com", d: "Mint replacement. Tracks all accounts, budgets, investments in one clean dashboard.", l: "Free trial; $14.99/mo", s: "Mint migration community" },
                { n: "Stock Analysis", u: "https://stockanalysis.com", d: "Free stock and ETF data. Financials, earnings, dividends, analyst ratings. No account needed.", l: "None", s: "Investing community" },
                { n: "Openinsider", u: "https://openinsider.com", d: "Track SEC insider trading filings in real time. See what company executives are buying.", l: "None", s: "Value investing" },
                { n: "Gurufocus", u: "https://www.gurufocus.com", d: "Warren Buffett and top guru stock portfolio tracker. Value investing metrics and DCF models.", l: "Free with limits", s: "Value investing community" },
                { n: "WealthTrack", u: "https://wealthtrack.com", d: "Free investment interviews with top fund managers and financial experts. PBS quality show.", l: "None", s: "Investor education" },
                { n: "r/personalfinance Wiki", u: "https://www.reddit.com/r/personalfinance/wiki/index", d: "The best free personal finance guide on the internet. Step-by-step money advice for any situation.", l: "None", s: "Reddit community" }
            ]
        },
        {
            id: "design-ui-tools", name: "🎨 Design & UI Tools", icon: "🎨", type: "free",
            desc: "Free UI kits, icon packs, color tools, font finders, and mockup generators for designers.",
            sites: [
                { n: "Figma (Free)", u: "https://www.figma.com", d: "Industry-standard UI design tool. 3 projects free, unlimited for students. Replaced Sketch.", l: "Free: 3 projects", s: "Design industry standard" },
                { n: "Penpot", u: "https://penpot.app", d: "Open-source Figma alternative. Self-host or use free cloud. SVG-native design and prototyping.", l: "Free forever", s: "GitHub 35k+ stars" },
                { n: "Paletton", u: "https://paletton.com", d: "Interactive color wheel for building perfect color palettes. Preview in real UI contexts.", l: "None", s: "Design community" },
                { n: "Coolors", u: "https://coolors.co", d: "Generate perfect color palettes by pressing spacebar. Export CSS, adjust contrast, find complementary.", l: "Free tier good", s: "Designer community standard" },
                { n: "Color Hunt", u: "https://colorhunt.co", d: "Curated color palettes voted by designers. Browse by tag, new, popular, trending.", l: "None", s: "Design community" },
                { n: "Heroicons", u: "https://heroicons.com", d: "Beautiful free SVG icons by Tailwind CSS team. Copy SVG or JSX code instantly.", l: "MIT License", s: "Frontend dev community" },
                { n: "Phosphor Icons", u: "https://phosphoricons.com", d: "Flexible icon family — 9250+ icons in 6 weights. Multiple frameworks supported.", l: "MIT License", s: "Design community" },
                { n: "Tabler Icons", u: "https://tabler.io/icons", d: "5500+ free MIT SVG icons. Consistent stroke style, search by keyword, multiple formats.", l: "MIT License", s: "Developer community" },
                { n: "CSS Gradient", u: "https://cssgradient.io", d: "Visual CSS gradient builder. Create and export perfect linear, radial, and conic gradients.", l: "None", s: "Frontend dev community" },
                { n: "Neumorphism.io", u: "https://neumorphism.io", d: "Generate soft UI / neumorphism CSS box-shadow code visually. Copy and paste.", l: "None", s: "UI design community" },
                { n: "Glassmorphism CSS", u: "https://glassmorphism.com", d: "Visual glassmorphism background blur CSS generator. Adjust blur, opacity, border instantly.", l: "None", s: "UI design community" },
                { n: "Haikei", u: "https://haikei.app", d: "Generate unique SVG blobs, waves, gradients for UI backgrounds. Export in seconds.", l: "Free web app", s: "Design community" },
                { n: "Screens.guru", u: "https://screens.guru", d: "Take beautiful screenshots of any website in dark/light mode at any device size.", l: "None", s: "Designer community" },
                { n: "Shots.so", u: "https://shots.so", d: "Create stunning device mockups for your app screenshots. Export as PNG or JPG.", l: "Free tier available", s: "App developer community" },
                { n: "Google Fonts", u: "https://fonts.google.com", d: "1500+ free, open-source web fonts. Filter by category, language, weight. Use via CDN.", l: "None", s: "Web design standard" }
            ]
        },
        {
            id: "ai-writing-tools", name: "✍️ AI Writing & Content", icon: "✍️", type: "free",
            desc: "AI writing assistants, grammar checkers, content generators, and copywriting tools.",
            sites: [
                { n: "Grammarly", u: "https://www.grammarly.com", d: "World's leading writing assistant. Grammar, spelling, tone, and clarity suggestions everywhere.", l: "Free tier; Premium for advanced", s: "Writing standard" },
                { n: "Hemingway App", u: "https://hemingwayapp.com", d: "Makes your writing bold and clear. Highlights complex sentences, passive voice, and adverbs.", l: "Free web; $19.99 desktop", s: "Writer community" },
                { n: "QuillBot", u: "https://quillbot.com", d: "AI paraphraser, summarizer, grammar checker, and citation generator. Free tiers generous.", l: "Free tier available", s: "Student community" },
                { n: "Rytr", u: "https://rytr.me", d: "AI writing assistant. Generate blog posts, emails, ads, captions in 40+ languages.", l: "Free: 10k chars/month", s: "Content creator community" },
                { n: "Copy.ai", u: "https://www.copy.ai", d: "AI marketing copy generator. Product descriptions, emails, social posts, ad headlines.", l: "Free: 2000 words/month", s: "Marketing community" },
                { n: "Writesonic", u: "https://writesonic.com", d: "AI article writer, landing page builder, and SEO tools. GPT-4 powered.", l: "Free: 10k words/month", s: "Content marketing" },
                { n: "Jasper AI", u: "https://www.jasper.ai", d: "Enterprise AI writing platform. Long-form articles, brand voice, SEO optimization.", l: "7-day free trial", s: "Content marketing" },
                { n: "WordTune", u: "https://www.wordtune.com", d: "Rewrite any sentence to be clearer, more formal, or more casual. AI-powered rewording.", l: "Free: 10 rewrites/day", s: "Writing community" },
                { n: "ProWritingAid", u: "https://prowritingaid.com", d: "Deep writing analysis — readability, clichés, overused words, sticky sentences, pacing.", l: "Free: 500 words at a time", s: "Writer community" },
                { n: "Sudowrite", u: "https://www.sudowrite.com", d: "AI writing partner for fiction writers. Story engine, brainstorm characters, prose rewriting.", l: "Free trial available", s: "Fiction writer community" },
                { n: "NovelAI", u: "https://novelai.net", d: "AI storytelling and image generation for writers. Custom models trained on literature.", l: "Free trial; then paid", s: "Fiction writer community" },
                { n: "Scrivener", u: "https://www.literatureandlatte.com/scrivener", d: "The professional writer's tool. Outline, draft, and organize long-form writing projects.", l: "30-day free trial; $59 one-time", s: "Writer community standard" },
                { n: "Hemingway 3", u: "https://hemingwayapp.com", d: "Clean prose-focused writing tool — identifies hard-to-read sentences, passive voice.", l: "Free web version", s: "Writing community" },
                { n: "Notion AI", u: "https://www.notion.so/product/ai", d: "AI inside Notion. Write, summarize, translate, and fix grammar directly in your notes.", l: "$10/month add-on", s: "Productivity community" },
                { n: "Perplexity AI", u: "https://www.perplexity.ai", d: "AI search with cited sources. Research any topic and get a summarized, sourced answer.", l: "Free; Pro for advanced models", s: "Research community" }
            ]
        },
        {
            id: "career-jobs", name: "💼 Career & Job Tools", icon: "💼", type: "free",
            desc: "Job boards, resume builders, interview prep, salary data, and career growth resources.",
            sites: [
                { n: "LinkedIn", u: "https://www.linkedin.com", d: "Professional network. Job search, company research, networking, skills endorsements.", l: "Free basic; Premium for insights", s: "Professional community" },
                { n: "Levels.fyi", u: "https://www.levels.fyi", d: "Real salary data from 1M+ tech employees. Compare TC at FAANG and startups.", l: "None", s: "Tech salary community" },
                { n: "Glassdoor", u: "https://www.glassdoor.com", d: "Company reviews, interview questions, salary data — from real employees. Anonymous.", l: "Free with account", s: "Career community" },
                { n: "Wellfound", u: "https://wellfound.com", d: "Startup job board (formerly AngelList). Salary ranges upfront. Direct founder contact.", l: "None", s: "Startup job community" },
                { n: "Otta", u: "https://otta.com", d: "Curated tech job board. Detailed company culture, diversity stats, salary ranges.", l: "None", s: "Tech job community" },
                { n: "Simplify Jobs", u: "https://simplify.jobs", d: "Auto-fills job applications from one profile. Track 1,000+ applications in one place.", l: "Free", s: "Job seeker community" },
                { n: "Kickresume", u: "https://www.kickresume.com", d: "AI resume builder with ATS-optimized templates. Cover letter generator included.", l: "Free limited; Pro $19/mo", s: "Job seeker community" },
                { n: "Resume.io", u: "https://resume.io", d: "Professional resume builder with beautiful templates. Download PDF instantly.", l: "Free to build; paid to download", s: "Job seeker community" },
                { n: "Interview.io", u: "https://interviewing.io", d: "Anonymous technical interview practice with real engineers from FAANG companies.", l: "Free practice sessions", s: "Software engineering community" },
                { n: "Pramp", u: "https://www.pramp.com", d: "Free peer-to-peer coding interview practice. Match with other candidates for a real mock.", l: "Free", s: "SWE interview community" },
                { n: "LeetCode (Free)", u: "https://leetcode.com", d: "Algorithm problem bank for coding interviews. 3000+ problems, company-tagged.", l: "Free tier has most problems", s: "SWE interview standard" },
                { n: "NeetCode", u: "https://neetcode.io", d: "Curated LeetCode roadmap with video solutions. Best structured interview prep resource.", l: "Free, some paid courses", s: "SWE interview community" },
                { n: "Compensation.one", u: "https://compensation.one", d: "Anonymous tech salary database. Self-reported compensation across all job levels.", l: "None", s: "Tech salary community" },
                { n: "Polywork", u: "https://www.polywork.com", d: "Professional network for multi-faceted people. Share projects, get freelance work.", l: "Free", s: "Creator career community" },
                { n: "Toptal", u: "https://www.toptal.com", d: "Top 3% freelance developer marketplace. Serious work for serious rates.", l: "Free to apply", s: "Freelance community" }
            ]
        },
        {
            id: "security-privacy", name: "🔒 Security & Privacy", icon: "🔒", type: "privacy",
            desc: "Check if you've been hacked, secure your passwords, audit your digital footprint — all free.",
            sites: [
                { n: "Have I Been Pwned", u: "https://haveibeenpwned.com", d: "Check if your email or password appeared in a data breach. 14B+ breached accounts indexed.", l: "None", s: "Security community standard" },
                { n: "Bitwarden", u: "https://bitwarden.com", d: "Best free open-source password manager. Unlimited passwords, cross-device, zero-knowledge.", l: "Free forever for core features", s: "Security community" },
                { n: "Proton Pass", u: "https://proton.me/pass", d: "End-to-end encrypted password manager from Proton. Integrated with ProtonMail.", l: "Free tier generous", s: "Privacy community" },
                { n: "VirusTotal", u: "https://www.virustotal.com", d: "Scan any file or URL with 70+ antivirus engines. Check for malware before clicking.", l: "None", s: "Security community" },
                { n: "URLScan.io", u: "https://urlscan.io", d: "Analyze any URL for malicious content, phishing, and redirects. Screenshots included.", l: "None", s: "Security community" },
                { n: "Shodan", u: "https://www.shodan.io", d: "Search engine for internet-connected devices. Find exposed cameras, servers, databases.", l: "Free basic searches", s: "Security researcher community" },
                { n: "Privacy.sexy", u: "https://privacy.sexy", d: "Open-source scripts to harden your Windows, macOS, Linux privacy settings. One click.", l: "None", s: "Privacy community" },
                { n: "SimpleLogin", u: "https://simplelogin.io", d: "Email alias service. Create unlimited throwaway emails that forward to your real inbox.", l: "Free: 10 aliases", s: "Privacy community" },
                { n: "Addy.io", u: "https://addy.io", d: "Anonymous email forwarding aliases. Protect your real address from every website.", l: "Free: 10 aliases/day", s: "Privacy community" },
                { n: "Privacy Badger", u: "https://privacybadger.org", d: "EFF's free browser extension that learns to block trackers automatically.", l: "None", s: "EFF privacy tool" },
                { n: "CryptPad", u: "https://cryptpad.org", d: "End-to-end encrypted Google Docs/Sheets alternative. Zero-knowledge by default.", l: "Free 1GB storage", s: "Privacy community" },
                { n: "Keybase", u: "https://keybase.io", d: "Secure messaging, file sharing, and team chat with end-to-end encryption. Free.", l: "None", s: "Security community" },
                { n: "Temp-mail", u: "https://temp-mail.org", d: "Instaneously create a temporary email address. Use for any site sign-up, no account required.", l: "None", s: "Privacy community" },
                { n: "Mailtrap", u: "https://mailtrap.io", d: "Safe email testing for developers. Catch all test emails in a sandbox inbox.", l: "Free tier available", s: "Developer community" },
                { n: "Tails OS", u: "https://tails.boum.org", d: "Live USB OS that routes all internet through Tor. Leaves no trace. Used by journalists.", l: "None", s: "Privacy security community" }
            ]
        }
    ];

    // Append to DATA array
    if (typeof DATA !== 'undefined') {
        EXTRA4.forEach(function (cat) { DATA.push(cat); });
    }
})();
