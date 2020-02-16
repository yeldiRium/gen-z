const collect = require("../consume/collect");
const cycle = require("./cycle");
const take = require("../remove/take");

describe("sync.create.cycle", () => {
  it("cycles infinitely through an array", () => {
    const values = [1, 3, 3, 7];

    const cyclingGenerator = cycle(values);

    const result = collect(take(10, cyclingGenerator));
    expect(result).toStrictEqual([1, 3, 3, 7, 1, 3, 3, 7, 1, 3]);
  });

  it("throws an error if the given array is empty", () => {
    expect(() => cycle([])).toThrow("Cannot cycle through empty array.");
  });
});
