const inRange = require("../internal/inRange");

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
