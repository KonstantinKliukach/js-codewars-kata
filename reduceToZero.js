var numberOfSteps  = function(num, steps = 0) {

  if (num === 0) {
    return steps;
  }
  
  steps += 1;

  if (num % 2 === 0) {
    return numberOfSteps(num / 2, steps)
  }

  return numberOfSteps(num - 1, steps);
};

numberOfSteps(14);