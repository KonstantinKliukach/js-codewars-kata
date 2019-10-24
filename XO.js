/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/
/* Ok, that was i first approach, but it doesn't work with  XO("Oo"), what a shame... */
function XO(str) {
  return (!Boolean(str.toLowerCase().split('').filter(letter => letter == 'x' || letter == 'o').length % 2));
}

/* Ok, let's try again */

function XO(str) {
  const x = [];
  const o = [];
  str.toLowerCase().split('').forEach(element => {
    if (element == 'x') {
      x.push(element)
    }
    if (element == 'o') {
      o.push(element)
    }
  });
  return x.length == o.length;
}


XO("ooxx") // true
XO("xooxx") // false
XO("ooxXm") // true
XO("zpzpzpp") // true, when no 'x' and 'o' is present should return true
XO("zzoo") // false