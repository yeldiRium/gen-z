const curry = require("./curry");

describe("curry", () => {
  it("calls a function without parameters directly", () => {
    const f = () => true;
    const fc = curry(f);

    const result = fc();

    expect(result).toBe(true);
  });

  it("makes a function take one parameter at a time", () => {
    const f = (a, b) => a + b;
    const fc = curry(f);

    const f1 = fc(5);
    const result = f1(6);

    expect(fc).toBeInstanceOf(Function);
    expect(f1).toBeInstanceOf(Function);
    expect(result).toBe(11);
  });

  it("makes a function take parameters in any number and combination", () => {
    const f = (a, b, c, d) => a + b + c + d;
    const fc = curry(f);

    const f1 = fc(5, 8);
    const f2 = f1(2);
    const result = f2(3);

    expect(fc).toBeInstanceOf(Function);
    expect(f1).toBeInstanceOf(Function);
    expect(f2).toBeInstanceOf(Function);
    expect(result).toBe(18);
  });
});
