/**
 * Working with or creating asynchronous generators. Often compatible with
 * node.js streams, but not guaranteed.
 *
 * @module g:async
 * @typicalname g
 */

const collect = require("./collect/collect");
const collectInArray = require("./collect/collectInArray");
const collectInSet = require("./collect/collectInSet");
const from = require("./create/from");

module.exports = {
  collect,
  collectInArray,
  collectInSet,
  from
};
