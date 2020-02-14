const collect = require("../collect/collect");
const dropRepeats = require("./dropRepeats");
const from = require("../create/from");

describe("dropRepeats", () => {
  it("drops repeating elements from the generator", () => {
    const gen = from([1, 1, 1, 1, 2, 3, 3, 4]);

    const dedupedGen = dropRepeats(gen);

    const result = collect(dedupedGen);
    expect(result).toStrictEqual([1, 2, 3, 4]);
  });
});
