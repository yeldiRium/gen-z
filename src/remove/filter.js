const curry = require("../internal/curry");

const filter = function*(predicate, generator) {
  for (const element of generator) {
    if (predicate(element)) {
      yield element;
    }
  }
};

module.exports = curry(filter);
