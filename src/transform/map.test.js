const collect = require("../collect/collect");
const map = require("./map");
const range = require("../create/range");

describe("map", () => {
  it("maps the values from a generator", () => {
    const gen = range(5);

    const mappedGen = map(a => a * 2, gen);

    const result = collect(mappedGen);
    expect(result).toStrictEqual([0, 2, 4, 6, 8]);
  });

  it("is curried", () => {
    const gen = range(5);

    const doubleEach = map(a => a * 2);

    const mappedGen = doubleEach(gen);

    const result = collect(mappedGen);
    expect(result).toStrictEqual([0, 2, 4, 6, 8]);
  });
});
