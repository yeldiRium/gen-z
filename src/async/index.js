/**
 * Working with or creating asynchronous generators. Often compatible with
 * node.js streams, but not guaranteed.
 *
 * @module g:async
 * @typicalname g
 */

// Consume
const collect = require("./consume/collect");
const collectInArray = require("./consume/collectInArray");
const collectInSet = require("./consume/collectInSet");
const forEach = require("./consume/forEach");
const reduce = require("./consume/reduce");

// Create
const from = require("./create/from");

module.exports = {
  collect,
  collectInArray,
  collectInSet,
  forEach,
  reduce,
  from
};
