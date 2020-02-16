const from = require("../create/from");
const range = require("../../sync/create/range");
const some = require("./some");

describe("async.search.some", () => {
  it("returns true if any of the values yielded by the asynchronous generator satify the asynchronous predicate", async () => {
    const asyncSourceGenerator = from(range(10));

    const result = await some(async a => a === 7, asyncSourceGenerator);

    expect(result).toBe(true);
  });

  it("returns false if none of the values yielded by the generator satify the predicate", async () => {
    const asyncSourceGenerator = range(5);

    const result = await some(async a => a === 7, asyncSourceGenerator);

    expect(result).toBe(false);
  });

  it("is curried", async () => {
    const asyncSourceGenerator = from(range(10));

    const someSeven = some(async a => a === 7);

    const result = await someSeven(asyncSourceGenerator);

    expect(result).toBe(true);
  });

  it("propagates rejections", async () => {
    const asyncSourceGenerator = (async function*() {
      yield 2;
      throw new Error("Blub.");
    })();

    await expect(
      some(async a => a === 7, asyncSourceGenerator)
    ).rejects.toThrow("Blub.");
  });

  it("does not propagate rejections occuring after a value was found", async () => {
    const asyncSourceGenerator = (async function*() {
      yield 2;
      yield 3;
      throw new Error("Blub.");
    })();

    await expect(
      some(async a => a === 2, asyncSourceGenerator)
    ).resolves.not.toThrow();
  });
});
