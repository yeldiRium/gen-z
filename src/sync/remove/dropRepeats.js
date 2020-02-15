/**
 * Drops repeating values from the `sourceGenerator`.
 *
 * @memberOf g:sync
 *
 * @param {Generator} sourceGenerator
 * @generator
 * @yields {any}
 */
const dropRepeats = function*(sourceGenerator) {
  // The start value must be something that cannot be equal to anything else.
  // A symbol is probably the best choice.
  let previous = Symbol("null");

  for (const value of sourceGenerator) {
    if (value === previous) {
      continue;
    }

    previous = value;
    yield value;
  }
};

module.exports = dropRepeats;
