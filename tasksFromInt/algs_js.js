function check(arr, k) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k && i !== j) {
        return `${arr[i]} + ${arr[j]} = ${k}`;
      }
    }
  }

  return 'таких чисел нет';
}

/////////////////////////////////

function wash(n, m, k) {
  res = 0;

  if (m <= n) {
    res = k;
    return res;
  } else {
    while (m > 0) {
      res += k;
      m -= n;
    }

    return res;
  }
}

////////////////////////////

function countOpposite(num) {
  return num * -1;
}

/////////////////////////////

function basicOperator(operator, firstNum, secondNum) {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    case '/':
      return firstNum / secondNum;
    default:
      return 'invalid operator';
  }
}

//////////////////////////

function splitArray(arr) {
  return arr.join();
}

/////////////////////////

function countDiscont(days) {
  const rent = 40;

  if (days >= 3 && days <= 6) {
    return days * rent - 20;
  } else {
    return days * rent - 50;
  }
}

////////////////////////

function getMiddle(str) {
  if (str.length <= 2) {
    return str;
  } else if (str.length % 2 === 1) {
    return str[(str.length - 1) / 2];
  }
  return `${str[str.length / 2 - 1]}${str[str.length / 2]}`;
}

/////////////////////////

function partitionOn(isEven, items) {
  let i = 0;

  items.forEach(el => (isEven(el) ? i : i++));

  return i;
}

////////////////////////

function countWords(str) {
  let res = 0;

  str.split(' ').forEach(el => (el.trim() ? res++ : res));

  return res;
}

///////////////////////

function createStr(str) {
  const data = str.trim().split(',');

  if (data.length <= 2) {
    return null;
  } else {
    return data.reduce((acc, el, i) => {
      if (i !== 0 && i !== data.length - 1) {
        return i === data.length - 2
          ? (acc += el.trim())
          : (acc += `${el.trim()} `);
      }
      return acc;
    }, '');
  }
}

/////////////////////////

function prefill(num, value) {
  let res = [];
  for (let i = 0; i < num; i++) {
    res.push(value);
  }

  return res;
}

/////////////////////////

function countArguments(param) {
  let count = 0;

  if (arguments.length) {
    const data = Object.keys(arguments);
    data.forEach(el => (count += arguments[el]));

    function deepCounting(params) {
      if (arguments.length) {
        const data = Object.keys(arguments);
        data.forEach(el => (count += arguments[el]));

        return deepCounting;
      }

      return count;
    }

    return deepCounting;
  }

  return count;
}

//////////////////////

// let вместо var, i in callback param and third setTimeout param, функция обертка, bind
for (var i = 0; i < 10; i++) {
  // setTimeout(() => console.log(i), 100);
}

//////////////////////

Array.prototype.myMap = function (callback) {
  const res = [];

  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }

  return res;
};

/////////////////////

Array.prototype.myReduce = function (callback, acc) {
  acc = acc ? acc : this.shift();

  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }

  return acc;
};

/////////////////////

function isMonogamy(arr) {
  let flag = arr[1] >= arr[0] ? true : false;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i + 1] >= arr[i] && !flag) {
      return false;
    } else if (arr[i + 1] < arr[i] && flag) {
      return false;
    }
  }

  return true;
}

///////////////////////

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const res = [];
    let len = promises.length;
    check = () => {
      if (--len === 0) {
        resolve(res);
      }
    };

    promises.forEach(el => el.then(p => res.push(p), reject).then(check()));

    return res;
  });
}

///////////////////////

function intersect(arr1, arr2) {
  const res = [];

  let map = arr1.reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] + 1 : 1;
    return acc;
  }, {});

  for (let i = 0; i < arr2.length; i++) {
    const current = arr2[i];
    const count = map[current];

    if (count && count > 0) {
      res.push(current);
      map[current] -= 1;
    }
  }

  console.log(map);
  return res;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

////////////////////

function findPeak(arr) {
  return arr.reduce((acc, el, i) => {
    if (el > arr[acc]) {
      acc = i;
    }

    return acc;
  }, 0);
}

/////////////////////

function bracketsChecker(str) {
  const dict = {
    '}': '{',
    ']': '[',
    '>': '<',
    ')': '(',
  };
  const data = [...str];
  const res = [];

  data.forEach(el => {
    if (res.length && dict[el] === res[res.length - 1]) {
      res.pop();
    } else res.push(el);
  });

  return !res.length;
}

//////////////////////

function brickWall(arr) {
  let res = {};
  let max = 0;

  arr.forEach(el => {
    let sum = 0;
    el.forEach((brick, i) => {
      if (i < el.length - 1) {
        sum += brick;
        res[sum] = res[sum] ? res[sum] + 1 : 1;
        max = Math.max(res[sum], max);
      }
    });
  });

  return arr.length - max;
}

//////////////////////

function getStr() {
  return [].slice.call(arguments, 1).join(arguments[0]);
}

/////////////////////

function arrSplit(arr1, arr2) {
  const res = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      res.push(arr2.shift());
    } else {
      res.push(arr1.shift());
    }
  }

  arr1.length ? res.push(...arr1) : res.push(...arr2);

  return res;
}

///////////////////////

var tree1 = {
  valueNode: 1,
  next: [
    {
      valueNode: 3,
      next: null,
    },
    {
      valueNode: 2,
      next: null,
    },
  ],
};

function getSum(obj) {
  const arr = [obj];
  let sum = 0;
  let current;

  while (arr.length > 0) {
    current = arr.shift();
    sum += current.valueNode;

    if (current.next != null) {
      for (var i = 0; i < current.next.length; i++) {
        arr.push(current.next[i]);
      }
    }
  }

  return sum;
}

///////////////////////

