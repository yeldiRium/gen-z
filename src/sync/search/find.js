const curry = require("../../internal/curry");

/**
 * Returns the first value in the `sourceGenerator` that matches the
 * `predicate`. Returns undefined, if no value matches and the `sourceGenerator`
 * is finite.
 *
 * Careful: If the `sourceGenerator` is infinite and no value matches, this will
 * block indefinitely.
 *
 * @memberOf g:sync
 *
 * @param {Function} predicate
 * @param {Generator} sourceGenerator
 * @returns {any | undefined}
 */
const find = (predicate, sourceGenerator) => {
  for (const value of sourceGenerator) {
    if (predicate(value)) {
      return value;
    }
  }
};

module.exports = curry(find);
