/**
 * Repeats the given value infinitely.
 *
 * @param {any} value
 * @generator
 * @yields {any}
 */
const repeat = function*(value) {
  while (true) {
    yield value;
  }
};

module.exports = repeat;
