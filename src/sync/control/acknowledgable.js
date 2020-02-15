/**
 * Makes a generator acknowledgable. The generator repeatedly yields each value
 * from the `sourceGenerator` until the value is explicitly acknowledged by
 * passing true to next().
 *
 * This is basically the opposite of `g:sync.retryable`.
 *
 * @memberOf g:sync
 *
 * @param {Generator} sourceGenerator
 * @generator
 * @yields {any}
 */
const acknowledgable = function*(sourceGenerator) {
  for (const value of sourceGenerator) {
    let acknowledged = false;

    while (!acknowledged) {
      acknowledged = yield value;
    }
  }
};

module.exports = acknowledgable;
