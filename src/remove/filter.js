const curry = require("../internal/curry");

/**
 * Filters `gen` to contain only elements matching `predicate`.
 *
 * @param {Function} predicate
 * @param {Generator} gen
 * @generator
 * @yields {any}
 */
const filter = function*(predicate, gen) {
  for (const element of gen) {
    if (predicate(element)) {
      yield element;
    }
  }
};

module.exports = curry(filter);
