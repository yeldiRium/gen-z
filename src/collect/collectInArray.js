const collectInArray = (gen, array = []) => {
  for (const element of gen) {
    array.push(element);
  }

  return array;
};

module.exports = collectInArray;
