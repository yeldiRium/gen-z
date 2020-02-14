/**
 * Drops repeating elements from `gen`.
 *
 * @param {Generator} gen
 * @generator
 * @yields {any}
 */
const dropRepeats = function*(gen) {
  // The start value must be something that cannot be equal to anything else.
  // A symbol is probably the best choice.
  let previous = Symbol("null");

  for (const element of gen) {
    if (element === previous) {
      continue;
    }

    previous = element;
    yield element;
  }
};

module.exports = dropRepeats;
