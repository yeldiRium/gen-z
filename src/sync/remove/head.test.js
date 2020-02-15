const head = require("./head");
const range = require("../create/range");
const repeat = require("../create/repeat");

describe("head", () => {
  it("returns the first value yielded by the generator", () => {
    const sourceGenerator = range(10);

    const result = head(sourceGenerator);

    expect(result).toBe(0);
  });

  it("returns undefined, if the generator yields nothing", () => {
    const sourceGenerator = (function*() {})();

    const result = head(sourceGenerator);

    expect(result).toBeUndefined();
  });

  it("works with an infinite generator", () => {
    const sourceGenerator = repeat(0);

    const result = head(sourceGenerator);

    expect(result).toBe(0);
  });
});
