const collectInSet = require("./collectInSet");
const collectInArray = require("./collectInArray");

/**
 * Collect the values generated by `gen` into a given collection or into a new array.
 *
 * @param {Generator} gen
 * @param {Set<any>|any[]} [collection]
 * @returns {Set<any>|any[]}
 */
const collect = (gen, collection = []) => {
  if (collection instanceof Set) {
    return collectInSet(gen, collection);
  }
  return collectInArray(gen, collection);
};

module.exports = collect;