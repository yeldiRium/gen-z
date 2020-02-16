const acknowledgable = require("./acknowledgable");
const iterate = require("../create/iterate");

describe("sync.control.acknowledgable", () => {
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

  it("calls the callback on acknowledgement", () => {
    const sourceGenerator = iterate(a => a * 2, 1);
    const callback = jest.fn();

    const acknowledgableGenerator = acknowledgable(sourceGenerator, callback);

    acknowledgableGenerator.next();
    acknowledgableGenerator.next(true);
    acknowledgableGenerator.next(true);
    acknowledgableGenerator.next();
    acknowledgableGenerator.next();
    acknowledgableGenerator.next(true);

    expect(callback.mock.calls.length).toBe(3);
    expect(callback.mock.calls[0][0]).toBe(1);
    expect(callback.mock.calls[1][0]).toBe(2);
    expect(callback.mock.calls[2][0]).toBe(4);
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
