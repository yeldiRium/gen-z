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
 * @param {Function} [onAcknowledge]
 * @generator
 * @yields {any}
 */
const acknowledgable = function*(sourceGenerator, onAcknowledge = () => {}) {
  for (const value of sourceGenerator) {
    let acknowledged = false;

    while (!acknowledged) {
      acknowledged = yield value;
    }

    onAcknowledge(value);
  }
};

module.exports = acknowledgable;
