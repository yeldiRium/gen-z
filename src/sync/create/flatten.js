/**
 * Recursively flattens generators and yields their values
 * in depth-first order.
 *
 * Should work with anything implementing the `Iterator` interface.
 *
 * @memberOf g:sync
 *
 * @param {Generator} sourceGenerator
 * @generator
 * @yields {any}
 */
const flatten = function* (sourceGenerator) {
  for (const value of sourceGenerator) {
    if (value.next === undefined) {
      yield value;
      continue;
    }

    for (const subValue of flatten(value)) {
      yield subValue;
    }
  }
};

module.exports = flatten;
