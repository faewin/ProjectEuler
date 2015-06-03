var assert = require('assert');
var lpf = require('../p03.js');

describe('#lpf', function() {
  it('should return the largest prime factor given n', function() {
    var result = lpf(100);
    assert.equal(result, 5);
  });
});
