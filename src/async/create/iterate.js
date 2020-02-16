const curry = require("../../internal/curry");

/**
 * Yields infinite values by repeatedly applying the optionally asynchronous
 * `producer` to `start`.
 *
 * @memberOf g:async
 *
 * @param {Function} producer
 * @param {any} start
 * @async
 * @generator
 * @yields {any}
 */
const iterate = async function*(producer, start) {
  let i = start;

  while (true) {
    yield i;
    i = await producer(i);
  }
};

module.exports = curry(iterate);
