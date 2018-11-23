// Forming a Magic Square
// https://www.hackerrank.com/challenges/magic-square-forming/problem

function formingMagicSquare(s) {
  const magicBase = [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6]
  ];
  const all = [];
  all[0] = rotate(magicBase);
  all[1] = rotate(all[0]);
  all[2] = rotate(all[1]);
  all[3] = rotate(all[2]);

  all[4] = transpose(magicBase);
  all[5] = rotate(all[4]);
  all[6] = rotate(all[5]);
  all[7] = rotate(all[6]);

  let costs = Number.MAX_VALUE;
  for (let i = 0; i < all.length; i++) {
      costs = Math.min(costs, cost(s, all[i]));
  }
  return costs;
}

function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const newMatrix = new Array(rows).fill(0).map(row => new Array(cols).fill(0));
  for (let i = 0 ; i < rows; i++) {
      for (let j = 0 ; j < cols; j++) {
          newMatrix[j][i] = matrix[i][j];
      }
  }
  return newMatrix;
}

function rotate(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const newMatrix = new Array(rows).fill(0).map(row => new Array(cols).fill(0));
  for (let i = 0 ; i < rows; i++) {
      for (let j = 0 ; j < cols; j++) {
          newMatrix[j][rows - i - 1] = matrix[i][j];
      }
  }
  return newMatrix;
}

function cost(mat1, mat2) {
  let diff = 0;
  for (let i = 0; i < mat1.length; i++) {
      for (let j = 0; j < mat1[0].length; j++) {
          diff += Math.abs(mat1[i][j] - mat2[i][j]);
      }
  }
  return diff;
}

/*
M # Starting square
rotate(M) # rotate clockwise 90 degrees
rotate(rotate(M)) # rotate clockwise 180 degrees
rotate(rotate(rotate(M))) # rotate clockwise 270 degrees
refect(M,dim=rows) # reflect along row dimension
reflect(M,dim=cols) # reflect along column dimension
reflect(M,dim=diag) # reflection along main diagonal
transpose(M) # reflection along off-diagonal
*/
