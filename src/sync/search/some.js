const curry = require("../../internal/curry");

/**
 * Returns true, if any of the value from the `sourceGenerator` matches
 * the `predicate`. Returns false, if none do and the `sourceGenerator` is
 * finite.
 *
 * Careful: If the `sourceGenerator` is infinite and no value matches the
 * `predicate`, this will block indefinitely.
 *
 * @memberOf g:sync
 *
 * @param {Function} predicate
 * @param {Generator} sourceGenerator
 * @returns {boolean}
 */
const some = (predicate, sourceGenerator) => {
  for (const value of sourceGenerator) {
    if (predicate(value)) {
      return true;
    }
  }

  return false;
};

module.exports = curry(some);
