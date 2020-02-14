const curry = require("../internal/curry");

/**
 * Take elements from `gen` as long as they match `predicate`.
 *
 * @param {Function} predicate
 * @param {Generator} gen
 * @generator
 * @yields {any}
 */
const takeWhile = function*(predicate, gen) {
  for (const element of gen) {
    if (!predicate(element)) {
      return;
    }

    yield element;
  }
};

module.exports = curry(takeWhile);
