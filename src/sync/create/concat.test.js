const collect = require("../consume/collect");
const concat = require("./concat");
const range = require("./range");

describe("concat", () => {
  it("concatenates two generators", () => {
    const sourceGenerator1 = range(5);
    const sourceGenerator2 = range(4, -1, -1);

    const concatenatedGenerator = concat(sourceGenerator1, sourceGenerator2);

    const result = collect(concatenatedGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4, 4, 3, 2, 1, 0]);
  });

  it("is curried", () => {
    const sourceGenerator1 = range(5);
    const sourceGenerator2 = range(4, -1, -1);

    const concatGenerator1 = concat(sourceGenerator1);
    const concatenatedGenerator = concatGenerator1(sourceGenerator2);

    const result = collect(concatenatedGenerator);
    expect(result).toStrictEqual([0, 1, 2, 3, 4, 4, 3, 2, 1, 0]);
  });

  it("passes errors from the generators through", () => {
    const sourceGenerator1 = range(5);
    const sourceGenerator2 = (function*() {
      yield 5;
      throw new Error("Blub.");
    })();

    const concatenatedGenerator = concat(sourceGenerator1, sourceGenerator2);

    expect(() => collect(concatenatedGenerator)).toThrow("Blub.");
  });
});
