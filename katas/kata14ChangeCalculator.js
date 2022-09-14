const calculateChange = function (total, cash) {
  let change = cash - total;
  let result = {};

  while (change > 0) {
    if (change >= 2000) {
      result.twentyDollars = result.twentyDollars + 1 || 1;
      change -= 2000;
    } else if (change >= 1000) {
      result.tenDollars = result.tenDollars + 1 || 1;
      change -= 1000;
    } else if (change >= 500) {
      result.fiveDollars = result.fiveDollars + 1 || 1;
      change -= 500;
    } else if (change >= 200) {
      result.twoDollars = result.twoDollars + 1 || 1;
      change -= 200;
    } else if (change >= 100) {
      result.oneDollar = result.oneDollar + 1 || 1;
      change -= 100;
    } else if (change >= 25) {
      result.quarter = result.quarter + 1 || 1;
      change -= 25;
    } else if (change >= 10) {
      result.dime = result.dime + 1 || 1;
      change -= 10;
    } else if (change >= 5) {
      result.nickel = result.nickel + 1 || 1;
      change -= 5;
    } else {
      result.penny = result.penny + 1 || 1;
      change -= 1;
    }
  }
  return result;
};
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
