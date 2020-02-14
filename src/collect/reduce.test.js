const range = require("../create/range");
const reduce = require("./reduce");

describe("reduce", () => {
  it("reduces a generator to a value", () => {
    const gen = range(5);

    const result = reduce((acc, next) => acc + next, 0, gen);

    expect(result).toBe(10);
  });

  it("is curried", () => {
    const gen = range(5);

    const sum = reduce((acc, next) => acc + next, 0);

    const result = sum(gen);

    expect(result).toBe(10);
  });
});