function sortDates(dates) {
  const split = dates.map(({ date }) => date.split('.'));
  const newDates = split.map(
    date => new Date(Number(date[2]), Number(date[1]), Number(date[0]))
  );
  const times = newDates.map(date => date.getTime());
  dates = dates.map((date, i) => ({ ...date, time: times[i] }));
  dates.sort((a, b) => a.time - b.time);

  return dates.map(({ date }) => ({ date }));
}

const arr = [
  { date: '10.01.2017' },
  { date: '05.11.2016' },
  { date: '21.13.2002' },
];
console.log(sortDates(arr));

///////////////////////////////

function maxProfit(arr) {
  let minPrice = arr[0];
  let maxProfit = 0;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current < minPrice) {
      minPrice = current;
    }

    if (current - minPrice > maxProfit) {
      maxProfit = current - minPrice;
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 2, 1]));

/////////////////////

function findUnique(str) {
  const lookup = {};

  for (let val of str) {
    lookup[val] = (lookup[val] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (lookup[str[i]] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(findUnique('leetcode'));
console.log(findUnique('loveleetcode'));
console.log(findUnique('aabb'));

////////////////////

function numIsLands(grid) {
  let counter = 0;
  const rowL = grid[0].length;
  const columnL = grid.length;

  function mark(grid, r, c) {
    grid[r][c] = '5';
    if (grid[r][c - 1] === '1') {
      mark(grid, r, c - 1);
    }
    if (grid[r][c + 1] === '1') {
      mark(grid, r, c + 1);
    }
    if (grid[r + 1]?.[c] === '1') {
      mark(grid, r + 1, c);
    }
    if (grid[r - 1]?.[c] === '1') {
      mark(grid, r - 1, c);
    }
  }

  for (let r = 0; r < rowL; r++) {
    for (let c = 0; c < columnL; c++) {
      if (grid[r][c] === '1') {
        counter++;
        mark(grid, r, c);
      }
    }
  }

  return counter;
}

console.log(
  numIsLands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
    ['0', '0', '0', '1', '1'],
  ])
);

//////////////////////////

function search(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) return mid;

    if (arr[left] <= arr[mid]) {
      if (arr[left] <= target && target <= arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (arr[mid] <= target && target <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

////////////////////////////

function peakIndexMountainArr(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] <= arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

console.log(peakIndexMountainArr([1, 2, 3, 4, 3, 2, 1]));
console.log(peakIndexMountainArr([11, 13, 14, 15, 6, 4, 2]));
console.log(peakIndexMountainArr([10, 9, 8, 6, 4]));

///////////////////////////////

function shuffle(arr) {
  for (let i = arr.length - 1; 0 < i; i--) {
    const temp = arr[i];
    const rnd = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[rnd];
    arr[rnd] = temp;
  }

  return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));

///////////////////////////////

function longestPal(str) {
  let left = 0;
  let rigth = 0;

  for (let i = 0; i < str.length; i++) {
    const len1 = expandFromCenter(str, i, i);
    const len2 = expandFromCenter(str, i, i + 1);
    const len = Math.max(len1, len2);

    if (len > rigth - left) {
      left = Math.ceil(i - (len - 1) / 2);
      rigth = Math.floor(i + len / 2);
    }
  }

  function expandFromCenter(s, L, R) {
    while (L >= 0 && R < s.length && s[L] === s[R]) {
      L--;
      R++;
    }
    return R - L - 1;
  }

  return str.substring(left, rigth + 1);
}

console.log(longestPal('mississippi'));
console.log(longestPal('babad'));
console.log(longestPal('cbbd'));

///////////////////////

function maxDistToClosest(arr) {
  let max = 0;
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      temp = 0;
    } else {
      temp++;
      max = Math.max(Math.ceil(temp / 2), max);
    }

    if (i === arr.length - 1 && arr[i] === 0) {
      max = Math.max(temp, max);
    }
  }
  console.log(max);
}

console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));
console.log(maxDistToClosest([1, 0, 0, 0]));
console.log(maxDistToClosest([0, 1]));

///////////////////////

function maxDistToClosest(arr) {
  let max = 0;
  let temp = 0;
  let i = 0;

  if (arr[i] === 0) {
    while (arr[i] === 0) {
      i++;
      temp++;
    }
    max = temp;
    temp = 0;
  }

  for (; i < arr.length; i++) {
    if (arr[i] === 1) {
      temp = 0;
    } else {
      temp++;
      max = Math.max(Math.ceil(temp / 2), max);
    }

    if (i === arr.length - 1 && arr[i] === 0) {
      max = Math.max(temp, max);
    }
  }

  return max;
}

//////////////////////

function singleNumber(arr) {
  const lookup = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  for (let key in lookup) {
    if (lookup[key] === 1) return key;
  }
}

console.log(singleNumber([4, 1, 2, 2, 1]));

////////////////////////

function removeDuplicates(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr.length;
}

console.log(removeDuplicates([1, 1, 2, 3, 3, 5, 5, 5, 6, 6, 6]));

//////////////////////////

function threeFum(arr, target) {
  if (arr.length < 3) {
    return [];
  }

  const res = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] > target) {
      break;
    }

    if (arr[i] > 0 && arr[i] === arr[i - 1]) continue;

    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];

      if (sum === target) {
        res.push([arr[i], arr[j], arr[k]]);
        while (arr[j] === arr[j + 1]) j++;
        while (arr[k] === arr[k - 1]) k--;

        j++;
        k--;
        continue;
      }

      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return res;
}

console.log(threeFum([-1, 0, 1, 2, -1, -4], 0));
console.log(threeFum([1, 1, -2], 0));
console.log(threeFum([-2, 0, 1, 1, 2], 0));

////////////////////////
