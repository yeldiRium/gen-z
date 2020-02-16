/**
 * Recursively flattens asynchronous and synchronous generators and yields their
 * values in depth-first order.
 *
 * @memberOf g:async
 *
 * @param {AsyncGenerator} sourceGenerator
 * @async
 * @generator
 * @yields {any}
 */
const flatten = async function*(sourceGenerator) {
  for await (const value of sourceGenerator) {
    if (value.next === undefined) {
      yield value;
      continue;
    }

    for await (const subValue of flatten(value)) {
      yield subValue;
    }
  }
};

module.exports = flatten;
