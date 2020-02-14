const curry = require("../internal/curry");

const takeWhile = function*(predicate, gen) {
  for (const element of gen) {
    if (!predicate(element)) {
      return;
    }

    yield element;
  }
};

module.exports = curry(takeWhile);
