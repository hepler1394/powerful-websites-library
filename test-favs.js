const puppeteer = require('puppeteer');
const handler = require('serve-handler');
const http = require('http');

(async () => {
    // 1. Start local server
    const server = http.createServer((request, response) => {
        return handler(request, response, { public: 'C:\\Users\\Cory\\Documents\\GitHub\\powerful-websites-library' });
    });
    server.listen(3000);

    // 2. Launch headless browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // 3. Setup console logging to catch any JS errors
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));

    await page.goto('http://localhost:3000/index.html', { waitUntil: 'load' });
    
    // Wait for the data payload to parse and render
    await page.waitForTimeout(2000);

    console.log("Adding a favorite...");
    await page.evaluate(() => {
        // Find first card's fav btn
        const btn = document.querySelector('.fav-btn');
        if (btn) btn.click();
    });

    // Wait for localStorage update
    await page.waitForTimeout(500);

    console.log("Clicking 'My Favorites' tab...");
    await page.evaluate(() => {
        const favTab = document.querySelector('[data-section="favorites"]');
        if (favTab) favTab.click();
    });

    await page.waitForTimeout(1000);

    // Check what is rendered
    const result = await page.evaluate(() => {
        const grid = document.getElementById('favoritesGrid');
        const inner = document.getElementById('favGridInner');
        const noFav = document.getElementById('noFavorites');
        return {
            gridDisplay: grid.style.display,
            childCount: inner.children.length,
            noFavVisible: noFav.classList.contains('visible'),
            favsObj: localStorage.getItem('pwl_favorites')
        };
    });

    console.log("FINAL STATE:", result);

    await browser.close();
    server.close();
    process.exit(0);
})();
