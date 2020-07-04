export async function asyncForEach<T>(
  array: T[],
  callback: (item: T, idx: number, array: T[]) => void,
) {
  for (let index = 0; index < array.length; index++) {
     await callback(array[index], index, array);
  }
}
