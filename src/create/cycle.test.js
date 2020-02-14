const collect = require("../collect/collect");
const cycle = require("./cycle");
const take = require("../remove/take");

describe("cycle", () => {
  it("cycles infinitely through a list of values", () => {
    const values = [1, 3, 3, 7];

    const gen = cycle(values);

    const result = collect(take(10, gen));
    expect(result).toStrictEqual([1, 3, 3, 7, 1, 3, 3, 7, 1, 3]);
  });

  it("throws an error if the given values array is empty", () => {
    expect(() => cycle([])).toThrow("Cannot cycle through empty array.");
  });
});
