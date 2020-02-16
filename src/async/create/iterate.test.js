const collect = require("../consume/collect");
const iterate = require("./iterate");
const take = require("../remove/take");

describe("async.create.iterate", () => {
  it("yields infinite values by applying an asynchronous producer function repeatedly", async () => {
    const asyncIteratingGenerator = iterate(async a => a * 2, 1);

    const result = await collect(take(5, asyncIteratingGenerator));
    expect(result).toStrictEqual([1, 2, 4, 8, 16]);
  });

  it("is curried", async () => {
    const iterateDoubling = iterate(async a => a * 2);

    const asyncIteratingGenerator = iterateDoubling(3);

    const result = await collect(take(5, asyncIteratingGenerator));
    expect(result).toStrictEqual([3, 6, 12, 24, 48]);
  });
});
