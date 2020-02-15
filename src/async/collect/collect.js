const collectInSet = require("./collectInSet");
const collectInArray = require("./collectInArray");

/**
 * Collects the values yielded by the asynchronous `sourceGenerator` in a given
 * collection or in a new array.
 *
 * @memberOf g:async
 *
 * @param {AsyncIterator} sourceGenerator
 * @param {Set<any>|any[]} [collection]
 * @async
 * @returns {Promise<Set<any>|any[]>}
 */
const collect = async (sourceGenerator, collection = []) => {
  if (collection instanceof Set) {
    return await collectInSet(sourceGenerator, collection);
  }
  return await collectInArray(sourceGenerator, collection);
};

module.exports = collect;
