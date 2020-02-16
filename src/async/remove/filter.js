const curry = require("../../internal/curry");

/**
 * Filters the asynchronous `sourceGenerator` by yielding only values from it
 * matching the (optionally asynchronous) `predicate`.
 *
 * @memberOf g:sync
 *
 * @param {Function} predicate
 * @param {Generator} sourceGenerator
 * @async
 * @generator
 * @yields {any}
 */
const filter = async function*(predicate, sourceGenerator) {
  for await (const value of sourceGenerator) {
    if (await predicate(value)) {
      yield value;
    }
  }
};

module.exports = curry(filter);
