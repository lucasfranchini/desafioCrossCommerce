import partition from "../../src/helpers/partition";

describe("partition", () => {
  it("returns an array with elements smaller than middle elemnt on left and greater than right element on right", () => {
    const array = [1, 50, 7, 9, 8, 10, 3, 158, 0.1];
    partition(array, 0, 8);
    const rightArray = array.slice(5, array.length);
    const leftArray = array.slice(0, 4);
    expect(leftArray).toEqual(expect.arrayContaining([0.1, 1, 3, 7]));
    expect(rightArray).toEqual(expect.arrayContaining([9, 10, 50, 158]));
  });
});
