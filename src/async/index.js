/**
 * Working with or creating asynchronous generators. Often compatible with
 * node.js streams, but not guaranteed.
 *
 * @module g:async
 * @typicalname g
 */

const collect = require("./consume/collect");
const collectInArray = require("./consume/collectInArray");
const collectInSet = require("./consume/collectInSet");
const from = require("./create/from");

module.exports = {
  collect,
  collectInArray,
  collectInSet,
  from
};
