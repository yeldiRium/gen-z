const collectInSet = require("./collectInSet");
const range = require("../create/range");

describe("collectInSet", () => {
  it("collects a generators content in an set", () => {
    const gen = range(10);

    const set = collectInSet(gen);

    expect(set).toStrictEqual(new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  });

  it("collects the content in the given set", () => {
    const set = new Set();
    const gen = range(10);

    collectInSet(gen, set);

    expect(set).toStrictEqual(new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  });
});
