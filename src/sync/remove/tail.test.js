const collect = require("../consume/collect");
const range = require("../create/range");
const tail = require("./tail");

describe("sync.remove.tail", () => {
  it("drops the first value from the generator", () => {
    const sourceGenerator = range(5);

    const droppedGenerator = tail(sourceGenerator);

    const result = collect(droppedGenerator);
    expect(result).toStrictEqual([1, 2, 3, 4]);
  });

  it("yields nothing, if the generator yields only one element", () => {
    const sourceGenerator = range(1);

    const droppedGenerator = tail(sourceGenerator);

    const result = collect(droppedGenerator);
    expect(result).toStrictEqual([]);
  });

  it("yields nothing, if the generator yields nothing", () => {
    const sourceGenerator = (function* () {})();

    const droppedGenerator = tail(sourceGenerator);

    const result = collect(droppedGenerator);
    expect(result).toStrictEqual([]);
  });

  it("propagates errors", () => {
    const sourceGenerator = (function* () {
      yield 0;
      throw new Error("Blub.");
    })();

    const droppedGenerator = tail(sourceGenerator);

    expect(() => collect(droppedGenerator)).toThrow("Blub.");
  });
});
