const curry = require("../../internal/curry");

/**
 * Returns true, if any of the value from the asynchronous `sourceGenerator`
 * matches the (optionally asynchronous) `predicate`. Returns false, if none
 * do and the `sourceGenerator` is finite.
 *
 * Careful: If the `sourceGenerator` is infinite and no value matches the
 * `predicate`, this will never resolve.
 *
 * @memberOf g:async
 *
 * @param {Function} predicate
 * @param {AsyncGenerator} sourceGenerator
 * @async
 * @returns {boolean}
 */
const some = async (predicate, sourceGenerator) => {
  for await (const value of sourceGenerator) {
    if (await predicate(value)) {
      return true;
    }
  }

  return false;
};

module.exports = curry(some);
