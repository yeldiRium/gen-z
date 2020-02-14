const curry = require("../internal/curry");

const dropWhile = function*(predicate, gen) {
  for (const element of gen) {
    if (predicate(element)) {
      continue;
    }

    yield element;
  }
};

module.exports = curry(dropWhile);
