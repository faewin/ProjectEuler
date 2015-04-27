function isPrime(num) {
  sqrt = Math.sqrt(num);
  for (var i = 2; i <= sqrt; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function solution() {
  primes = [];
  lpn = 2;

  while (10001 > primes.length) {
    if (isPrime(lpn)) {
      primes.push(lpn);
    }
    lpn += 1;
  }
  return primes.slice(-1)[0]
}

console.log(solution());
