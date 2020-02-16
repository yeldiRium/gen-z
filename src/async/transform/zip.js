const curry = require("../../internal/curry");

/**
 * Zips the values from asynchronous generators `sourceGenerator1` and
 * `sourceGenerator2` together.
 * Yields arrays with two values each.
 *
 * @memberOf g:async
 *
 * @param {AsyncGenerator} sourceGenerator1
 * @param {AsyncGenerator} sourceGenerator2
 * @async
 * @generator
 * @yields {any[]} - of the form [elem1, elem2] where elem1 is from
 *  sourceGenerator1 and elem2 ist from sourceGenerator2
 */
const zip = async function*(sourceGenerator1, sourceGenerator2) {
  while (true) {
    const next1 = await sourceGenerator1.next();
    const next2 = await sourceGenerator2.next();

    if (next1.done || next2.done) {
      return;
    }

    yield [next1.value, next2.value];
  }
};

module.exports = curry(zip);
