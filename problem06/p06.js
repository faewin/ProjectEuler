function createNumbers() {
  var numbers = [];
  for (var i=0; i <= 100; i++) {
    numbers.push(i);
  }
  return numbers;
}

function sqNumberSum(numbers) {
  var total = numbers.reduce(function(a,b) {
    b = Math.pow(b,2);
    return a + b;
  });
  return total;
}

function sumSq(numbers) {
  var total = numbers.reduce(function(a,b) {
    return a + b;
  });
  return Math.pow(total, 2);
}

function solution() {
  var numbers = createNumbers();

  var n1 = sqNumberSum(numbers);
  var n2 = sumSq(numbers);

  return n2 - n1;
}

console.log(solution());
