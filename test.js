const assert = require('assert');
const markdownLinks = require('./src/markdown-links.js');

describe('markdownLinks()', () => {
  it('debería devolver true para demo/README.md', () => {
    assert.equal(markdownLinks('demo/README.md'), true);
  });
  it('debería devolver false para index.js', () => {
    assert.equal(markdownLinks('index.js'), false);
  });
});
