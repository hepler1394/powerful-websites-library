// data-extra-2.js — 300+ additional sites appended to DATA
// Wave 2: Gaming, AI Image, Video Editing, Web3, Data, Music, PC Tools, Photography, Maps, Food, Health, Social Media, Files, Books, More
(function () {
    const EXTRA2 = [
        {
            id: "game-emulators", name: "Game Emulators & Classics", icon: "🕹️", type: "free",
            desc: "Play thousands of retro and classic games free in your browser — no downloads, no installs.",
            sites: [
                { n: "RetroGames.cc", u: "https://retrogames.cc", d: "NES, SNES, GBA, Genesis, N64 — 10,000+ games browser playable. Zero downloads needed.", l: "None", s: "Viral on X & Reddit" },
                { n: "MyOldBoy (Web)", u: "https://www.myoldboy.com", d: "GBA & GBC emulator that runs entirely in your browser. Load your own ROMs.", l: "None", s: "Gaming communities" },
                { n: "EmulatorJS", u: "https://emulatorjs.org", d: "Open-source multi-system emulator for browser. NES, SNES, GBA, PS1, N64, and more.", l: "None", s: "GitHub trending" },
                { n: "ClassicReload", u: "https://classicreload.com", d: "1000+ classic DOS games playable free in browser. Oregon Trail, Commander Keen, and more.", l: "None", s: "Reddit r/gaming" },
                { n: "Internet Archive Games", u: "https://archive.org/details/software", d: "Thousands of old arcade, console, and PC games free — legal historical preservation.", l: "None", s: "GitHub awesome lists" },
                { n: "poki.com", u: "https://poki.com", d: "Best browser game library — action, puzzles, racing, and multiplayer. No download required.", l: "Ads supported", s: "Popular gaming site" },
                { n: "CrazyGames", u: "https://www.crazygames.com", d: "3000+ free browser games — HTML5, WebGL. No Flash needed. Multiplayer and single player.", l: "Ads supported", s: "Top browser game site" },
                { n: "Kongregate", u: "https://www.kongregate.com", d: "Flash to HTML5 game library with community ratings. RPGs, strategy, shooter games.", l: "Some premium content", s: "Gaming community" },
                { n: "Miniclip", u: "https://www.miniclip.com", d: "Browser games since 1999. 8ball pool, football, and hundreds of other casual games.", l: "Ads supported", s: "Classic gaming site" },
                { n: "Y8 Games", u: "https://www.y8.com", d: "Huge HTML5 and Flash game archive. Dating simulators, dressup, sports, action games.", l: "Ads supported", s: "Nostalgia gaming site" },
                { n: "itch.io (Browser)", u: "https://itch.io/games/platform-web", d: "Thousands of indie browser games by real developers. Filter by genre, tag, price.", l: "Most games free", s: "Indie gaming community" },
                { n: "Newgrounds", u: "https://www.newgrounds.com", d: "Original animation and browser games platform. Cultural icon. Adult and family content.", l: "Some content requires account", s: "Classic internet site" },
                { n: "PlayPhrase.me", u: "https://www.playphrase.me", d: "Search any phrase and see it said on screen in movies/TV. Like IMDB meets YouTube.", l: "None", s: "Reddit r/InternetIsBeautiful" },
                { n: "Neal.fun", u: "https://neal.fun", d: "Beautifully made interactive web experiments — Infinite Craft, Spend Bill Gates' money, etc.", l: "None", s: "Viral on Reddit & X" },
                { n: "Geoguessr (Free)", u: "https://www.geoguessr.com", d: "Guess where you are from Google Street View. Classic geography game. Free maps.", l: "Paid for competitive modes", s: "Viral on YouTube & Twitch" }
            ]
        },
        {
            id: "ai-image-gen", name: "AI Image Generation", icon: "🖼️", type: "free",
            desc: "Generate stunning AI images free — from photorealistic to art styles. Zero skills needed.",
            sites: [
                { n: "Adobe Firefly", u: "https://firefly.adobe.com", d: "Adobe's AI image generator. Commercial-safe, trained on licensed images. Best quality free.", l: "Free credits monthly", s: "Viral on Instagram" },
                { n: "Ideogram", u: "https://ideogram.ai", d: "Best AI for text inside images. Posters, logos, book covers. Extremely accurate text rendering.", l: "Free tier: 10/day", s: "Viral on X design community" },
                { n: "Playground AI", u: "https://playground.com", d: "Free AI image generator with Stable Diffusion + style mixing. 100 free images/day.", l: "Free: 100/day", s: "Viral Instagram ai reels" },
                { n: "Leonardo.ai", u: "https://leonardo.ai", d: "Game asset and art generator AI. Consistent style, trained for characters and environments.", l: "Free: 150 tokens/day", s: "Viral on X gaming community" },
                { n: "NightCafe", u: "https://creator.nightcafe.studio", d: "AI art generator with multiple models (DALL-E, Stable Diffusion, SDXL). Community sharing.", l: "Free daily credits", s: "AI art community" },
                { n: "Dezgo", u: "https://dezgo.com", d: "Free Stable Diffusion AI image generator. Text to image, unlimited tries, no account needed.", l: "None", s: "Reddit r/StableDiffusion" },
                { n: "Craiyon", u: "https://www.craiyon.com", d: "Free AI image generator (DALL-E mini). Unlimited free generations, no sign-up required.", l: "Slow without account", s: "Viral on Instagram" },
                { n: "Tensor.art", u: "https://tensor.art", d: "Free AI image generation with tons of community models on Civitai-style platform.", l: "Free with limits", s: "AI art community" },
                { n: "Picsart AI", u: "https://picsart.com/ai-image-generator", d: "Picsart's free AI image generator. High quality results with style presets.", l: "Free tier daily limits", s: "Instagram creative reels" },
                { n: "Canva AI", u: "https://www.canva.com/ai-image-generator", d: "Text to image inside Canva workspace. Integrates directly into your designs.", l: "Free Canva users get credits", s: "Design community" },
                { n: "Microsoft Designer", u: "https://designer.microsoft.com", d: "Free DALL-E 3 image generator by Microsoft. High quality, stunning Bing-powered images.", l: "Free with Microsoft account", s: "X design community" },
                { n: "Bing Image Creator", u: "https://www.bing.com/images/create", d: "DALL-E 3 powered free image generation by Microsoft. Best free AI art available.", l: "Free with Microsoft account", s: "Viral Instagram AI reels" },
                { n: "Stable Diffusion Online", u: "https://stablediffusionweb.com", d: "Stable Diffusion running free in browser. No signup, no account. Unlimited generations.", l: "Slower on free tier", s: "Reddit r/StableDiffusion" },
                { n: "DreamStudio", u: "https://beta.dreamstudio.ai", d: "Stability AI's official image generation tool. Cutting-edge SDXL, professional controls.", l: "Free starter credits", s: "AI image community" },
                { n: "Artbreeder", u: "https://www.artbreeder.com", d: "Blend images together with AI sliders. Create portraits, landscapes, characters.", l: "Free: limited collages", s: "AI art community" }
            ]
        },
        {
            id: "video-editing", name: "Video Editing & Creation", icon: "🎬", type: "free",
            desc: "Free online video editors, clip makers, and production tools — no desktop software needed.",
            sites: [
                { n: "CapCut (Web)", u: "https://www.capcut.com", d: "TikTok's free online video editor. Auto captions, trending effects, templates. Browser-based.", l: "Watermark on free tier", s: "Viral on TikTok & Instagram" },
                { n: "Clipchamp", u: "https://clipchamp.com", d: "Microsoft's free browser video editor. Timeline, effects, text overlays, export 1080p free.", l: "4K export requires premium", s: "Popular tool" },
                { n: "Veed.io", u: "https://www.veed.io", d: "Online video editor with auto subtitles, AI background removal, screen recording, and effects.", l: "Free with watermark", s: "X creator community" },
                { n: "Kapwing", u: "https://www.kapwing.com", d: "Full-featured online video editor. Cut, trim, add text, music, layers. Export to social.", l: "Watermark on free", s: "Content creator community" },
                { n: "DaVinci Resolve", u: "https://www.blackmagicdesign.com/products/davinciresolve", d: "Hollywood-grade free video editor. Color grading, audio mixing, VFX. Used by professionals.", l: "Free — fully featured", s: "Professional filmmaking" },
                { n: "Shotcut", u: "https://shotcut.org", d: "Free open-source video editor for desktop. Wide format support, audio filters, no watermark.", l: "None", s: "GitHub open-source" },
                { n: "Kdenlive", u: "https://kdenlive.org", d: "Free professional video editor (Linux/Mac/Windows). Multi-track, effects, transitions, no watermark.", l: "None", s: "GitHub open-source" },
                { n: "OpusClip", u: "https://www.opus.pro", d: "AI clip maker — automatically cuts long videos into viral short clips for TikTok/Reels/Shorts.", l: "Free: 60 min/month", s: "Creator community X" },
                { n: "FlexClip", u: "https://www.flexclip.com", d: "Online video maker with stock library, templates, text animation, and AI tools.", l: "Free with watermark", s: "Content creator sites" },
                { n: "Animoto", u: "https://animoto.com", d: "Make slideshow videos from photos in minutes. Beautiful themes, music, and motion.", l: "Free with watermark", s: "Photography community" },
                { n: "InVideo", u: "https://invideo.io", d: "AI video maker — text to video, script to video. 5000+ templates for any social platform.", l: "Free with watermark", s: "Creator community" },
                { n: "Clideo", u: "https://clideo.com", d: "All-in-one video processing tool. Cut, merge, resize, compress, convert videos online.", l: "Free with watermark", s: "Content creator tools" },
                { n: "Video Converter", u: "https://www.freeconvert.com/video-converter", d: "Convert videos between any format — MP4, MOV, AVI, MKV, WebM, and 200+ more formats.", l: "Free: 1GB files", s: "Utility tools" },
                { n: "Loom", u: "https://www.loom.com", d: "Record face + screen videos in one click. Share with a link. Perfect for async communication.", l: "Free: 25 videos/user", s: "Remote work community" },
                { n: "Runway", u: "https://runwayml.com", d: "AI video generation and editing. Text to video, green screen, object removal, motion tracking.", l: "Free credits included", s: "Viral on X AI community" }
            ]
        },
        {
            id: "web3-crypto", name: "Web3 & Crypto Tools", icon: "🌐", type: "free",
            desc: "Blockchain explorers, DeFi tools, wallet trackers, NFT platforms, and crypto research.",
            sites: [
                { n: "Etherscan", u: "https://etherscan.io", d: "Ethereum blockchain explorer. Track wallets, transactions, contracts, tokens in real time.", l: "None", s: "Crypto community" },
                { n: "Dune Analytics", u: "https://dune.com", d: "Query blockchain data with SQL. Community dashboards for any DeFi protocol or NFT.", l: "Free tier available", s: "DeFi research community" },
                { n: "CoinGecko", u: "https://www.coingecko.com", d: "Track 15,000+ crypto prices, charts, market cap. Better data than CoinMarketCap. Free API.", l: "None", s: "Crypto community" },
                { n: "DeFiLlama", u: "https://defillama.com", d: "Track Total Value Locked across 200+ DeFi protocols. Transparent, open-source data.", l: "None", s: "DeFi research community" },
                { n: "Uniswap", u: "https://app.uniswap.org", d: "DEX for swapping any ERC-20 token. No KYC, non-custodial, runs on Ethereum and rollups.", l: "Gas fees apply", s: "DeFi community" },
                { n: "MetaMask", u: "https://metamask.io", d: "Most popular Ethereum wallet. Browser extension + mobile app. Connect to any dApp.", l: "None", s: "Web3 standard" },
                { n: "Zerion", u: "https://zerion.io", d: "Track your DeFi portfolio across 10+ chains — balances, yields, NFTs, all in one dashboard.", l: "Free tier available", s: "DeFi community" },
                { n: "OpenSea", u: "https://opensea.io", d: "Largest NFT marketplace. Browse, buy, sell NFTs on Ethereum, Polygon, and Solana.", l: "2.5% fee on sales", s: "NFT community" },
                { n: "Token Sniffer", u: "https://tokensniffer.com", d: "Analyze any crypto token for honeypots, scams, and rugpull risks before investing.", l: "None", s: "DeFi safety community" },
                { n: "CryptoFees", u: "https://cryptofees.info", d: "See which crypto protocols generate the most real fee revenue. Follow the money.", l: "None", s: "DeFi research" },
                { n: "Solscan", u: "https://solscan.io", d: "Solana blockchain explorer. Track SOL transactions, tokens, NFTs, and validator stats.", l: "None", s: "Solana community" },
                { n: "Blockchain.com", u: "https://www.blockchain.com/explorer", d: "Bitcoin blockchain explorer. Track BTC transactions, addresses, blocks in real time.", l: "None", s: "Bitcoin community" },
                { n: "GeckoTerminal", u: "https://www.geckoterminal.com", d: "Real-time DEX charts for any token across 100+ chains. Like TradingView for DeFi.", l: "None", s: "DeFi trading community" },
                { n: "Nansen", u: "https://www.nansen.ai", d: "On-chain analytics — track smart money wallets, NFT trends, and token flows.", l: "Paid with free trial", s: "Crypto research" },
                { n: "Debank", u: "https://debank.com", d: "Comprehensive DeFi portfolio tracker. Lending, liquidity positions, across all chains.", l: "None", s: "DeFi community" }
            ]
        },
        {
            id: "data-research", name: "Data & Research Tools", icon: "📊", type: "free",
            desc: "Public datasets, data visualization, journalism tools, and research databases — all free.",
            sites: [
                { n: "Google Dataset Search", u: "https://datasetsearch.research.google.com", d: "Find any dataset on the internet. Google's search engine for machine learning and research data.", l: "None", s: "Research community" },
                { n: "Kaggle", u: "https://www.kaggle.com", d: "World's largest ML community. Free datasets, Jupyter notebooks, GPU compute, competitions.", l: "Free compute credits", s: "ML community" },
                { n: "Our World in Data", u: "https://ourworldindata.org", d: "Stunning visualizations of global statistics — health, environment, poverty, education, and more.", l: "None", s: "Viral on X and Reddit" },
                { n: "Statista", u: "https://www.statista.com", d: "700,000+ statistics from 22,500+ sources. Charts, reports, and infographics.", l: "Some content behind paywall", s: "Research tool" },
                { n: "Data.world", u: "https://data.world", d: "Collaborative data platform with thousands of public datasets for analysis and exploration.", l: "Free tier available", s: "Data science community" },
                { n: "Census.gov", u: "https://data.census.gov", d: "All US Census Bureau data. Population, economics, housing — free and downloadable.", l: "None", s: "Research tool" },
                { n: "Gapminder", u: "https://www.gapminder.org/tools", d: "Hans Rosling's famous animated global data charts. Health, income, population over time.", l: "None", s: "Viral Ted Talk data" },
                { n: "Observable", u: "https://observablehq.com", d: "Build and share interactive data visualizations with JavaScript. Notebook for data science.", l: "Free for public notebooks", s: "Data viz community" },
                { n: "Rawgraphs", u: "https://www.rawgraphs.io", d: "Drag your CSV and create stunning unusual data charts — alluvial, sunburst, cluster plots.", l: "None", s: "Data viz community" },
                { n: "Flourish", u: "https://flourish.studio", d: "No-code data visualization tool. Create animated charts, maps, races for journalism.", l: "Free public projects", s: "Data journalism community" },
                { n: "Datawrapper", u: "https://www.datawrapper.de", d: "Create embed-ready charts and maps. Used by NYT, The Economist, thousands of newsrooms.", l: "Free tier available", s: "Journalism data tool" },
                { n: "WorldBank Open Data", u: "https://data.worldbank.org", d: "Free access to global development data — 14,000+ indicators on every country.", l: "None", s: "Research community" },
                { n: "FRED Economic Data", u: "https://fred.stlouisfed.org", d: "Federal Reserve's economic database — 800,000 data series on the US and global economy.", l: "None", s: "Economics research" },
                { n: "NASA Open Data", u: "https://data.nasa.gov", d: "NASA's free public datasets — space, earth observation, climate, and more.", l: "None", s: "Science community" },
                { n: "Metabase", u: "https://www.metabase.com", d: "Open-source business intelligence tool. Connect to any database, build dashboards instantly.", l: "Free self-hosted", s: "Data engineering community" }
            ]
        },
        {
            id: "music-discovery", name: "Music Discovery & Free Streaming", icon: "🎵", type: "free",
            desc: "Discover and stream music for free — legally. From indie to classical to DJ tools.",
            sites: [
                { n: "Spotify Web", u: "https://open.spotify.com", d: "World's biggest music streaming service. Free tier with shuffle and ads. 100M+ songs.", l: "Free with ads & shuffle only", s: "Mainstream" },
                { n: "SoundCloud", u: "https://soundcloud.com", d: "Stream 300M+ tracks by artists worldwide. Free listening with ads. Best for indie and underground.", l: "Free with ads", s: "Music community" },
                { n: "Bandcamp", u: "https://bandcamp.com", d: "Support independent artists directly. Stream albums free, pay what you want for downloads.", l: "Pay what you want", s: "Indie music community" },
                { n: "YouTube Music", u: "https://music.youtube.com", d: "Free YouTube Music with ads. Access to millions of tracks including live recordings.", l: "Premium removes ads", s: "Mainstream" },
                { n: "Last.fm", u: "https://www.last.fm", d: "Scrobble and discover music. Deep listening stats, personalised recommendations, 20yr history.", l: "None", s: "Music stats community" },
                { n: "Radio Garden", u: "https://radio.garden", d: "Spin a globe and listen to live radio from any city on Earth. 30,000+ stations.", l: "None", s: "Viral Reddit & Instagram" },
                { n: "Jamendo", u: "https://www.jamendo.com", d: "500,000+ free Creative Commons music tracks. Legal downloads for personal and commercial use.", l: "Licensing for commercial use", s: "Creative commons music" },
                { n: "Free Music Archive", u: "https://freemusicarchive.org", d: "High-quality legal audio from thousands of artists. Curated for podcasters and video creators.", l: "None", s: "Open music community" },
                { n: "Musicoin", u: "https://musicoin.org", d: "Blockchain-based music platform paying artists directly per play. Stream for free.", l: "None", s: "Web3 music community" },
                { n: "Musescore", u: "https://musescore.com", d: "World's largest sheet music platform. 1M+ free scores for piano, guitar, orchestra.", l: "Pro for full downloads", s: "Musicians community" },
                { n: "Jazz Music Archive", u: "https://archive.org/details/etree", d: "Legal bootleg concert recordings from Internet Archive. Jazz, Grateful Dead, phish, more.", l: "None", s: "Music archiving" },
                { n: "Everynoise", u: "https://everynoise.com", d: "Interactive map of 6,000+ music genres. Click any genre to instantly hear example tracks.", l: "None", s: "Viral music discovery X" },
                { n: "Discogs", u: "https://www.discogs.com", d: "World's largest record database. Buy/sell vinyl & CDs. Browse any album's history.", l: "Marketplace fees", s: "Vinyl collector community" },
                { n: "Poolsuite FM", u: "https://poolsuite.net", d: "Internet radio playing lo-fi, summer, tropical, and ambient tracks. Aesthetic as hell.", l: "None", s: "Reddit r/InternetIsBeautiful" },
                { n: "Epidemicsound", u: "https://www.epidemicsound.com", d: "Royalty-free music for videos. 50,000+ tracks and 90,000+ SFX. License once, use forever.", l: "Free trial; then paid", s: "Content creator music" }
            ]
        },
        {
            id: "pc-system-tools", name: "PC & System Utilities", icon: "🔨", type: "free",
            desc: "Windows utilities, system monitors, file managers, and power-user tools — all free.",
            sites: [
                { n: "7-Zip", u: "https://www.7-zip.org", d: "Best free file archiver. Opens .7z, .zip, .rar, .tar, .iso and 40+ formats. No ads ever.", l: "None", s: "PC community standard" },
                { n: "Everything Search", u: "https://www.voidtools.com", d: "Instant Windows file search. Searches 1M files in milliseconds. The fastest search tool.", l: "None", s: "Reddit r/windows" },
                { n: "Process Hacker", u: "https://processhacker.sourceforge.io", d: "Advanced process manager. Better than Task Manager — view memory, network, disk per process.", l: "None", s: "GitHub open-source" },
                { n: "VLC", u: "https://www.videolan.org/vlc", d: "Plays literally any video or audio format. No codecs needed. No ads, no tracking, forever free.", l: "None", s: "Universal standard" },
                { n: "Handbrake", u: "https://handbrake.fr", d: "Free open-source video transcoder. Convert any video to MP4, MKV. Used worldwide.", l: "None", s: "Video encoding standard" },
                { n: "CPU-Z", u: "https://www.cpuid.com/softwares/cpu-z.html", d: "Free system information tool. Detailed CPU, RAM, motherboard, and GPU specs instantly.", l: "None", s: "PC hardware community" },
                { n: "HWiNFO", u: "https://www.hwinfo.com", d: "Deep hardware monitoring. Real-time temps, voltages, speeds. Essential for overclockers.", l: "None", s: "PC hardware community" },
                { n: "Rufus", u: "https://rufus.ie", d: "Create bootable USB drives from ISO files in seconds. Best Windows/Linux installer tool.", l: "None", s: "GitHub open-source" },
                { n: "Ventoy", u: "https://www.ventoy.net", d: "Create a multi-boot USB drive. Copy multiple ISOs to one USB and boot any of them.", l: "None", s: "GitHub trending (50k stars)" },
                { n: "Revo Uninstaller", u: "https://www.revouninstaller.com", d: "Completely remove programs including leftover registry keys and files. Free version powerful.", l: "Pro for advanced features", s: "PC cleaner community" },
                { n: "TreeSize Free", u: "https://www.jam-software.com/treesize_free", d: "Visual disk space analyzer. Find which folders are eating your drive space instantly.", l: "None", s: "Windows community" },
                { n: "Wireshark", u: "https://www.wireshark.org", d: "Network protocol analyzer. Capture and analyze network traffic. Industry standard tool.", l: "None", s: "Network engineering" },
                { n: "GIMP", u: "https://www.gimp.org", d: "Free open-source photo editor. Layers, filters, brushes — the free alternative to Photoshop.", l: "None", s: "Open source creative" },
                { n: "Inkscape", u: "https://inkscape.org", d: "Free professional vector graphics editor. SVG-based. Full Illustrator alternative.", l: "None", s: "Open source design" },
                { n: "Bleachbit", u: "https://www.bleachbit.org", d: "Free disk space cleaner. Delete caches, temp files, browser history. Open-source CCleaner.", l: "None", s: "Privacy community" }
            ]
        },
        {
            id: "photography-image", name: "Photography & Image Tools", icon: "📸", type: "free",
            desc: "Free photo editors, background removers, image optimizers, and photography tools.",
            sites: [
                { n: "Photopea", u: "https://www.photopea.com", d: "Full Photoshop in your browser — layers, masks, filters, opens PSD, XD, AI, Sketch files.", l: "None (ads present)", s: "Viral on X & Reddit" },
                { n: "Remove.bg", u: "https://www.remove.bg", d: "Remove image backgrounds instantly with AI. 1 click, HD quality. Industry standard tool.", l: "Free: lower res; HD paid", s: "Viral on Instagram" },
                { n: "Squoosh", u: "https://squoosh.app", d: "Google's browser image optimizer. Compare codecs (WebP/AVIF/JPEG XL) drag to compare quality.", l: "None", s: "GitHub (Google Labs)" },
                { n: "TinyPNG", u: "https://tinypng.com", d: "Compress PNG and JPEG by 40-90% with zero visible quality loss using AI.", l: "Free: 20MB max file", s: "Web developer standard" },
                { n: "Canva", u: "https://www.canva.com", d: "Free graphic design with 100M+ templates. Social media, presentations, posters, logos.", l: "Pro for premium assets", s: "Mainstream design tool" },
                { n: "Pixlr", u: "https://pixlr.com", d: "Free AI-powered photo editor. Background removal, generative fill, filters, effects.", l: "Some AI tools need account", s: "Photo editing community" },
                { n: "Fotor", u: "https://www.fotor.com", d: "Photo editor with AI tools — enhance, background remove, effects, collage maker.", l: "Free tier available", s: "Photography community" },
                { n: "IloveIMG", u: "https://www.iloveimg.com", d: "Crop, resize, compress, convert images online free. Multi-image batch processing.", l: "Free with some limits", s: "Web tool community" },
                { n: "Birme", u: "https://www.birme.net", d: "Bulk image resize and crop in browser. Process 100 images at once with drag and drop.", l: "None", s: "Photographer community" },
                { n: "Cleanup.pictures", u: "https://cleanup.pictures", d: "Remove any object, person, or watermark from photos with AI inpainting. Stunning results.", l: "Free with limits", s: "Viral on Instagram" },
                { n: "Upscayl", u: "https://upscayl.org", d: "Free AI image upscaler. Increase resolution 4x-8x without losing quality. Open-source.", l: "None", s: "GitHub trending" },
                { n: "LunaPic", u: "https://www.lunapic.com", d: "70+ free photo editing effects in browser. One-click filter, old photo, cartoon, art effects.", l: "None", s: "Photo effects community" },
                { n: "Unsplash", u: "https://unsplash.com", d: "3M+ stunning free stock photos by professional photographers. No attribution required.", l: "None", s: "Design community standard" },
                { n: "Pexels", u: "https://www.pexels.com", d: "Free stock photos and videos. High quality, curated, no attribution required.", l: "None", s: "Creator community standard" },
                { n: "EXIF Viewer", u: "https://exifinfo.org", d: "view all metadata hidden in any photo — GPS, camera settings, timestamps, and more.", l: "None", s: "Photography community" }
            ]
        },
        {
            id: "maps-travel", name: "Maps & Travel Tools", icon: "🗺️", type: "free",
            desc: "Plan trips, explore the world, find destinations, and navigate like a pro — all free.",
            sites: [
                { n: "Google Earth Web", u: "https://earth.google.com/web", d: "Full 3D Earth in your browser — no download. Fly anywhere, see historical imagery, Street View.", l: "None", s: "Classic tool" },
                { n: "OpenStreetMap", u: "https://www.openstreetmap.org", d: "The Wikipedia of maps. Community-built, open-source, freely editable world map.", l: "None", s: "Open mapping community" },
                { n: "Windy", u: "https://www.windy.com", d: "Stunning real-time wind, rain, storm, and temperature maps. Weather forecasting made visual.", l: "None", s: "Viral on Reddit weather" },
                { n: "Ventusky", u: "https://www.ventusky.com", d: "Beautiful animated weather maps for wind, rain, temperature globally. Better than Windy.", l: "None", s: "Weather visualization" },
                { n: "Flightradar24", u: "https://www.flightradar24.com", d: "Watch every commercial flight in the world in real time. Track any plane instantly.", l: "Free basic; paid for details", s: "Aviation enthusiast community" },
                { n: "MarineTraffic", u: "https://www.marinetraffic.com", d: "Track ships and vessels worldwide using AIS data. See every cargo ship and tanker live.", l: "Free basic", s: "Maritime community" },
                { n: "Rome2Rio", u: "https://www.rome2rio.com", d: "Find how to get from anywhere to anywhere — plane, train, bus, ferry, drive, all options.", l: "None", s: "Travel planning" },
                { n: "Wanderlog", u: "https://wanderlog.com", d: "Free AI trip planner. Build itineraries with maps, auto-import bookings, share with others.", l: "Free tier very good", s: "Travel community" },
                { n: "Seat61", u: "https://www.seat61.com", d: "The Man in Seat 61 — ultimate guide to train and ship travel between every country.", l: "None", s: "Travel enthusiast community" },
                { n: "Booking.com", u: "https://www.booking.com", d: "Book hotels, apartments, hostels globally with free cancellation. Price comparison built-in.", l: "Commission on bookings", s: "Travel booking standard" },
                { n: "Hostelworld", u: "https://www.hostelworld.com", d: "World's biggest hostel booking site. Budget travel, real reviews, social travel features.", l: "Small booking fee", s: "Budget travel community" },
                { n: "GasBuddy", u: "https://www.gasbuddy.com", d: "Find cheapest gas station near you in real time. Compare prices, save on every fill-up.", l: "None", s: "Road trip community" },
                { n: "ParkWhiz", u: "https://www.parkwhiz.com", d: "Find and reserve parking spaces in any city. Compare prices, book in advance and save.", l: "None", s: "Urban parking" },
                { n: "Skiplagged", u: "https://skiplagged.com", d: "Find cheap flights with hidden-city ticketing and fare comparison that airlines hate.", l: "None", s: "Viral Reddit travel hacks" },
                { n: "Google Flights", u: "https://flights.google.com", d: "Best free flight search. Price tracking, calendar view, flexible destinations, everywhere search.", l: "None", s: "Travel standard" }
            ]
        },
        {
            id: "food-recipes", name: "Food & Recipe Sites", icon: "🍕", type: "free",
            desc: "Recipe search engines, cooking communities, meal planners, and nutrition calculators.",
            sites: [
                { n: "Allrecipes", u: "https://www.allrecipes.com", d: "World's most popular recipe site. 50,000+ reviewed recipes with step-by-step instructions.", l: "None (ads)", s: "Cooking community" },
                { n: "Yummly", u: "https://www.yummly.com", d: "Personalized recipe recommendations based on diet, allergies, cooking skill, and pantry.", l: "Free tier, some pro features", s: "Food community" },
                { n: "Supercook", u: "https://supercook.com", d: "Enter ingredients you have and get recipes that use exactly what's in your fridge.", l: "None", s: "Viral Reddit cooking" },
                { n: "Tasty", u: "https://tasty.co", d: "BuzzFeed's recipe platform with video how-tos. Beginner-friendly with engaging tutorials.", l: "None (ads)", s: "Social media cooking" },
                { n: "NYT Cooking", u: "https://cooking.nytimes.com", d: "NYT's famous recipe collection with weekly recipe guides and cooking technique videos.", l: "Free with account; some behind paywall", s: "Food journalism" },
                { n: "Serious Eats", u: "https://www.seriouseats.com", d: "Science-based cooking with deep food writing. J. Kenji López-Alt's recipe technique articles.", l: "None", s: "Serious cooking community" },
                { n: "Mealime", u: "https://www.mealime.com", d: "Free meal planning app. Pick recipes, auto-generates grocery list, adjusts for serving size.", l: "Pro for extras", s: "Meal planning community" },
                { n: "Cronometer", u: "https://cronometer.com", d: "Free nutrition tracking with micronutrient detail. Track macros, vitamins, minerals for any food.", l: "Pro for extra features", s: "Nutrition community" },
                { n: "OpenFood Facts", u: "https://world.openfoodfacts.org", d: "Open database of food ingredients, nutrition, and additives for 3M+ products worldwide.", l: "None", s: "Food transparency movement" },
                { n: "TasteAtlas", u: "https://www.tasteatlas.com", d: "Interactive map of traditional dishes from every country. Explore world food culture.", l: "None", s: "Viral on Instagram food" },
                { n: "Pepper", u: "https://www.pepper.it", d: "Community-voted recipe curation for Italian cuisine. Authentic regional recipes.", l: "None", s: "Italian food community" },
                { n: "Epicurious", u: "https://www.epicurious.com", d: "Condé Nast food site with 30+ years of recipes. Professional photography and chef techniques.", l: "None (ads)", s: "Food media" },
                { n: "Food52", u: "https://food52.com", d: "Community recipe sharing and food writing. Heirloom quality content and kitchen product guides.", l: "None", s: "Food community" },
                { n: "BBC Good Food", u: "https://www.bbcgoodfood.com", d: "Trusted British recipes from TV chefs. Step-by-step videos, nutrition info, technique guides.", l: "None", s: "UK food community" },
                { n: "ChefSteps", u: "https://www.chefsteps.com", d: "High-precision cooking techniques from Joule sous vide creators. Science-driven recipes.", l: "Free basic; premium for sous vide", s: "Precision cooking community" }
            ]
        },
        {
            id: "health-fitness", name: "Health & Fitness Apps", icon: "💪", type: "free",
            desc: "Free workout planners, calorie counters, meditation apps, and health tracking tools.",
            sites: [
                { n: "MyFitnessPal", u: "https://www.myfitnesspal.com", d: "World's most popular calorie counter. 14M food database, exercise tracker, nutrition goals.", l: "Premium for advanced features", s: "Health community standard" },
                { n: "Cronometer", u: "https://cronometer.com", d: "Detailed nutrition tracking with micronutrients. Track vitamins, minerals beyond just macros.", l: "Free tier good", s: "Serious nutrition community" },
                { n: "Bodyweight fitness subreddit workout", u: "https://www.reddit.com/r/bodyweightfitness/wiki/kb/recommended_routine", d: "Free bodyweight workout program from r/bodyweightfitness community. No gym needed.", l: "None", s: "Reddit fitness" },
                { n: "Google Fit", u: "https://www.google.com/fit", d: "Free health tracking. Steps, workouts, heart rate from your phone or Wear OS watch.", l: "None", s: "Android ecosystem" },
                { n: "Strava", u: "https://www.strava.com", d: "Run and cycling tracking. GPS routes, social feed, segment leaderboards. Free tier solid.", l: "Premium for route planning", s: "Running/cycling community" },
                { n: "Insight Timer", u: "https://insighttimer.com", d: "Free meditation app with 150,000+ free guided meditations. Largest meditation community.", l: "Plus for offline & exclusive courses", s: "Meditation community" },
                { n: "7 Minute Workout", u: "https://7minuteworkout.jnj.com", d: "Official Johnson & Johnson 7-minute workout app. Evidence-based high-intensity intervals.", l: "None", s: "HIIT community" },
                { n: "Nike Training Club", u: "https://www.nike.com/ntc-app", d: "Nike's free workout app — 190+ workouts with video instructions by elite trainers.", l: "None (totally free)", s: "Fitness community" },
                { n: "SweatPals", u: "https://www.sweatpals.com", d: "Community-driven workout sharing. Post and discover new workout routines from athletes.", l: "None", s: "Fitness community" },
                { n: "Jefit", u: "https://www.jefit.com", d: "Free gym workout tracker. 1,300+ exercise database, workout logging, progress graphs.", l: "Elite for advanced planning", s: "Gym community" },
                { n: "Healthline", u: "https://www.healthline.com", d: "Evidence-based health information. Reviewed by medical professionals. Symptoms, nutrition, fitness.", l: "None", s: "Health research community" },
                { n: "Waking Up", u: "https://www.wakingup.com", d: "Sam Harris meditation app. Theory-first, philosophical approach to mindfulness. Free trial.", l: "Paid after trial (scholarships available)", s: "Philosophy & mindfulness community" },
                { n: "Yoga with Adriene", u: "https://yogawithadriene.com", d: "Free yoga for all levels on YouTube. No subscription, no gear. 10M+ subscribers.", l: "None", s: "Yoga community" },
                { n: "FitBod", u: "https://www.fitbod.me", d: "AI personal trainer. Adapts workout plans based on your muscle recovery and equipment.", l: "Free trial; paid subscription", s: "Gym fitness community" },
                { n: "Headspace", u: "https://www.headspace.com", d: "Guided meditation and sleep app. Science-backed mindfulness from the world's most cited app.", l: "Free basics; paid for courses", s: "Wellness community standard" }
            ]
        },
        {
            id: "social-media-tools", name: "Social Media Tools", icon: "📱", type: "free",
            desc: "Schedule posts, analyze performance, grow followers, and manage multiple accounts — all free.",
            sites: [
                { n: "Buffer", u: "https://buffer.com", d: "Schedule posts across Twitter, Instagram, LinkedIn, TikTok, and Facebook. 3 channels free.", l: "Free: 3 channels, 10 posts each", s: "Creator tools" },
                { n: "Later", u: "https://later.com", d: "Visual Instagram scheduler with link-in-bio page. Plan a week of posts visually.", l: "Free: 30 posts/month", s: "Instagram creator community" },
                { n: "Hootsuite", u: "https://www.hootsuite.com", d: "Social media management platform. Schedule, monitor, and analyze multiple accounts.", l: "Limited free tier", s: "Social media management" },
                { n: "TweetDeck", u: "https://tweetdeck.twitter.com", d: "Twitter's official free multi-column dashboard. Manage lists, search columns, schedule tweets.", l: "Free with Twitter account", s: "Twitter power users" },
                { n: "Canva for Social", u: "https://www.canva.com/social-media", d: "Design social media posts, stories, and reels with 100M+ templates.", l: "Free tier very solid", s: "Creator community" },
                { n: "Metricool", u: "https://metricool.com", d: "Free social media analytics + scheduler. Instagram, TikTok, Pinterest, Google Ads analytics.", l: "Free: 1 brand", s: "Social media analytics" },
                { n: "LikesFixer", u: "https://www.likesfixer.com", d: "Analytics and reporting for your Instagram account. Engagement rates, best post times.", l: "None", s: "Instagram community" },
                { n: "Sprout Social (Trial)", u: "https://sproutsocial.com", d: "Enterprise social media management. 30-day free trial to experience the best-in-class tool.", l: "Paid after trial", s: "Social media management" },
                { n: "Phlanx", u: "https://phlanx.com", d: "Free Instagram engagement rate calculator. Check any account's real engagement vs. followers.", l: "None", s: "Influencer community" },
                { n: "Postly", u: "https://postly.ai", d: "AI-assisted social media scheduler. Generate captions with AI, schedule across platforms.", l: "Free tier available", s: "Creator tools" },
                { n: "Brand24", u: "https://brand24.com", d: "Social media monitoring — find every mention of your brand or keyword across the web.", l: "14-day free trial", s: "Brand management" },
                { n: "Linktree", u: "https://linktr.ee", d: "Create a single link page for bio. Add all your links — YouTube, merch, Spotify, Instagram.", l: "Free tier very good", s: "Creator tool standard" },
                { n: "Taplink", u: "https://taplink.at", d: "Alternative to Linktree with more design flexibility. Mini-website for your Instagram bio.", l: "Free tier available", s: "Instagram creator tools" },
                { n: "Social Blade", u: "https://socialblade.com", d: "Track YouTube, Twitch, Instagram, TikTok stats for any channel. See growth history.", l: "None", s: "Creator analytics" },
                { n: "StreamYard", u: "https://streamyard.com", d: "Browser-based live streaming studio. Multi-platform streaming, screen share, guest interviews.", l: "Free with watermark", s: "Live streaming community" }
            ]
        },
        {
            id: "file-conversion", name: "File Conversion Tools", icon: "🔄", type: "free",
            desc: "Convert between any file format — PDFs, images, videos, audio, documents — all browser-based.",
            sites: [
                { n: "Smallpdf", u: "https://smallpdf.com", d: "PDF toolkit — compress, merge, split, convert, sign PDFs. 21 PDF tools in one place.", l: "Free: 2 tasks/day", s: "PDF community standard" },
                { n: "PDF24", u: "https://tools.pdf24.org", d: "Unlimited free PDF tools — merge, split, compress, OCR, e-sign. No file size limit.", l: "None", s: "PDF tools community" },
                { n: "IlovePDF", u: "https://www.ilovepdf.com", d: "PDF tools: merge, split, compress, convert Word/Excel/PowerPoint to PDF.", l: "Free with some limits", s: "Document community" },
                { n: "CloudConvert", u: "https://cloudconvert.com", d: "200+ supported file format conversions. Documents, images, audio, video, fonts, archives.", l: "Free: 25 files/day", s: "File conversion standard" },
                { n: "Convertio", u: "https://convertio.co", d: "Convert files between 300+ formats. Supports video, audio, images, docs, and more.", l: "Free: 100MB files", s: "File conversion tools" },
                { n: "FreeConvert", u: "https://www.freeconvert.com", d: "Free file converter for 1500+ formats. Video, audio, image, document conversion all free.", l: "Free: 1GB files", s: "File tools community" },
                { n: "OnlineConverting", u: "https://www.onlineconverting.com", d: "Batch file conversion for documents, video, images. Simple interface, fast processing.", l: "None", s: "File tools" },
                { n: "FFmpeg.wasm", u: "https://ffmpegwasm.netlify.app", d: "FFmpeg running in your browser. Transcode any media format using the world standard tool.", l: "None", s: "Developer community" },
                { n: "Word to PDF", u: "https://www.adobe.com/acrobat/online/word-to-pdf.html", d: "Adobe's free Word to PDF converter. Preserves formatting, fonts, layout perfectly.", l: "Free: limited per day", s: "Document tool" },
                { n: "Zamzar", u: "https://www.zamzar.com", d: "Online file conversion for documents, images, video, audio, e-books, and CAD files.", l: "Free: 200MB files", s: "File conversion standard" },
                { n: "Online2PDF", u: "https://online2pdf.com", d: "Merge, convert, and split PDFs. Add headers, footers, page numbers to PDFs.", l: "None", s: "PDF tools" },
                { n: "Img2Go", u: "https://www.img2go.com", d: "Image converter supporting 200+ formats. Bulk resize, rotate, watermark photos.", l: "Free with limits", s: "Image tools" },
                { n: "TechWelkin Tools", u: "https://techwelkin.com/tools", d: "Word count, text formatting, case converter, and document tools all free.", l: "None", s: "Writing tools" },
                { n: "PDF2DOC", u: "https://pdf2doc.com", d: "Convert PDF to editable Word documents. Maintains layout and formatting accurately.", l: "None (5 files/hour)", s: "Document tools" },
                { n: "Docupub", u: "https://docupub.com", d: "PDF compression and splitting. Resize PDFs for email, reduce file size dramatically.", l: "None", s: "PDF tools" }
            ]
        },
        {
            id: "books-reading", name: "Books & Reading", icon: "📖", type: "free",
            desc: "Free e-books, audiobooks, reading trackers, book summaries, and literary databases.",
            sites: [
                { n: "Project Gutenberg", u: "https://www.gutenberg.org", d: "70,000+ free public domain books. Download in any format — PDF, EPUB, Kindle. No restrictions.", l: "None", s: "Classic literary resource" },
                { n: "Open Library", u: "https://openlibrary.org", d: "Internet Archive's book library. Borrow digital copies of 3.5M books for free.", l: "Free to borrow 1 book at a time", s: "Library community" },
                { n: "Standard Ebooks", u: "https://standardebooks.org", d: "Free high-quality public domain ebooks with beautiful formatting and modern typography.", l: "None", s: "Ebook community" },
                { n: "Goodreads", u: "https://www.goodreads.com", d: "World's largest book social network. Track reading, discover books, see friends' shelves.", l: "None", s: "Book community standard" },
                { n: "Libby App", u: "https://libbyapp.com", d: "Borrow ebooks and audiobooks from your public library instantly. Free with library card.", l: "Free with library card", s: "Library community" },
                { n: "Blinkist", u: "https://www.blinkist.com", d: "Read bestselling non-fiction books in 15 minutes. AI-generated key insights and summaries.", l: "Free trial; then paid", s: "Book summary community" },
                { n: "Scribd", u: "https://www.scribd.com", d: "Unlimited books, audiobooks, magazines, and podcasts for $11/month. Free 30-day trial.", l: "free trial then paid", s: "Reading community" },
                { n: "Literaturnet", u: "https://www.literatura.net", d: "Free Spanish and Latin American literature database. Classic and contemporary works.", l: "None", s: "Spanish literature community" },
                { n: "ManyBooks", u: "https://manybooks.net", d: "50,000+ free ebooks in all genres. User reviews, recommendations, multiple download formats.", l: "None", s: "Ebook community" },
                { n: "Book-a-Minute", u: "https://rinkworks.com/bookaminute", d: "Ultra-compressed summaries of classic literature books. Hilarious and surprisingly accurate.", l: "None", s: "Reddit r/books" },
                { n: "Anna's Archive", u: "https://annas-archive.org", d: "Largest digital library shadow catalog. Search among 35M+ pirated books and papers.", l: "Legal grey area", s: "Library liberation community" },
                { n: "Z-Library", u: "https://z-lib.id", d: "World's largest ebook library. 11M+ books and 84M+ articles available for free download.", l: "Legal grey area", s: "Academic community" },
                { n: "LibriVox", u: "https://librivox.org", d: "Free public domain audiobooks read by volunteers. 15,000+ recordings in 50+ languages.", l: "None", s: "Audiobook community" },
                { n: "Lit2Go", u: "https://etc.usf.edu/lit2go", d: "Free audiobooks from University of South Florida. Classic literature in MP3 format.", l: "None", s: "Education community" },
                { n: "The Online Books Page", u: "https://onlinebooks.library.upenn.edu", d: "Penn's index to free online books. Millions of books in English and other languages.", l: "None", s: "Library community" }
            ]
        }
    ];

    // Append to DATA array
    if (typeof DATA !== 'undefined') {
        EXTRA2.forEach(function (cat) { DATA.push(cat); });
    }
})();
