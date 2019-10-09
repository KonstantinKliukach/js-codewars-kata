/*
A digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n.
If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
This is only applicable to the natural numbers.
*/

function digital_root(n) {
  const sum = parseInt(n.toString().split('').reduce((a, b) => a + b));
  if (sum < 10) {
    return sum
  } else {
    return digital_root(sum)
  }
}

digital_root(16)