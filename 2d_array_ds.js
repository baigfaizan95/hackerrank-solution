// 2D Array - DS
// https://www.hackerrank.com/challenges/2d-array/problem

function hourglassSum(arr) {
  const result = [];
  let h = 0;
  for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
          result[h] = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1]+ arr[i+2][j]+ arr[i+2][j+1]+ arr[i+2][j+2];
          h++;
      }
  }
  return result.sort((a, b) => a-b)[15];
}