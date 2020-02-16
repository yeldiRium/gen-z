const collect = require("../consume/collect");
const from = require("../create/from");
const range = require("../../sync/create/range");
const takeWhile = require("./takeWhile");

describe("async.remove.takeWhile", () => {
  it("yields values from the asynchronous generator as long as the asynchronous predicate matches", async () => {
    const asyncSourceGenerator = from(range(10));

    const takenGenerator = takeWhile(
      async elem => elem < 5,
      asyncSourceGenerator
    );

    const result = await collect(takenGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("works with infinite generators", async () => {
    const asyncSourceGenerator = (async function*() {
      let i = 0;
      while (true) {
        yield i++;
      }
    })();

    const takenGenerator = takeWhile(
      async elem => elem < 5,
      asyncSourceGenerator
    );

    const result = await collect(takenGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("is curried", async () => {
    const asyncSourceGenerator = from(range(10));

    const takeUnderFive = takeWhile(async elem => elem < 5);

    const takenGenerator = takeUnderFive(asyncSourceGenerator);

    const result = await collect(takenGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("propagates rejections", async () => {
    const asyncSourceGenerator = (async function*() {
      yield 2;
      throw new Error("Blub.");
    })();

    const takenGenerator = takeWhile(
      async elem => elem < 5,
      asyncSourceGenerator
    );

    await expect(collect(takenGenerator)).rejects.toThrow("Blub.");
  });

  it("does not propagate rejections occuring after values the predicate doesn't match", async () => {
    const asyncSourceGenerator = (async function*() {
      yield 2;
      yield 3;
      throw new Error("Blub.");
    })();

    const takenGenerator = takeWhile(
      async elem => elem < 3,
      asyncSourceGenerator
    );

    await expect(collect(takenGenerator)).resolves.not.toThrow();
  });
});
