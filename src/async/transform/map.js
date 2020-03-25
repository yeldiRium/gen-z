const curry = require("../../internal/curry");

/**
 * Applies (the optionally asynchronous) `f` to the values yielded by the
 * asynchronous `sourceGenerator`.
 *
 * @memberOf g:async
 *
 * @param {Function} f
 * @param {AsyncGenerator} sourceGenerator
 * @async
 * @generator
 * @yields {any}
 */
const map = async function* (f, sourceGenerator) {
  for await (const value of sourceGenerator) {
    yield await f(value);
  }
};

module.exports = curry(map);
