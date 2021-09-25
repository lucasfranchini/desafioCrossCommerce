import partition from "./partition";

export default function orderArray(array: number[], left = 0, right = array.length-1) {
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
