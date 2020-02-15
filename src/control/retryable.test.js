const iterate = require("../create/iterate");
const retryable = require("./retryable");

describe("retryable", () => {
  it("makes a generator retryable by passing a boolean to next()", () => {
    const gen = iterate(a => a * 2, 1);

    const retryableGen = retryable(gen);

    expect(retryableGen.next()).toStrictEqual({ value: 1, done: false });
    expect(retryableGen.next()).toStrictEqual({ value: 2, done: false });
    expect(retryableGen.next(true)).toStrictEqual({ value: 2, done: false });
    expect(retryableGen.next(true)).toStrictEqual({ value: 2, done: false });
    expect(retryableGen.next()).toStrictEqual({ value: 4, done: false });
    expect(retryableGen.next(true)).toStrictEqual({ value: 4, done: false });
    expect(retryableGen.next(false)).toStrictEqual({ value: 8, done: false });
  });
});
