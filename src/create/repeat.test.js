const collect = require("../collect/collect");
const repeat = require("./repeat");
const take = require("../remove/take");

describe("repeat", () => {
  it("repeats the given value", () => {
    const gen = repeat("a");

    const result = collect(take(5, gen));
    expect(result).toStrictEqual(["a", "a", "a", "a", "a"]);
  });
});
