function findUniq(arr) {
  return arr.find(el => arr.indexOf(el) === arr.lastIndexOf(el))
}

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55