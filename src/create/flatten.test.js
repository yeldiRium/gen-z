const collect = require("../collect/collect");
const flatten = require("./flatten");
const from = require("./from");

describe("flatten", () => {
  it("recursively flattens generators and other iterators", () => {
    const gen = from([
      from([1, 2]),
      from([from([3, 4]), from([5, 6, 7])]),
      8,
      9,
      from([10]),
      [11]
    ]);

    const flattened = flatten(gen);

    const result = collect(flattened);
    expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [11]]);
  });
});
