const collectInSet = require("./collectInSet");
const collectInArray = require("./collectInArray");

/**
 * Collect the values yielded by the `sourceGenerator` in the given collection
 * or in a new array.
 *
 * @memberOf g:sync
 *
 * @param {Generator} sourceGenerator
 * @param {Set<any>|any[]} [collection]
 * @returns {Set<any>|any[]}
 */
const collect = (sourceGenerator, collection = []) => {
  if (collection instanceof Set) {
    return collectInSet(sourceGenerator, collection);
  }
  return collectInArray(sourceGenerator, collection);
};

module.exports = collect;
