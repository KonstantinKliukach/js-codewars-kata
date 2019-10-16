function isPangram(string){
  const alphabetArr = [...Array(26)].map((el, i)=>String.fromCharCode(i + 97));
  const targetArr = string.toLowerCase().split('');
  return alphabetArr.every(i => targetArr.includes(i));
}