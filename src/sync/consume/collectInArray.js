/**
 * Collect the values yielded by the `sourceGenerator` in a new or given array.
 *
 * @memberOf g:sync
 *
 * @param {Generator} sourceGenerator
 * @param {any[]} [array]
 * @returns {any[]}
 */
const collectInArray = (sourceGenerator, array = []) => {
  for (const value of sourceGenerator) {
    array.push(value);
  }

  return array;
};

module.exports = collectInArray;
