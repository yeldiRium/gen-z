const collectInSet = require("./collectInSet");
const collectInArray = require("./collectInArray");

const collect = (gen, collection = []) => {
  if (collection instanceof Set) {
    return collectInSet(gen, collection);
  }
  return collectInArray(gen, collection);
};

module.exports = collect;
