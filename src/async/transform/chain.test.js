const chain = require("./chain");
const collect = require("../consume/collect");
const from = require("../create/from");
const range = require("../../sync/create/range");

describe("async.transform.chain", () => {
  it("applies a function to an asynchronous generator's values and concatenates resulting generators", async () => {
    const asyncSourceGenerator = from(range(5));
    const f = async (a) => from(range(a));

    const chainedGenerator = chain(f, asyncSourceGenerator);

    const result = await collect(chainedGenerator);
    expect(result).toStrictEqual([0, 0, 1, 0, 1, 2, 0, 1, 2, 3]);
  });

  it("passes through anything that's not a generator", async () => {
    const asyncSourceGenerator = from(range(5));

    const chainedGenerator = chain(async (a) => a, asyncSourceGenerator);

    const result = await collect(chainedGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("is curried", async () => {
    const asyncSourceGenerator = from(range(5));

    const chainRange = chain(async (a) => range(a));
    const chainedGenerator = chainRange(asyncSourceGenerator);

    const result = await collect(chainedGenerator);
    expect(result).toStrictEqual([0, 0, 1, 0, 1, 2, 0, 1, 2, 3]);
  });

  it("propagates rejections", async () => {
    const asyncSourceGenerator = (async function* () {
      yield 1;
      throw new Error("Blub.");
    })();
    const f = async (a) => from(range(a));

    const chainedGenerator = chain(f, asyncSourceGenerator);

    await expect(collect(chainedGenerator)).rejects.toThrow("Blub.");
  });

  it("propagates rejections from f", async () => {
    const asyncSourceGenerator = from(range(5));
    const f = async () => {
      throw new Error("Blub.");
    };

    const chainedGenerator = chain(f, asyncSourceGenerator);

    await expect(collect(chainedGenerator)).rejects.toThrow("Blub.");
  });
});
