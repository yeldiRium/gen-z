const stream = require("stream");

const collectInSet = require("./collectInSet");
const from = require("../create/from");

describe("async.collect.collectInSet", () => {
  it("collects all values yielded by an async generator in a set", async () => {
    const sourceGenerator = from([Promise.resolve(6), 8, Promise.resolve(10)]);

    const result = await collectInSet(sourceGenerator);

    expect(result).toStrictEqual(new Set([6, 8, 10]));
  });

  it("collects all values yielded by an async generator in the given set", async () => {
    const set = new Set();

    const sourceGenerator = from([Promise.resolve(10)]);

    await collectInSet(sourceGenerator, set);

    expect(set).toStrictEqual(new Set([10]));
  });

  it("rejects if an async generator throws an error", async () => {
    const sourceGenerator = from([Promise.reject(new Error("Blub."))]);

    await expect(collectInSet(sourceGenerator)).rejects.toThrow("Blub.");
  });

  it("works with streams", async () => {
    const input = stream.Readable.from([0, 1, 2]);

    const result = await collectInSet(input, new Set());

    expect(result).toStrictEqual(new Set([0, 1, 2]));
  });
});
