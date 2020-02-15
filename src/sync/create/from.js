/**
 * Creates a generator from an iterable.
 *
 * @memberOf g:sync
 *
 * @param {Iterable} iterable
 * @generator
 * @yields {any}
 */
const from = function*(iterable) {
  for (const value of iterable) {
    yield value;
  }
};

module.exports = from;
