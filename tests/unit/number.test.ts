import * as numberService from "../../src/services/numberService";
import * as numberRepository from "../../src/repositories/numberRepository";

describe("partition", () => {
  it("returns an array with elements smaller than middle elemnt on left and greater than right element on right", () => {
    const array = [1, 50, 7, 9, 8, 10, 3, 158, 0.1];
    numberService.partition(array, 0, 8);
    const rightArray = array.slice(5, array.length);
    const leftArray = array.slice(0, 4);
    expect(leftArray).toEqual(expect.arrayContaining([0.1, 1, 3, 7]));
    expect(rightArray).toEqual(expect.arrayContaining([9, 10, 50, 158]));
  });
});

describe("getAllOrdered", () => {
  it("returns an ordered array for unordered arrays", async () => {
    jest.spyOn(numberRepository, "getAll").mockImplementation(async () => {return [5];});
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(numberService, "orderArray").mockImplementation(() => { });
    const result = await numberService.getAllOrdered();
    expect(result).toEqual([5]);
  });
});

