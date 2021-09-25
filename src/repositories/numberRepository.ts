import InvalidRequestError from "@/errors/InvalidRequestError";
import axios from "axios";

export async function getAll() {
  let isLastArray = false;
  let i = 1;
  const array: number[] = [];
  while(!isLastArray) {
    try{
      const newArray = await getPage(i);
      if(newArray.length===0)isLastArray = true;
      else array.push(...newArray);
      i++;
    }
    catch(e) {
      // eslint-disable-next-line no-console
      console.log(e.response);
      if(e.response.data.error !=="Simulated internal error") {
        isLastArray =true;
      }
    }
  }
  if(array.length === 0) throw new InvalidRequestError();
  return array;
}

export async function getPage(id: number) {
  const result = await axios.get(`http://challenge.dienekes.com.br/api/numbers?page=${id}`);
  return result.data.numbers;
}
