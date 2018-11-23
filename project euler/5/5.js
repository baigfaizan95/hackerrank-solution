// Project Euler #5: Smallest multiple
// https://www.hackerrank.com/contests/projecteuler/challenges/euler005


function main() {
  var t = parseInt(readLine());
  for(var a0 = 0; a0 < t; a0++){
      var n = parseInt(readLine());
      console.log(smallestMultiple(n))
  }
  
  function smallestMultiple(n){    
      let result = 1;
      for (let i=2; i<=n; i++){
          if (result % i !==  0){
          for (let j = 2; j < i; j++)
              if (i % j === 0){    
                  while (result % j === 0)
                   result = result / j; 
              }
              result = result * i;
          }
      }
      return result;
  }
}
