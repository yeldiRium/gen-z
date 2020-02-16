const chain = require("./chain");
const collect = require("../consume/collect");
const range = require("../create/range");

describe("sync.transform.chain", () => {
  it("applies a function to a generators values and concatenates resulting generators", () => {
    const sourceGenerator = range(5);
    const f = a => range(a);

    const chainedGenerator = chain(f, sourceGenerator);

    const result = collect(chainedGenerator);
    expect(result).toStrictEqual([0, 0, 1, 0, 1, 2, 0, 1, 2, 3]);
  });

  it("passes through anything that's not a generator", () => {
    const sourceGenerator = range(5);

    const chainedGenerator = chain(a => a, sourceGenerator);

    const result = collect(chainedGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("is curried", () => {
    const sourceGenerator = range(5);

    const chainRange = chain(a => range(a));
    const chainedGenerator = chainRange(sourceGenerator);

    const result = collect(chainedGenerator);
    expect(result).toStrictEqual([0, 0, 1, 0, 1, 2, 0, 1, 2, 3]);
  });

  it("propagates errors", () => {
    const sourceGenerator = (function*() {
      yield 1;
      throw new Error("Blub.");
    })();
    const f = a => range(a);

    const chainedGenerator = chain(f, sourceGenerator);

    expect(() => collect(chainedGenerator)).toThrow("Blub.");
  });

  it("propagates errors thrown in f", () => {
    const sourceGenerator = range(5);
    const f = () => {
      throw new Error("Blub.");
    };

    const chainedGenerator = chain(f, sourceGenerator);

    expect(() => collect(chainedGenerator)).toThrow("Blub.");
  });
});
