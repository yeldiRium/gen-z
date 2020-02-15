const acknowledgable = require("./acknowledgable");
const iterate = require("../create/iterate");

describe("acknowledgable", () => {
  it("makes a generator repeat each element until it is explicitly acknowledged by passing true to next", () => {
    const gen = iterate(a => a * 2, 1);

    const ackGen = acknowledgable(gen);

    expect(ackGen.next()).toStrictEqual({ value: 1, done: false });
    expect(ackGen.next()).toStrictEqual({ value: 1, done: false });
    expect(ackGen.next()).toStrictEqual({ value: 1, done: false });
    expect(ackGen.next(true)).toStrictEqual({ value: 2, done: false });
    expect(ackGen.next(true)).toStrictEqual({ value: 4, done: false });
    expect(ackGen.next(true)).toStrictEqual({ value: 8, done: false });
    expect(ackGen.next()).toStrictEqual({ value: 8, done: false });
  });
});
