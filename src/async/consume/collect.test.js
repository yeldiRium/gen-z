const fs = require("fs");
const stream = require("stream");

const collect = require("./collect");
const from = require("../create/from");

describe("async.consume.collect", () => {
  it("collects all values yielded by an async generator in an array", async () => {
    const sourceGenerator = from([0, 1, 2]);

    const result = await collect(sourceGenerator);

    expect(result).toStrictEqual([0, 1, 2]);
  });

  it("collects all values yielded by an async generator in a given array", async () => {
    const input = [];
    const sourceGenerator = from([0, 1, 2]);

    const result = await collect(sourceGenerator, input);

    expect(input).toStrictEqual([0, 1, 2]);
    expect(result).toBe(input);
  });

  it("collects collects all values yielded by an async generator in a given set", async () => {
    const input = new Set();
    const sourceGenerator = from([0, 1, 2]);

    const result = await collect(sourceGenerator, input);

    expect(input).toStrictEqual(new Set([0, 1, 2]));
    expect(result).toBe(input);
  });

  it("rejects if an async generator throws an error", async () => {
    // eslint-disable-next-line require-yield
    const sourceGenerator = (async function* () {
      throw new Error("Blub.");
    })();

    await expect(collect(sourceGenerator)).rejects.toThrow("Blub.");
  });

  describe("miscellaneous", () => {
    it("works with streams", async () => {
      const input = stream.Readable.from([0, 1, 2]);

      const result = await collect(input);

      expect(result).toStrictEqual([0, 1, 2]);
    });

    it("can read a file buffer stream into a string", async () => {
      const inputStream = fs.createReadStream(__filename);

      const content = Buffer.concat(await collect(inputStream)).toString();

      expect(content).toContain(
        "this token should exist since it exists in this file this is circularrrrrrr"
      );
    });
  });
});
