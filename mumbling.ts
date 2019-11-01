/*
This time no story, no theory. The examples below show you how to write function
  accum("abcd") -> "A-Bb-Ccc-Dddd"
  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

export function accum(s: string): string {
  return s.split('').map((letter, index) => {
    const newString = letter.toLowerCase().repeat(index + 1);
    return newString[0].toUpperCase() + newString.slice(1);
  }).join('-');
}

/* And better approach */

export function accum2(s: string): string {
  return s.split('').map((letter, index) => {
    return letter.toUpperCase() + letter.toLowerCase().repeat(index);
  }).join('-');
}