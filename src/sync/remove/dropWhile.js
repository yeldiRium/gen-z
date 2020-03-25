const curry = require("../../internal/curry");

/**
 * Drop values from the beginning of the `sourceGenerator` as long as the values
 * match the `predicate`.
 *
 * @memberOf g:sync
 *
 * @param {Function} predicate
 * @param {Generator} sourceGenerator
 * @generator
 * @yields {any}
 */
const dropWhile = function* (predicate, sourceGenerator) {
  for (const value of sourceGenerator) {
    if (predicate(value)) {
      continue;
    }

    yield value;
  }
};

module.exports = curry(dropWhile);
