const collect = require("../consume/collect");
const flatten = require("./flatten");
const from = require("./from");

describe("async.create.flatten", () => {
  it("recursively flattens asynchronous or synchronous generators and other asynchronous iterators", async () => {
    const sourceGenerator = from([
      from([1, 2]),
      from([from([3, 4]), from([5, 6, 7])]),
      8,
      9,
      from([10]),
      [11],
      [12, 13, 14][Symbol.iterator](),
    ]);

    const flattened = flatten(sourceGenerator);

    const result = await collect(flattened);
    expect(result).toStrictEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      [11],
      12,
      13,
      14,
    ]);
  });
});
