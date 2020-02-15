const curry = require("../../internal/curry");

/**
 * Yields values from the `sourceGenerator` as long as they match the `predicate`.
 *
 * @memberOf g:sync
 *
 * @param {Function} predicate
 * @param {Generator} sourceGenerator
 * @generator
 * @yields {any}
 */
const takeWhile = function*(predicate, sourceGenerator) {
  for (const value of sourceGenerator) {
    if (!predicate(value)) {
      return;
    }

    yield value;
  }
};

module.exports = curry(takeWhile);
