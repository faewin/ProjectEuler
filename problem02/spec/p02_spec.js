var assert = require('assert');
var solution = require('../p02.js');

describe('#solution', function() {
  it('should return the sum of all fibonacci numbers below 4 million.', function() {
    var result = solution();
    assert.equal(4613732, result);
  });
});
