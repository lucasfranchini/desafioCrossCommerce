import InvalidRequestError from "@/errors/InvalidRequestError";
import axios from "axios";

export async function getAll() {
  let isLastArray = false;
  let i = 1;
  const array: number[] = [];
  while(!isLastArray ) {
    try{
      const requisicoes: Promise<number[]>[] = [];
      let j = i;
      while(j<i+10) {
        requisicoes.push(getPage(j));
        j++;
      }
      const numbers: number[]= [];
      for await (const req of requisicoes) {
        numbers.push(...req);
        if(req.length===0)isLastArray = true;
      }
      array.push(...numbers);
      i = j;
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

export async function getPage(id: number): Promise<number[]> {
  const result = await axios.get(`http://challenge.dienekes.com.br/api/numbers?page=${id}`);
  return result.data.numbers;
}
