const echo = require("./echo");

describe("sync.create.echo", () => {
  it("yields undefined, then always the value passed to next", () => {
    const sourceGenerator = echo();

    // The first call is ignored.
    expect(sourceGenerator.next("blub")).toStrictEqual({
      value: undefined,
      done: false,
    });
    // From the second call on the value is echoed.
    expect(sourceGenerator.next("blub")).toStrictEqual({
      value: "blub",
      done: false,
    });
    expect(sourceGenerator.next("bla")).toStrictEqual({
      value: "bla",
      done: false,
    });
  });
});
