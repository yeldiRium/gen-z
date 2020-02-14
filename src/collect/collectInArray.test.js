const collectInArray = require("./collectInArray");
const range = require("../create/range");

describe("collectInArray", () => {
  it("collects a generators content in an array", () => {
    const gen = range(10);

    const array = collectInArray(gen);

    expect(array).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("collects the content in the given array", () => {
    const array = [];
    const gen = range(10);

    collectInArray(gen, array);

    expect(array).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
