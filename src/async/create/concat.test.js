const collect = require("../consume/collect");
const concat = require("./concat");
const from = require("./from");
const range = require("../../sync/create/range");

describe("async.create.concat", () => {
  it("concatenates two asynchronous generators", async () => {
    const asyncSourceGenerator1 = from(range(5));
    const asyncSourceGenerator2 = from(range(4, -1, -1));

    const concatenatedGenerator = concat(
      asyncSourceGenerator1,
      asyncSourceGenerator2
    );

    const result = await collect(concatenatedGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4, 4, 3, 2, 1, 0]);
  });

  it("is curried", async () => {
    const asyncSourceGenerator1 = from(range(5));
    const asyncSourceGenerator2 = from(range(4, -1, -1));

    const concatGenerator1 = concat(asyncSourceGenerator1);
    const concatenatedGenerator = concatGenerator1(asyncSourceGenerator2);

    const result = await collect(concatenatedGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4, 4, 3, 2, 1, 0]);
  });

  it("passes errors from the generators through", async () => {
    const asyncSourceGenerator1 = from(range(5));
    const asyncSourceGenerator2 = (async function*() {
      yield 5;
      throw new Error("Blub.");
    })();

    const concatenatedGenerator = concat(
      asyncSourceGenerator1,
      asyncSourceGenerator2
    );

    await expect(collect(concatenatedGenerator)).rejects.toThrow("Blub.");
  });
});
