function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(4));

function fib(num) {
  if (num < 3) return 1;
  return fib(num - 1) + fib(num - 2);
}

// console.log(fib(6));

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// console.log(power(2, 4));

function multOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * multOfArray(arr.slice(1));
}

// console.log(multOfArray([1, 2, 3, 4]));

function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}

// console.log(recursiveRange(4));
