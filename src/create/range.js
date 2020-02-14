const inRange = require("../internal/inRange");

/**
 * Generates values from `start` to `stop` in steps of length `step`.
 *
 * @param {number} start
 * @param {number} stop
 * @param {number} step
 * @generator
 * @yields {number}
 */
const range = (start, stop, step = 1) => {
  if (step === 0) {
    throw new Error("Step must not be zero.");
  }
  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  return (function*() {
    if (start < stop && step < 0) {
      return;
    }
    if (start > stop && step > 0) {
      return;
    }

    let i = start;
    while (inRange(start, stop, i) && i !== stop) {
      yield i;
      i += step;
    }
  })();
};

module.exports = range;
