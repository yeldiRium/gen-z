const curry = require("../../internal/curry");

/**
 * Yields the first `n` values of the asynchronous `sourceGenerator`.
 *
 * @memberOf g:async
 *
 * @param {number} n
 * @param {AsyncGenerator} sourceGenerator
 * @async
 * @generator
 * @yields {any}
 */
const take = async function* (n, sourceGenerator) {
  for (let i = 0; i < n; i++) {
    const next = await sourceGenerator.next();

    if (next.done) {
      return;
    }

    yield next.value;
  }
};

module.exports = curry(take);
