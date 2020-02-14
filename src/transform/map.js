const curry = require("../internal/curry");

/**
 * Map the values from `gen` by applying `f`.
 *
 * @param {Function} f
 * @param {Generator} gen
 * @generator
 * @yields {any}
 */
const map = function*(f, gen) {
  for (const element of gen) {
    yield f(element);
  }
};

module.exports = curry(map);
