const collect = require("../consume/collect");
const range = require("../create/range");
const zip = require("./zip");

describe("sync.transform.zip", () => {
  it("zips two generators until one of them is done", () => {
    const sourceGenerator1 = range(5);
    const sourceGenerator2 = range(10, 0, -1);

    const zippedGenerator = zip(sourceGenerator1, sourceGenerator2);

    const result = collect(zippedGenerator);
    expect(result).toStrictEqual([
      [0, 10],
      [1, 9],
      [2, 8],
      [3, 7],
      [4, 6]
    ]);
  });

  it("is curried", () => {
    const sourceGenerator1 = range(5);
    const zipWithGen1 = zip(sourceGenerator1);

    const sourceGenerator2 = range(10, 0, -1);

    const zippedGenerator = zipWithGen1(sourceGenerator2);

    const result = collect(zippedGenerator);
    expect(result).toStrictEqual([
      [0, 10],
      [1, 9],
      [2, 8],
      [3, 7],
      [4, 6]
    ]);
  });

  it("propagates errors", () => {
    const sourceGenerator1 = (function*() {
      yield 1;
      throw new Error("Blub.");
    })();
    const sourceGenerator2 = range(5);

    const zippedGenerator = zip(sourceGenerator1, sourceGenerator2);

    expect(() => collect(zippedGenerator)).toThrow("Blub.");
  });
});
