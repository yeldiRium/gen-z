const curry = require("../internal/curry");

/**
 * Applies `f` to the elements of `gen` and concatenates resulting generators.
 *
 * @param {Function} f
 * @param {Generator} gen
 * @generator
 * @yields {any}
 */
const chain = function*(f, gen) {
  for (const element of gen) {
    const next = f(element);

    if (next.next !== undefined) {
      for (const nextElement of next) {
        yield nextElement;
      }
    } else {
      yield next;
    }
  }
};

module.exports = curry(chain);
