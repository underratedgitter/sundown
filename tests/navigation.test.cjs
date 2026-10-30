const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

function harness() {
    let document;
    function element(attrs = {}) {
        return {
            attrs: { ...attrs }, style: {}, handlers: {}, classes: new Set(),
            getAttribute(key) { return this.attrs[key]; },
            setAttribute(key, value) { this.attrs[key] = value; },
            removeAttribute(key) { delete this.attrs[key]; },
            addEventListener(type, handler) { this.handlers[type] = handler; },
            focus() { document.activeElement = this; },
            scrollIntoView() {},
            contains(el) { return el === this; },
            classList: { toggle() {} },
        };
    }
    const menu = element(), full = element(), panel = element(), image = element();
    const targets = Object.fromEntries(['work', 'studio', 'contact'].map(id => [`#${id}`, element()]));
    const links = Object.keys(targets).map(href => element({ href }));
    full.querySelectorAll = () => links;
    const selectors = { '#menu-toggle': menu, '#full-scr': full, '#full-div1': panel,
        'nav img': image, '#elem-container': element(), '#fixed-image': element(), '#loader': element(), ...targets };
    document = { handlers: {}, querySelector: selector => selectors[selector],
        querySelectorAll: () => [], addEventListener(type, handler) { this.handlers[type] = handler; } };
    const context = { document, window: { history: { pushState(_state, _title, hash) { this.hash = hash; } } }, setTimeout() {} };
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../script.js'), 'utf8'), context);
    return { document, menu, full, panel, links, targets, context };
}

test('menu exposes real links, navigates, closes and restores keyboard focus', () => {
    const h = harness();
    h.menu.handlers.click();
    assert.equal(h.menu.attrs['aria-expanded'], 'true');
    assert.equal(h.document.activeElement, h.links[0]);
    h.document.handlers.keydown({ key: 'Escape', preventDefault() {} });
    assert.equal(h.menu.attrs['aria-expanded'], 'false');
    assert.equal(h.document.activeElement, h.menu);
    h.menu.handlers.click();
    h.links[0].handlers.click({ preventDefault() {} });
    assert.equal(h.menu.attrs['aria-expanded'], 'false');
    assert.equal(h.context.window.history.hash, '#work');
    assert.equal(h.document.activeElement, h.targets['#work']);
    h.menu.handlers.click();
    h.full.handlers.click({ target: h.full });
    assert.equal(h.menu.attrs['aria-expanded'], 'false');
});

test('every navigation target exists and the hero is inline', () => {
    const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    for (const match of html.matchAll(/href="#([^"]+)"/g)) {
        assert.ok(html.includes(`id="${match[1]}"`), `missing target: ${match[1]}`);
    }
    assert.ok(!html.includes('href="#"'));
    assert.match(html, /<video[^>]*playsinline/);
});
