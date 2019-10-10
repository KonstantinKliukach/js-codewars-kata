function duplicateEncode(word){
  return [...word.toLowerCase()]
    .map((letter, i, arr)=> {
      return arr.indexOf(letter) == arr.lastIndexOf(letter) ? '(' : ')'
    })
    .join('');
}