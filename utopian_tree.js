// Utopian Tree
// https://www.hackerrank.com/challenges/utopian-tree/problem

function utopianTree(n) {
  let height = 1;
  for (let i=1; i <= n; i++) {
     height = i % 2 === 0 ? height + 1 : height * 2;
  }
  return height;
}