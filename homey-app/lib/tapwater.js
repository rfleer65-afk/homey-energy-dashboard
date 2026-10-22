'use strict';

// Records accepted commands, not physical valve feedback. The first report establishes
// a baseline; its timestamp must never be presented as a known historic switch.
function recordSource(previous, source, reason = '', at = Date.now()) {
  if (!['boiler', 'cv'].includes(source)) throw new Error('Unknown tap-water source');
  if (!Number.isSafeInteger(at) || at <= 0) throw new Error('Invalid timestamp');
  const old = previous || {};
  if (old.source === source) return previous;
  const known = ['boiler', 'cv'].includes(old.source);
  const entry = { source, at, reason: String(reason || '').trim().slice(0, 160) };
  return {
    source,
    reportedAt: at,
    since: known ? at : null,
    history: known ? [entry, ...(Array.isArray(old.history) ? old.history : [])].slice(0, 3) : [],
  };
}

module.exports = { recordSource };
