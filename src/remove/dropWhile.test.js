const collect = require("../collect/collect");
const dropWhile = require("./dropWhile");
const range = require("../create/range");

describe("dropWhile", () => {
  it("drops elements from the generator as long as the predicate matches", () => {
    const gen = range(10);

    const cutGen = dropWhile(elem => elem < 5, gen);

    const result = collect(cutGen);
    expect(result).toStrictEqual([5, 6, 7, 8, 9]);
  });

  it("is curried", () => {
    const gen = range(10);

    const dropUnderFive = dropWhile(elem => elem < 5);
    const cutGen = dropUnderFive(gen);

    const result = collect(cutGen);
    expect(result).toStrictEqual([5, 6, 7, 8, 9]);
  });
});
