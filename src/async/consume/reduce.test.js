const range = require("../../sync/create/range");
const reduce = require("./reduce");

describe("async.consume.reduce", () => {
  it("reduces a generator to a value", async () => {
    const sourceGenerator = range(5);

    const result = await reduce(
      async (acc, next) => acc + next,
      0,
      sourceGenerator
    );

    expect(result).toBe(10);
  });

  it("is curried", async () => {
    const sourceGenerator = range(5);

    const sum = reduce(async (acc, next) => acc + next, 0);

    const result = await sum(sourceGenerator);

    expect(result).toBe(10);
  });
});
