const collect = require("../consume/collect");
const dropRepeats = require("./dropRepeats");
const from = require("../create/from");

describe("dropRepeats", () => {
  it("drops repeating values from the generator", () => {
    const sourceGenerator = from([1, 1, 1, 1, 2, 3, 3, 4]);

    const dedupedGenerator = dropRepeats(sourceGenerator);

    const result = collect(dedupedGenerator);
    expect(result).toStrictEqual([1, 2, 3, 4]);
  });

  it("propagates errors", () => {
    const sourceGenerator = (function*() {
      yield 2;
      throw new Error("Blub.");
    })();

    const dedupedGenerator = dropRepeats(sourceGenerator);

    expect(() => collect(dedupedGenerator)).toThrow("Blub.");
  });
});
