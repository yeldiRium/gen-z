/**
 * Yields the given value repeatedly. If an asynchronous function is given, it
 * is called on repeat. It does not cache the function's resolve value.
 *
 * @memberOf g:async
 *
 * @param {any} value
 * @async
 * @generator
 * @yields {any}
 */
const repeat = async function* (value) {
  while (true) {
    if (value instanceof Function) {
      yield await value();

      continue;
    }

    yield await value;
  }
};

module.exports = repeat;
