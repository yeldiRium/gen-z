/**
 * Yields the value passed to next and thus echos the values passed into it.
 *
 * The first yielded value is always undefined and the first value passod to
 * next() is ignored. This is due to how generators work.
 *
 * @memberOf g:sync
 *
 * @generator
 * @yields {any}
 */
const echo = function*() {
  let value;

  while (true) {
    value = yield value;
  }
};

module.exports = echo;
