const curry = require("../../internal/curry");

/**
 * Filters the `sourceGenerator` by yielding only values from it matching
 * the `predicate`.
 *
 * @memberOf g:sync
 *
 * @param {Function} predicate
 * @param {Generator} sourceGenerator
 * @generator
 * @yields {any}
 */
const filter = function* (predicate, sourceGenerator) {
  for (const value of sourceGenerator) {
    if (predicate(value)) {
      yield value;
    }
  }
};

module.exports = curry(filter);
