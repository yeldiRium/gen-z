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

// Control
const acknowledgable = require("./control/acknowledgable");
const retryable = require("./control/retryable");

// Create
const from = require("./create/from");

module.exports = {
  collect,
  collectInArray,
  collectInSet,
  forEach,
  reduce,

  acknowledgable,
  retryable,

  from
};
