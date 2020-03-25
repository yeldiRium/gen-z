const curry = require("../../internal/curry");

/**
 * Drop the first `n` values from the `sourceGenerator`.
 *
 * @memberOf g:sync
 *
 * @param {number} n
 * @param {Generator} sourceGenerator
 * @generator
 * @yields {any}
 */
const drop = function* (n, sourceGenerator) {
  for (let i = 0; i < n; i++) {
    sourceGenerator.next();
  }

  for (const value of sourceGenerator) {
    yield value;
  }
};

module.exports = curry(drop);
