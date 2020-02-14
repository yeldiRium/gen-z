const curry = require("../internal/curry");

const reduce = (f, acc, gen) => {
  for (const element of gen) {
    acc = f(acc, element);
  }

  return acc;
};

module.exports = curry(reduce);
