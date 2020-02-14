const curry = require("../internal/curry");

const take = function*(amount, gen) {
  for (let i = 0; i < amount; i++) {
    const next = gen.next();

    if (next.done) {
      return;
    }

    yield next.value;
  }
};

module.exports = curry(take);
