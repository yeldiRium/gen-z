const curry = require("../internal/curry");

const map = function*(f, gen) {
  for (const element of gen) {
    yield f(element);
  }
};

module.exports = curry(map);
