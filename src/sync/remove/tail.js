const drop = require("./drop");

/**
 * Drops the first value from the `sourceGenerator`.
 *
 * @memberOf g:sync
 *
 * @param {Generator} sourceGenerator
 * @function
 * @generator
 * @yields {any}
 */
const tail = drop(1);

module.exports = tail;
