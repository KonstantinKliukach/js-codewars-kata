/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

Example 1:

  Input: n = 234
  Output: 15 
  Explanation: 
  Product of digits = 2 * 3 * 4 = 24 
  Sum of digits = 2 + 3 + 4 = 9 
  Result = 24 - 9 = 15
*/

const subtractProductAndSum = function(n) {
  const array = n.toString().split('').map(n => Number(n));
  console.log(array.reduce((a, b) => (a * b), 0));
  return array.reduce((a, b) => (a * b), 1) - array.reduce((a, b) => (a + b), 0)
};