// data-extra-5.js — Wave 5: Open Source, Marketing, Remote Work, Utilities, Space & Science
// Curated list of 100 real websites offering exceptional free tools and information.
(function () {
    const EXTRA5 = [
        {
            id: "open-source-alts", name: "🐧 Open Source Alternatives", icon: "🐧", type: "free",
            desc: "Free, open-source alternatives to expensive commercial software. Community-driven and privacy-respecting.",
            sites: [
                { n: "GIMP", u: "https://www.gimp.org", d: "The classic open-source alternative to Photoshop. Powerful image editor extensible with plugins.", l: "None", s: "Open Source Standard" },
                { n: "Inkscape", u: "https://inkscape.org", d: "Professional vector graphics editor for Windows, Mac OS X and Linux. Great Illustrator alternative.", l: "None", s: "Open Source Standard" },
                { n: "OBS Studio", u: "https://obsproject.com", d: "Free and open-source software for video recording and live streaming. Used by top streamers globally.", l: "None", s: "Streaming Standard" },
                { n: "Blender", u: "https://www.blender.org", d: "Free and open-source 3D creation suite. It supports the entirety of the 3D pipeline.", l: "None", s: "3D Industry Standard" },
                { n: "VLC", u: "https://www.videolan.org/vlc", d: "The VLC media player plays almost everything. No spyware, no ads, and no user tracking.", l: "None", s: "Media Standard" },
                { n: "FreeCAD", u: "https://www.freecadweb.org", d: "Open-source parametric 3D modeler made primarily to design real-life objects of any size.", l: "None", s: "Engineering standard" },
                { n: "Audacity", u: "https://www.audacityteam.org", d: "Easy-to-use, multi-track audio editor and recorder for Windows, macOS, GNU/Linux and other OSs.", l: "None", s: "Audio Standard" },
                { n: "Krita", u: "https://krita.org", d: "Professional free and open-source painting program. Made by artists that want to see affordable art tools.", l: "None", s: "Digital Painting Standard" },
                { n: "HandBrake", u: "https://handbrake.fr", d: "Open-source video transcoder. Convert video from nearly any format to a selection of modern codecs.", l: "None", s: "Video Standard" },
                { n: "Shotcut", u: "https://shotcut.org", d: "Free, open-source, cross-platform video editor. Supports hundreds of audio and video formats.", l: "None", s: "Video Editing" },
                { n: "Godot Engine", u: "https://godotengine.org", d: "Free and all-in-one cross-platform game engine that makes it easy to create 2D and 3D games.", l: "None", s: "Game Dev Standard" },
                { n: "LibreOffice", u: "https://www.libreoffice.org", d: "Powerful and free office suite, a successor to OpenOffice. Includes Writer, Calc, Impress, Draw.", l: "None", s: "Office Standard" },
                { n: "Thunderbird", u: "https://www.thunderbird.net", d: "Free email application that's easy to set up and customize, backed by Mozilla.", l: "None", s: "Email Standard" },
                { n: "Jellyfin", u: "https://jellyfin.org", d: "The Free Software Media System. The open-source alternative to Plex or Emby.", l: "Self-hosted", s: "Home Media Server" },
                { n: "Linux Mint", u: "https://linuxmint.com", d: "One of the most popular desktop Linux distributions. Elegant, easy to use, and comfortable.", l: "None", s: "OS Alternative" },
                { n: "OpenShot", u: "https://www.openshot.org", d: "Incredibly simple and powerful free video editor. Quick to learn and unexpectedly capable.", l: "None", s: "Video Editing" },
                { n: "Scribus", u: "https://www.scribus.net", d: "Open-source page layout program for professional desktop publishing. InDesign alternative.", l: "None", s: "Publishing Standard" },
                { n: "LMMS", u: "https://lmms.io", d: "Cross-platform DAW. Produce music with your computer by creating melodies and beats, synthesizing sounds.", l: "None", s: "Music Production" },
                { n: "Pi-hole", u: "https://pi-hole.net", d: "Network-wide ad blocking via your own Linux hardware. Blocks ads for all devices on your network.", l: "Self-hosted", s: "Network Standard" },
                { n: "Calibre", u: "https://calibre-ebook.com", d: "Comprehensive e-book software. View, convert, edit, and catalog e-books of all standard formats.", l: "None", s: "E-Book Standard" }
            ]
        },
        {
            id: "seo-marketing", name: "📈 SEO & Marketing", icon: "📈", type: "free",
            desc: "Free tools for site analytics, keyword research, SEO health checks, and digital marketing.",
            sites: [
                { n: "Google Search Console", u: "https://search.google.com/search-console", d: "Tools to measure your site's Search traffic and performance, fix issues, and make your site shine.", l: "None", s: "SEO Essential" },
                { n: "Ahrefs Webmaster Tools", u: "https://ahrefs.com/awt", d: "Free SEO tool from Ahrefs. Monitor website health, track backlinks, and see your organic keywords.", l: "Free for site owners", s: "SEO Industry Standard" },
                { n: "Ubersuggest (Free)", u: "https://neilpatel.com/ubersuggest", d: "Generate keyword ideas for your content marketing strategy. Helps reverse engineer competitors' SEO.", l: "Daily search limits", s: "Marketing Toolkit" },
                { n: "AnswerThePublic", u: "https://answerthepublic.com", d: "Discover what people are asking about. Visualize search questions and suggested autocomplete searches.", l: "Limited free searches", s: "Content Planning" },
                { n: "Google Trends", u: "https://trends.google.com", d: "Analyze the popularity of top search queries in Google Search across various regions and languages.", l: "None", s: "Market Research" },
                { n: "Exploding Topics", u: "https://explodingtopics.com", d: "Discover rapidly growing topics before they take off. Great for spotting trends and finding niches.", l: "Free basic trends", s: "Trend Spotting" },
                { n: "Mailchimp", u: "https://mailchimp.com", d: "Marketing platform for small businesses. Send emails, build websites, and run ad campaigns.", l: "Free up to 500 contacts", s: "Email Marketing" },
                { n: "HubSpot CRM", u: "https://www.hubspot.com/products/crm", d: "100% free CRM. Organize your contacts, track deals, and manage your entire sales pipeline easily.", l: "Free tier generous", s: "Sales & Marketing" },
                { n: "Substack", u: "https://substack.com", d: "Publishing platform that makes it simple for writers to start a newsletter and get paid directly.", l: "Free to publish", s: "Creator Economy" },
                { n: "Buffer", u: "https://buffer.com", d: "Schedule and manage your social media posts from one dashboard. Great simple free tier.", l: "Free: 3 channels, 10 posts", s: "Social Media Management" },
                { n: "Canva", u: "https://www.canva.com", d: "Create beautiful designs with your team. Use drag-and-drop features and layouts to design anything.", l: "Free tier available", s: "Marketing Design" },
                { n: "Unsplash", u: "https://unsplash.com", d: "Over 3 million free high-resolution images brought to you by the world's most generous community of photographers.", l: "None", s: "Asset Library" },
                { n: "Pexels", u: "https://www.pexels.com", d: "Free stock photos and videos you can use everywhere. High quality and completely free.", l: "None", s: "Asset Library" },
                { n: "Pixabay", u: "https://pixabay.com", d: "Over 2.7 million+ high quality stock images, videos, and music shared by a talented community.", l: "None", s: "Asset Library" },
                { n: "Mixkit", u: "https://mixkit.co", d: "Awesome free assets for your next video project. Stock video clips, music, sound effects, and video templates.", l: "None", s: "Video Assets" },
                { n: "Plausible", u: "https://plausible.io", d: "Simple and privacy-friendly Google Analytics alternative. Open source, lightweight, and no cookies.", l: "Paid (Free self-host)", s: "Analytics" },
                { n: "Similarweb", u: "https://www.similarweb.com", d: "Analyze any website's traffic. See global rank, total visits, and traffic sources for competitors.", l: "Free browser extension", s: "Competitor Analysis" },
                { n: "Lighthouse", u: "https://developers.google.com/web/tools/lighthouse", d: "Automated tool for improving the quality of web pages: performance, accessibility, SEO, and more.", l: "None", s: "Web Dev Tools" },
                { n: "Screaming Frog", u: "https://www.screamingfrog.co.uk/seo-spider", d: "Website crawler that helps you improve onsite SEO by extracting data and auditing common SEO issues.", l: "Free up to 500 URLs", s: "Technical SEO" },
                { n: "Hunter.io", u: "https://hunter.io", d: "Find professional email addresses in seconds and connect with the people that matter for your business.", l: "25 free searches/month", s: "B2B Outreach" }
            ]
        },
        {
            id: "remote-work", name: "🌍 Remote Work & Travel", icon: "🌍", type: "free",
            desc: "Tools for digital nomads, remote workers, time zone calculators, and remote collaboration.",
            sites: [
                { n: "Nomad List", u: "https://nomadlist.com", d: "Best places to live and work remotely. Compares cost of living, internet speed, weather, and safety.", l: "Free to browse data", s: "Digital Nomad Hub" },
                { n: "Workfrom", u: "https://workfrom.co", d: "Find the best coffee shops, cafes, bars, and coworking spaces to work from in cities around the world.", l: "None", s: "Remote Workspace" },
                { n: "Speedtest", u: "https://www.speedtest.net", d: "The global standard in internet metrics. Check your ping, download, and upload speeds instantly.", l: "None", s: "Connection check" },
                { n: "Every Time Zone", u: "https://everytimezone.com", d: "Never warp your brain with time zone math again. Visual slider for coordinating global teams.", l: "None", s: "Timezone Tool" },
                { n: "Timeanddate", u: "https://www.timeanddate.com", d: "Comprehensive calculators for world clocks, times zones, calendars, sun/moon phases, and weather.", l: "None", s: "Time Tool" },
                { n: "Toggl Track", u: "https://toggl.com/track", d: "Simple time tracking. Beautiful interface, powerful reports, great for freelancers billing by the hour.", l: "Free for up to 5 users", s: "Time Tracking" },
                { n: "Clockify", u: "https://clockify.me", d: "100% free time tracking software for teams. Track hours, see what everyone is working on, generate reports.", l: "Free tier very generous", s: "Team Time Tracking" },
                { n: "RescueTime", u: "https://www.rescuetime.com", d: "Automatic time tracking. Understand exactly where your time goes each day on your devices.", l: "Free tier (RescueTime Lite)", s: "Productivity tracker" },
                { n: "Focus To-Do", u: "https://www.focustodo.cn", d: "Pomodoro Timer & Task Management. Combines Pomodoro technique with To-Do lists in one app.", l: "Free with optional premium", s: "Task Management" },
                { n: "Miro", u: "https://miro.com", d: "The visual workspace for innovation. Infinite canvas for brainstorming, planning, and remote collaboration.", l: "3 editable boards free", s: "Whiteboarding" },
                { n: "Slack", u: "https://slack.com", d: "Channel-based messaging platform. The standard for remote team communication and asynchronous work.", l: "Free tier (90-day history)", s: "Team Chat" },
                { n: "Discord", u: "https://discord.com", d: "Voice, video, and text chat. Originally for gamers, now widely used by communities and remote teams.", l: "Free", s: "Community Chat" },
                { n: "Zoom", u: "https://zoom.us", d: "Enterprise video conferencing. The most reliable tool for remote meetings, webinars, and screen sharing.", l: "Free 40-min meetings", s: "Video Calls" },
                { n: "Google Meet", u: "https://meet.google.com", d: "Secure, high-quality video meetings right from your browser, integrated tightly with Google Workspace.", l: "Free 60-min group meetings", s: "Video Calls" },
                { n: "Draw.io", u: "https://app.diagrams.net", d: "Free online diagram software. Make flowcharts, process diagrams, org charts, UML, ER, and network diagrams.", l: "Free forever", s: "Diagramming" },
                { n: "Remote OK", u: "https://remoteok.com", d: "The #1 remote job board. Find remote jobs that let you work efficiently from anywhere in the world.", l: "Free for job seekers", s: "Remote Jobs" },
                { n: "We Work Remotely", u: "https://weworkremotely.com", d: "The largest remote work community in the world. Great source for legit, high-quality remote jobs.", l: "Free for job seekers", s: "Remote Jobs" },
                { n: "Numbeo", u: "https://www.numbeo.com", d: "World's largest cost of living database. Compare prices of rent, groceries, and services between cities globally.", l: "None", s: "Cost of Living Data" },
                { n: "SeatGuru", u: "https://www.seatguru.com", d: "The ultimate source for airplane seating plans. Find the best seat before you book or check in for your flight.", l: "None", s: "Travel Tool" },
                { n: "Skyscanner", u: "https://www.skyscanner.net", d: "Global travel search engine. Compare cheap flights, hotels, and car rentals to find the best deals.", l: "None", s: "Travel Tool" }
            ]
        },
        {
            id: "everyday-utilities", name: "🔧 Everyday Utilities", icon: "🔧", type: "free",
            desc: "Format converters, file organizers, temp emails, and quick web utilities for daily tasks.",
            sites: [
                { n: "PDF24 Tools", u: "https://tools.pdf24.org", d: "Free and easy-to-use online PDF tools that make you more productive. Merge, compress, and edit PDFs.", l: "100% Free", s: "PDF Utilities" },
                { n: "CloudConvert", u: "https://cloudconvert.com", d: "Convert your files to almost any format. Supports audio, video, document, ebook, archive, image, and more.", l: "Up to 25 free conversions/day", s: "File Conversion" },
                { n: "10 Minute Mail", u: "https://10minutemail.com", d: "Beat spam with the best disposable email service. Addresses expire automatically after 10 minutes.", l: "None", s: "Temp Email" },
                { n: "Temp Mail", u: "https://temp-mail.org", d: "Disposable temporary email address. Keep your real inbox clean and safe from spam, bots, and phishing.", l: "None", s: "Temp Email" },
                { n: "Diffchecker", u: "https://www.diffchecker.com", d: "Compare text, images, or PDFs to find differences. Extremely useful for checking code or document revisions.", l: "None", s: "Text Comparison" },
                { n: "Photopea", u: "https://www.photopea.com", d: "Advanced image editor. A clone of Photoshop right in your browser. Supports PSD, XCF, Sketch, XD, and CDR formats.", l: "Ad-supported", s: "Image Editor" },
                { n: "Remove.bg", u: "https://www.remove.bg", d: "Remove image backgrounds automatically in 5 seconds with zero clicks. Uses AI for perfect cutouts.", l: "Free lo-res downloads", s: "Image Utility" },
                { n: "TinyPNG", u: "https://tinypng.com", d: "Smart WebP, PNG and JPEG compression. Shrink images for your apps and sites while preserving quality.", l: "Max 20 images at 5MB each", s: "Image Optimization" },
                { n: "IFTTT", u: "https://ifttt.com", d: "If This Then That connects your favorite apps and devices together so they talk to each other automatically.", l: "Free tier available", s: "Automation" },
                { n: "Zapier", u: "https://zapier.com", d: "Connect your apps and automate workflows. Easy automation for busy people. Zapier moves info between your web apps.", l: "Free: 100 tasks/month", s: "Automation" },
                { n: "Wolfram Alpha", u: "https://www.wolframalpha.com", d: "Compute answers using Wolfram's breakthrough technology. Answers math, science, nutrition, and data questions.", l: "Pro required for step-by-step", s: "Computational Engine" },
                { n: "Desmos", u: "https://www.desmos.com", d: "Beautiful, free online graphing calculator. Instantly graph equations, find intersections, and visualize math.", l: "None", s: "Math Tool" },
                { n: "GeoGebra", u: "https://www.geogebra.org", d: "Interactive geometry, algebra, statistics, and calculus application. Used globally for teaching and learning math.", l: "None", s: "Math Tool" },
                { n: "Speedcrunch", u: "https://speedcrunch.org", d: "Fast, high-precision desktop calculator. Powerful keyboard-driven interface with syntax highlighting.", l: "Open source download", s: "Desktop Calculator" },
                { n: "QR Code Generator", u: "https://www.qr-code-generator.com", d: "Create QR codes for URLs, text, vCards, and more. Customize the design with logos and colors.", l: "Free basic static codes", s: "Utility" },
                { n: "Smallpdf", u: "https://smallpdf.com", d: "A comprehensive toolset for PDF files. Compress, merge, split, edit, or convert PDFs easily.", l: "Limited free tasks per day", s: "PDF Utilities" },
                { n: "Text Compare", u: "https://text-compare.com", d: "An online diff tool that can quickly compare two text files to find the differences, highlighting them clearly.", l: "None", s: "Text Comparison" },
                { n: "JSON Formatter", u: "https://jsonformatter.org", d: "Format, validate, and beautify JSON data. Very helpful for developers dealing with APIs and configs.", l: "None", s: "Developer Utility" },
                { n: "MyNoise", u: "https://mynoise.net", d: "Customizable ambient noise generators. Ideal for focus, relaxation, or masking background sounds.", l: "None", s: "Audio Utility" },
                { n: "File Converter", u: "https://file-converter.org", d: "A very simple tool which allows you to convert and compress files using the context menu in Windows Explorer.", l: "None", s: "Desktop Utility" }
            ]
        },
        {
            id: "space-science", name: "🚀 Space & Science", icon: "🚀", type: "edu",
            desc: "Explore space, read science papers, track flights, and visualize weather patterns.",
            sites: [
                { n: "NASA", u: "https://www.nasa.gov", d: "Explore the universe and discover our home planet with NASA's vast collection of images, news, and data.", l: "None", s: "Space Agency" },
                { n: "Heavens-Above", u: "https://www.heavens-above.com", d: "Satellite predictions and astronomical data. Track the ISS, Starlink trains, and view custom sky charts.", l: "None", s: "Astronomy Tool" },
                { n: "Stellarium Web", u: "https://stellarium-web.org", d: "A planetarium running in your web browser. See a realistic sky in 3D, just like with the naked eye.", l: "None", s: "Virtual Planetarium" },
                { n: "Flightradar24", u: "https://www.flightradar24.com", d: "Global flight tracking service that provides real-time information about thousands of aircraft around the world.", l: "Free basic tracking", s: "Aviation tracking" },
                { n: "MarineTraffic", u: "https://www.marinetraffic.com", d: "Live ship tracking intelligence. Find locations of commercial vessels, cruise ships, and yachts worldwide.", l: "Free basic tracking", s: "Maritime tracking" },
                { n: "Earth.nullschool", u: "https://earth.nullschool.net", d: "Stunning visualization of global weather conditions forecast by supercomputers representing wind, temperature, oceans.", l: "None", s: "Weather Visualization" },
                { n: "Ventusky", u: "https://www.ventusky.com", d: "Live wind, rain, and temperature maps. Detailed and interactive weather forecasting for the entire globe.", l: "None", s: "Weather Map" },
                { n: "Windy", u: "https://www.windy.com", d: "Extraordinary interactive weather map offering radar, wind tracking, and severe weather alerts globally.", l: "Free basic, Premium available", s: "Weather Forecasting" },
                { n: "Google Earth", u: "https://earth.google.com", d: "Explore the world from above with satellite imagery and 3D terrain of the entire globe.", l: "None", s: "Virtual Globe" },
                { n: "Zooniverse", u: "https://www.zooniverse.org", d: "The world's largest platform for people-powered research. Anyone can contribute to real science projects online.", l: "None", s: "Citizen Science" },
                { n: "arXiv", u: "https://arxiv.org", d: "Free distribution service and open-access archive for millions of scholarly articles in physics, math, and CS.", l: "None", s: "Research Preprints" },
                { n: "PubMed", u: "https://pubmed.ncbi.nlm.nih.gov", d: "Free search engine accessing millions of citations and abstracts of biomedical and life sciences literature.", l: "None", s: "Medical Database" },
                { n: "Google Scholar", u: "https://scholar.google.com", d: "Search widely across many disciplines and sources for articles, theses, books, abstracts, and court opinions.", l: "None", s: "Academic Search" },
                { n: "ResearchGate", u: "https://www.researchgate.net", d: "Professional network for scientists and researchers to share papers, ask and answer questions.", l: "Requires academic email/affiliation", s: "Scientific Network" },
                { n: "Sci-Hub", u: "https://sci-hub.se", d: "Provides massive free access to tens of millions of research papers and books, bypassing publisher paywalls.", l: "Ethically debated/grey area", s: "Open Access" },
                { n: "Library Genesis", u: "https://libgen.is", d: "Shadow library providing free access to millions of books, articles, and comics bypassing paywalls.", l: "Ethically debated/grey area", s: "Digital Library" },
                { n: "Z-Library", u: "https://singlelogin.re", d: "One of the largest online shadow libraries offering millions of books and articles for free downloading.", l: "Ethically debated/grey area", s: "Digital Library" },
                { n: "HubbleSite", u: "https://hubblesite.org", d: "Official site for the Hubble Space Telescope. Breathtaking images and discoveries about the universe.", l: "None", s: "Space Images" },
                { n: "SpaceX", u: "https://www.spacex.com", d: "Official site of SpaceX. Follow their missions, vehicle developments, and watch live rocket launches.", l: "None", s: "Space Exploration" },
                { n: "Scale of the Universe", u: "https://htwins.net/scale2", d: "Interactive visual tool to compare the sizes of things in the universe, from quantum foam to the observable universe.", l: "None", s: "Interactive Learning" }
            ]
        }
    ];

    // Append to DATA array
    if (typeof DATA !== 'undefined') {
        EXTRA5.forEach(function (cat) { DATA.push(cat); });
    }
})();
