/**
 * Returns the first value from the asynchronous `sourceGenerator` or undefined,
 * if the `sourceGenerator` does not yield anything.
 *
 * @memberOf g:sync
 * @param {AsyncGenerator} sourceGenerator
 * @async
 * @returns {any | undefined}
 */
const head = async (sourceGenerator) => {
  const next = await sourceGenerator.next();

  return next.value;
};

module.exports = head;
