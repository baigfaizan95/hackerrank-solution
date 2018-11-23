// Project Euler #4: Largest palindrome product
// https://www.hackerrank.com/contests/projecteuler/challenges/euler004

function main() {
  var t = parseInt(readLine());
  for(var a0 = 0; a0 < t; a0++){
      var n = parseInt(readLine());
      console.log(searchNumber(n));
  }
  
  function searchNumber(value) {
      let max = 0;
      for (let i=999; i >= 100; i--) {
          for (let j=999; j >= 100; j--) {
              const prod = i * j;
              if (prod <= max) {
                  break;
              }
              if (isPalindrome(prod) && prod < value) {
                  max = max > prod ? max : prod;   
              }
          }
      }
      return max;
  }
  
  function isPalindrome(value) {
       value = value.toString();
       const len = value.length;
       for (let i = 0; i < len/2; i++) {
         if (value[i] !== value[len - 1 - i]) {
             return false;
         }
       }
       return true;
  }
}