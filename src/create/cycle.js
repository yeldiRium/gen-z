const cycle = values => {
  if (values.length === 0) {
    throw new Error("Cannot cycle through empty array.");
  }

  return (function*() {
    let i = 0;
    while (true) {
      yield values[i];

      i = (i + 1) % values.length;
    }
  })();
};

module.exports = cycle;
