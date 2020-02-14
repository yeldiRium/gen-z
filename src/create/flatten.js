const collect = require("../collect/collect");

/**
 * Recursively flattens generators and other iterators.
 *
 * @param {Generator} gen
 * @generator
 * @yields {any}
 */
const flatten = function*(gen) {
  let gens = [gen];

  while (gens.length > 0) {
    const next = gens.shift();

    if (next.next === undefined) {
      yield next;
      continue;
    }

    const elements = collect(next);

    gens.unshift(...elements);
  }
};

module.exports = flatten;
