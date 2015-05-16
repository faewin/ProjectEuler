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

function sumList(list) {
  var sum = 0;
  for (var i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

module.exports = {
  isPrime: isPrime,
  primes: primes,
  sumList: sumList
};
