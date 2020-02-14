/**
 * Creates an async generator from a given iterable. Any promises in the
 * iterable will be flattened in the async generator.
 *
 * @param {Iterable} iterable
 * @async
 * @generator
 * @yields {any}
 */
const from = async function*(iterable) {
  for (const element of iterable) {
    yield await element;
  }
};

module.exports = from;
