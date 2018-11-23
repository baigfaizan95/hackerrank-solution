// Project Euler #6: Sum square difference
// https://www.hackerrank.com/contests/projecteuler/challenges/euler006

function main() {
  var t = parseInt(readLine());
  for(var a0 = 0; a0 < t; a0++){
      var n = parseInt(readLine());
      console.log(searchDiff(n));
  }
  
  function searchDiff(value) {
      const sum1 = squareOfSum(value);
      const sum2 = sumOfSquare(value);
      return Math.abs(sum1 - sum2);
  }
  
  function squareOfSum(n){
      return Math.pow((n * (n+1)) / 2, 2);
  }
  
  function sumOfSquare(n){
      return n * (n + 1) * ( 2 * n + 1 ) / 6;
  }
}