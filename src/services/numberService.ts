import * as repository from "@/repositories/numberRepository";

export async function getAllOrdered() {
  const array = await repository.getAll();
  orderArray(array);
  return array;
}

export function orderArray(array: number[], left = 0, right = array.length-1) {
  if(array.length > 1) {
    const lastIndex = partition(array, left, right);
    if (left < lastIndex - 1) {
      orderArray(array, left, lastIndex - 1);
    }
    if (lastIndex < right) {
      orderArray(array, lastIndex, right);
    }
  }
}

export function partition(array: number[], left: number, right: number) {
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
