const collect = require("../consume/collect");
const iterate = require("./iterate");
const take = require("../remove/take");

describe("iterate", () => {
  it("yields infinite values by applying a producer function repeatedly", () => {
    const iteratingGenerator = iterate(a => a * 2, 1);

    const result = collect(take(5, iteratingGenerator));
    expect(result).toStrictEqual([1, 2, 4, 8, 16]);
  });

  it("is curried", () => {
    const iterateDoubling = iterate(a => a * 2);

    const iteratingGenerator = iterateDoubling(3);

    const result = collect(take(5, iteratingGenerator));
    expect(result).toStrictEqual([3, 6, 12, 24, 48]);
  });
});
