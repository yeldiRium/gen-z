const head = gen => {
  const next = gen.next();

  return next.value;
};

module.exports = head;
