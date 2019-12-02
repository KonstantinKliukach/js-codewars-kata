/* Neither interesting or fun, but it's my very TS code ever */

interface Idictionary {
  a: string,
  b: string,
  c: string,
  d: string,
  e: string,
  f: string, 
  g: string, 
  h: string, 
  i: string, 
  j: string, 
  k: string, 
  l: string, 
  m: string,
  n: string, 
  o: string, 
  p: string, 
  q: string, 
  r: string, 
  s: string, 
  t: string, 
  u: string, 
  v: string, 
  w: string,
  x: string,
  y: string,
  z: string,
}

const dictionary: Idictionary = {
  a: 'Alfa',
  b: 'Bravo',
  c: 'Charlie',
  d: 'Delta',
  e: 'Echo',
  f: 'Foxtrot',
  g: 'Golf',
  h: 'Hotel',
  i: 'India',
  j: 'Juliett',
  k: 'Kilo',
  l: 'Lima',
  m: 'Mike',
  n: 'November',
  o: 'Oscar',
  p: 'Papa',
  q: 'Quebec',
  r: 'Romeo',
  s: 'Sierra',
  t: 'Tango',
  u: 'Uniform',
  v: 'Victor',
  w: 'Whiskey',
  x: 'Xray',
  y: 'Yankee',
  z: 'Zulu'
}

function to_nato(words: string): string {
	return words.toLowerCase().split(' ').map(key => dictionary[key] ? dictionary[key] : key).join(' ')
}