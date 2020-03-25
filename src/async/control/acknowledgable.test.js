const acknowledgable = require("./acknowledgable");
const from = require("../create/from");
const iterate = require("../../sync/create/iterate");

describe("async.control.acknowledgable", () => {
  it("makes an asynchronous generator repeat each value until it is explicitly acknowledged by passing true to next()", async () => {
    const asyncSourceGenerator = from(iterate((a) => a * 2, 1));

    const acknowledgableGenerator = acknowledgable(asyncSourceGenerator);

    await expect(acknowledgableGenerator.next()).resolves.toStrictEqual({
      value: 1,
      done: false,
    });
    await expect(acknowledgableGenerator.next()).resolves.toStrictEqual({
      value: 1,
      done: false,
    });
    await expect(acknowledgableGenerator.next()).resolves.toStrictEqual({
      value: 1,
      done: false,
    });
    await expect(acknowledgableGenerator.next(true)).resolves.toStrictEqual({
      value: 2,
      done: false,
    });
    await expect(acknowledgableGenerator.next(true)).resolves.toStrictEqual({
      value: 4,
      done: false,
    });
    await expect(acknowledgableGenerator.next(true)).resolves.toStrictEqual({
      value: 8,
      done: false,
    });
    await expect(acknowledgableGenerator.next()).resolves.toStrictEqual({
      value: 8,
      done: false,
    });
  });

  it("calls the asynchronous callback on acknowledgement", async () => {
    const asyncSourceGenerator = from(iterate((a) => a * 2, 1));
    const callback = jest.fn(async () => {});

    const acknowledgableGenerator = acknowledgable(
      asyncSourceGenerator,
      callback
    );

    await acknowledgableGenerator.next();
    await acknowledgableGenerator.next(true);
    await acknowledgableGenerator.next(true);
    await acknowledgableGenerator.next();
    await acknowledgableGenerator.next();
    await acknowledgableGenerator.next(true);

    expect(callback.mock.calls.length).toBe(3);
    expect(callback.mock.calls[0][0]).toBe(1);
    expect(callback.mock.calls[1][0]).toBe(2);
    expect(callback.mock.calls[2][0]).toBe(4);
  });

  it("propagates rejection", async () => {
    const sourceGenerator = (async function* () {
      yield 5;
      throw new Error("Blub.");
    })();

    const acknowledgableGenerator = acknowledgable(sourceGenerator);

    await expect(acknowledgableGenerator.next()).resolves.toStrictEqual({
      value: 5,
      done: false,
    });
    await expect(acknowledgableGenerator.next()).resolves.toStrictEqual({
      value: 5,
      done: false,
    });
    await expect(acknowledgableGenerator.next(true)).rejects.toThrow("Blub.");
  });
});
