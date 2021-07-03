function flatten(arr) {
  if (!arr.length) {
    return [];
  }

  return [...arr[0], ...flatten(arr.slice(1))];
}

// console.log(
//   flatten([
//     [1, 2, 3],
//     [4, 5],
//     [6, 8],
//   ])
// );

function reverse(str) {
  if (str.length <= 1) return str;

  return reverse(str.slice(1)) + str[0];
}

// console.log(reverse('hello'));

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

// console.log(isPalindrome('шалаш'));

function capitalizeFirst(arr) {
  if (!arr.length) return [];

  arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1);
  return [arr[0], ...capitalizeFirst(arr.slice(1))];
}

// console.log(capitalizeFirst(['hello', 'my', 'friend']));

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

console.log(capitalizeWords(['hello', 'my', 'friend']));

function collectStrings(obj) {
  const stringsArr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }
  return stringsArr;
}

// console.log(collectStrings({ hi: 'ads', num: 2, here: 'hello' }));

function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

// console.log(
//   nestedEvenSum({
//     first: 1,
//     second: 2,
//     third: { one: 5, noin: 6, dsa: { cs: 2 } },
//     fourth: 4,
//   })
// );

function stringifyNumbers(obj) {
  const newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// console.log(stringifyNumbers({ s: 2, d: '3', dsa: 42, ca: 'dsa' }));
