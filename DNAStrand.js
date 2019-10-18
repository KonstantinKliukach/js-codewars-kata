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