// Arrays: Left Rotation
// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

function rotLeft(a, d) {
  let temp = a.splice(0);
  console.log(temp);
  for (let i = 0; i < d; i++) {
      let first = temp.shift();
      temp.push(first);
  }
  return temp;
}