const curry = require("../../internal/curry");

/**
 * Applies `f` to the values of the `sourceGenerator` and concatenates resulting
 * generators.
 *
 * @memberOf g:sync
 *
 * @param {Function} f
 * @param {Generator} sourceGenerator
 * @generator
 * @yields {any}
 */
const chain = function*(f, sourceGenerator) {
  for (const value of sourceGenerator) {
    const next = f(value);

    if (next.next === undefined) {
      yield next;
    } else {
      for (const nextElement of next) {
        yield nextElement;
      }
    }
  }
};

module.exports = curry(chain);
