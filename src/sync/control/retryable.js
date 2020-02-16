/**
 * Makes a generator retryable. The generator will re-yield the previously
 * yielded value if true is passed to next().
 *
 * This is basically the opposite of `g:sync.acknowledgable`.
 *
 * @memberOf g:sync
 *
 * @param {Generator} sourceGenerator
 * @generator
 * @yields {any}
 */
const retryable = function*(sourceGenerator) {
  for (const value of sourceGenerator) {
    let retry = true;

    while (retry) {
      retry = yield value;
    }
  }
};

module.exports = retryable;
