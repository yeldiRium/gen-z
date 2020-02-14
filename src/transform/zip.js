const curry = require("../internal/curry");

/**
 * Zips the elements from `gen1` and `gen2` together.
 *
 * @param {Generator} gen1
 * @param {Generator} gen2
 * @generator
 * @yields {[any, any]}
 */
const zip = function*(gen1, gen2) {
  while (true) {
    const next1 = gen1.next();
    const next2 = gen2.next();

    if (next1.done || next2.done) {
      return;
    }

    yield [next1.value, next2.value];
  }
};

module.exports = curry(zip);
