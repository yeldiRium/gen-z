const collect = require("../collect/collect");
const range = require("../create/range");
const tail = require("./tail");

describe("tail", () => {
  it("removes the first element from the generator", () => {
    const gen = range(5);

    const cutGen = tail(gen);

    const result = collect(cutGen);
    expect(result).toStrictEqual([1, 2, 3, 4]);
  });

  it("finishes immediately, if the generator yields only one element", () => {
    const gen = range(1);

    const cutGen = tail(gen);

    const result = collect(cutGen);
    expect(result).toStrictEqual([]);
  });

  it("finishes immediately, if the generator finishes immediately", () => {
    const gen = (function*() {})();

    const cutGen = tail(gen);

    const result = collect(cutGen);
    expect(result).toStrictEqual([]);
  });
});
