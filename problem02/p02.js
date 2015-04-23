function solution() {
  var fib = [1,2];
  var sum = 0;

  while (fib[fib.length - 1] < 4000000) {
    var next_term = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(next_term);
  }
  for (var i = 0; i < fib.length; i++) {
    if (fib[i] % 2 == 0) {
      sum += fib[i];
    }
  }
  return sum;
}

console.log(solution());
