const curry = require("../internal/curry");

/**
 * Reduces the values from `gen` by repeatedly applying `f` to an accumulator and the next value.
 *
 * @param {Function} f
 * @param {any} acc
 * @param {Generator} gen
 * @returns {any}
 */
const reduce = (f, acc, gen) => {
  for (const element of gen) {
    acc = f(acc, element);
  }

  return acc;
};

module.exports = curry(reduce);
