const curry = require("../internal/curry");

/**
 * Take the first `count` elements of `gen`.
 *
 * @param {number} count
 * @param {Generator} gen
 * @generator
 * @yields {any}
 */
const take = function*(count, gen) {
  for (let i = 0; i < count; i++) {
    const next = gen.next();

    if (next.done) {
      return;
    }

    yield next.value;
  }
};

module.exports = curry(take);
