const curry = require("../internal/curry");

/**
 * Returns true, if any of the elements from `gen` matches `predicate`. Returns false, if none do and `gen` is finite.
 *
 * @param predicate
 * @param gen
 * @returns {boolean}
 */
const some = (predicate, gen) => {
  for (const element of gen) {
    if (predicate(element)) {
      return true;
    }
  }

  return false;
};

module.exports = curry(some);
