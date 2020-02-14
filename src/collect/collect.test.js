const collect = require("./collect");
const range = require("../create/range");

describe("collect", () => {
  it("collects a generator's content in an array by default", () => {
    const gen = range(10);

    const result = collect(gen);

    expect(result).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("collects the content into an array, if one is given", () => {
    const input = [];
    const gen = range(10);

    const result = collect(gen, input);

    expect(input).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result).toBe(input);
  });

  it("collects the content into a set, if one is given", () => {
    const input = new Set();
    const gen = range(10);

    const result = collect(gen, input);

    expect(input).toStrictEqual(new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    expect(result).toBe(input);
  });
});
