const inRange = require("./inRange");

describe("inRange", () => {
  it("returns true, if the value is in the range from start to end", () => {
    const value = 5;
    const start = 2;
    const end = 8;

    const result = inRange(start, end, value);

    expect(result).toBe(true);
  });

  it("returns true, if the value is in the range from end to start", () => {
    const value = 5;
    const start = 8;
    const end = 2;

    const result = inRange(start, end, value);

    expect(result).toBe(true);
  });

  it("returns true, if the value is equal to one of the range's ends", () => {
    const value = 5;
    const start = 0;
    const end = 5;

    const result = inRange(start, end, value);

    expect(result).toBe(true);
  });

  it("returns false, if the value is not in the range", () => {
    const value = 13;
    const start = 0;
    const end = 10;

    const result = inRange(start, end, value);

    expect(result).toBe(false);
  });
});
