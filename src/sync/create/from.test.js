const collect = require("../collect/collect");
const from = require("./from");

describe("from", () => {
  it("creates a generator from an array", () => {
    const values = [1, 3, 3, 7];

    const gen = from(values);

    const result = collect(gen);
    expect(result).toStrictEqual([1, 3, 3, 7]);
  });

  it("creates a generator from a set", () => {
    const values = new Set([1, 3, 7]);

    const gen = from(values);

    const result = collect(gen);
    expect(result).toStrictEqual([1, 3, 7]);
  });
});
