const curry = require("../../internal/curry");

/**
 * Applies `f` to the values yielded by the `sourceGenerator`.
 *
 * @memberOf g:sync
 *
 * @param {Function} f
 * @param {Generator} sourceGenerator
 * @generator
 * @yields {any}
 */
const map = function* (f, sourceGenerator) {
  for (const value of sourceGenerator) {
    yield f(value);
  }
};

module.exports = curry(map);
