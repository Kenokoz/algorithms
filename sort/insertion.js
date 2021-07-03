function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && currentVal < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }

  return arr;
}

console.log(insertionSort([4, 12, 11, 3, 7, 2]));

// [1, 5, 8, 10, 3]
