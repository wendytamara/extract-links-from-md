
var extend = require('./src/markdown-links.js');
var chai = require('chai');
var assert = chai.assert;

describe('prueba de operacones', function() {
  it('prueba de conversion1', function() {
    assert.equal(markdownLinks(' [labore](https://en.wiktionary.org/wiki/labore)[foo](http://foo.com)') ,
      '[{"href":"https://en.wiktionary.org/wiki/labore","text":"[labore]"}]' );
  });
  it('prueba de conversion2', function() {
    assert.equal(markdownLinks('[dolore](https://en.wiktionary.org/wiki/dolore)') ,
      '[{"href":"https://en.wiktionary.org/wiki/dolore","text":"[dolore]"}]');
  });

  it('prueba de conversion2', function() {
    assert.equal(markdownLinks('[foo](http://foo.com)') ,
      '[{"href":"http://foo.com","text":"[foo]"}]');
  });
});
