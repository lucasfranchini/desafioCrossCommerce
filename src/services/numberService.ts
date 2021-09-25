import * as repository from "@/repositories/numberRepository";

export async function getAllOrdered() {
  const array = await repository.getAll();
  /*let isLastArray = false;
  let i = 1;
  let array: number[] = [];
  while(!isLastArray) {
    try{
      const newArray = await repository.getPage(i);
      if(newArray.length===0)isLastArray = true;
      else {
        orderArray(newArray);
        array = [...array, newArray];
      }
      i++;
    }
    catch(e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }
  if(array.length === 0) throw new InvalidRequestError();
  return array;*/
  orderArray(array);
  return array;
}

function orderArray(array: number[], left = 0, right = array.length-1) {
  if(array.length > 1) {
    const index = partition(array, left, right);
    if (left < index - 1) {
      orderArray(array, left, index - 1);
    }
    if (index < right) {
      orderArray(array, index, right);
    }
  }
}

function partition(array: number[], left: number, right: number) {
  const middle = array[Math.floor((right + left) / 2)];
  while(left<= right) {
    while(array[left]< middle) { 
      left++;
    }
    while(array[right]> middle) {
      right--;
    }
    if (left <= right) {
      const rightItem = array[right];
      array[right] = array[left];
      array[left] = rightItem;
      left++;
      right--;
    }
  }
  return left;
}
