/**
 * Collects the values yielded by the asynchronous `sourceGenerator` in a new or
 * the given array.
 *
 * @memberOf g:async
 *
 * @param {AsyncIterator} sourceGenerator
 * @param {any[]} array
 * @async
 * @returns {Promise<any[]>}
 */
const collectInArray = async (sourceGenerator, array = []) => {
  for await (const value of sourceGenerator) {
    array.push(value);
  }

  return array;
};

module.exports = collectInArray;
