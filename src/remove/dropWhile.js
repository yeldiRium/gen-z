const curry = require("../internal/curry");

/**
 * Drop elements from the beginning of `gen` as long as `predicate` matches these elements.
 *
 * @param {Function} predicate
 * @param {Generator} gen
 * @generator
 * @yields {any}
 */
const dropWhile = function*(predicate, gen) {
  for (const element of gen) {
    if (predicate(element)) {
      continue;
    }

    yield element;
  }
};

module.exports = curry(dropWhile);
