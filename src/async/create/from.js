/**
 * Creates an asynchronous generator from a given iterable. Any promises in the
 * iterable will be flattened in the generator.
 *
 * @memberOf g:async
 *
 * @param {Iterable} iterable
 * @async
 * @generator
 * @yields {any}
 */
const from = async function*(iterable) {
  for (const value of iterable) {
    yield await value;
  }
};

module.exports = from;
