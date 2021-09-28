import * as numberRepository from "../../src/repositories/numberRepository";
import axios from "axios";

describe("getAll", () => {
  it("it throws an error for emptyArray in first get", async () => {
    jest.spyOn(axios, "get").mockImplementation(async () => {return { data: { numbers: [] } };});
    const result = () => numberRepository.getAll();
    await expect(result).rejects.toThrow(Error);
  });
  it("it throws an error for axios error", async () => {
    jest.spyOn(axios, "get").mockImplementationOnce(async () => {return undefined; });
    const result = () => numberRepository.getAll();
    await expect(result).rejects.toThrow(Error);
  });
  it("it returns unordered Array", async () => {
    jest.spyOn(axios, "get")
      .mockImplementationOnce(async () => {return { data: { numbers: [1, 5, 2, 3] } };})
      .mockImplementation(async () => {return { data: { numbers: [] } };});
    const result = await numberRepository.getAll();
    expect(result).toEqual([1, 5, 2, 3]);
  });
});
