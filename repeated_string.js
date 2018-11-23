// Repeated String
// https://www.hackerrank.com/challenges/repeated-string/problem

function repeatedString(s, n) {
  let c = 0,
      ca = 0,
      r = n % s.length;
  for (let i = s.length; i-- > 0;) {
    if (s.charAt(i) == 'a') {
      ++c
      if (i < r)
        ++ca
    }
  }
  return ((n - r) / s.length * c) + ca
}