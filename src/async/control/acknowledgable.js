/**
 * Makes an asynchronous generator acknowledgable. The resulting generator
 * repeatedly yields each value from the `sourceGenerator` until the value is
 * explicitly acknowledged by passing true to next().
 *
 * This is basically the opposite of `g:async.retryable`.
 *
 * @memberOf g:async
 *
 * @param {AsyncGenerator} sourceGenerator
 * @param {Function} [onAcknowledge]
 * @async
 * @generator
 * @yields {any}
 */
const acknowledgable = async function* (
  sourceGenerator,
  onAcknowledge = () => {}
) {
  for await (const value of sourceGenerator) {
    let acknowledged = false;

    while (!acknowledged) {
      acknowledged = yield value;
    }

    await onAcknowledge(value);
  }
};

module.exports = acknowledgable;
