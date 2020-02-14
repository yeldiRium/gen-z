const collect = require("../collect/collect");
const range = require("../create/range");
const takeWhile = require("./takeWhile");

describe("takeWhile", () => {
  it("takes elements from the generator as long as the predicate matches", () => {
    const gen = range(10);

    const cutGen = takeWhile(elem => elem < 5, gen);

    const result = collect(cutGen);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("works with infinite generators", () => {
    const gen = (function*() {
      let i = 0;
      while (true) {
        yield i++;
      }
    })();

    const cutGen = takeWhile(elem => elem < 5, gen);

    const result = collect(cutGen);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("is curried", () => {
    const gen = range(10);

    const takeUnderFive = takeWhile(elem => elem < 5);

    const cutGen = takeUnderFive(gen);

    const result = collect(cutGen);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });
});
