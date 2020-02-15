const curry = require("../../internal/curry");

/**
 * Reduces the values yielded by `sourceGenerator` by repeatedly applying
 * `reducer` to an accumulator and the next value.
 *
 * @memberOf g:sync
 *
 * @param {Function} reducer
 * @param {any} accumulator
 * @param {Generator} sourceGenerator
 * @returns {any}
 */
const reduce = (reducer, accumulator, sourceGenerator) => {
  for (const value of sourceGenerator) {
    accumulator = reducer(accumulator, value);
  }

  return accumulator;
};

module.exports = curry(reduce);
