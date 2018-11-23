// Sock Merchant
// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
  const hash = {};
  ar.forEach((value) => {
      if (!hash[value]) {
          hash[value] = 0;
      }
      hash[value] = hash[value] + 1;
  });
  let count = 0;
  Object.keys(hash).map((key) => {
      const temp = Math.floor(hash[key] / 2);
      count += temp;
  });
  return count
}
