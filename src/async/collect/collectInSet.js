/**
 * Collects the values yielded by the asynchronous `sourceGenerator` in a new or
 * the given set.
 *
 * @memberOf g:async
 *
 * @param {AsyncIterator} gen
 * @param {Set<any>} set
 * @async
 * @returns {Promise<Set<any>>}
 */
const collectInSet = async (gen, set = new Set()) => {
  for await (const value of gen) {
    set.add(value);
  }

  return set;
};

module.exports = collectInSet;
