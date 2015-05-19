var assert = require('assert');
var solution = require('../p01.js');

describe('#solution', function() {
  it('should return the sum of numbers below 1000 that are multiples of 3 and 5.', function() {
    var sum = solution();
    assert.equal(233168, sum);
  });
});
