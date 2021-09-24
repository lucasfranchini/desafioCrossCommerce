import InvalidRequestError from "@/errors/InvalidRequestError";
import axios from "axios";

export async function getAll() {
  let isLastArray = false;
  let i = 1;
  let array: number[] = [];
  while(!isLastArray) {
    try{
      const result = await axios.get(`http://challenge.dienekes.com.br/api/numbers?page=${i}`);
      if(result.data.numbers.length===0)isLastArray = true;
      else array = [...array, result.data.numbers];
      i++;
    }
    catch(e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }
  if(array.length === 0) throw new InvalidRequestError();
  return array;
}
