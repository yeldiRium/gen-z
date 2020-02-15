const curry = require("../../internal/curry");

/**
 * Zips the values from `sourceGenerator1` and `sourceGenerator2` together.
 * Yields arrays with two values each.
 *
 * @memberOf g:sync
 *
 * @param {Generator} sourceGenerator1
 * @param {Generator} sourceGenerator2
 * @generator
 * @yields {any[]} - of the form [elem1, elem2] where elem1 is from
 *  sourceGenerator1 and elem2 ist from sourceGenerator2
 */
const zip = function*(sourceGenerator1, sourceGenerator2) {
  while (true) {
    const next1 = sourceGenerator1.next();
    const next2 = sourceGenerator2.next();

    if (next1.done || next2.done) {
      return;
    }

    yield [next1.value, next2.value];
  }
};

module.exports = curry(zip);
