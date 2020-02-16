const drop = require("./drop");

/**
 * Drops the first value from the asynchronous `sourceGenerator`.
 *
 * @memberOf g:async
 *
 * @param {AsyncGenerator} sourceGenerator
 * @async
 * @function
 * @generator
 * @yields {any}
 */
const tail = drop(1);

module.exports = tail;
