// data-extra-11.js — Wave 11: July 14, 2026 model watch
// Current model releases checked against first-party product and model pages.
(function () {
    const EXTRA11 = [
        {
            id: "wave11-models", name: "🤖 New Model Watch — July 2026", icon: "🤖", type: "agents",
            desc: "The model launches that actually changed the conversation this month.",
            sites: [
                { n: "Sakana Fugu", u: "https://sakana.ai/fugu/", d: "Sakana AI's Tokyo-built multi-agent system presented as one model. Fugu dynamically calls and coordinates specialist LLMs behind a single API instead of betting every task on one brain.", l: "Research preview", s: "Sakana AI · Jun 2026", k: "sakana fugu japan japanese tokyo ai model orchestrator multi agent llm routing" },
                { n: "GPT-5.6 Sol", u: "https://developers.openai.com/api/docs/models/gpt-5.6-sol", d: "OpenAI's frontier GPT-5.6 model for hard coding, research, and professional work. It carries a 1.05M-token context window and can return up to 128K tokens.", l: "$5 in / $30 out per MTok", s: "OpenAI · Jul 2026", k: "gpt 5.6 sol openai frontier model coding research million context llm" },
                { n: "GPT-5.6 Terra", u: "https://developers.openai.com/api/docs/models/gpt-5.6-terra", d: "The balanced GPT-5.6 option: much of Sol's professional intelligence at half the token price, with the same 1.05M-token context window.", l: "$2.50 in / $15 out per MTok", s: "OpenAI · Jul 2026", k: "gpt 5.6 terra openai balanced model cost context llm" },
                { n: "GPT-5.6 Luna", u: "https://developers.openai.com/api/docs/models/gpt-5.6-luna", d: "The high-volume GPT-5.6 model tuned for cost-sensitive workloads. Luna keeps the 1.05M-token context window while dropping pricing for production-scale tasks.", l: "$1 in / $6 out per MTok", s: "OpenAI · Jul 2026", k: "gpt 5.6 luna openai efficient cheap high volume model llm" },
                { n: "GPT-Live", u: "https://openai.com/index/introducing-gpt-live/", d: "OpenAI's full-duplex voice model can listen and speak at the same time, making conversation feel less like turn-taking and more like an actual live exchange.", l: "GPT-Live-1 + mini", s: "OpenAI · Jul 2026", k: "gpt live openai voice realtime full duplex audio model conversation" },
                { n: "Claude Fable 5", u: "https://www.anthropic.com/news/claude-fable-5-mythos-5", d: "Anthropic's new frontier Claude model for engineering, research, and knowledge work, returned to general availability with expanded safeguards after its initial launch.", l: "Free + paid access", s: "Anthropic · Jul 2026", k: "claude fable 5 anthropic model engineering research knowledge frontier llm" }
            ]
        }
    ];

    if (typeof DATA !== 'undefined') {
        EXTRA11.forEach(function (cat) { DATA.push(cat); });
    }

    const WAVE11_FRESH = [
        { u: "https://sakana.ai/fugu/", n: "Sakana Fugu", cat: "Model Orchestrator" },
        { u: "https://developers.openai.com/api/docs/models/gpt-5.6-sol", n: "GPT-5.6 Sol", cat: "Frontier Model" },
        { u: "https://openai.com/index/introducing-gpt-live/", n: "GPT-Live", cat: "Voice Model" },
        { u: "https://www.anthropic.com/news/claude-fable-5-mythos-5", n: "Claude Fable 5", cat: "Frontier Model" }
    ];
    window.FRESH_PICKS = WAVE11_FRESH.concat(window.FRESH_PICKS || []);
})();
