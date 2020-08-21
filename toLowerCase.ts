/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:

Input: "Hello"
Output: "hello"
*/

const isUpperCase = (string: string): boolean => /^[A-Z]*$/.test(string)

function toLowerCase(str: string): string {
  return str.split('').map((char) => isUpperCase(char) ? String.fromCharCode(char.charCodeAt(0) +  32) : char).join('');
};