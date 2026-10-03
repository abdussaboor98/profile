import { readFile, readdir, stat, mkdir } from 'node:fs/promises';
import { createServer } from 'node:http';
import assert from 'node:assert/strict';
import { resolve, extname, sep } from 'node:path';
import { firefox } from 'playwright';
import { projects } from '../app/portfolio.js';

const root = resolve('build');
const capture = process.env.CAPTURE_REVIEW === '1';
const review = resolve('.impeccable/review');
const files = [];
async function walk(directory) {
    for (const item of await readdir(directory, { withFileTypes: true })) {
        const path = resolve(directory, item.name);
        assert(!item.isSymbolicLink(), `Unexpected symlink: ${path}`);
        if (item.isDirectory()) await walk(path);
        else {
            assert(!/\.pdf$/i.test(path), 'PDF in public output');
            files.push(path);
        }
    }
}
await walk(root);
const html = await readFile(resolve(root, 'index.html'), 'utf8');
assert(html.includes('name="description"') && html.includes('rel="canonical"'), 'Missing metadata');
for (const file of files.filter(path => /\.(?:html|js)$/.test(path))) {
    const source = await readFile(file, 'utf8');
    assert(!/gaffari98@gmail|b00105302@|instagram\.com|doi\.org|references\//.test(source), `Private/deferred content: ${file}`);
}
assert.equal(projects.length, 11);
assert.equal(projects.filter(project => project.group === 'research').length, 7);
assert.equal(projects.filter(project => project.group === 'software').length, 4);
for (const project of projects) {
    const words = project.summary.trim().split(/\s+/).length;
    assert(words >= 25 && words <= 45, `${project.id}: summary has ${words} words`);
    assert(project.tags.length >= 4 && project.tags.length <= 6, `${project.id}: tag count`);
}

const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };
const server = createServer(async (request, response) => {
    try {
        const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
        let path = resolve(root, `.${pathname}`);
        if (path !== root && !path.startsWith(root + sep)) throw new Error('Outside build');
        if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html');
        response.writeHead(200, { 'Content-Type': mime[extname(path)] || 'application/octet-stream' });
        response.end(await readFile(path));
    } catch {
        response.writeHead(404); response.end('Not found');
    }
});
await new Promise(done => server.listen(0, '127.0.0.1', done));
const url = `http://127.0.0.1:${server.address().port}`;
let browser;
try {
    browser = await firefox.launch({ headless: true, ...(process.env.BROWSER_EXECUTABLE_PATH ? { executablePath: process.env.BROWSER_EXECUTABLE_PATH } : {}) });
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    page.on('response', response => { if (response.status() >= 400 && response.url().startsWith(url)) errors.push(`${response.status()}: ${response.url()}`); });
    await page.goto(url);
    await page.locator('h1').waitFor();
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.locator('.project-panel').count(), 11);
    const body = await page.locator('body').innerText();
    for (const phrase of ['Spring 2025', 'Fall 2025', 'Spring 2026', 'Fall 2026', 'Programming in C Lab', 'Digital Systems Lab', 'Awaiting publication', 'Limited role', 'Training project', 'Apr–Jul 2024']) assert(body.includes(phrase), `Missing ${phrase}`);
    assert.equal(await page.locator('a[href="mailto:abdussaboor@gaffari.com"]').count(), 1);
    assert.equal(await page.locator('a[href="tel:+971529178807"]').count(), 1);
    assert.equal(await page.locator('a[href="https://www.linkedin.com/in/gaffari98/"]').count(), 1);
    const missingAnchors = await page.evaluate(() => [...document.querySelectorAll('a[href^="#"]')].map(link => link.hash.slice(1)).filter(id => !document.getElementById(id)));
    assert.deepEqual(missingAnchors, []);
    for (const source of await page.locator('[src^="/"]').evaluateAll(elements => elements.map(element => element.getAttribute('src')))) assert((await page.request.get(url + source)).ok(), source);
    assert(await page.locator('.portrait-frame img').evaluate(img => img.complete && img.naturalWidth > 0));
    assert((await page.request.get(`${url}/images/jisr-home.webp`)).ok());
    assert.equal(await page.locator('.project-grid').first().evaluate(el => getComputedStyle(el).gridTemplateColumns.split(' ').length), 2);
    await page.keyboard.press('Tab');
    assert.equal(await page.locator(':focus').innerText(), 'Skip to content');
    await page.keyboard.press('Enter');
    assert.equal(await page.locator(':focus').getAttribute('id'), 'main');
    await page.evaluate(() => { document.activeElement.blur(); window.scrollTo(0, 0); });
    if (capture) {
        await mkdir(review, { recursive: true });
        await page.screenshot({ path: `${review}/desktop.png`, fullPage: true });
        await page.screenshot({ path: `${review}/desktop-hero.png` });
        await page.goto(`${url}/#research`);
        await page.locator('#research-title').waitFor();
        await page.evaluate(() => document.fonts.ready);
        await page.screenshot({ path: `${review}/desktop-research.png` });
    }
    for (const id of ['tacit', 'tinyml', 'sign-language']) {
        await page.goto(`${url}/projects/${id}/`);
        await page.waitForURL(`${url}/#project-${id}`);
        await page.locator(`#project-${id}`).waitFor();
        await page.waitForFunction(id => {
            const top = document.getElementById(`project-${id}`)?.getBoundingClientRect().top;
            return top >= 70 && top < 260;
        }, id);
    }
    for (const width of [320, 390, 768, 1440]) {
        await page.setViewportSize({ width, height: 844 });
        await page.goto(url);
        await page.locator('h1').waitFor();
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `Overflow at ${width}`);
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(url);
    await page.locator('h1').waitFor();
    const menu = page.getByRole('button', { name: 'Menu' });
    assert.equal(await page.locator('#navigation').isVisible(), false);
    await menu.click();
    assert.equal(await page.locator('#navigation').isVisible(), true);
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#navigation').isVisible(), false);
    assert.equal(await page.locator(':focus').getAttribute('aria-controls'), 'navigation');
    await menu.click();
    await page.getByRole('navigation').getByRole('link', { name: 'Software' }).click();
    assert.equal(await page.locator('#navigation').isVisible(), false);
    assert.equal(await page.locator(':focus').getAttribute('id'), 'software');
    assert.equal(await page.locator('.project-grid').first().evaluate(el => getComputedStyle(el).gridTemplateColumns.split(' ').length), 1);
    assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), 'auto');
    assert.equal(await page.locator('.portrait-frame').evaluate(el => getComputedStyle(el, '::before').transform), 'none');
    await page.goto(url);
    await page.locator('h1').waitFor();
    await page.evaluate(() => document.fonts.ready);
    if (capture) {
        await page.screenshot({ path: `${review}/mobile.png`, fullPage: true });
        await page.screenshot({ path: `${review}/mobile-hero.png` });
        await menu.click();
        await page.screenshot({ path: `${review}/mobile-menu.png` });
        await page.keyboard.press('Escape');
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    const portrait = page.locator('.portrait-frame');
    const box = await portrait.boundingBox();
    await page.mouse.move(box.x + box.width - 10, box.y + 20);
    assert.notEqual(await portrait.evaluate(el => el.style.getPropertyValue('--offset-x')), '0px');
    await page.mouse.move(0, 0);
    assert.equal(await portrait.evaluate(el => el.style.getPropertyValue('--offset-x')), '0px');
    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(await portrait.evaluate(el => getComputedStyle(el, '::before').transform), 'none');
    assert.deepEqual(errors, [], 'Browser errors');
    await context.close();
    console.log('PASS: 11 projects, factual boundaries, redirects, local assets, keyboard/menu behavior, 4 viewport widths, reduced motion, portrait interaction, and browser errors.');
} finally {
    await browser?.close();
    await new Promise(done => server.close(done));
}
