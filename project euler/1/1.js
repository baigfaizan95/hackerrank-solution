// Project Euler #1: Multiples of 3 and 5
// https://www.hackerrank.com/contests/projecteuler/challenges/euler001/problem

function main() {
  var BigNumber = require('bignumber.js');
  var t = readLine();
  var n;
  for(var a0 = 0; a0 < t; a0++){
      n = new BigNumber(readLine());
      answer();
  }
  function answer() {
  const a = new BigNumber(Math.floor(n.minus(1).dividedBy(3)));
  const b = new BigNumber(Math.floor(n.minus(1).dividedBy(5)));
  const c = new BigNumber(Math.floor(n.minus(1).dividedBy(15)));
  const sumThree = a.times(3).times(a.plus(1)).dividedBy(2);
  const sumFive = b.times(5).times(b.plus(1)).dividedBy(2);
  const sumFifteen = c.times(15).times(c.plus(1)).dividedBy(2);
  const sumOfAll = sumThree.plus(sumFive).minus(sumFifteen);
  console.log(sumOfAll.toString());
  }
}