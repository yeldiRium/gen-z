const collect = require("../consume/collect");
const map = require("./map");
const range = require("../create/range");

describe("sync.transform.map", () => {
  it("maps the values yielded by a generator", () => {
    const sourceGenerator = range(5);

    const mappedGenerator = map((a) => a * 2, sourceGenerator);

    const result = collect(mappedGenerator);
    expect(result).toStrictEqual([0, 2, 4, 6, 8]);
  });

  it("is curried", () => {
    const sourceGenerator = range(5);

    const doubleEach = map((a) => a * 2);

    const mappedGenerator = doubleEach(sourceGenerator);

    const result = collect(mappedGenerator);
    expect(result).toStrictEqual([0, 2, 4, 6, 8]);
  });

  it("propagates errors", () => {
    const sourceGenerator = (function* () {
      yield 1;
      throw new Error("Blub.");
    })();
    const f = (a) => 2 * a;

    const mappedGenerator = map(f, sourceGenerator);

    expect(() => collect(mappedGenerator)).toThrow("Blub.");
  });

  it("propagates errors thrown in f", () => {
    const sourceGenerator = range(5);
    const f = () => {
      throw new Error("Blub.");
    };

    const mappedGenerator = map(f, sourceGenerator);

    expect(() => collect(mappedGenerator)).toThrow("Blub.");
  });
});
