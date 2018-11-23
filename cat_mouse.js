// Cats and a Mouse
// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
  while (true){
      if (Math.abs(x - z) === 0 && Math.abs(y - z) === 0) {
          return 'Mouse C';
      } else if (Math.abs(x - z) === 0) {
          return 'Cat A';
      } else if (Math.abs(y - z) === 0) {
          return 'Cat B';
      } else {
          x > z ? x-- : x++;
          y > z ? y-- : y++;
      }
  }
}