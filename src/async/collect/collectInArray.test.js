const stream = require("stream");

const collectInArray = require("./collectInArray");
const from = require("../create/from");

describe("async.collect.collectInArray", () => {
  it("collects the content of an async generator in an array", async () => {
    const gen = from([Promise.resolve(6), 8, Promise.resolve(10)]);

    const result = await collectInArray(gen);

    expect(result).toStrictEqual([6, 8, 10]);
  });

  it("collects the content in the given array", async () => {
    const array = [];

    const gen = from([Promise.resolve(10)]);

    await collectInArray(gen, array);

    expect(array).toStrictEqual([10]);
  });

  it("rejects if an async generator throws an error", async () => {
    const gen = from([Promise.reject(new Error("Blub."))]);

    await expect(collectInArray(gen)).rejects.toThrow("Blub.");
  });

  it("works with streams", async () => {
    const input = stream.Readable.from([0, 1, 2]);

    const result = await collectInArray(input);

    expect(result).toStrictEqual([0, 1, 2]);
  });
});
