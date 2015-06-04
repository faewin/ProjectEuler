var assert = require('assert');
var app = require('../p04.js');

describe('#isPalindrome', function() {
  it('should return true if string is a palindrome', function() {
    var test = 'anna';
    assert.equal(true, app.isPalindrome(test));
  });

  it('should return false if string is not a palindrome', function() {
    var test = 'eddie';
    assert.equal(false, app.isPalindrome(test));
  });
});

describe('#solution', function() {
  it('should return the largest 3 digit palindrome', function() {
    var result = 906609;
    assert.equal(result, app.solution());
  });
});
