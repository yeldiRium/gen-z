const collect = require("./collect");
const range = require("../create/range");

describe("collect", () => {
  it("collects all values yielded by a generator in an array", () => {
    const sourceGenerator = range(10);

    const collection = collect(sourceGenerator);

    expect(collection).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("collects all values yielded by a generator in a given array", () => {
    const input = [];
    const sourceGenerator = range(10);

    const collection = collect(sourceGenerator, input);

    expect(input).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(collection).toBe(input);
  });

  it("collects all values yielded by a generator in a given set", () => {
    const input = new Set();
    const sourceGenerator = range(10);

    const collection = collect(sourceGenerator, input);

    expect(input).toStrictEqual(new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    expect(collection).toBe(input);
  });
});
