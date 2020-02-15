const acknowledgable = require("./acknowledgable");
const iterate = require("../create/iterate");

describe("acknowledgable", () => {
  it("makes a generator repeat each value until it is explicitly acknowledged by passing true to next()", () => {
    const sourceGenerator = iterate(a => a * 2, 1);

    const acknowledgableGenerator = acknowledgable(sourceGenerator);

    expect(acknowledgableGenerator.next()).toStrictEqual({
      value: 1,
      done: false
    });
    expect(acknowledgableGenerator.next()).toStrictEqual({
      value: 1,
      done: false
    });
    expect(acknowledgableGenerator.next()).toStrictEqual({
      value: 1,
      done: false
    });
    expect(acknowledgableGenerator.next(true)).toStrictEqual({
      value: 2,
      done: false
    });
    expect(acknowledgableGenerator.next(true)).toStrictEqual({
      value: 4,
      done: false
    });
    expect(acknowledgableGenerator.next(true)).toStrictEqual({
      value: 8,
      done: false
    });
    expect(acknowledgableGenerator.next()).toStrictEqual({
      value: 8,
      done: false
    });
  });

  it("propagates errors", () => {
    const sourceGenerator = (function*() {
      yield 5;
      throw new Error("Blub.");
    })();

    const acknowledgableGenerator = acknowledgable(sourceGenerator);

    expect(acknowledgableGenerator.next()).toStrictEqual({
      value: 5,
      done: false
    });
    expect(acknowledgableGenerator.next()).toStrictEqual({
      value: 5,
      done: false
    });
    expect(() => acknowledgableGenerator.next(true)).toThrow("Blub.");
  });
});
