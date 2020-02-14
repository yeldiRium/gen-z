const stream = require("stream");

const collect = require("./collect");
const from = require("../create/from");

describe("collect", () => {
  it("collects an async generator's content in an array by default", async () => {
    const gen = from([0, 1, 2]);

    const result = await collect(gen);

    expect(result).toStrictEqual([0, 1, 2]);
  });

  it("collects the content into an array, if one is given", async () => {
    const input = [];
    const gen = from([0, 1, 2]);

    const result = await collect(gen, input);

    expect(input).toStrictEqual([0, 1, 2]);
    expect(result).toBe(input);
  });

  it("collects the content into a set, if one is given", async () => {
    const input = new Set();
    const gen = from([0, 1, 2]);

    const result = await collect(gen, input);

    expect(input).toStrictEqual(new Set([0, 1, 2]));
    expect(result).toBe(input);
  });

  it("rejects if an async generator throws an error", async () => {
    // eslint-disable-next-line require-yield
    const gen = (async function*() {
      throw new Error("Blub.");
    })();

    await expect(collect(gen)).rejects.toThrow("Blub.");
  });

  it("works with streams", async () => {
    const input = stream.Readable.from([0, 1, 2]);

    const result = await collect(input);

    expect(result).toStrictEqual([0, 1, 2]);
  });
});
