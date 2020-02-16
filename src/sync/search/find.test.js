const find = require("./find");
const range = require("../create/range");

describe("sync.search.find", () => {
  it("returns the first value in the generator that satisfies the predicate", () => {
    const sourceGenerator = range(10);

    const result = find(a => a === 7, sourceGenerator);

    expect(result).toBe(7);
  });

  it("is curried", () => {
    const sourceGenerator = range(10);

    const findSeven = find(a => a === 7);

    const result = findSeven(sourceGenerator);

    expect(result).toBe(7);
  });

  it("propagates errors", () => {
    const sourceGenerator = (function*() {
      yield 2;
      throw new Error("Blub.");
    })();

    expect(() => find(a => a === 7, sourceGenerator)).toThrow("Blub.");
  });

  it("does not propagate errors occuring after a value was found", () => {
    const sourceGenerator = (function*() {
      yield 2;
      yield 3;
      throw new Error("Blub.");
    })();

    expect(() => find(a => a === 2, sourceGenerator)).not.toThrow();
  });
});
