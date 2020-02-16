const curry = require("../../internal/curry");

/**
 * Drop values from the beginning of the asynchronous `sourceGenerator` as long
 * as the values match the (optionally asynchronous) `predicate`.
 *
 * @memberOf g:async
 *
 * @param {Function} predicate
 * @param {AsyncGenerator} sourceGenerator
 * @async
 * @generator
 * @yields {any}
 */
const dropWhile = async function*(predicate, sourceGenerator) {
  for await (const value of sourceGenerator) {
    if (await predicate(value)) {
      continue;
    }

    yield value;
  }
};

module.exports = curry(dropWhile);
