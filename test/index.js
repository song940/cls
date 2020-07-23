const cls = require('..');
const assert = require('assert');

const a = cls('a', 'b', { c: 1 });
assert.equal(a, 'a b c');

const b = cls('a', 'b', false, null);
assert.equal(b, 'a b');