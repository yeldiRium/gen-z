/**
 * Yields the given value repeatedly. If a function is given, it is called on
 * repeat. It does not cache the function's return value.
 *
 * @memberOf g:sync
 *
 * @param {any} value
 * @generator
 * @yields {any}
 */
const repeat = function* (value) {
  while (true) {
    if (value instanceof Function) {
      yield value();

      continue;
    }

    yield value;
  }
};

module.exports = repeat;
