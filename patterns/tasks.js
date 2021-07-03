function sameFrequency(num1, num2) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  if (strNum1.length !== strNum2.length) return false;

  const lookup = {};

  for (let val of strNum1) {
    lookup[val] ? (lookup[val] += 1) : (lookup[val] = 1);
  }

  for (let val of strNum2) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val]--;
    }
  }

  return true;
}

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(22, 222));

function areThereDuplicates1(...args) {
  const lookup = {};

  for (let val of args) {
    if (lookup[val]) {
      return true;
    } else {
      lookup[val] = 1;
    }
  }

  return false;
}

function areThereDuplicates(...args) {
  const arr = args.sort();

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[++i] = arr[j];
    } else {
      return true;
    }
  }
  return false;
}

// console.log(areThereDuplicates(1, 2, 3));
// console.log(areThereDuplicates(1, 2, 2));
// console.log(areThereDuplicates('a', 'b', 'c', 'a'));

function averagePair(arr, num) {
  if (!arr.length) return false;

  let left = 0;
  let rigth = arr.length - 1;

  while (left < rigth) {
    const avg = (arr[left] + arr[rigth]) / 2;
    if (avg === num) return true;

    if (num < avg) {
      rigth--;
    } else {
      left++;
    }
  }
  return false;
}

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

function isSubsequence(str1, str2) {
  let i = 0;
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
  }
  return false;
}

// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true

function maxSubarraySum(arr, num) {
  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
