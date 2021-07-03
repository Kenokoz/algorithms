function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    temp += arr[i];
    for (let j = 0; j < num; j++) {
      temp += arr[j + i];
    }
    if (max < temp) {
      max = temp;
    }
  }
  return max;
}

function maxSubarraySum2(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 3));
