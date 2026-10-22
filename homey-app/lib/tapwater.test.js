'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { recordSource } = require('./tapwater');

test('first report establishes a baseline without invented switch history', () => {
  const log = recordSource(null, 'boiler', '', 1000);
  assert.equal(log.since, null);
  assert.equal(log.reportedAt, 1000);
  assert.deepEqual(log.history, []);
});
test('repeated commands do not change timestamp, history or storage object', () => {
  const log = recordSource(null, 'boiler', '', 1000);
  assert.equal(recordSource(log, 'boiler', 'Repeated 15-minute command', 2000), log);
});
test('last three switches survive JSON storage and app restart', () => {
  let log = recordSource(null, 'boiler', '', 1000);
  for (const [i, source] of ['cv', 'boiler', 'cv', 'boiler'].entries()) {
    log = recordSource(JSON.parse(JSON.stringify(log)), source, ' Temperature ', 2000 + i);
  }
  assert.deepEqual(log.history.map(e => e.source), ['boiler', 'cv', 'boiler']);
  assert.equal(log.since, 2003);
  assert.equal(log.history[0].reason, 'Temperature');
});
test('bad source and timestamp cannot overwrite known history', () => {
  const log = recordSource(null, 'boiler', '', 1000);
  assert.throws(() => recordSource(log, 'up', '', 2000));
  assert.throws(() => recordSource(log, 'cv', '', NaN));
  assert.equal(log.source, 'boiler');
});
test('reason storage remains bounded', () => {
  const log = recordSource(recordSource(null, 'boiler', '', 1000), 'cv', 'x'.repeat(200), 2000);
  assert.equal(log.history[0].reason.length, 160);
});

test('heating view shows three timestamped commands and escapes reasons', () => {
  const fs = require('node:fs');
  const vm = require('node:vm');
  const path = require('node:path');
  const code = fs.readFileSync(path.join(__dirname, '../../shared/dashboard.js'), 'utf8');
  const start = code.indexOf('  function renderHeating(heating) {');
  const end = code.indexOf('  // ---------- EV charger', start);
  const elements = Object.fromEntries(['room-temp', 'heating-facts'].map(id => [id, { innerHTML: '' }]));
  const escapeHtml = text => String(text).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const context = { Intl, Date, Number, state: { period: 'today' }, PERIOD_LABELS: {},
    $: id => elements[id], toggleEmpty() {}, setText() {}, escapeHtml, formatPower: String };
  vm.createContext(context);
  vm.runInContext(code.slice(start, end), context);
  let log = recordSource(null, 'boiler', '', Date.UTC(2026, 9, 21, 6));
  log = recordSource(log, 'cv', '<img src=x onerror=alert(1)>', Date.UTC(2026, 9, 21, 7));
  context.renderHeating({ devices: [], tapwater: { ...log, timezone: 'Europe/Amsterdam' } });
  assert.match(elements['heating-facts'].innerHTML, /21-10-2026.*09:00:00/);
  assert.match(elements['heating-facts'].innerHTML, /Via cv-ketel/);
  assert.match(elements['heating-facts'].innerHTML, /&lt;img/);
  assert.doesNotMatch(elements['heating-facts'].innerHTML, /<img/);
  context.renderHeating({ devices: [] });
  assert.doesNotMatch(elements['heating-facts'].innerHTML, /tapwater/);
});
