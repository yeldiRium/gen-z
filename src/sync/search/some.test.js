const range = require("../create/range");
const some = require("./some");

describe("sync.search.some", () => {
  it("returns true if any of the values yielded by the generator satify the predicate", () => {
    const sourceGenerator = range(10);

    const result = some((a) => a === 7, sourceGenerator);

    expect(result).toBe(true);
  });

  it("returns false if none of the values yielded by the generator satify the predicate", () => {
    const sourceGenerator = range(5);

    const result = some((a) => a === 7, sourceGenerator);

    expect(result).toBe(false);
  });

  it("is curried", () => {
    const sourceGenerator = range(10);

    const someSeven = some((a) => a === 7);

    const result = someSeven(sourceGenerator);

    expect(result).toBe(true);
  });

  it("propagates errors", () => {
    const sourceGenerator = (function* () {
      yield 2;
      throw new Error("Blub.");
    })();

    expect(() => some((a) => a === 7, sourceGenerator)).toThrow("Blub.");
  });

  it("does not propagate errors occuring after a value was found", () => {
    const sourceGenerator = (function* () {
      yield 2;
      yield 3;
      throw new Error("Blub.");
    })();

    expect(() => some((a) => a === 2, sourceGenerator)).not.toThrow();
  });
});
