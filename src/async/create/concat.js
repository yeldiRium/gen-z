const curry = require("../../internal/curry");

/**
 * Concatenates two asynchronous generators by first yielding all the values
 * from `sourceGenerator1`, then all the values from `sourceGenerator2`.
 *
 * @memberOf g:async
 *
 * @param {AsyncGenerator} sourceGenerator1
 * @param {AsyncGenerator} sourceGenerator2
 * @async
 * @generator
 * @yields {any}
 */
const concat = async function* (sourceGenerator1, sourceGenerator2) {
  for await (const value of sourceGenerator1) {
    yield value;
  }
  for await (const value of sourceGenerator2) {
    yield value;
  }
};

module.exports = curry(concat);
