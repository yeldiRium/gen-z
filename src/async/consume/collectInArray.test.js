const stream = require("stream");

const collectInArray = require("./collectInArray");
const from = require("../create/from");

describe("async.consume.collectInArray", () => {
  it("collects collects all values yielded by an async generator in an array", async () => {
    const sourceGenerator = from([Promise.resolve(6), 8, Promise.resolve(10)]);

    const result = await collectInArray(sourceGenerator);

    expect(result).toStrictEqual([6, 8, 10]);
  });

  it("collects collects all values yielded by an async generator in a given array", async () => {
    const array = [];

    const sourceGenerator = from([Promise.resolve(10)]);

    await collectInArray(sourceGenerator, array);

    expect(array).toStrictEqual([10]);
  });

  it("rejects if an async generator throws an error", async () => {
    const sourceGenerator = from([Promise.reject(new Error("Blub."))]);

    await expect(collectInArray(sourceGenerator)).rejects.toThrow("Blub.");
  });

  it("works with streams", async () => {
    const input = stream.Readable.from([0, 1, 2]);

    const result = await collectInArray(input);

    expect(result).toStrictEqual([0, 1, 2]);
  });
});
