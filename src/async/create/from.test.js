const collect = require("../consume/collect");
const from = require("./from");

describe("async.create.from", () => {
  it("asynchronously yields the contents of an iterable, resolves promises", async () => {
    const input = [
      Promise.resolve(5),
      new Promise((resolve) => setTimeout(() => resolve(8), 20)),
      10,
    ];

    const sourceGenerator = from(input);

    const result = await collect(sourceGenerator);
    expect(result).toStrictEqual([5, 8, 10]);
  });

  it("works with other asynchronous generators", async () => {
    const sourceGenerator = (async function* () {
      yield 5;
      yield 6;
      yield 7;
    })();

    const fromGenerator = from(sourceGenerator);

    const result = await collect(fromGenerator);
    expect(result).toStrictEqual([5, 6, 7]);
  });

  it("works with synchronous generators", async () => {
    const sourceGenerator = (function* () {
      yield 5;
      yield 6;
      yield 7;
    })();

    const fromGenerator = from(sourceGenerator);

    const result = await collect(fromGenerator);
    expect(result).toStrictEqual([5, 6, 7]);
  });

  it("throws an error if a promise rejects", async () => {
    const input = [Promise.reject(new Error("Blub."))];

    const sourceGenerator = from(input);

    await expect(
      (async () => {
        // eslint-disable-next-line no-unused-vars
        for await (const element of sourceGenerator) {
          // The for-await loop should throw an error when invoking
          // sourceGenerator.next()
        }
      })()
    ).rejects.toThrow("Blub.");
  });
});
