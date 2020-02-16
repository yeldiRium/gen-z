const collectInSet = require("./collectInSet");
const range = require("../create/range");

describe("sync.consume.collectInSet", () => {
  it("collects all values yielded by a generator in a set", () => {
    const sourceGenerator = range(10);

    const set = collectInSet(sourceGenerator);

    expect(set).toStrictEqual(new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  });

  it("collects all values yielded by a generator in a given set", () => {
    const set = new Set();
    const sourceGenerator = range(10);

    collectInSet(sourceGenerator, set);

    expect(set).toStrictEqual(new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  });
});
