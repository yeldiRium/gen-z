/**
 * Repeatedly generates each element from the source `gen` until the element is
 * explicitly acknowledged by passing true to next().
 *
 * @param {Generator} gen
 * @generator
 * @yields {any}
 */
const acknowledgable = function*(gen) {
  for (const element of gen) {
    let acknowledged = false;
    while (!acknowledged) {
      acknowledged = yield element;
    }
  }
};

module.exports = acknowledgable;
