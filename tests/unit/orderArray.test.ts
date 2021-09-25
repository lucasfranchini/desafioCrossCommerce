import orderArray from "../../src/helpers/orderArray";
import * as helper from "../../src/helpers/partition";

describe("orderArray", () => {
  it("calls partition helper until returned value equals to left/right values", () => {
    const array = [1, 5, 7, 9, 8, 10, 3, 158, 0.1];
    const mockedPartition = jest.spyOn(helper, "default")
      .mockImplementationOnce(() => {return 9;})
      .mockImplementationOnce(() => {return 8;})
      .mockImplementationOnce(() => {return 10;});
    orderArray(array, 7, 10);
    expect(mockedPartition).toHaveBeenCalledTimes(3);
  });
  it("returns an ordered array for unordered arrays", () => {
    let array = [1, 5, 7, 9, 8, 10, 3, 158, 0.1];
    const orderedArray = [0.1, 1, 3, 5, 7, 8, 9, 10, 158];
    jest.spyOn(helper, "default").mockImplementationOnce(() => {array=orderedArray; return 9;});
    orderArray(array, 8, 9);
    expect(array).toEqual(orderedArray);
  });
});
