const curry = require("../internal/curry");

/**
 * Take the first `amount` elements of `gen`.
 *
 * @param {number} amount
 * @param {Generator} gen
 * @generator
 * @yields {any}
 */
const take = function*(amount, gen) {
  for (let i = 0; i < amount; i++) {
    const next = gen.next();

    if (next.done) {
      return;
    }

    yield next.value;
  }
};

module.exports = curry(take);
