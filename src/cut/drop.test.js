const collect = require("../collect/collect");
const drop = require("../cut/drop");
const range = require("../create/range");

describe("drop", () => {
  it("drops amount of elements from the generator", () => {
    const gen = range(10);

    const cutGen = drop(5, gen);

    const result = collect(cutGen);
    expect(result).toStrictEqual([5, 6, 7, 8, 9]);
  });

  it("finishes immediately, if the generator contains less elements that should be dropped", () => {
    const gen = range(4);

    const cutGen = drop(5, gen);

    const result = collect(cutGen);
    expect(result).toStrictEqual([]);
  });

  it("is curried", () => {
    const gen = range(4);

    const dropFive = drop(5);

    const cutGen = dropFive(gen);

    const result = collect(cutGen);
    expect(result).toStrictEqual([]);
  });
});
