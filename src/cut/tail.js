const tail = function*(gen) {
  gen.next();

  for (const element of gen) {
    yield element;
  }
};

module.exports = tail;
