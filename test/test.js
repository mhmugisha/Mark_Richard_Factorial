/* eslint-disable no-undef */
const { assert } = require('chai');
const fact = require('../factorial');

const n = -4;

describe('Calculate factorial of number', () => {
  it(`Function returns ${n}!`, () => {
    const result = fact.numFactorial(n);
    assert.equal(result, 720);
  });
});
