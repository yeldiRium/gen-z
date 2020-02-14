const collect = require("../collect/collect");
const range = require("../create/range");
const take = require("./take");

describe("take", () => {
  it("takes a given count of items from a generator", () => {
    const gen = range(0, 10);

    const cutGen = take(5, gen);

    const result = collect(cutGen);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("takes less than the given count, if the generator ends earlier", () => {
    const gen = range(0, 5);

    const cutGen = take(10, gen);

    const result = collect(cutGen);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("finishes immediately, if count is zero", () => {
    const gen = range(0, 5);

    const cutGen = take(0, gen);

    const result = collect(cutGen);
    expect(result).toStrictEqual([]);
  });

  it("works with infinite generators", () => {
    const gen = (function*() {
      let i = 0;
      while (true) {
        yield i++;
      }
    })();

    const cutGen = take(3, gen);

    const result = collect(cutGen);
    expect(result).toStrictEqual([0, 1, 2]);
  });

  it("is curried", () => {
    const gen = range(0, 10);

    const takeFive = take(5);

    const cutGen = takeFive(gen);

    const result = collect(cutGen);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });
});
