// Project Euler #3: Largest prime factor
// https://www.hackerrank.com/contests/projecteuler/challenges/euler003

function main() {
  var t = parseInt(readLine());
  for(var a0 = 0; a0 < t; a0++){
      var n = parseInt(readLine());
      console.log(factor(n));
  }
  
  function factor(temp) {
      while(temp%2==0) temp/=2; 
        if(temp==1) return 2;
        let i; 
        for(i=3;i<=Math.sqrt(temp);i+=2) {
            if(temp%i==0) { 
              temp/=i; i=1; 
            } 
         }
        if(temp>2) {
            return temp; 
      } else return i-2; 
  }
}