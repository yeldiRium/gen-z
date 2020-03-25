const curry = require("../../internal/curry");

/**
 * Drop the first `n` values from the asynchronous `sourceGenerator`.
 *
 * @memberOf g:sync
 *
 * @param {number} n
 * @param {AsyncGenerator} sourceGenerator
 * @async
 * @generator
 * @yields {any}
 */
const drop = async function* (n, sourceGenerator) {
  for (let i = 0; i < n; i++) {
    await sourceGenerator.next();
  }

  for await (const value of sourceGenerator) {
    yield value;
  }
};

module.exports = curry(drop);
