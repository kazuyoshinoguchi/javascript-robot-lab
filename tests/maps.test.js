const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
for (const id of [23, 24]) {
  test(`stage${id} map data is valid`, () => {
    const map = JSON.parse(fs.readFileSync(path.join(__dirname, `../maps/stage${id}.json`), 'utf8'));
    assert.equal(map.start.length, 3);
    assert.equal(map.goal.length, 2);
    assert.ok(map.gems.length > 0);
    assert.ok(map.gems.every(p => p.length === 2));
  });
}
