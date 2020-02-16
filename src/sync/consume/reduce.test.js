const range = require("../create/range");
const reduce = require("./reduce");

describe("sync.consume.reduce", () => {
  it("reduces a generator to a value", () => {
    const sourceGenerator = range(5);

    const result = reduce((acc, next) => acc + next, 0, sourceGenerator);

    expect(result).toBe(10);
  });

  it("is curried", () => {
    const sourceGenerator = range(5);

    const sum = reduce((acc, next) => acc + next, 0);

    const result = sum(sourceGenerator);

    expect(result).toBe(10);
  });
});
