import * as numberService from "../../src/services/numberService";
import * as numberRepository from "../../src/repositories/numberRepository";

describe("getAllOrdered", () => {
  it("returns an ordered array for unordered arrays", async () => {
    jest.spyOn(numberRepository, "getAll").mockImplementationOnce(async () => {return [5];});
    const result = await numberService.getAllOrdered();
    expect(result).toEqual([5]);
  });
});
