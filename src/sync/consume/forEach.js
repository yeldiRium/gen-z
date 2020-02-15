const curry = require("../../internal/curry");

/**
 * Executes the `callback` for each value yielded by the `sourceGenerator`.
 *
 * Each return value of the `callback` is passed to the next next-function call
 * on the `sourceGenerator`.
 *
 * @param {Function} callback
 * @param {Generator} sourceGenerator
 *
 * @example
 * const generator = acknowledgable(eventsFromSomewhere(), acknowledgeEvent);
 * forEach(
 *   event => {
 *     try {
 *       sendEventSomewhere(event);
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
const forEach = (callback, sourceGenerator) => {
  let element = sourceGenerator.next();

  while (!element.done) {
    const result = callback(element.value);
    element = sourceGenerator.next(result);
  }
};

module.exports = curry(forEach);
