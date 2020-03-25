const from = require("../create/from");
const head = require("./head");
const range = require("../../sync/create/range");
const repeat = require("../create/repeat");

describe("async.remove.head", () => {
  it("returns the first value yielded by the asynchronous generator", async () => {
    const asyncSourceGenerator = from(range(10));

    const result = await head(asyncSourceGenerator);

    expect(result).toBe(0);
  });

  it("returns undefined, if the generator yields nothing", async () => {
    const asyncSourceGenerator = (async function* () {})();

    const result = await head(asyncSourceGenerator);

    expect(result).toBeUndefined();
  });

  it("works with an infinite generator", async () => {
    const asyncSourceGenerator = repeat(0);

    const result = await head(asyncSourceGenerator);

    expect(result).toBe(0);
  });
});
