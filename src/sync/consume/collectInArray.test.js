const collectInArray = require("./collectInArray");
const range = require("../create/range");

describe("sync.consume.collectInArray", () => {
  it("collects all values yielded by a generator in an array", () => {
    const sourceGenerator = range(10);

    const array = collectInArray(sourceGenerator);

    expect(array).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("collects all values yielded by a generator in a given array", () => {
    const array = [];
    const sourceGenerator = range(10);

    collectInArray(sourceGenerator, array);

    expect(array).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
