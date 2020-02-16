const curry = require("../../internal/curry");

/**
 * Returns the first value in the asynchronous `sourceGenerator` that matches
 * the (optionally asynchronous) `predicate`. Returns undefined, if no value matches and the `sourceGenerator`
 * is finite.
 *
 * Careful: If the `sourceGenerator` is infinite and no value matches, this will
 * never resolve.
 *
 * @memberOf g:async
 *
 * @param {Function} predicate
 * @param {AsyncGenerator} sourceGenerator
 * @returns {any | undefined}
 */
const find = async (predicate, sourceGenerator) => {
  for await (const value of sourceGenerator) {
    if (await predicate(value)) {
      return value;
    }
  }
};

module.exports = curry(find);
