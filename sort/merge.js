function merge(arr1, arr2) {
  const newArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  while (arr1[i]) {
    newArr.push(arr1[i]);
    i++;
  }

  while (arr2[j]) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = arr.length / 2;
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([3, 5, 10, 1]));
