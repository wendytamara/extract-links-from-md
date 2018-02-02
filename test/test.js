var extend = require('../src/markdown-links.js');
var chai = require('chai');
var assert = chai.assert;

console.log('\n');
console.log('TESTEANDO CON MOCHA Y CHAI:');

describe('Prueba de operaciones', () => {
  it('debería identificar el link "[labore](https://en.wiktionary.org/wiki/labore)" y devolverlo en un array de objetos', () => {
    assert.equal(markdownLinks('[labore](https://en.wiktionary.org/wiki/labore)'),
      '[{"href":"https://en.wiktionary.org/wiki/labore","text":"labore"}]');
  });
  it('debería identificar el link "[Google](http://www.google.com)" y devolverlo en un array de objetos', () => {
    assert.equal(markdownLinks('[Google](http://www.google.com)'), '[{"href":"http://www.google.com","text":"Google"}]');
  });
  it('debería identificar el link "[server](file://server.com)" y devolverlo en un array de objetos)', () => {
    assert.equal(markdownLinks('[server](file://server.com)'), '[{"href":"file://server.com","text":"server"}]');
  });
});
