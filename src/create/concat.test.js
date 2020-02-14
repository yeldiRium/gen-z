const collect = require("../collect/collect");
const concat = require("./concat");
const range = require("./range");

describe("concat", () => {
  it("concatenates two generators", () => {
    const gen1 = range(5);
    const gen2 = range(4, -1, -1);

    const concatted = concat(gen1, gen2);

    const result = collect(concatted);
    expect(result).toStrictEqual([0, 1, 2, 3, 4, 4, 3, 2, 1, 0]);
  });

  it("is curried", () => {
    const gen1 = range(5);
    const gen2 = range(4, -1, -1);

    const concatGen1 = concat(gen1);
    const concatted = concatGen1(gen2);

    const result = collect(concatted);
    expect(result).toStrictEqual([0, 1, 2, 3, 4, 4, 3, 2, 1, 0]);
  });
});
