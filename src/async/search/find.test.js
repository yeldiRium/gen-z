const find = require("./find");
const from = require("../create/from");
const range = require("../../sync/create/range");

describe("async.search.find", () => {
  it("returns the first value in the asynchronous generator that satisfies the asynchronous predicate", async () => {
    const asyncSourceGenerator = from(range(10));

    const result = await find(async (a) => a === 7, asyncSourceGenerator);

    expect(result).toBe(7);
  });

  it("is curried", async () => {
    const asyncSourceGenerator = range(10);

    const findSeven = find(async (a) => a === 7);

    const result = await findSeven(asyncSourceGenerator);

    expect(result).toBe(7);
  });

  it("propagates rejections", async () => {
    const asyncSourceGenerator = (async function* () {
      yield 2;
      throw new Error("Blub.");
    })();

    await expect(
      find(async (a) => a === 7, asyncSourceGenerator)
    ).rejects.toThrow("Blub.");
  });

  it("does not propagate rejections occuring after a value was found", async () => {
    const asyncSourceGenerator = (async function* () {
      yield 2;
      yield 3;
      throw new Error("Blub.");
    })();

    await expect(
      find(async (a) => a === 2, asyncSourceGenerator)
    ).resolves.not.toThrow();
  });
});
