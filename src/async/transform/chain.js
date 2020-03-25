const curry = require("../../internal/curry");

/**
 * Applies (the optionally asynchronous) `f` to the values of the asynchronous
 * `sourceGenerator` and concatenates resulting (asynchronous) generators.
 *
 * @memberOf g:async
 *
 * @param {Function} f
 * @param {AsyncGenerator} sourceGenerator
 * @async
 * @generator
 * @yields {any}
 */
const chain = async function* (f, sourceGenerator) {
  for await (const value of sourceGenerator) {
    const next = await f(value);

    if (next.next === undefined) {
      yield next;
    } else {
      for await (const nextElement of next) {
        yield nextElement;
      }
    }
  }
};

module.exports = curry(chain);
