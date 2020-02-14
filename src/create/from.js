/**
 * Creates a generator from an iterable.
 *
 * @param {Iterable} iterable
 * @generator
 * @yields {any}
 */
const from = function*(iterable) {
  for (const element of iterable) {
    yield element;
  }
};

module.exports = from;
