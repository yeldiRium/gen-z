const collect = require("./collect/collect");
const collectInArray = require("./collect/collectInArray");
const collectInSet = require("./collect/collectInSet");
const cycle = require("./create/cycle");
const drop = require("./cut/drop");
const dropWhile = require("./cut/dropWhile");
const filter = require("./transform/filter");
const head = require("./cut/head");
const iterate = require("./create/iterate");
const range = require("./create/range");
const tail = require("./cut/tail");
const take = require("./cut/take");
const takeWhile = require("./cut/takeWhile");

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
  range,
  tail,
  take,
  takeWhile
};
