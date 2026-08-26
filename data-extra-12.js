// data-extra-12.js — Wave 12: August 2026 fresh signals
// Entries checked against their public product pages on August 26, 2026.
(function () {
  'use strict';

  const WAVE12 = {
    'developer-tools': [
      {
        n: 'DeepWiki',
        u: 'https://deepwiki.com/',
        d: 'Paste a public GitHub repository link to explore conversational, up-to-date documentation and understand a codebase in the browser.',
        l: 'Public repository explorer; private or hosted indexing may use a separate workflow',
        s: 'DeepWiki · Aug 2026',
        k: 'github repository code documentation developer explain ai deepwiki'
      },
      {
        n: 'Omatsuri',
        u: 'https://omatsuri.app/',
        d: 'Open-source browser utilities for SVG compression, SVG-to-JSX conversion, CSS generators, placeholder data, Base64, and more.',
        l: 'None for the browser tools',
        s: 'Omatsuri · Aug 2026',
        k: 'svg compressor jsx css gradient fake data base64 developer open source'
      }
    ],
    'design-creative': [
      {
        n: 'Websim',
        u: 'https://websim.com/',
        d: 'Explore a playful browser gallery of AI-generated games, apps, and strange little web experiments, or start building your own.',
        l: 'Browsing is public; creating or saving work uses an account flow',
        s: 'Websim · Aug 2026',
        k: 'ai games apps web experiments creative build browser gallery'
      },
      {
        n: 'WhatFontIs',
        u: 'https://www.whatfontis.com/',
        d: 'Upload an image with text and get visually similar font matches, plus direct links for free downloads or commercial licenses.',
        l: 'Free finder available; account and Pro options are offered',
        s: 'WhatFontIs · Aug 2026',
        k: 'font finder identify typeface image typography design match'
      },
      {
        n: 'Mobirise AI',
        u: 'https://ai.mobirise.com/',
        d: 'Use a prompt, screenshot, mockup, or sketch to generate a customizable website starting point in your browser.',
        l: 'Free plan is limited to three AI websites per month',
        s: 'Mobirise AI · Aug 2026',
        k: 'website builder ai prompt screenshot mockup no code design'
      },
      {
        n: 'tldraw',
        u: 'https://www.tldraw.com/',
        d: 'A very good, free, instant collaborative whiteboard for sketching ideas, diagrams, and rough interfaces directly in the browser.',
        l: 'Free public whiteboard; sharing and storage options may vary',
        s: 'tldraw · Aug 2026',
        k: 'whiteboard draw diagram sketch collaboration canvas design'
      }
    ]
  };

  function addUnique(target, site) {
    if (!target || !Array.isArray(target.sites)) return;
    const normalizedUrl = String(site.u || '').replace(/\/+$/, '').toLowerCase();
    const exists = target.sites.some(function (item) {
      return String(item.u || '').replace(/\/+$/, '').toLowerCase() === normalizedUrl;
    });
    if (!exists) target.sites.push(site);
  }

  if (typeof DATA !== 'undefined') {
    Object.keys(WAVE12).forEach(function (categoryId) {
      const target = DATA.find(function (category) { return category.id === categoryId; });
      WAVE12[categoryId].forEach(function (site) { addUnique(target, site); });
    });
  }

  const WAVE12_FRESH = [
    { u: 'https://deepwiki.com/', n: 'DeepWiki', cat: 'Repo explorer' },
    { u: 'https://websim.com/', n: 'Websim', cat: 'Web playground' },
    { u: 'https://www.whatfontis.com/', n: 'WhatFontIs', cat: 'Font finder' },
    { u: 'https://omatsuri.app/', n: 'Omatsuri', cat: 'Browser utilities' },
    { u: 'https://ai.mobirise.com/', n: 'Mobirise AI', cat: 'Site builder' },
    { u: 'https://www.tldraw.com/', n: 'tldraw', cat: 'Whiteboard' }
  ];

  window.FRESH_PICKS = WAVE12_FRESH.concat(window.FRESH_PICKS || []);
})();
