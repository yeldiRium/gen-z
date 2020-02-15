const curry = require("../../internal/curry");

/**
 * Concatenates two generators by first yielding all the values from
 * `sourceGenerator1`, then all the values from `sourceGenerator2`.
 *
 * @memberOf g:sync
 *
 * @param {Generator} sourceGenerator1
 * @param {Generator} sourceGenerator2
 * @generator
 * @yields {any}
 */
const concat = function*(sourceGenerator1, sourceGenerator2) {
  for (const value of sourceGenerator1) {
    yield value;
  }
  for (const value of sourceGenerator2) {
    yield value;
  }
};

module.exports = curry(concat);
