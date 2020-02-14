const range = require("../create/range");
const some = require("./some");

describe("some", () => {
  it("returns true if any of the values in a generator satify the predicate", () => {
    const gen = range(10);

    const result = some(a => a === 7, gen);

    expect(result).toBe(true);
  });

  it("returns false if none of the values in a generator satify the predicate", () => {
    const gen = range(5);

    const result = some(a => a === 7, gen);

    expect(result).toBe(false);
  });

  it("is curried", () => {
    const gen = range(10);

    const someSeven = some(a => a === 7);

    const result = someSeven(gen);

    expect(result).toBe(true);
  });
});
