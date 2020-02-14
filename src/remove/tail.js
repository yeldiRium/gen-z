const drop = require("./drop");

/**
 * Returns `gen` without its first element.
 *
 * @param {Generator} gen
 * @generator
 * @yields {any}
 */
const tail = drop(1);

module.exports = tail;
