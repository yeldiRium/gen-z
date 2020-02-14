/**
 * Collects the elements of an asynchronous generator in a new or the given
 * array.
 *
 * Also works with streams.
 *
 * @param {AsyncIterator} gen
 * @param {Set<any>} set
 * @async
 * @returns {Promise<Set<any>>}
 */
const collectInSet = async (gen, set = new Set()) => {
  for await (const element of gen) {
    set.add(element);
  }

  return set;
};

module.exports = collectInSet;
