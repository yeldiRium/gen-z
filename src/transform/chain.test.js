const chain = require("./chain");
const collect = require("../collect/collect");
const range = require("../create/range");

describe("chain", () => {
  it("applies a function to a generators elements and concatenates the resulting generators", () => {
    const gen = range(5);

    const chained = chain(a => range(a), gen);

    const result = collect(chained);
    expect(result).toStrictEqual([0, 0, 1, 0, 1, 2, 0, 1, 2, 3]);
  });

  it("passes through anything that's not a generator", () => {
    const gen = range(5);

    const chained = chain(a => a, gen);

    const result = collect(chained);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("is curried", () => {
    const gen = range(5);

    const chainRange = chain(a => range(a));
    const chained = chainRange(gen);

    const result = collect(chained);
    expect(result).toStrictEqual([0, 0, 1, 0, 1, 2, 0, 1, 2, 3]);
  });
});
