const curry = require("../internal/curry");

const iterate = function*(producer, start) {
  let i = start;

  while (true) {
    yield i;
    i = producer(i);
  }
};

module.exports = curry(iterate);
