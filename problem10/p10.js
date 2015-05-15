function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  var sqNum = Math.sqrt(num);
  for (var i = 2; i < sqNum; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = isPrime;
