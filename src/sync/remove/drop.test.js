const collect = require("../consume/collect");
const drop = require(".//drop");
const range = require("../create/range");

describe("drop", () => {
  it("drops n values from the start of the generator", () => {
    const sourceGenerator = range(10);

    const droppedGenerator = drop(5, sourceGenerator);

    const result = collect(droppedGenerator);
    expect(result).toStrictEqual([5, 6, 7, 8, 9]);
  });

  it("yields nothing, if the generator yields less than n values", () => {
    const sourceGenerator = range(4);

    const droppedGenerator = drop(5, sourceGenerator);

    const result = collect(droppedGenerator);
    expect(result).toStrictEqual([]);
  });

  it("is curried", () => {
    const sourceGenerator = range(4);

    const dropFive = drop(5);

    const droppedGenerator = dropFive(sourceGenerator);

    const result = collect(droppedGenerator);
    expect(result).toStrictEqual([]);
  });

  it("propagates errors", () => {
    const sourceGenerator = (function*() {
      yield 2;
      throw new Error("Blub.");
    })();

    const droppedGenerator = drop(1, sourceGenerator);

    expect(() => collect(droppedGenerator)).toThrow("Blub.");
  });
});
