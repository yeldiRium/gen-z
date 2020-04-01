/**
 * Working with or creating synchronous generators.
 *
 * @module g:sync
 */

// Consume
const collect = require("./consume/collect");
const collectInArray = require("./consume/collectInArray");
const collectInSet = require("./consume/collectInSet");
const forEach = require("./consume/forEach");
const reduce = require("./consume/reduce");

// Control
const acknowledgable = require("./control/acknowledgable");
const retryable = require("./control/retryable");

// Create
const concat = require("./create/concat");
const cycle = require("./create/cycle");
const from = require("./create/from");
const iterate = require("./create/iterate");
const range = require("./create/range");
const repeat = require("./create/repeat");

// Remove
const drop = require("./remove/drop");
const dropRepeats = require("./remove/dropRepeats");
const dropWhile = require("./remove/dropWhile");
const filter = require("./remove/filter");
const head = require("./remove/head");
const tail = require("./remove/tail");
const take = require("./remove/take");
const takeWhile = require("./remove/takeWhile");

// Search
const find = require("./search/find");
const some = require("./search/some");

// Transform
const chain = require("./transform/chain");
const map = require("./transform/map");
const zip = require("./transform/zip");

module.exports = {
  collect,
  collectInArray,
  collectInSet,
  forEach,
  reduce,

  acknowledgable,
  retryable,

  concat,
  cycle,
  from,
  iterate,
  range,
  repeat,

  drop,
  dropRepeats,
  dropWhile,
  filter,
  head,
  tail,
  take,
  takeWhile,

  find,
  some,
  chain,
  map,
  zip,
};
