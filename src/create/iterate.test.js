const collect = require("../collect/collect");
const iterate = require("./iterate");
const take = require("../cut/take");

describe("iterate", () => {
  it("generates infinite values by applying a function repeatedly", () => {
    const gen = iterate(a => a * 2, 1);

    const result = collect(take(5, gen));
    expect(result).toStrictEqual([1, 2, 4, 8, 16]);
  });

  it("is curried", () => {
    const iterateDoubling = iterate(a => a * 2);

    const gen = iterateDoubling(3);

    const result = collect(take(5, gen));
    expect(result).toStrictEqual([3, 6, 12, 24, 48]);
  });
});
