import * as repository from "@/repositories/numberRepository";
import  orderArray  from "@/helpers/orderArray";

export async function getAllOrdered() {
  const array = await repository.getAll();
  orderArray(array);
  return array;
}

