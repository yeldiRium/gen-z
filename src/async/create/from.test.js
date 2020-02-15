const collectInArray = require("../collect/collectInArray");
const from = require("./from");

describe("async.create.from", () => {
  it("asynchronously yields the contents of an iterable, resolves promises", async () => {
    const input = [
      Promise.resolve(5),
      new Promise(resolve => setTimeout(() => resolve(8), 20)),
      10
    ];

    const gen = from(input);

    const result = await collectInArray(gen);
    expect(result).toStrictEqual([5, 8, 10]);
  });

  it("throws an error if a promise rejects", async () => {
    const input = [Promise.reject(new Error("Blub."))];

    const gen = from(input);

    await expect(
      (async () => {
        // eslint-disable-next-line no-unused-vars
        for await (const element of gen) {
          // The for-await loop should throw an error when invoking gen.next()
        }
      })()
    ).rejects.toThrow("Blub.");
  });
});
