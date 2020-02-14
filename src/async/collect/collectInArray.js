/**
 * Collects the elements of an asynchronous generator in a new or the given
 * array.
 *
 * Also works with streams.
 *
 * @param {AsyncIterator} gen
 * @param {any[]} array
 * @async
 * @returns {Promise<any[]>}
 */
const collectInArray = async (gen, array = []) => {
  for await (const element of gen) {
    array.push(element);
  }

  return array;
};

module.exports = collectInArray;
