const chain = require("./transform/chain");
const concat = require("./create/concat");
const collect = require("./collect/collect");
const collectInArray = require("./collect/collectInArray");
const collectInSet = require("./collect/collectInSet");
const cycle = require("./create/cycle");
const drop = require("./remove/drop");
const dropWhile = require("./remove/dropWhile");
const filter = require("./remove/filter");
const find = require("./search/find");
const head = require("./remove/head");
const iterate = require("./create/iterate");
const map = require("./transform/map");
const range = require("./create/range");
const reduce = require("./collect/reduce");
const repeat = require("./create/repeat");
const some = require("./search/some");
const tail = require("./remove/tail");
const take = require("./remove/take");
const takeWhile = require("./remove/takeWhile");
const zip = require("./transform/zip");

module.exports = {
  chain,
  concat,
  collect,
  collectInArray,
  collectInSet,
  cycle,
  drop,
  dropWhile,
  filter,
  find,
  head,
  iterate,
  map,
  range,
  repeat,
  reduce,
  some,
  tail,
  take,
  takeWhile,
  zip
};
