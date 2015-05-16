function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  var sqNum = Math.floor(Math.sqrt(num));
  while (sqNum >= 2) {
    if (num % sqNum === 0) {
      return false;
    }
    sqNum--;
  }
  return true;
}

function primes(num) {
  var primeList = [];

  for (var i = 0; i < num; i++) {
    if (isPrime(i)) {
      primeList.push(i);
    }
  }
  return primeList;
}

module.exports = {
  isPrime: isPrime,
  primes: primes
};

console.log(primes(10));
