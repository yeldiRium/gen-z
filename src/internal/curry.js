const curry = (f, ...args) => {
  if (f.length === 0) {
    return f;
  }
  if (f.length === args.length) {
    return f(...args);
  }
  return (...more) => curry(f, ...args, ...more);
};

module.exports = curry;
