// merge-categories.js — Consolidate overlapping categories (69 → ~25)
// Runs after all data-extra files load but before rendering.
// All sites are preserved — only category grouping changes.
(function () {
    if (typeof DATA === 'undefined') return;

    // ─── MERGE MAP ───
    // Key = absorbed category id, Value = target category id
    // Sites from "absorbed" get appended to "target", then absorbed is removed.
    const MERGE = {
        // === AI consolidation ===
        "ai-frontier-2026": "ai-tools",          // → AI-Powered Tools
        "ai-agents-2026": "ai-tools",          // → AI-Powered Tools
        "productivity-ai-2026": "ai-tools",          // → AI-Powered Tools

        "agentic-browsers": "llm-assistants",    // → LLMs & AI Assistants

        "ai-writing-tools": "ai-writing-research",  // data-extra-4 → AI Writing & Research
        "ai-presentation": "ai-writing-research",  // data-extra-3 → AI Writing & Research

        "ai-image-2026": "ai-tools",         // → AI-Powered Tools
        "ai-video-2026": "ai-tools",         // → AI-Powered Tools

        "ai-voice-audio": "ai-music-audio",    // → AI Voice & Audio (merge into AI Music & Audio)

        "ai-coding-dev": "local-ai-tools",    // AI Coding Tools → Run AI Locally (becomes "AI Coding & Dev")

        // === Design consolidation ===
        "design-creative": "design-creative",   // same id — handled by dedup below
        "design-ui-tools": "design-creative",   // data-extra-4 → Design & Creative
        "photography-image": "design-creative",   // data-extra-2 → Design & Creative
        "ai-image-gen": "design-creative",   // data-extra-2 AI Image Gen → Design & Creative
        "video-editing": "design-creative",   // data-extra-2 Video Editing → Design & Creative

        // === Developer consolidation ===
        "dev-utilities": "developer-tools",   // data-extra → Developer & Code Tools
        "dev-resources": "developer-tools",   // data-extra-4 → Developer & Code Tools

        // === Productivity consolidation ===
        "productivity-focus": "productivity",       // data-extra → Productivity & Utilities
        "browser-power-tools": "productivity",       // data-extra → Productivity & Utilities
        "everyday-utilities": "productivity",       // data-extra-5 → Productivity & Utilities
        "file-conversion": "productivity",       // data-extra-2 → Productivity & Utilities

        // === Learning consolidation ===
        "learning-education": "learning",           // data-extra → Learning & Education
        "books-reading": "learning",           // data-extra-2 → Learning & Education
        "educator-tools": "learning",           // index.html → Learning & Education

        // === Privacy & Security consolidation ===
        "cybersecurity-privacy": "privacy-security",   // data-extra → Privacy & Security
        "security-privacy": "privacy-security",   // data-extra-4 → Privacy & Security
        "privacy-browsers": "privacy-security",   // index.html → Privacy & Security
        "ad-blockers": "privacy-security",   // index.html → Privacy & Security
        "vpn-services": "privacy-security",   // index.html → Privacy & Security

        // === Finance consolidation ===
        "finance-life": "finance-investing",  // data-extra → Finance & Investing (rename below)
        "career-jobs": "finance-investing",  // data-extra-4 → Finance & Career

        // === Gaming consolidation ===
        "game-emulators": "gaming",             // data-extra-2 → Gaming & Retro Arcade

        // === Movies consolidation ===
        "movies-piracy": "piracy-movies",      // data-extra → Movies & TV (index.html)

        // === Sports consolidation ===
        "sports-streaming": "sports-streaming",   // same id — handled by dedup below

        // === Streaming consolidation ===
        "music-streaming": "streaming",          // data-extra-2 → Streaming & Media

        // === Hidden Gems consolidation ===
        "hidden-gems": "hidden-gems",        // same id — handled by dedup below

        // === Content Creation consolidation ===
        "tools-for-creators": "design-creative",  // index.html → Design & Creative
        "tools-for-podcasters": "design-creative",  // index.html → Design & Creative

        // === Life & Travel consolidation ===
        "maps-travel": "open-source-alts", // data-extra-2 → Open Source & More
        "remote-work": "open-source-alts", // data-extra-5 → Open Source & More
        "food-recipe": "open-source-alts", // data-extra-2 → Open Source & More
        "health-fitness": "open-source-alts", // data-extra-2 → Open Source & More
        "app-stores-apk": "open-source-alts", // data-extra-2 → Open Source & More

        // === Open Source & More consolidation ===
        "web3-crypto": "open-source-alts",   // data-extra-2 → Open Source & More
        "seo-marketing": "open-source-alts",   // data-extra-5 → Open Source & More
        "social-media": "open-source-alts",   // data-extra-2 → Open Source & More
        "data-research": "open-source-alts",   // data-extra-2 → Open Source & More
        "space-science": "open-source-alts",   // data-extra-5 → Open Source & More
        "piracy-games": "open-source-alts",   // index.html → Open Source & More
    };

    // ─── RENAME MAP ── (applied after merge)
    const RENAME = {
        "ai-music-audio": { name: "AI Voice & Audio", icon: "🎙️", desc: "Generate music, clone voices, split tracks, and create studio-quality audio with AI." },
        "local-ai-tools": { name: "AI Coding & Dev Tools", icon: "💻", desc: "AI-powered coding assistants, local LLM runners, and developer-focused AI tools." },
        "finance-investing": { name: "Finance & Career", icon: "💰", desc: "Money tracking, investing, job search, career tools, and financial utilities." },
        "open-source-alts": { name: "More Tools & Resources", icon: "🌍", desc: "Open source, crypto, SEO, social media, travel, food, health, science, and more." },
        "privacy-security": { name: "Privacy & Security", icon: "🔒", desc: "VPNs, ad blockers, privacy browsers, password managers, encryption, and security tools." },
        "design-creative": { name: "Design & Creative", icon: "🎨", desc: "Design tools, video editing, photography, 3D, motion graphics, creators tools, and more." },
    };

    // ─── Step 1: Deduplicate categories with same id ───
    // (e.g., two entries with id "design-creative" from index.html and data-extra.js)
    var idMap = {};
    var toRemove = [];

    DATA.forEach(function (cat, i) {
        if (idMap[cat.id] !== undefined) {
            // Merge sites into the first occurrence
            var target = DATA[idMap[cat.id]];
            // Deduplicate by URL
            var existingUrls = new Set(target.sites.map(function (s) { return s.u; }));
            cat.sites.forEach(function (site) {
                if (!existingUrls.has(site.u)) {
                    target.sites.push(site);
                    existingUrls.add(site.u);
                }
            });
            toRemove.push(i);
        } else {
            idMap[cat.id] = i;
        }
    });

    // Remove duplicates (reverse order to preserve indices)
    toRemove.sort(function (a, b) { return b - a; });
    toRemove.forEach(function (i) { DATA.splice(i, 1); });

    // ─── Step 2: Apply merge map (multi-pass to handle chains) ───
    // Run multiple passes in case of ordering issues
    for (var pass = 0; pass < 3; pass++) {
        idMap = {};
        DATA.forEach(function (cat, i) { idMap[cat.id] = i; });

        toRemove = [];
        Object.keys(MERGE).forEach(function (absorbedId) {
            var targetId = MERGE[absorbedId];
            if (absorbedId === targetId) return; // already handled by dedup

            var absorbedIdx = idMap[absorbedId];
            var targetIdx = idMap[targetId];

            if (absorbedIdx === undefined || targetIdx === undefined) return;

            var target = DATA[targetIdx];
            var absorbed = DATA[absorbedIdx];

            // Merge sites, dedup by URL
            var existingUrls = new Set(target.sites.map(function (s) { return s.u; }));
            absorbed.sites.forEach(function (site) {
                if (!existingUrls.has(site.u)) {
                    target.sites.push(site);
                    existingUrls.add(site.u);
                }
            });

            toRemove.push(absorbedIdx);
        });

        // Remove absorbed categories
        toRemove = [...new Set(toRemove)].sort(function (a, b) { return b - a; });
        toRemove.forEach(function (i) { DATA.splice(i, 1); });
    } // end multi-pass

    // ─── Step 3: Apply renames ───
    DATA.forEach(function (cat) {
        if (RENAME[cat.id]) {
            var r = RENAME[cat.id];
            if (r.name) cat.name = r.name;
            if (r.icon) cat.icon = r.icon;
            if (r.desc) cat.desc = r.desc;
        }
    });

    // ─── Step 4: Global URL dedup — first occurrence wins ───
    var seenUrls = new Set();
    var dupCount = 0;
    DATA.forEach(function (cat) {
        if (!cat.sites) return;
        cat.sites = cat.sites.filter(function (site) {
            if (!site || !site.u) return false;
            var key = String(site.u).replace(/\/+$/, '').toLowerCase();
            if (seenUrls.has(key)) { dupCount++; return false; }
            seenUrls.add(key);
            return true;
        });
    });

    // ─── Debug log ───
    console.log('[merge-categories] Final: ' + DATA.length + ' categories, ' +
        DATA.reduce(function (sum, c) { return sum + c.sites.length; }, 0) + ' total sites' +
        (dupCount ? ' (' + dupCount + ' duplicates removed)' : ''));
})();
