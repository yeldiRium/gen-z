const collect = require("../consume/collect");
const filter = require("./filter");
const from = require("../create/from");
const range = require("../../sync/create/range");

describe("async.remove.filter", () => {
  it("filters values out of an asynchronous generator", async () => {
    const asyncSourceGenerator = from(range(10));

    const filteredGenerator = filter(
      async (elem) => elem % 2 === 0,
      asyncSourceGenerator
    );

    const result = await collect(filteredGenerator);
    expect(result).toStrictEqual([0, 2, 4, 6, 8]);
  });

  it("is curried", async () => {
    const asyncSourceGenerator = from(range(10));

    const filterEven = filter((elem) => elem % 2 === 0);

    const filteredGenerator = filterEven(asyncSourceGenerator);

    const result = await collect(filteredGenerator);
    expect(result).toStrictEqual([0, 2, 4, 6, 8]);
  });

  it("propagates rejection", async () => {
    const asyncSourceGenerator = (async function* () {
      yield 2;
      throw new Error("Blub.");
    })();

    const filteredGenerator = filter(
      async (a) => a % 2 === 0,
      asyncSourceGenerator
    );

    await expect(collect(filteredGenerator)).rejects.toThrow("Blub.");
  });
});
