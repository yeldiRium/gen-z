const collect = require("./collect/collect");
const collectInArray = require("./collect/collectInArray");
const collectInSet = require("./collect/collectInSet");
const filter = require("./transform/filter");
const range = require("./create/range");
const take = require("./cut/take");

module.exports = {
  collect,
  collectInArray,
  collectInSet,
  filter,
  range,
  take
};
