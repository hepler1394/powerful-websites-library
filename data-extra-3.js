// data-extra-3.js — 100 cutting-edge sites as of February 2026
// Deep research: viral X threads, Product Hunt, GitHub trending, Reddit megathreads
(function () {
    const EXTRA3 = [
        {
            id: "ai-frontier-2026", name: "🔥 AI Frontier 2026", icon: "🔥", type: "llm",
            desc: "The most powerful, newest AI models and tools launching in 2025-2026. The cutting edge.",
            sites: [
                { n: "Grok 3 (xAI)", u: "https://grok.x.ai", d: "Elon Musk's xAI model. Grok 3 beats GPT-4o and Claude on reasoning benchmarks. Real-time X data.", l: "Free on X Premium", s: "Viral X launch Feb 2025" },
                { n: "Claude 3.7 Sonnet", u: "https://claude.ai", d: "Anthropic's hybrid reasoning model. Extended thinking mode gives PhD-level problem solving.", l: "Free tier; Pro for extended thinking", s: "Viral X AI community Feb 2025" },
                { n: "Gemini 2.0 Flash", u: "https://gemini.google.com", d: "Google's fastest multimodal AI. Processes images, video, audio, code. 1M token context.", l: "Free via Google account", s: "Google DeepMind launch Jan 2025" },
                { n: "DeepSeek R1", u: "https://chat.deepseek.com", d: "Open-source reasoning model matching o1. Shocked the AI world at $0.14/M tokens vs $15 for GPT.", l: "Free", s: "Viral worldwide Jan 2025" },
                { n: "Qwen 2.5 Max", u: "https://chat.qwenlm.ai", d: "Alibaba's frontier model competing with GPT-4o. Free access, strong coding and multilingual.", l: "Free", s: "X AI community 2025" },
                { n: "Google AI Studio", u: "https://aistudio.google.com", d: "Free access to Gemini 2.0 Flash with 1M context. Build AI apps, test prompts, generate video.", l: "Free (generous limits)", s: "Developer community 2025" },
                { n: "Groq Cloud", u: "https://groq.com", d: "Run Llama, Mixtral, Gemma at 800+ tokens/second. World's fastest AI inference. Free API.", l: "Free tier generous", s: "Viral X dev community" },
                { n: "Together AI", u: "https://www.together.ai", d: "Run 150+ open-source models. Fine-tune your own models. Cheapest inference for Llama & Mistral.", l: "Free $25 credits on signup", s: "ML engineering community" },
                { n: "Perplexity Spaces", u: "https://www.perplexity.ai/spaces", d: "AI research workspaces with custom instructions, uploaded files, and shared team context.", l: "Free; Pro for advanced models", s: "X productivity community 2025" },
                { n: "ChatGPT Projects", u: "https://chatgpt.com", d: "OpenAI's project-based AI workspaces. Persistent context, file uploads, custom instructions per project.", l: "Free; Plus for GPT-4o", s: "OpenAI launch 2025" }
            ]
        },
        {
            id: "ai-coding-dev", name: "💻 AI Coding Tools 2026", icon: "💻", type: "free",
            desc: "AI pair programmers, code editors, and automated dev agents reshaping software development.",
            sites: [
                { n: "Cursor AI", u: "https://cursor.sh", d: "The AI-first code editor. Tab-complete entire functions, chat with your codebase, debug with AI.", l: "Free: 2000 completions; Pro $20/mo", s: "Viral X developer community" },
                { n: "Windsurf IDE", u: "https://codeium.com/windsurf", d: "Codeium's AI IDE with Cascade agent mode. The autonomous coding agent that fixes entire features.", l: "Free tier available", s: "Viral X dev community Jan 2025" },
                { n: "Bolt.new", u: "https://bolt.new", d: "Full-stack AI app builder in browser. Describe your app and get working Next.js code in 30 seconds.", l: "Free: 100k tokens/day", s: "Viral Product Hunt Oct 2024" },
                { n: "v0.dev", u: "https://v0.dev", d: "Vercel's AI UI generator. Text to React components with Tailwind, copy-paste into your project.", l: "Free monthly credits", s: "Viral X frontend community" },
                { n: "Lovable.dev", u: "https://lovable.dev", d: "Build full-stack apps with AI in minutes. React + Supabase. From idea to deployed app instantly.", l: "Free tier available", s: "Viral X startup community" },
                { n: "Replit Agent", u: "https://replit.com/agent", d: "Tell Replit AI what to build, it codes, tests, and deploys your app autonomously.", l: "Free with Replit account", s: "Viral dev community" },
                { n: "GitHub Copilot (Free)", u: "https://github.com/features/copilot", d: "GitHub made Copilot free! AI pair programmer in VS Code, JetBrains, Neovim. 2000 completions/month.", l: "Free tier launched Dec 2024", s: "Developer community" },
                { n: "Codeium (Free)", u: "https://codeium.com", d: "Truly free AI code completion and chat. Works in VS Code, JetBrains, and 40+ IDEs.", l: "Free forever for individuals", s: "Developer community" },
                { n: "Aider", u: "https://aider.chat", d: "AI pair programmer in your terminal. Edits code across your entire repo from command line.", l: "Free open-source", s: "GitHub trending 2025" },
                { n: "Open WebUI", u: "https://openwebui.com", d: "Self-hosted ChatGPT-like UI for local LLMs. Connect Ollama, OpenAI, Groq. Full feature parity.", l: "Free open-source", s: "GitHub 50k+ stars" }
            ]
        },
        {
            id: "ai-agents-2026", name: "🤖 AI Agents & Automation", icon: "⚡", type: "agent",
            desc: "Autonomous AI agents that browse, code, research, and complete tasks while you sleep.",
            sites: [
                { n: "Manus AI", u: "https://manus.im", d: "World's most viral AI agent. Autonomous computer-use agent — it browses, codes, researches for you.", l: "Invite-based as of Feb 2025", s: "Went viral overnight March 2025" },
                { n: "Flowith OS", u: "https://flowith.net", d: "AI canvas with parallel agent threads. Multiple AI agents working simultaneously on one task.", l: "Free tier available", s: "Viral X agent community" },
                { n: "Dify.ai", u: "https://dify.ai", d: "Open-source platform to build AI apps and agents. RAG pipelines, chatbots, workflow automation.", l: "Free cloud; self-host option", s: "GitHub 60k+ stars" },
                { n: "Flowise", u: "https://flowiseai.com", d: "No-code LangChain agent builder. Drag-and-drop AI workflow designer. Self-hostable.", l: "Free open-source", s: "GitHub trending 2024-25" },
                { n: "CrewAI", u: "https://crewai.com", d: "Framework for multi-agent AI systems. Roles, goals, tasks — build teams of specialized AI agents.", l: "Free open-source; cloud tier", s: "GitHub 25k+ stars" },
                { n: "Relevance AI", u: "https://relevanceai.com", d: "No-code AI agent builder. Sales agents, research agents, data agents — deploy in minutes.", l: "Free tier available", s: "Product Hunt 2025" },
                { n: "Lindy AI", u: "https://lindy.ai", d: "AI agents for your workflows. Email responder, meeting scheduler, lead qualifier — all automated.", l: "Free: 400 tasks/month", s: "Viral X productivity 2025" },
                { n: "Coze", u: "https://www.coze.com", d: "ByteDance's AI bot builder. Create agents with plugins, memory, knowledge bases. Deploy everywhere.", l: "Free tier very generous", s: "Viral AI builder community" },
                { n: "AnythingLLM", u: "https://anythingllm.com", d: "All-in-one private AI assistant. Upload docs, chat with a local LLM, full RAG pipeline.", l: "Free open-source", s: "GitHub trending 2024" },
                { n: "AutoGen Studio", u: "https://autogen-studio.com", d: "Microsoft's visual multi-agent workflow builder. Drag-drop agents, see them work in real time.", l: "Free open-source", s: "Microsoft Research 2025" }
            ]
        },
        {
            id: "ai-video-2026", name: "🎬 AI Video Generation 2026", icon: "🎥", type: "free",
            desc: "Text-to-video and video editing AI — the newest wave of cinematic AI video tools for 2026.",
            sites: [
                { n: "Sora (OpenAI)", u: "https://sora.com", d: "OpenAI's text-to-video AI. Generate cinematic 1080p videos from a text prompt. Industry-changing.", l: "ChatGPT Plus/Pro subscribers", s: "Launched Dec 2024, went viral" },
                { n: "Veo 2 (Google)", u: "https://deepmind.google/technologies/veo/veo-2", d: "Google DeepMind's video generation AI. Photorealistic, understands cinematic language and physics.", l: "Limited access via VideoFX", s: "Google launch Dec 2024" },
                { n: "Hailuo AI", u: "https://hailuoai.com", d: "MiniMax's viral video AI. Generate 6-second cinematic shots from text or image for free.", l: "Free: 50 credits/day", s: "Viral on Instagram & X Jan 2025" },
                { n: "Kling AI", u: "https://klingai.com", d: "Kuaishou's video AI. Text to video, image to video. Up to 3 minutes. Cinematic quality output.", l: "Free tier available", s: "Viral X AI community" },
                { n: "Runway Gen-3", u: "https://runwayml.com", d: "Professional AI video studio. Gen-3 Alpha: highest quality AI video generation on the market.", l: "Free trial credits", s: "Viral creative community" },
                { n: "Wan.video", u: "https://wan.video", d: "Open-source video generation model by Alibaba. Run locally or via API. Massive viral moment.", l: "Free (API and local)", s: "Viral X video community 2025" },
                { n: "Hedra AI", u: "https://www.hedra.com", d: "Create realistic talking-head videos from audio and a single photo. Character-1 model.", l: "Free credits monthly", s: "Viral X AI community" },
                { n: "HeyGen", u: "https://www.heygen.com", d: "AI avatar video maker. Create spokesperson videos with AI avatars in 40+ languages.", l: "Free: 1 min video/month", s: "Viral business creator community" },
                { n: "Captions AI", u: "https://www.captions.ai", d: "AI-powered video captions, eye contact, background removal. Makes video creation automatic.", l: "Free tier available", s: "Viral TikTok creator community" },
                { n: "Luma Dream Machine", u: "https://lumalabs.ai/dream-machine", d: "Luma's text-to-video and image-to-video AI. High realism, smooth motion, free credits daily.", l: "Free: 30 generations/month", s: "Viral on X & Instagram" }
            ]
        },
        {
            id: "ai-image-2026", name: "🎨 AI Image Gen 2026", icon: "🖌️", type: "free",
            desc: "The newest, most powerful AI image generators released in 2025-2026.",
            sites: [
                { n: "Flux 1.1 Pro Ultra", u: "https://replicate.com/black-forest-labs/flux-1.1-pro-ultra", d: "Black Forest Labs' FLUX model dominates AI art quality. Better than Midjourney for photorealism.", l: "API credits needed", s: "Viral X AI image community 2024" },
                { n: "Recraft V3", u: "https://www.recraft.ai", d: "Recraft V3 topped Hugging Face benchmarks. Best for design, illustration, and brand consistency.", l: "Free: 50 daily", s: "Viral X design community 2025" },
                { n: "Ideogram 2.0", u: "https://ideogram.ai", d: "Ideogram 2.0 generates incredible text-in-image. Posters, logos, signs — stunning text accuracy.", l: "Free: 10 slow generations/day", s: "Viral X design community 2025" },
                { n: "Midjourney (Web)", u: "https://www.midjourney.com", d: "The gold standard for AI art quality. V6.1 is stunningly photorealistic. Now has a web app.", l: "Paid ($10/mo minimum)", s: "AI art community standard" },
                { n: "Grok Aurora", u: "https://x.com/grok", d: "xAI's built-in image generator inside Grok. FLUX-based, free to X Free users.", l: "Free with X account", s: "Viral X Jan 2025" },
                { n: "Adobe Firefly 3", u: "https://firefly.adobe.com", d: "Adobe Firefly 3 with Structure Reference and Style Reference. Commercially safe AI art.", l: "Free credits monthly", s: "Adobe launch 2025" },
                { n: "Freepik AI Image", u: "https://www.freepik.com/ai/image-generator", d: "Free AI image generator with multiple model options. Part of Freepik's massive design platform.", l: "Free tier available", s: "Design community" },
                { n: "Pika 2.0", u: "https://pika.art", d: "Pika 2.0 with Pikaffects — add crushing, exploding, melting effects to any video or image.", l: "Free credits daily", s: "Viral X creative community 2025" },
                { n: "Krea Real-Time", u: "https://www.krea.ai", d: "Draw and see AI generate matching images in real time as you sketch. Insanely responsive.", l: "Free daily limit", s: "Viral X design community" },
                { n: "Tensor.art", u: "https://tensor.art", d: "Free Stable Diffusion + FLUX image gen with community model library. Unlimited free runs.", l: "Free", s: "AI art community" }
            ]
        },
        {
            id: "ai-voice-audio", name: "🎙️ AI Voice & Audio 2026", icon: "🎙️", type: "free",
            desc: "Clone voices, generate speech, remove noise, and create AI music — the latest audio AI tools.",
            sites: [
                { n: "ElevenLabs v3", u: "https://elevenlabs.io", d: "ElevenLabs now does dubbing, sound effects, and audiobook generation. Best voice AI period.", l: "Free: 10k chars/month", s: "Industry standard 2025" },
                { n: "Play.ai", u: "https://play.ai", d: "Talk live with an AI persona. Real-time conversational AI — instant voice-to-voice with any character.", l: "Free tier available", s: "Viral X AI community 2025" },
                { n: "Vapi AI", u: "https://vapi.ai", d: "Voice AI for developers. Build phone AI agents that handle calls. 50+ languages, ultra-low latency.", l: "Free: $10 credits on signup", s: "Developer community 2025" },
                { n: "Cartesia AI", u: "https://cartesia.ai", d: "Real-time text-to-speech with sonic model. 90ms latency. The fastest voice AI for apps.", l: "Free API tier", s: "Developer community 2025" },
                { n: "Fish Audio", u: "https://fish.audio", d: "Voice cloning in seconds. Upload 10 seconds of audio to clone any voice for TTS.", l: "Free: limited generations", s: "Viral X voice community" },
                { n: "Murf AI", u: "https://murf.ai", d: "120+ AI voices for videos, podcasts, and presentations. Studio-quality TTS with emotion control.", l: "Free: 10 min audio", s: "Creator community" },
                { n: "Udio v2", u: "https://www.udio.com", d: "Udio v2 creates full songs with real-time streaming. Cover art, stems, remix — best free music AI.", l: "Free: 600 credits/month", s: "Viral music AI community" },
                { n: "Suno v4", u: "https://suno.com", d: "Suno v4 creates radio-quality songs in seconds. New personalization and style memory features.", l: "Free: 50 songs/day", s: "Viral music AI #1 tool" },
                { n: "Airia (Adobe Audio)", u: "https://podcast.adobe.com/enhance", d: "Adobe's AI mic filter. Makes any recording sound like a studio mic. Free and stunning quality.", l: "Free", s: "Viral X creator community" },
                { n: "Cleanvoice AI", u: "https://cleanvoice.ai", d: "Strips filler words (um, uh), breathing, mouth noise from podcast audio automatically.", l: "Free: 30 min trial", s: "Podcast community" }
            ]
        },
        {
            id: "local-ai-tools", name: "🏠 Run AI Locally (Free)", icon: "🏠", type: "free",
            desc: "Run powerful AI models completely free on your own computer — no API keys, no data leaks.",
            sites: [
                { n: "Ollama", u: "https://ollama.com", d: "Run Llama 3.3, Mistral, DeepSeek R1, Qwen locally with one command. The easiest local AI runner.", l: "Free forever", s: "GitHub 100k+ stars" },
                { n: "LM Studio", u: "https://lmstudio.ai", d: "Beautiful desktop app to download and run local LLMs. GUI for GGUF models, OpenAI-compatible API.", l: "Free forever", s: "GitHub 50k+ stars" },
                { n: "Jan.ai", u: "https://jan.ai", d: "Open-source ChatGPT alternative that runs 100% offline. Model hub, OpenAI-compatible server.", l: "Free open-source", s: "GitHub trending 2025" },
                { n: "Msty", u: "https://msty.app", d: "Local AI app with chat, comparison mode, and model management. Beautiful UI for local LLMs.", l: "Free tier available", s: "GitHub trending 2025" },
                { n: "GPT4All", u: "https://gpt4all.io", d: "Run powerful LLMs on CPU with no GPU required. Desktop app, local docs, privacy-first.", l: "Free open-source", s: "GitHub 70k+ stars" },
                { n: "Pinokio", u: "https://pinokio.computer", d: "One-click installer for AI apps — ComfyUI, Automatic1111, any AI tool. Like an app store for AI.", l: "Free", s: "Viral X AI community 2025" },
                { n: "ComfyUI", u: "https://github.com/comfyanonymous/ComfyUI", d: "Node-based Stable Diffusion interface. Create complex image generation pipelines with fine control.", l: "Free open-source", s: "GitHub 60k+ stars" },
                { n: "Automatic1111 Forge", u: "https://github.com/lllyasviel/stable-diffusion-webui-forge", d: "SDUI Forge — optimized WebUI for SD image generation. 2x faster than A1111, better VRAM usage.", l: "Free open-source", s: "GitHub trending 2024-25" },
                { n: "InvokeAI", u: "https://invoke.ai", d: "Professional local Stable Diffusion canvas with nodes, inpainting, upscaling, model manager.", l: "Free open-source", s: "Professional AI art community" },
                { n: "Kobold AI", u: "https://koboldai.net", d: "Local AI text adventure and story generation interface. Run any model, no data leaves your PC.", l: "Free open-source", s: "AI fiction community" }
            ]
        },
        {
            id: "ai-presentation", name: "📊 AI Presentations & Docs", icon: "📊", type: "free",
            desc: "AI-powered slide decks, business reports, and document creators — from prompt to polished.",
            sites: [
                { n: "Gamma App", u: "https://gamma.app", d: "AI presentations in 60 seconds. Best-looking AI slides with real design sense, not templates.", l: "Free: Gamma watermark", s: "Viral Product Hunt launch" },
                { n: "Beautiful.ai", u: "https://www.beautiful.ai", d: "Smart slides that auto-format as you add content. AI layout engine keeps decks polished.", l: "Free trial; Pro $12/mo", s: "Presentation community" },
                { n: "Tome AI", u: "https://tome.app", d: "AI-powered storytelling format. Blend text, images, videos into scrollable narratives.", l: "Free with Tome branding", s: "Viral Product Hunt" },
                { n: "Canva AI (Presentations)", u: "https://www.canva.com/presentations", d: "AI-generated presentation decks. Magic Design creates polished slides from topic prompts.", l: "Free tier solid", s: "Creator community" },
                { n: "Pitch", u: "https://pitch.com", d: "Beautiful presentations with real-time collaboration. AI writing suggestions and templates.", l: "Free tier with 3 decks", s: "Startup community" },
                { n: "Napkin.ai", u: "https://napkin.ai", d: "Convert any text into visual diagrams, charts, and infographics automatically with AI.", l: "Free tier available", s: "Viral X productivity 2025" },
                { n: "Presentations.ai", u: "https://presentations.ai", d: "Generate entire PowerPoint decks from a single paragraph. Exports as .pptx for editing.", l: "Free: limited slides", s: "Business productivity" },
                { n: "SlidesAI", u: "https://www.slidesai.io", d: "Google Slides AI add-on. Turn text into complete presentations inside Google Slides.", l: "Free: 3 presentations/month", s: "Google Workspace community" },
                { n: "Sendsteps AI", u: "https://www.sendsteps.com/en/ai", d: "AI presentation creator with built-in audience polling, Q&A, and engagement features.", l: "Free trial available", s: "Business presentation tools" },
                { n: "Plus AI (Slides)", u: "https://www.plusai.com", d: "AI slide maker for Google Slides and PowerPoint. Rewrite, redesign, and summarize decks.", l: "Free trial; paid after", s: "Business productivity 2025" }
            ]
        },
        {
            id: "ai-website-builders", name: "AI Website Builders 2026", icon: "🌐", type: "free",
            desc: "AI that builds complete, deployable websites from text prompts — no code required.",
            sites: [
                { n: "Framer AI", u: "https://www.framer.com/ai", d: "Describe your site and Framer AI builds it live. Published in seconds. Best AI site quality.", l: "Free with Framer domain", s: "Viral X no-code community" },
                { n: "Durable.co", u: "https://durable.co", d: "AI builds your entire small business website in 30 seconds. Includes copy, images, booking.", l: "Free trial; $12/mo", s: "Viral on X for small business" },
                { n: "Wix AI Builder", u: "https://www.wix.com/ai-website-builder", d: "Wix's ADI AI website builder. Answer questions, get a complete site with your content.", l: "Free site; paid for domain", s: "Website builder community" },
                { n: "Webflow AI", u: "https://webflow.com/ai", d: "Professional no-code site builder with AI copywriting and layout tools built in.", l: "Free 2 pages; paid for publish", s: "Professional web design community" },
                { n: "Mixo.io", u: "https://mixo.io", d: "Launch an MVP landing page in 30 seconds. AI-generated from idea to waitlist form instantly.", l: "Free: 1 site", s: "Startup community Product Hunt" },
                { n: "Hostinger AI Builder", u: "https://www.hostinger.com/ai-website-builder", d: "Type a description, get a full website with AI-written copy + image selection. $3/mo hosting.", l: "Hosting required", s: "Small business community" },
                { n: "B12 AI", u: "https://www.b12.io", d: "AI professional website maker for service businesses. Includes booking, invoicing, email marketing.", l: "Free preview; paid to publish", s: "Service business community" },
                { n: "Uizard", u: "https://uizard.io", d: "AI UI design tool. Turn screenshots, sketches, or text into design mockups for any app.", l: "Free: 3 projects", s: "Product design community" },
                { n: "Galileo AI", u: "https://www.usegalileo.ai", d: "AI UI designer. Describe any app screen and get editable Figma-compatible UI in seconds.", l: "Waitlist; limited access", s: "Design community 2025" },
                { n: "Relume AI", u: "https://library.relume.io", d: "AI website sitemap and wireframe generator. Export to Figma or Webflow in minutes.", l: "Free: 1 sitemap/month", s: "Web design community" }
            ]
        },
        {
            id: "productivity-ai-2026", name: "⚡ AI Productivity 2026", icon: "⚡", type: "free",
            desc: "The smartest new AI tools saving hours every day — meeting notes, email, research, writing.",
            sites: [
                { n: "Granola AI", u: "https://www.granola.ai", d: "AI meeting notes that stay in the background. Best meeting transcription + enhancement tool 2025.", l: "Free: 25 meetings/month", s: "Viral X productivity 2025" },
                { n: "Fireflies.ai", u: "https://fireflies.ai", d: "AI meeting recorder for Zoom, Meet, Teams. Transcribes, summarizes, creates action items.", l: "Free tier available", s: "Business productivity tool" },
                { n: "Tldv.io", u: "https://tldv.io", d: "Record, transcribe, and summarize video calls. AI clips, highlights, team library.", l: "Free tier very good", s: "Remote work community" },
                { n: "Notion AI Q&A", u: "https://www.notion.so/product/ai", d: "Notion AI now answers questions across your entire workspace. Like ChatGPT for your notes.", l: "Included in Notion AI plan", s: "Productivity community" },
                { n: "Mem.ai", u: "https://mem.ai", d: "AI-powered self-organizing notes. Surfaces relevant context automatically as you work.", l: "Free tier available", s: "PKM community 2025" },
                { n: "Elicit AI", u: "https://elicit.com", d: "AI research tool for academics. Searches 125M papers, extracts key findings, synthesizes literature.", l: "Free: 5000 papers/month", s: "Academic research community" },
                { n: "Consensus AI", u: "https://consensus.app", d: "AI search of 200M+ scientific papers. Gives Yes/No answers with cited evidence.", l: "Free: 20 searches/day", s: "Research community 2025" },
                { n: "Shortwave AI", u: "https://www.shortwave.com", d: "AI email client that summarizes threads, drafts replies, and auto-sorts your inbox.", l: "Free tier; Pro $9/mo", s: "Productivity community 2025" },
                { n: "Superhuman AI", u: "https://superhuman.com", d: "Fastest email client with AI triage, instant send, and one-click AI replies from voice.", l: "Paid only ($25/mo)", s: "Power user productivity" },
                { n: "Arc Browser", u: "https://arc.net", d: "The browser that replaced Chrome for millions. Spaces, AI summaries, commands, Boost customization.", l: "Free", s: "Viral X productivity community" }
            ]
        }
    ];

    // Append to DATA array
    if (typeof DATA !== 'undefined') {
        EXTRA3.forEach(function (cat) { DATA.push(cat); });
    }
})();
