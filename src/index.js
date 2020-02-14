const collect = require("./collect/collect");
const collectInArray = require("./collect/collectInArray");
const collectInSet = require("./collect/collectInSet");
const cycle = require("./create/cycle");
const drop = require("./remove/drop");
const dropWhile = require("./remove/dropWhile");
const filter = require("./remove/filter");
const head = require("./remove/head");
const iterate = require("./create/iterate");
const map = require('./transform/map');
const range = require("./create/range");
const tail = require("./remove/tail");
const take = require("./remove/take");
const takeWhile = require("./remove/takeWhile");

module.exports = {
  collect,
  collectInArray,
  collectInSet,
  cycle,
  drop,
  dropWhile,
  filter,
  head,
  iterate,
  map,
  range,
  tail,
  take,
  takeWhile
};
