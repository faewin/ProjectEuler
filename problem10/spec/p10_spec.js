var assert = require('assert');
var app = require('../p10.js');

describe('#isPrime', function() {
  it('should return true if the number is prime', function() {
    var num = 11;
    var num2 = 7;
    assert.equal(true, app.isPrime(num));
    assert.equal(true, app.isPrime(num2));
  });

  it('should return false if the number is not prime', function() {
    var num = 12;
    var num2 = 8;
    assert.equal(false, app.isPrime(num));
    assert.equal(false, app.isPrime(num2));
  });
});

describe('#primes', function() {
  it('should return a list of primes from 2 to nth number', function() {
    var num = 10;
    assert.deepEqual([2,3,5,7], app.primes(num));
  });
});

describe('#sumList', function() {
  it('should return the sum of a list', function() {
    var list = [1,2,3];
    assert.equal(6, app.sumList(list));
  });
});
