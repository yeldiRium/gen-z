const curry = require("../internal/curry");

/**
 * Returns the first element in `gen` that matches `predicate`. Returns undefined, if no element matches and `gen` is
 * finite.
 *
 * @param {Function} predicate
 * @param {Generator} gen
 * @returns {any | undefined}
 */
const find = (predicate, gen) => {
  for (const element of gen) {
    if (predicate(element)) {
      return element;
    }
  }
};

module.exports = curry(find);
