const head = require("./head");
const range = require("../create/range");

describe("head", () => {
  it("returns the first element in the generator", () => {
    const gen = range(10);

    const result = head(gen);

    expect(result).toBe(0);
  });

  it("returns undefined, if the generator finishes immediately", () => {
    const gen = (function*() {})();

    const result = head(gen);

    expect(result).toBeUndefined();
  });

  it("works with an infinite generator", () => {
    const gen = (function*() {
      while (true) {
        yield 0;
      }
    })();

    const result = head(gen);

    expect(result).toBe(0);
  });
});
