const iterate = require("../create/iterate");
const retryable = require("./retryable");

describe("sync.control.retryable", () => {
  it("makes a generator retryable by passing a boolean to next()", () => {
    const sourceGenerator = iterate(a => a * 2, 1);

    const retryableGenerator = retryable(sourceGenerator);

    expect(retryableGenerator.next()).toStrictEqual({ value: 1, done: false });
    expect(retryableGenerator.next()).toStrictEqual({ value: 2, done: false });
    expect(retryableGenerator.next(true)).toStrictEqual({
      value: 2,
      done: false
    });
    expect(retryableGenerator.next(true)).toStrictEqual({
      value: 2,
      done: false
    });
    expect(retryableGenerator.next()).toStrictEqual({ value: 4, done: false });
    expect(retryableGenerator.next(true)).toStrictEqual({
      value: 4,
      done: false
    });
    expect(retryableGenerator.next(false)).toStrictEqual({
      value: 8,
      done: false
    });
  });

  it("propagates errors", () => {
    const sourceGenerator = (function*() {
      yield 5;
      throw new Error("Blub.");
    })();

    const retryableGenerator = retryable(sourceGenerator);

    expect(retryableGenerator.next()).toStrictEqual({
      value: 5,
      done: false
    });
    expect(retryableGenerator.next(true)).toStrictEqual({
      value: 5,
      done: false
    });
    expect(() => retryableGenerator.next()).toThrow("Blub.");
  });
});
