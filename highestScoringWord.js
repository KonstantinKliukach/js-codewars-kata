function high(string){
  const alphabetArr = [...Array(26)].map((el, i)=>String.fromCharCode(i + 97));
  const words = string.split(' ');
  const scores = words.map(el => el.split('').reduce((sum, num) => sum + alphabetArr.indexOf(num), 0));
  return words[(scores.indexOf(Math.max(...scores)))];
}