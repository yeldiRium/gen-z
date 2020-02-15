/**
 * Cycles through the given `array`, yielding its values repeatedly.
 *
 * @memberOf g:sync
 *
 * @param {any[]} array
 * @generator
 * @yields {any}
 */
const cycle = array => {
  if (array.length === 0) {
    throw new Error("Cannot cycle through empty array.");
  }

  return (function*() {
    let i = 0;
    while (true) {
      yield array[i];

      i = (i + 1) % array.length;
    }
  })();
};

module.exports = cycle;
