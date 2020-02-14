const collect = require("../collect/collect");
const range = require("../create/range");
const zip = require("./zip");

describe("zip", () => {
  it("zips two generators until one of them is done", () => {
    const gen1 = range(5);
    const gen2 = range(10, 0, -1);

    const zipped = zip(gen1, gen2);

    const result = collect(zipped);
    expect(result).toStrictEqual([
      [0, 10],
      [1, 9],
      [2, 8],
      [3, 7],
      [4, 6]
    ]);
  });

  it("is curried", () => {
    const gen1 = range(5);
    const zipWithGen1 = zip(gen1);

    const gen2 = range(10, 0, -1);

    const zipped = zipWithGen1(gen2);

    const result = collect(zipped);
    expect(result).toStrictEqual([
      [0, 10],
      [1, 9],
      [2, 8],
      [3, 7],
      [4, 6]
    ]);
  });
});
