function solution() {
  var magic_number = 600851475143;
  var largest_prime_factor = 2;

  while (magic_number > largest_prime_factor) {
    if (magic_number % largest_prime_factor == 0) {
      magic_number = magic_number / largest_prime_factor;
      largest_prime_factor = 2;
    } else {
      largest_prime_factor += 1;
    }
  }
  return largest_prime_factor;
}

console.log(solution());
