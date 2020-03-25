const collect = require("../consume/collect");
const drop = require("./drop");
const from = require("../create/from");
const range = require("../../sync/create/range");

describe("async.remove.drop", () => {
  it("drops n values from the start of the async generator", async () => {
    const asyncSourceGenerator = from(range(10));

    const droppedGenerator = drop(5, asyncSourceGenerator);

    const result = await collect(droppedGenerator);
    expect(result).toStrictEqual([5, 6, 7, 8, 9]);
  });

  it("yields nothing, if the generator yields less than n values", async () => {
    const asyncSourceGenerator = from(range(4));

    const droppedGenerator = drop(5, asyncSourceGenerator);

    const result = await collect(droppedGenerator);
    expect(result).toStrictEqual([]);
  });

  it("is curried", async () => {
    const asyncSourceGenerator = range(4);

    const dropFive = drop(5);

    const droppedGenerator = dropFive(asyncSourceGenerator);

    const result = await collect(droppedGenerator);
    expect(result).toStrictEqual([]);
  });

  it("propagates rejection", async () => {
    const sourceGenerator = (async function* () {
      yield 2;
      throw new Error("Blub.");
    })();

    const droppedGenerator = drop(1, sourceGenerator);

    await expect(collect(droppedGenerator)).rejects.toThrow("Blub.");
  });
});
