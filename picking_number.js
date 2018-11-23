// Picking Numbers
// https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
  let z=0;
  const freq = new Array(100).fill(0); 
  for(let i=0;i<a.length;i++)
      freq[a[i]]++;
  
  for(let i=2;i<100;i++)
      z=Math.max(z,freq[i]+freq[i-1]);
  return z;
}