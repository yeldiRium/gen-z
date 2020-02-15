/**
 * Collect the values yielded by the `sourceGenerator` in a new or given set.
 *
 * @memberOf g:sync
 *
 * @param {Generator} sourceGenerator
 * @param {Set<any>} [set]
 * @returns {Set<any>}
 */
const collectInSet = (sourceGenerator, set = new Set()) => {
  for (const value of sourceGenerator) {
    set.add(value);
  }

  return set;
};

module.exports = collectInSet;
