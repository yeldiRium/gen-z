const collect = require("../consume/collect");
const range = require("../create/range");
const takeWhile = require("./takeWhile");

describe("sync.remove.takeWhile", () => {
  it("yields values from the generator as long as the predicate matches", () => {
    const sourceGenerator = range(10);

    const takenGenerator = takeWhile(elem => elem < 5, sourceGenerator);

    const result = collect(takenGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("works with infinite generators", () => {
    const sourceGenerator = (function*() {
      let i = 0;
      while (true) {
        yield i++;
      }
    })();

    const takenGenerator = takeWhile(elem => elem < 5, sourceGenerator);

    const result = collect(takenGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("is curried", () => {
    const sourceGenerator = range(10);

    const takeUnderFive = takeWhile(elem => elem < 5);

    const takenGenerator = takeUnderFive(sourceGenerator);

    const result = collect(takenGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("propagates errors", () => {
    const sourceGenerator = (function*() {
      yield 2;
      throw new Error("Blub.");
    })();

    const takenGenerator = takeWhile(elem => elem < 5, sourceGenerator);

    expect(() => collect(takenGenerator)).toThrow("Blub.");
  });

  it("does not propagate errors occuring after values the predicate doesn't match", () => {
    const sourceGenerator = (function*() {
      yield 2;
      yield 3;
      throw new Error("Blub.");
    })();

    const takenGenerator = takeWhile(elem => elem < 3, sourceGenerator);

    expect(() => collect(takenGenerator)).not.toThrow();
  });
});
