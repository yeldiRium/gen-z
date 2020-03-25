const collect = require("../consume/collect");
const filter = require("./filter");
const range = require("../create/range");

describe("sync.remove.filter", () => {
  it("filters values out of a generator", () => {
    const sourceGenerator = range(10);

    const filteredGenerator = filter((elem) => elem % 2 === 0, sourceGenerator);

    const result = collect(filteredGenerator);
    expect(result).toStrictEqual([0, 2, 4, 6, 8]);
  });

  it("is curried", () => {
    const sourceGenerator = range(10);

    const filterEven = filter((elem) => elem % 2 === 0);

    const filteredGenerator = filterEven(sourceGenerator);

    const result = collect(filteredGenerator);
    expect(result).toStrictEqual([0, 2, 4, 6, 8]);
  });

  it("propagates errors", () => {
    const sourceGenerator = (function* () {
      yield 2;
      throw new Error("Blub.");
    })();

    const filteredGenerator = filter((a) => a % 2 === 0, sourceGenerator);

    expect(() => collect(filteredGenerator)).toThrow("Blub.");
  });
});
