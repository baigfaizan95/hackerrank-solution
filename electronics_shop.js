// Electronics Shop
// https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(keyboards, drives, b) {
  let max = 0;
  keyboards.forEach((value1) => {
      drives.forEach((value2) => {
          if (value1 + value2 > max && value1 + value2 <=b) {
              max = value1 + value2;
          }
      })
  });
  return max ? max : -1;
}