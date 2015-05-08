function solution() {
  var a = 0, b = 0, c = 0;
  var sum = 0;

  for (var i = 2; i < 1000; i++) {
    for (var j = 2; j < 1000; j++) {
      a = i;
      b = j;
      c = Math.round(Math.sqrt(Math.pow(a,2)+Math.pow(b,2)));
      sum = a+b+c;

      if (Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2) && sum == 1000) {
        return a*b*c;
      }
    }
  }
}

console.log(solution());
