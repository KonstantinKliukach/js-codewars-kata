/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/
/* 2nd attempt */
function findOdd(arr) {
  return arr.find((num) => arr.filter(numToFind => numToFind == num).length % 2)
}

/*1st attempt*/
function findOdd(arr) {
  let odd = 0;
  arr.forEach(numToFind => {
    const allNums = arr.filter(num => num === numToFind);
    if ((allNums.length % 2) !== 0) {
      odd = numToFind;
    }
  });
  return odd;
}