const collect = require("../consume/collect");
const from = require("./from");

describe("sync.create.from", () => {
  it("creates a generator from an array", () => {
    const values = [1, 3, 3, 7];

    const gen = from(values);

    const result = collect(gen);
    expect(result).toStrictEqual([1, 3, 3, 7]);
  });

  it("works with other synchronous generators", async () => {
    const sourceGenerator = (function* () {
      yield 5;
      yield 6;
      yield 7;
    })();

    const fromGenerator = from(sourceGenerator);

    const result = collect(fromGenerator);
    expect(result).toStrictEqual([5, 6, 7]);
  });

  it("creates a generator from a set", () => {
    const values = new Set([1, 3, 7]);

    const gen = from(values);

    const result = collect(gen);
    expect(result).toStrictEqual([1, 3, 7]);
  });
});
