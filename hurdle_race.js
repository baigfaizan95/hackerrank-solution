// The Hurdle Race
// https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(k, height) {
  const max = Math.max(...height);
  return max > k ? max - k : 0;
}