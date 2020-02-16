const collect = require("../consume/collect");
const dropRepeats = require("./dropRepeats");
const from = require("../create/from");

describe("async.remove.dropRepeats", () => {
  it("drops repeating values from the asynchronous generator", async () => {
    const asyncSourceGenerator = from([1, 1, 1, 1, 2, 3, 3, 4]);

    const dedupedGenerator = dropRepeats(asyncSourceGenerator);

    const result = await collect(dedupedGenerator);
    expect(result).toStrictEqual([1, 2, 3, 4]);
  });

  it("propagates rejection", async () => {
    const sourceGenerator = (async function*() {
      yield 2;
      throw new Error("Blub.");
    })();

    const dedupedGenerator = dropRepeats(sourceGenerator);

    await expect(collect(dedupedGenerator)).rejects.toThrow("Blub.");
  });
});
