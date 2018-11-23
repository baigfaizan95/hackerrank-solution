// Project Euler #2: Even Fibonacci numbers
// https://www.hackerrank.com/contests/projecteuler/challenges/euler002/problem

function getFibonacci(n) {
  var sum = new bigNumber(0);
  var a = new bigNumber(1);
  var b = new bigNumber(1);
  var c = a.plus(b);
  while ( compareAgtB(n.toString(), c.toString())) {
      sum = sum.plus(c);
      a = b.plus(c);
      b = a.plus(c);
      c= a.plus(b);
  }
  console.log(sum.toString());
}
