const curry = require("../internal/curry");

/**
 * Drop the first `amount` elements from `gen`.
 *
 * @param {number} amount
 * @param {Generator} gen
 * @generator
 * @yields {any}
 */
const drop = function*(amount, gen) {
  for (let i = 0; i < amount; i++) {
    gen.next();
  }

  for (const element of gen) {
    yield element;
  }
};

module.exports = curry(drop);
