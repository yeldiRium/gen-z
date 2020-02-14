const find = require("./find");
const range = require("../create/range");

describe("find", () => {
  it("returns the first element in the generator that satisfies the predicate", () => {
    const gen = range(10);

    const result = find(a => a === 7, gen);

    expect(result).toBe(7);
  });

  it("is curried", () => {
    const gen = range(10);

    const findSeven = find(a => a === 7);

    const result = findSeven(gen);

    expect(result).toBe(7);
  });
});
