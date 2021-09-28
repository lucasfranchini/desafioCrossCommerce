import InvalidRequestError from "@/errors/InvalidRequestError";
import axios from "axios";

export async function getAll() {
  let isLastArray = false;
  let i = 1;
  const array: number[] = [];
  while(!isLastArray) {
    try{
      const requisicoes: Promise<number[]>[] = [];
      let j = i;
      while(j<i+10) {
        requisicoes.push(getPage(j));
        j++;
      }
      const numbers: number[]= [];
      for await (const req of requisicoes) {
        if(req===undefined) throw new Error("Remake Requisition");
        numbers.push(...req);
        if(req.length===0)isLastArray = true;
      }
      array.push(...numbers);
      i = j;
    }
    catch(e) {
      if(e.message !== "Remake Requisition")throw new InvalidRequestError();
    }
  }
  if(array.length === 0) throw new InvalidRequestError();
  return array;
}

export async function getPage(id: number): Promise<number[]> {
  try{
    const result = await axios.get(`http://challenge.dienekes.com.br/api/numbers?page=${id}`);
    return result.data.numbers;
  }
  catch(e) {
    if(e.response.data.error !=="Simulated internal error") {
      // eslint-disable-next-line no-console
      console.log(e.response);
      throw new InvalidRequestError();
    }
  }
}
