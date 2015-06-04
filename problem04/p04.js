function solution() {
  var product = 0;
  var largestPalindrome = 0;

  for (var x = 100; x <= 999; x++) {
    for (var y = x; y <= 999; y++) {
      product = x * y;
      var string = product.toString();
      if (isPalindrome(string) && largestPalindrome < product) {
        largestPalindrome = product;
      }
    }
  }
  return largestPalindrome;
}

function isPalindrome(string) {
  string_reverse = string.split('').reverse().join('');

  return string === string_reverse;
}

module.exports = {
  isPalindrome: isPalindrome,
  solution: solution
};
