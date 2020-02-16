const collect = require("../consume/collect");
const from = require("../create/from");
const range = require("../../sync/create/range");
const zip = require("./zip");

describe("async.transform.zip", () => {
  it("zips two asynchronous generators until one of them is done", async () => {
    const asyncSourceGenerator1 = from(range(5));
    const asyncSourceGenerator2 = from(range(10, 0, -1));

    const zippedGenerator = zip(asyncSourceGenerator1, asyncSourceGenerator2);

    const result = await collect(zippedGenerator);
    expect(result).toStrictEqual([
      [0, 10],
      [1, 9],
      [2, 8],
      [3, 7],
      [4, 6]
    ]);
  });

  it("is curried", async () => {
    const asyncSourceGenerator1 = from(range(5));
    const zipWithGen1 = zip(asyncSourceGenerator1);

    const asyncSourceGenerator2 = from(range(10, 0, -1));

    const zippedGenerator = zipWithGen1(asyncSourceGenerator2);

    const result = await collect(zippedGenerator);
    expect(result).toStrictEqual([
      [0, 10],
      [1, 9],
      [2, 8],
      [3, 7],
      [4, 6]
    ]);
  });

  it("propagates rejections", async () => {
    const asyncSourceGenerator1 = (async function*() {
      yield 1;
      throw new Error("Blub.");
    })();
    const asyncSourceGenerator2 = from(range(5));

    const zippedGenerator = zip(asyncSourceGenerator1, asyncSourceGenerator2);

    await expect(collect(zippedGenerator)).rejects.toThrow("Blub.");
  });
});
