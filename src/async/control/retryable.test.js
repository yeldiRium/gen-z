const from = require("../create/from");
const iterate = require("../../sync/create/iterate");
const retryable = require("./retryable");

describe("async.control.retryable", () => {
  it("makes an asynchronous generator retryable by passing a boolean to next()", async () => {
    const asyncSourceGenerator = from(iterate(a => a * 2, 1));

    const retryableGenerator = retryable(asyncSourceGenerator);

    await expect(retryableGenerator.next()).resolves.toStrictEqual({
      value: 1,
      done: false
    });
    await expect(retryableGenerator.next()).resolves.toStrictEqual({
      value: 2,
      done: false
    });
    await expect(retryableGenerator.next(true)).resolves.toStrictEqual({
      value: 2,
      done: false
    });
    await expect(retryableGenerator.next(true)).resolves.toStrictEqual({
      value: 2,
      done: false
    });
    await expect(retryableGenerator.next()).resolves.toStrictEqual({
      value: 4,
      done: false
    });
    await expect(retryableGenerator.next(true)).resolves.toStrictEqual({
      value: 4,
      done: false
    });
    await expect(retryableGenerator.next(false)).resolves.toStrictEqual({
      value: 8,
      done: false
    });
  });

  it("propagates rejection", async () => {
    const asyncSourceGenerator = (async function*() {
      yield 5;
      throw new Error("Blub.");
    })();

    const retryableGenerator = retryable(asyncSourceGenerator);

    await expect(retryableGenerator.next()).resolves.toStrictEqual({
      value: 5,
      done: false
    });
    await expect(retryableGenerator.next(true)).resolves.toStrictEqual({
      value: 5,
      done: false
    });
    await expect(retryableGenerator.next()).rejects.toThrow("Blub.");
  });
});
