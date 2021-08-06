class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const idx = this._hash(key);

    if (this.keyMap[idx]) {
      this.keyMap[idx].push([key, value]);
    } else {
      this.keyMap[idx] = [[key, value]];
    }
  }

  get(key) {
    const idx = this._hash(key);

    if (this.keyMap[idx]) {
      for (let val of this.keyMap[idx]) {
        if (val[0] === key) return val[1];
      }
    }

    return undefined;
  }

  keys() {
    let keys = [];

    this.keyMap.forEach(val => {
      if (val.length > 0) {
        val.forEach(([key]) => keys.push(key));
      } else {
        keys.push(val[0][0]);
      }
    });

    return keys;
  }

  values() {
    let values = [];

    this.keyMap.forEach(val => {
      if (val.length > 0) {
        val.forEach(([_, value]) => values.push(value));
      } else {
        values.push(val[0][1]);
      }
    });
    return values;
  }
}

const tab = new HashTable(10);
tab.set('pink', '1111');
tab.set('blue', '2022');
tab.set('dark', '3333');

console.log(tab.keys());
console.log(tab.keyMap);
