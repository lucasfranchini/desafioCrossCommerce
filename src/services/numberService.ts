import * as repository from "@/repositories/numberRepository";

export async function getAllOrdered() {
  const array = await repository.getAll();
  return array;
}
