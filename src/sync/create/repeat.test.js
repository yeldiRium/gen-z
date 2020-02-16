const collect = require("../consume/collect");
const repeat = require("./repeat");
const take = require("../remove/take");

describe("sync.create.repeat", () => {
  it("yields the given value repeatedly", () => {
    const sourceGenerator = repeat("a");

    const result = collect(take(5, sourceGenerator));
    expect(result).toStrictEqual(["a", "a", "a", "a", "a"]);
  });

  it("calls a given function and yields its result", () => {
    const sourceGenerator = repeat(() => "a");

    const result = collect(take(5, sourceGenerator));
    expect(result).toStrictEqual(["a", "a", "a", "a", "a"]);
  });
});
