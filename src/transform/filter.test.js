const collect = require("../collect/collect");
const filter = require("./filter");
const range = require("../create/range");

describe("filter", () => {
  it("filters elements out of a generator", () => {
    const gen = range(10);

    const filteredGen = filter(elem => elem % 2 === 0, gen);

    const result = collect(filteredGen);
    expect(result).toStrictEqual([0, 2, 4, 6, 8]);
  });

  it("is curried", () => {
    const gen = range(10);

    const filterEven = filter(elem => elem % 2 === 0);

    const filteredGen = filterEven(gen);

    const result = collect(filteredGen);
    expect(result).toStrictEqual([0, 2, 4, 6, 8]);
  });
});
