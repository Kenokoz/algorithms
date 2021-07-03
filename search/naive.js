function naiveStringSearch(longStr, snippet) {
  let counter = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < snippet.length; j++) {
      if (longStr[i + j] !== snippet[j]) break;
      if (j == snippet.length - 1) counter++;
    }
  }

  return counter;
}

console.log(naiveStringSearch('wowomgzomg', 'omg'));
