const collect = require("../consume/collect");
const repeat = require("./repeat");
const take = require("../remove/take");

describe("repeat", () => {
  it("yields the given value repeatedly", () => {
    const gen = repeat("a");

    const result = collect(take(5, gen));
    expect(result).toStrictEqual(["a", "a", "a", "a", "a"]);
  });
});
