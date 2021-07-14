function getDigit(num, place) {
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
}

function digitCount(num) {
  return num.toString().length;
}

function mostDigits(nums) {
  let maxDigits = 1;
  for (let val of nums) {
    maxDigits = Math.max(maxDigits, digitCount(val));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCounts = mostDigits(nums);

  for (let k = 0; k < maxDigitCounts; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
    console.log(nums);
  }
}

console.log(radixSort([3, 2, 4, 3, 2, 9, 6, 8, 3, 1]));
