const curry = require("../../internal/curry");

/**
 * Executes the (optionally asynchronous) `callback` for each value
 * asynchronously yielded by the `sourceGenerator`.
 *
 * Each resolved value of the `callback` is passed to the next next-function
 * call on the `sourceGenerator`.
 *
 * @memberOf g:async
 *
 * @param {Function} callback
 * @param {AsyncGenerator} sourceGenerator
 * @async
 *
 * @example
 * const generator = acknowledgable(eventsFromSomewhere(), acknowledgeEvent);
 * await forEach(
 *   async event => {
 *     try {
 *       await sendEventSomewhere(event);
 *
 *       // This acknowledges the event via acknowledgable above.
 *       return true;
 *     } catch {
 *       return false;
 *     }
 *   },
 *   generator
 * );
 */
const forEach = async (callback, sourceGenerator) => {
  let element = await sourceGenerator.next();

  while (!element.done) {
    const result = await callback(element.value);
    element = await sourceGenerator.next(result);
  }
};

module.exports = curry(forEach);
