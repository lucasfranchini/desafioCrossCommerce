import orderArray from "../../src/helpers/orderArray";
import * as helper from "../../src/helpers/partition";

describe("orderArray", () => {
  it("returns an ordered array for unordered arrays", () => {
    const array = [1, 5, 7, 9, 8, 10, 3, 158, 0.1];
    const orderedArray = [0.1, 1, 3, 5, 7, 8, 9, 10, 158];
    orderArray(array);
    expect(array).toEqual(orderedArray);
  });

  it("returns an ordered array for unordered arrays", () => {
    const array = [1, 5, 7, 9, 8, 10, 3, 158, 0.1];
    const mockedPartition = jest.spyOn(helper, "default").mockImplementationOnce(() => {return 9;}).mockImplementationOnce(() => {return 8;});
    orderArray(array, 7, 9);
    expect(mockedPartition).toHaveBeenCalledTimes(2);
  });
});
