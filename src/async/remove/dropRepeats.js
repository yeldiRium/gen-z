/**
 * Drops repeating values from the asynchronous `sourceGenerator`.
 *
 * @memberOf g:async
 *
 * @param {AsyncGenerator} sourceGenerator
 * @async
 * @generator
 * @yields {any}
 */
const dropRepeats = async function*(sourceGenerator) {
  // The start value must be something that cannot be equal to anything else.
  // A symbol is probably the best choice.
  let previous = Symbol("null");

  for await (const value of sourceGenerator) {
    if (value === previous) {
      continue;
    }

    previous = value;
    yield value;
  }
};

module.exports = dropRepeats;
