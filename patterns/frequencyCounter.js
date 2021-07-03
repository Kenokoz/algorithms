function same1(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  for (let i = 0; i < firstArr.length; i++) {
    let correctIndex = secondArr.indexOf(firstArr[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    secondArr.splice(correctIndex, 1);
  }
  return true;
}

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same1([1, 2, 3, 2], [4, 1, 9, 4]));

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let val of str1) {
    lookup[val] ? (lookup[val] += 1) : (lookup[val] = 1);
  }

  for (let val of str2) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val] -= 1;
    }
  }

  return true;
}

const logger = console.log;

logger(validAnagram('', '')); // true
logger(validAnagram('aaz', 'zza')); // false
logger(validAnagram('anagram', 'nagaram')); // true
