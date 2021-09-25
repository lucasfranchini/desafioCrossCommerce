export default function partition(array: number[], left: number, right: number) {
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
