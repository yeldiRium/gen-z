const collect = require("../consume/collect");
const dropWhile = require("./dropWhile");
const range = require("../create/range");

describe("sync.remove.dropWhile", () => {
  it("drops values from the generator as long as the predicate matches", () => {
    const sourceGenerator = range(10);

    const droppedGenerator = dropWhile((elem) => elem < 5, sourceGenerator);

    const result = collect(droppedGenerator);
    expect(result).toStrictEqual([5, 6, 7, 8, 9]);
  });

  it("is curried", () => {
    const sourceGenerator = range(10);

    const dropUnderFive = dropWhile((elem) => elem < 5);
    const droppedGenerator = dropUnderFive(sourceGenerator);

    const result = collect(droppedGenerator);
    expect(result).toStrictEqual([5, 6, 7, 8, 9]);
  });

  it("propagates errors", () => {
    const sourceGenerator = (function* () {
      yield 2;
      throw new Error("Blub.");
    })();

    const droppedGenerator = dropWhile((a) => a % 2 === 0, sourceGenerator);

    expect(() => collect(droppedGenerator)).toThrow("Blub.");
  });
});
