export function getMergeSortAnimations(arr: number[]) {
  const copy = [...arr];
  const len = copy.length;
  const aux = Array(len);
  const animations: never[] = [];
  mergeSortHelper(copy, aux, 0, len - 1, animations);
  return animations;
}

function mergeSortHelper(
  arr: any[],
  aux: any[],
  left: number,
  right: number,
  animations: any[]
) {
  if (right <= left) return;
  const mid = left + Math.floor((right - left) / 2);
  mergeSortHelper(arr, aux, left, mid, animations);
  mergeSortHelper(arr, aux, mid + 1, right, animations);
  merge(arr, aux, left, mid, right, animations);
}

function merge(
  arr: { [x: string]: any },
  aux: any[],
  left: any,
  mid: number,
  right: number,
  animations: (boolean | any[])[][]
) {
  for (let i = left; i <= right; i++) aux[i] = arr[i];
  let i = left;
  let j = mid + 1;
  for (let k = left; k <= right; k++) {
    if (i > mid) {
      animations.push([[j], false]);
      animations.push([[k, aux[j]], true]);
      arr[k] = aux[j++];
    } else if (j > right) {
      animations.push([[i], false]);
      animations.push([[k, aux[i]], true]);
      arr[k] = aux[i++];
    } else if (aux[j] < aux[i]) {
      animations.push([[i, j], false]);
      animations.push([[k, aux[j]], true]);
      arr[k] = aux[j++];
    } else {
      animations.push([[i, j], false]);
      animations.push([[k, aux[i]], true]);
      arr[k] = aux[i++];
    }
  }
}
