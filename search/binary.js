function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) return mid;

    if (arr[mid] < val) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

// console.log(binarySearch([1, 2, 5, 6, 8, 10, 12, 15, 22, 26, 34, 74, 83], 26));
