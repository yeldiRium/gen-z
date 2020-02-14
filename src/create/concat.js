const curry = require("../internal/curry");

/**
 * Concatenates two generators.
 *
 * @param {Generator} gen1
 * @param {Generator} gen2
 * @generator
 * @yields {any}
 */
const concat = function*(gen1, gen2) {
  for (const element of gen1) {
    yield element;
  }
  for (const element of gen2) {
    yield element;
  }
};

module.exports = curry(concat);
