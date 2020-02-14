const collectInArray = (gen, set = new Set()) => {
  for (const element of gen) {
    set.add(element);
  }

  return set;
};

module.exports = collectInArray;
