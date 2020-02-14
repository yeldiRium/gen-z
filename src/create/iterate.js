const curry = require("../internal/curry");

/**
 * Generate infinite values by repeatedly applying `producer` to `start`.
 *
 * @param {Function} producer
 * @param {any} start
 * @generator
 * @yields {any}
 */
const iterate = function*(producer, start) {
  let i = start;

  while (true) {
    yield i;
    i = producer(i);
  }
};

module.exports = curry(iterate);
