/**
 * Yields the given value repeatedly.
 *
 * @memberOf g:sync
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
