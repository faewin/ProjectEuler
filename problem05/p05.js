function gcd(a,b) {
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}

function lcm(a,b) {
  return (a * b) / gcd(a,b)
}

function solution() {
  var max = 20;
  var min = 2;
  var N = 2; // lowest prime

  for (var i = min; i <= max;  i++) {
    N = lcm(N, i);
  }
  return N;
}

console.log(solution());
