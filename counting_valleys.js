// Counting Valleys
// https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(n, s) {
  let v = 0;
  let lvl = 0;
  s.split('').forEach((value) => {
      if (value === 'U') lvl++;
      if (value === 'D') lvl--;
      
      if (lvl === 0 && value === 'U') v++;
  });
  return v;
}