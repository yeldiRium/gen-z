/**
 * Returns the first element from `gen` or undefined, if `gen` does not generate anything.
 *
 * @param {Generator} gen
 * @returns {any | undefined}
 */
const head = gen => {
  const next = gen.next();

  return next.value;
};

module.exports = head;
