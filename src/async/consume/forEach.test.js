const forEach = require("./forEach");
const range = require("../../sync/create/range");

describe("async.consume.forEach", () => {
  it("executes a callback for each value yielded by an asynchronous generator", async () => {
    const sourceGenerator = range(5);
    const callback = jest.fn(async () => {});

    await forEach(callback, sourceGenerator);

    expect(callback.mock.calls.length).toBe(5);
    expect(callback.mock.calls[0][0]).toBe(0);
    expect(callback.mock.calls[1][0]).toBe(1);
    expect(callback.mock.calls[2][0]).toBe(2);
    expect(callback.mock.calls[3][0]).toBe(3);
    expect(callback.mock.calls[4][0]).toBe(4);
  });

  it("passes the return value of the asynchronous callback to next", async () => {
    const fn = jest.fn(async (value) => value);
    const sourceGenerator = (async function* () {
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

    await forEach(callback, sourceGenerator);

    expect(fn.mock.calls.length).toBe(5);
    expect(fn.mock.calls[0][0]).toBe(0);
    expect(fn.mock.calls[1][0]).toBe(1);
    expect(fn.mock.calls[2][0]).toBe(2);
    expect(fn.mock.calls[3][0]).toBe(3);
    expect(fn.mock.calls[4][0]).toBe(4);
  });

  it("propagates rejection from the callback", async () => {
    const sourceGenerator = range(5);
    const callback = () => Promise.reject(new Error("Blub."));

    await expect(forEach(callback, sourceGenerator)).rejects.toThrow("Blub.");
  });

  it("is curried", async () => {
    const sourceGenerator = range(2);
    const callback = jest.fn(async () => {});

    const callbackForEach = forEach(callback);

    await callbackForEach(sourceGenerator);

    expect(callback.mock.calls.length).toBe(2);
    expect(callback.mock.calls[0][0]).toBe(0);
    expect(callback.mock.calls[1][0]).toBe(1);
  });
});
