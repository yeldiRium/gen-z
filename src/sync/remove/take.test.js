const collect = require("../consume/collect");
const range = require("../create/range");
const take = require("./take");

describe("sync.remove.take", () => {
  it("takes n items from a generator", () => {
    const sourceGenerator = range(0, 10);

    const takenGenerator = take(5, sourceGenerator);

    const result = collect(takenGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("yields the entire generator, if it yields less than n values", () => {
    const sourceGenerator = range(0, 5);

    const takenGenerator = take(10, sourceGenerator);

    const result = collect(takenGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("yields nothing, if n is zero", () => {
    const sourceGenerator = range(0, 5);

    const takenGenerator = take(0, sourceGenerator);

    const result = collect(takenGenerator);
    expect(result).toStrictEqual([]);
  });

  it("works with infinite generators", () => {
    const sourceGenerator = (function* () {
      let i = 0;
      while (true) {
        yield i++;
      }
    })();

    const takenGenerator = take(3, sourceGenerator);

    const result = collect(takenGenerator);
    expect(result).toStrictEqual([0, 1, 2]);
  });

  it("is curried", () => {
    const sourceGenerator = range(0, 10);

    const takeFive = take(5);

    const takenGenerator = takeFive(sourceGenerator);

    const result = collect(takenGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("propagates errors", () => {
    const sourceGenerator = (function* () {
      yield 2;
      throw new Error("Blub.");
    })();

    const takenGenerator = take(2, sourceGenerator);

    expect(() => collect(takenGenerator)).toThrow("Blub.");
  });

  it("does not propagate errors occuring after more than n values", () => {
    const sourceGenerator = (function* () {
      yield 2;
      yield 3;
      throw new Error("Blub.");
    })();

    const takenGenerator = take(2, sourceGenerator);

    expect(() => collect(takenGenerator)).not.toThrow();
  });
});
