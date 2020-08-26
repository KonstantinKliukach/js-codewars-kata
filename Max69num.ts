/*
  Given a positive integer num consisting only of digits 6 and 9.

  Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

  

  Example 1:

  Input: num = 9669
  Output: 9969
  Explanation: 
  Changing the first digit results in 6669.
  Changing the second digit results in 9969.
  Changing the third digit results in 9699.
  Changing the fourth digit results in 9666. 
  The maximum number is 9969.
*/

const maximum69Number  = function(num) {
  const results = [];
  const arr = num.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    const newNum = [...arr];
    newNum[i] = Number(arr[i]) === 9 ? 6 : 9;
    results.push(Number(newNum.join('')))
  }
  const max = results.filter(newNum => newNum > num);
  if (max.length) return max[0];
  return num;
};

// If I were clever, I could write something like this:

const maximum69Number2  = function(num) {
  return Number(num.toString().replace('6', '9'));
}