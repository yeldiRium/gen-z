/**
 * Makes an asynchronous generator retryable. The resulting generator will
 * re-yield the previously yielded value if true is passed to next().
 *
 * This is basically the opposite of `g:async.acknowledgable`.
 *
 * @memberOf g:async
 *
 * @param {AsyncGenerator} sourceGenerator
 * @generator
 * @async
 * @yields {any}
 */
const retryable = async function* (sourceGenerator) {
  for await (const value of sourceGenerator) {
    let retry = true;

    while (retry) {
      retry = yield value;
    }
  }
};

module.exports = retryable;
