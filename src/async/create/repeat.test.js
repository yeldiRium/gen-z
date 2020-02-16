const collect = require("../consume/collect");
const repeat = require("./repeat");
const take = require("../remove/take");

describe("async.create.repeat", () => {
  it("yields the given value repeatedly", async () => {
    const asyncsSourceGenerator = repeat("a");

    const result = await collect(take(5, asyncsSourceGenerator));
    expect(result).toStrictEqual(["a", "a", "a", "a", "a"]);
  });

  it("calls a given asynchronous function and yields its result", async () => {
    const asyncSourceGenerator = repeat(async () => "a");

    const result = await collect(take(5, asyncSourceGenerator));
    expect(result).toStrictEqual(["a", "a", "a", "a", "a"]);
  });
});
