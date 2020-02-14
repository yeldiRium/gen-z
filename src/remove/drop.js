const curry = require("../internal/curry");

/**
 * Drop the first `count` elements from `gen`.
 *
 * @param {number} count
 * @param {Generator} gen
 * @generator
 * @yields {any}
 */
const drop = function*(count, gen) {
  for (let i = 0; i < count; i++) {
    gen.next();
  }

  for (const element of gen) {
    yield element;
  }
};

module.exports = curry(drop);
