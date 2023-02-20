module.exports = {
  numFactorial(n) {
    let answer = 1;
    if (n === 0 || n === 1) {
      return 1;
    }
    if (n > 1) {
      // eslint-disable-next-line no-plusplus
      for (let i = n; i >= 1; i--) {
        answer *= i;
      }
      return answer;
    }

    return 'number must be positive.';
  },
};

function factorialise(n) {
  let answer = 1;
  if (n === 0 || n === 1) {
    return answer;
  }
  if (n > 1) {
    // eslint-disable-next-line no-plusplus
    for (let i = n; i >= 1; i--) {
      answer *= i;
    }
    return answer;
  }

  return 'number has to be positive.';
}
console.log(factorialise(4));
