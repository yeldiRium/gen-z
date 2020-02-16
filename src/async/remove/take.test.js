const collect = require("../consume/collect");
const from = require("../create/from");
const range = require("../../sync/create/range");
const take = require("./take");

describe("async.remove.take", () => {
  it("takes n items from an asynchronous generator", async () => {
    const asyncSourceGenerator = from(range(0, 10));

    const takenGenerator = take(5, asyncSourceGenerator);

    const result = await collect(takenGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("yields the entire generator, if it yields less than n values", async () => {
    const asyncSourceGenerator = from(range(0, 5));

    const takenGenerator = take(10, asyncSourceGenerator);

    const result = await collect(takenGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("yields nothing, if n is zero", async () => {
    const asyncSourceGenerator = from(range(0, 5));

    const takenGenerator = take(0, asyncSourceGenerator);

    const result = await collect(takenGenerator);
    expect(result).toStrictEqual([]);
  });

  it("works with infinite generators", async () => {
    const asyncSourceGenerator = (async function*() {
      let i = 0;
      while (true) {
        yield i++;
      }
    })();

    const takenGenerator = take(3, asyncSourceGenerator);

    const result = await collect(takenGenerator);
    expect(result).toStrictEqual([0, 1, 2]);
  });

  it("is curried", async () => {
    const asyncSourceGenerator = from(range(0, 10));

    const takeFive = take(5);

    const takenGenerator = takeFive(asyncSourceGenerator);

    const result = await collect(takenGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("propagates rejection", async () => {
    const asyncSourceGenerator = (async function*() {
      yield 2;
      throw new Error("Blub.");
    })();

    const takenGenerator = take(2, asyncSourceGenerator);

    await expect(collect(takenGenerator)).rejects.toThrow("Blub.");
  });

  it("does not propagate rejections occuring after more than n values", async () => {
    const asyncSourceGenerator = (async function*() {
      yield 2;
      yield 3;
      throw new Error("Blub.");
    })();

    const takenGenerator = take(2, asyncSourceGenerator);

    await expect(collect(takenGenerator)).resolves.not.toThrow();
  });
});
