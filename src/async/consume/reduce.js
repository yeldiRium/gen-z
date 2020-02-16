const curry = require("../../internal/curry");

/**
 * Reduces the values asynchronously yielded by the `sourceGenerator` by
 * repeatedly applying (the optionally asynchronous) `reducer` to an accumulator
 * and the next value.
 *
 * @memberOf g:sync
 *
 * @param {Function} reducer
 * @param {any} accumulator
 * @param {AsyncGenerator} sourceGenerator
 * @returns {any}
 */
const reduce = async (reducer, accumulator, sourceGenerator) => {
  for await (const value of sourceGenerator) {
    accumulator = await reducer(accumulator, value);
  }

  return accumulator;
};

module.exports = curry(reduce);
