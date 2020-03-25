const collect = require("../consume/collect");
const dropWhile = require("./dropWhile");
const from = require("../create/from");
const range = require("../../sync/create/range");

describe("async.remove.dropWhile", () => {
  it("drops values from the asynchronous generator as long as the asynchronous predicate matches the resolve value", async () => {
    const asyncSourceGenerator = from(range(10));

    const droppedGenerator = dropWhile(
      async (elem) => elem < 5,
      asyncSourceGenerator
    );

    const result = await collect(droppedGenerator);
    expect(result).toStrictEqual([5, 6, 7, 8, 9]);
  });

  it("is curried", async () => {
    const asyncSourceGenerator = from(range(10));

    const dropUnderFive = dropWhile((elem) => elem < 5);
    const droppedGenerator = dropUnderFive(asyncSourceGenerator);

    const result = await collect(droppedGenerator);
    expect(result).toStrictEqual([5, 6, 7, 8, 9]);
  });

  it("propagates rejection", async () => {
    const asyncSourceGenerator = (async function* () {
      yield 2;
      throw new Error("Blub.");
    })();

    const droppedGenerator = dropWhile(
      async (a) => a % 2 === 0,
      asyncSourceGenerator
    );

    await expect(collect(droppedGenerator)).rejects.toThrow("Blub.");
  });
});
