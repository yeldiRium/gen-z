const curry = require("../internal/curry");

const drop = function*(amount, gen) {
  for (let i = 0; i < amount; i++) {
    gen.next();
  }

  for (const element of gen) {
    yield element;
  }
};

module.exports = curry(drop);
