const collect = require("../consume/collect");
const from = require("../create/from");
const map = require("./map");
const range = require("../../sync/create/range");

describe("async.transform.map", () => {
  it("maps the values yielded by an asynchronous generator", async () => {
    const asyncSourceGenerator = from(range(5));

    const mappedGenerator = map(async a => a * 2, asyncSourceGenerator);

    const result = await collect(mappedGenerator);
    expect(result).toStrictEqual([0, 2, 4, 6, 8]);
  });

  it("is curried", async () => {
    const asyncSourceGenerator = from(range(5));

    const doubleEach = map(async a => a * 2);

    const mappedGenerator = doubleEach(asyncSourceGenerator);

    const result = await collect(mappedGenerator);
    expect(result).toStrictEqual([0, 2, 4, 6, 8]);
  });

  it("propagates rejections", async () => {
    const asyncSourceGenerator = (async function*() {
      yield 1;
      throw new Error("Blub.");
    })();
    const f = async a => 2 * a;

    const mappedGenerator = map(f, asyncSourceGenerator);

    await expect(collect(mappedGenerator)).rejects.toThrow("Blub.");
  });

  it("propagates rejections from f", async () => {
    const asyncSourceGenerator = from(range(5));
    const f = async () => {
      throw new Error("Blub.");
    };

    const mappedGenerator = map(f, asyncSourceGenerator);

    await expect(collect(mappedGenerator)).rejects.toThrow("Blub.");
  });
});
