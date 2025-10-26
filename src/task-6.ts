function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirstElement<number>([1, 2, 3]);
const str = getFirstElement<string>(["a", "b", "c"]);
const bool = getFirstElement<boolean>([true, false, true]);




getFirstElement([1, 2, 3]);           // 1
getFirstElement(["a", "b", "c"]);     // "a"
getFirstElement([true, false, true]); // true
