const curry = require("../../internal/curry");

/**
 * Yields values from the asynchronous `sourceGenerator` as long as they match
 * the (optionally asynchronous) `predicate`.
 *
 * @memberOf g:async
 *
 * @param {Function} predicate
 * @param {AsyncGenerator} sourceGenerator
 * @async
 * @generator
 * @yields {any}
 */
const takeWhile = async function*(predicate, sourceGenerator) {
  for await (const value of sourceGenerator) {
    if (!(await predicate(value))) {
      return;
    }

    yield value;
  }
};

module.exports = curry(takeWhile);
