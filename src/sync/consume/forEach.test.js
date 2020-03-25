const forEach = require("./forEach");
const range = require("../create/range");

describe("sync.consume.forEach", () => {
  it("executes a callback for each value yielded by a generator", () => {
    const sourceGenerator = range(5);
    const callback = jest.fn();

    forEach(callback, sourceGenerator);

    expect(callback.mock.calls.length).toBe(5);
    expect(callback.mock.calls[0][0]).toBe(0);
    expect(callback.mock.calls[1][0]).toBe(1);
    expect(callback.mock.calls[2][0]).toBe(2);
    expect(callback.mock.calls[3][0]).toBe(3);
    expect(callback.mock.calls[4][0]).toBe(4);
  });

  it("passes the return value of the callback to next", () => {
    const fn = jest.fn();
    const sourceGenerator = (function* () {
      let value;

      for (let i = 0; i < 5; i++) {
        value = yield 0;
        fn(value);
      }
    })();

    let i = 0;
    const callback = () => {
      return i++;
    };

    forEach(callback, sourceGenerator);

    expect(fn.mock.calls.length).toBe(5);
    expect(fn.mock.calls[0][0]).toBe(0);
    expect(fn.mock.calls[1][0]).toBe(1);
    expect(fn.mock.calls[2][0]).toBe(2);
    expect(fn.mock.calls[3][0]).toBe(3);
    expect(fn.mock.calls[4][0]).toBe(4);
  });

  it("propagates errors thrown in the callback", () => {
    const sourceGenerator = range(5);
    const callback = () => {
      throw new Error("Blub.");
    };

    expect(() => forEach(callback, sourceGenerator)).toThrow("Blub.");
  });

  it("is curried", () => {
    const sourceGenerator = range(2);
    const callback = jest.fn();

    const callbackForEach = forEach(callback);

    callbackForEach(sourceGenerator);

    expect(callback.mock.calls.length).toBe(2);
    expect(callback.mock.calls[0][0]).toBe(0);
    expect(callback.mock.calls[1][0]).toBe(1);
  });
});
