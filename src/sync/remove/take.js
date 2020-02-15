const curry = require("../../internal/curry");

/**
 * Yields the first `n` values of the `sourceGenerator`.
 *
 * @memberOf g:sync
 *
 * @param {number} n
 * @param {Generator} sourceGenerator
 * @generator
 * @yields {any}
 */
const take = function*(n, sourceGenerator) {
  for (let i = 0; i < n; i++) {
    const next = sourceGenerator.next();

    if (next.done) {
      return;
    }

    yield next.value;
  }
};

module.exports = curry(take);
