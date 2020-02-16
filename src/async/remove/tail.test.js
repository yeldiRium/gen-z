const collect = require("../consume/collect");
const from = require("../create/from");
const range = require("../../sync/create/range");
const tail = require("./tail");

describe("async.remove.tail", () => {
  it("drops the first value from the asynchronous generator", async () => {
    const asyncSourceGenerator = from(range(5));

    const droppedGenerator = tail(asyncSourceGenerator);

    const result = await collect(droppedGenerator);
    expect(result).toStrictEqual([1, 2, 3, 4]);
  });

  it("yields nothing, if the generator yields only one element", async () => {
    const asyncSourceGenerator = from(range(1));

    const droppedGenerator = tail(asyncSourceGenerator);

    const result = await collect(droppedGenerator);
    expect(result).toStrictEqual([]);
  });

  it("yields nothing, if the generator yields nothing", async () => {
    const asyncSourceGenerator = (async function*() {})();

    const droppedGenerator = tail(asyncSourceGenerator);

    const result = await collect(droppedGenerator);
    expect(result).toStrictEqual([]);
  });

  it("propagates rejection", async () => {
    const asyncSourceGenerator = (async function*() {
      yield 0;
      throw new Error("Blub.");
    })();

    const droppedGenerator = tail(asyncSourceGenerator);

    await expect(collect(droppedGenerator)).rejects.toThrow("Blub.");
  });
});
