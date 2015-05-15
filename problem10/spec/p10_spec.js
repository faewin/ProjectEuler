var assert = require('assert');
var isPrime = require('../p10.js');

describe('#isPrime', function() {
  it('should return true if the number is prime', function() {
    var num = 11;
    var num2 = 7;
    assert.equal(true, isPrime(num));
    assert.equal(true, isPrime(num2));
  });

  it('should return false if the number is not prime', function() {
    var num = 12;
    var num2 = 8;
    assert.equal(false, isPrime(num));
    assert.equal(false, isPrime(num2));
  });
});
