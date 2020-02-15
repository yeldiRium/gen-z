/**
 * Makes a generator retryable. Pass true to the resulting generator's next()
 * function to repeat the previous value.
 *
 * @param {Generator} gen
 * @generator
 * @yields {any}
 */
const retryable = function*(gen) {
  for (const element of gen) {
    let retry = true;
    while (retry) {
      retry = yield element;
    }
  }
};

module.exports = retryable;
