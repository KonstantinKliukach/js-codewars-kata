/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at al
*/

function DNAStrand(dna){
  return [...dna].map(letter => {
    switch (letter) {
      case 'A': return 'T';
      case 'T': return 'A';
      case 'C': return 'G';
      case 'G': return 'C';
      default: throw new Error('Not a dna symbol');
    };
  }).join('');
};

/* Or something like that */

const pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

function DNAStrand2(dna){
  return [...dna].map(letter => {
    return pairs[letter];
  }).join('');
};