const collect = require("../consume/collect");
const range = require("./range");

describe("sync.create.range", () => {
  it("yields the numbers from 0 to (exclusively) end", () => {
    const values = collect(range(5));

    expect(values).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("yields a the numbers from start to (exclusively) end", () => {
    const values = collect(range(3, 9));

    expect(values).toStrictEqual([3, 4, 5, 6, 7, 8]);
  });

  it("yields the numbers from start to (exclusively) end with the given step length", () => {
    const values = collect(range(2, 8, 3));

    expect(values).toStrictEqual([2, 5]);
  });

  it("yields decreasing numbers, if the step is negative", () => {
    const values = collect(range(10, 5, -2));

    expect(values).toStrictEqual([10, 8, 6]);
  });

  it("yields nothing, if the step's sign doesn't match the range", () => {
    const values = collect(range(2, 8, -3));

    expect(values).toStrictEqual([]);
  });

  it("throws an error, if the step is 0", () => {
    expect(() => range(0, 5, 0)).toThrow("Step must not be zero.");
  });
});
