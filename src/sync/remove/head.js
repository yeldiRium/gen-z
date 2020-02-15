/**
 * Returns the first value from the `sourceGenerator` or undefined, if
 * `sourceGenerator` does not yield anything.
 *
 * @memberOf g:sync
 * @param {Generator} sourceGenerator
 * @returns {any | undefined}
 */
const head = sourceGenerator => {
  const next = sourceGenerator.next();

  return next.value;
};

module.exports = head;
