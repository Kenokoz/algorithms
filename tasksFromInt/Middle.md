# Interview

- [React](#react)
  - [Hooks](#hooks)
  - [SyntheticEvent](#syntheticevent)
  - [Паттерны](#паттерны)
  - [Redux](#redux)
- [JS](#js)

## React

- JSX
- Как писать без JSX
- virtualDOM
- Refs
- Portals
- Reconciliation
  - keys
- Fiber

---

### Задача: Навесить обработчик

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }
  render() {
    return <Button>click me</Button>;
  }
}
```

```javascript
const Comp1 = () => {
  const [state, setState] = useState({ name: 'name' });

  return <Comp2 state={state} setState={setState} />;
};

const Comp2 = ({ state, setState }) => {
  const handleClick = () => {
    const newState = state;
    newState.name = 'newName';
    setState(newState);
  };

  return (
    <div>
      <h1>{state.name}</h1>

      <button onClick={handleClick}>Change name</button>
    </div>
  );
};
```

#### Темы на обсудить

- Привязка контекста
- Аргументы `setState`
- Множественный вызов `setState`
  - Сколько раз обновится `state`
- Работа со `state` после `setState` (понимание асинхронности метода)
  - `setState(..., callback)`
  - `componentDidUpdate`
- Методы жизненного цикла
  - Аргументы
  - Зачем можем использовать?
- Hooks (Если работал с ними)
  - Переписать пример с использованием хуков
    - Аргумент `useState`
    - Возвращаемые значения `useState`
    - Аргумент `setState`
- PureComponent
- React.Memo

---

### Hooks

- useEffect
- useReducer
- useMemo
- useCallback
- Пользовательские хуки

---

### SyntheticEvent

- Обработка на `capture`
- Поля и методы
- Использование `event` в асинхронном коде `(event.persist())`

---

### Паттерны

- HOC
- RenderProps
- Conditional Rendering

---

### Redux

- За счет чего работает в `react`

---

## JS

### Общее

- Количество потоков в JS
- `var` vs `let`

---

### Типы

- Symbol

#### Приведение :ghost:

##### Задача: Что будет в консоли?

```javascript
const res = 'B' + 'a' + (1 - 'hello');
console.log(res);
// BaNaN
```

```javascript
const res = (true && 3) + 'd';
console.log(res);
// 3d
```

```javascript
const res = Boolean(true && 3) + 'd';
console.log(res);
// trued
```

---

### Функции

- `FE`, `FD`, `arrow function`

#### Общее

```javascript
sum(a, b, c, ... )

/*
function sum() {
  return [].reduce.call(arguments, (acc, item) => acc + item, 0)
}

function sum2(...args) {
  return args.reduce((acc, item) => acc + item, 0)
}
*/
```

```javascript
function sum(a) {
  const val = a;
  return function (b) {
    if (b !== undefined) {
      return sum(a + b);
    } else {
      return val;
    }
  };
}
sum(1)(2)(3)(4)();

function sum(firstNum = 0) {
  let result = firstNum;

  const add = (secondNum = 0) => {
    result += secondNum;
    return add;
  };

  add.toString = () => result;

  return add;
}

sum(1)(2)(3);
```

#### Closure

##### Задача: Что выведется в консоль

Может не совсем про замыкания, но затрагивает несколько тем

```javascript
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

- Какими способами добиться желаемого поведения?

##### Задача: Что выведется в консоль

```javascript
var a = 1;

function foo() {
  console.log(a);
}

function bar() {
  var a = 2;
  foo();
}

bar();
```

#### Контекст

```javascript
var a = {
  b: 5,
  getB: function () {
    return this.b;
  },
};

console.log(a.getB()); // ??
var fn = a.getB;
console.log(fn()); // ??
```

- А если переделать в стрелочную?

---

### Асинхронщина

- EventLoop
  - Таски
  - Микротаски

#### Задача: Порядок вывода в консоль

```javascript
let a = 5;
console.log(a);
setTimeout(() => {
  console.log(a);
  a = 10;
}, 0);

Promise.resolve().then(() => {
  console.log(a);
  a = 15;
});
console.log(a);
// 5
// 5
// 5
// 15
```

---

#### Promises

- Статичные методы
  - all
  - race
  - resolve
  - reject

#### Задача: Итоговое значение

```javascript
Promise.reject('a')
  .catch((p) => p + 'b')
  .catch((p) => p + 'с')
  .then((p) => p + 'd')
  .finally((p) => p + 'e')
  .then((p) => console.log(p));
// abd

setTimeout(() => console.log(1), 0);

const p = Promise.resolve()
  .then(() => console.log(2))
  .finally(() => console.log(3));

console.log(4);

p.then(() => console.log(5));

const p2 = new Promise((resolve) => {
  console.log(6);
  resolve();
}).then(() => console.log(7));

// 4 6 2 7 3 5 1

Promise.resolve(console.log(1)).then(() => console.log(2));

Promise.resolve()
  .then(() => console.log(3))
  .then(console.log(4));

Promise.reject(5).then(
  () => {},
  (n) => console.log(n)
);

console.log(6);

// 1 4 6 2 3 5
```

---

```javascript
setTimeout(() => console.log('a'));

Promise.resolve()
  .then((first) => {
    console.log(first);
    return 'b';
  })
  .then(
    Promise.resolve().then((second) => {
      console.log(second);
      return 'c';
    })
  )
  .then((third) => console.log(third));

console.log('d');

// d
// undefined
// undefined
// b
// a
```

---

## Общее

- Event handling
- CORS
- SOP
- HTTP
- critical render path
- requestAnimationFrame
- Cookie vs LS vs SS
- дебаггинг

```javascript
//'use strict'

let phrase = 'Hello';
if (true) {
  let user = 'John';
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi(); // нельзя в useStrict

//////////////////////////////

let user = {
  firstName: 'Вася',
  sayHi() {
    alert(`Привет, ${this.firstName}!`);
  },
};

setTimeout(user.sayHi, 1000); // undefind

// 01. Есть 3 вложенных элемента FORM > DIV > P, с обработчиком на каждом:
// Какой(какие) alert'ы вызовутся при клике на DIV

<form onclick="alert('form')">
  FORM
  <div onclick="alert('div')">
    DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>;

// 02. Как будет порядок вызовов ?

console.log('1');
Promise.resolve(console.log('2'));
setTimeout(function cb1() {
  console.log('3');
}, 2000);
setTimeout(function cb() {
  console.log('4');
});
console.log('5');
setTimeout(function cb1() {
  console.log('6');
}, 0);
new Promise((res, rj) => res('7')).then(console.log);
console.log('8');

// 1 2 5 8 7 4 6 3

// 03. Какой будет результат у вызова sayHi?
// ('use strict');
let phrase = 'Hello';
if (true) {
  let user = 'John';
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi();

// 04. Какой будет результат выполнения кода?

let user = {
  firstName: 'Вася',
  sayHi() {
    alert(`Привет, ${this.firstName}!`);
  },
};
setTimeout(user.sayHi, 1000);

// 05 Описать функцию, которая вернет массив из online users с добавленным department

const users = [
  { name: Maxim, id: 'uuid1', online: true },
  { name: Andrew, id: 'uuid2', online: false },
  { name: Alex, id: 'uuid3', online: true },
  { name: Peter, id: 'uuid4', online: false },
];

const dto = { department: 'SMB' };

function addDto(users) {
  return users.filter((u) => u.online).map((u) => ({ ...u, ...dto }));
}

// 05. Сортировать по имени ASC и по возрасту DESC

// var persons = [
//     { name: "Harry", age: 14 },
//     { name: "Ethan", age: 30 },
//     { name: "Alice", age: 66 }
//     { name: "Peter", age: 21 },
//     { name: "Clark", age: 42 },
//     { name: "Alice", age: 16 }
//     { name: "Ethan", age: 30 },
// ];
persons.sort((a, b) => (a.name > b.name ? 1 : -1));

//////////////////////////////

var a = 10;

if (true) {
  var a = 20;
}

console.log(a);

if (false) {
  var a = 30;
}

console.log(a);

//////////////////////////////

console.log(a);

var a = 5;

function a() {
  return 10;
}

console.log(a);

//Раньше всплывает functional declaration
//Объявления функций «поднимаются» над объявлением переменных, но не над их назначениями.

var double = 22;

function double(num) {
  return num * 2;
}

console.log(typeof double); // Вывод: number

var test;

function test(num) {
  return num * 2;
}

console.log(typeof test); // Вывод: function

/////////////////////////////

var a = 'hello';

function b() {
  if (false) {
    var a = 'world';
  } else {
    var b = 'man';
  }

  console.log(b);
  console.log(a);
}

b();

console.log(a);

//почему не как task1?

////////////////////////////////

var a = 1;

(function () {
  console.log(a);
  var a = 2;
})();

function a() {
  console.log(this);
}

a.call(null)(
  ///////////////////////////////

  function () {
    f();
    f = function () {
      console.log(1);
    };
  }
)();

f();
var f = 10;
f();

function f() {
  console.log(2);
}

// 2 1 error

//////////////////////////////

var a = 1;

function b() {
  a = 10;
  return 20;
  function a() {}
}

b();

console.log(a);

//////////////////////////////

//Разобрать Что будет результатом Промисов на Каждом Этапе

function func1() {
  return Promise.resolve('1');
}

function func2() {
  return Promise.resolve('2');
}
function func3(res) {
  return console.log(res);
}

//   func1()
//  .then(function() {
//    return func2();
//  })
//  .then(func3);

//   func1()
//   .then(function() {
//      func2();
//   })
//  .then(func3)

//   func1()
//  .then(func2())
//  .then(func3);

//  func1()
//  .then(func2)
//  .then(func3);

//=-----------=------------=------------=------------=

Promise.resolve(55)
  .then((value) => {
    console.log(value); //55
    throw new Error('123');
  })
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message)) //123
  .then(
    (value) => console.log(value),
    (error) => console.log(error)
  ) // undefined
  .then(finalHandler())
  .then(finalHandler);

function finalHandler() {
  console.log('finalHandler');
}

//=-----------=------------=------------=------------=

Promise.resolve(55)
  .then(function (val) {
    console.log(val); //55
    throw new Error();
  })
  .then((val) => console.log('then', val))
  .catch((val) => {
    console.log('catch', val); //catch error

    return Promise.reject();
  })
  .then(finalHandler, finalHandler1)
  .then(finalHandler, finalHandler1)
  .then(finalHandler, finalHandler1);

function finalHandler() {
  console.log('finalHandler');
}
function finalHandler1() {
  console.log('finalHandler1');
}

//=-----------=------------=------------=------------=

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('error')), 1000);
  setTimeout(() => resolve('OK'), 2000);
});

promise.then(
  (result) => console.log('Fulfilled: ' + result),
  (error) => console.log('Rejected: ' + error)
);

//=-----------=------------=------------=------------=

Promise.resolve(44)
  .then((a1) => console.log('a1 1', a1) || a1) // a1 1 44
  .then(doSomething)
  .then(doSomethingElse());
/* .then((a4) => console.log('a4 2', a4)) */

function doSomething(b) {
  return new Promise((res, rej) => {
    // setTimeout(() => {
    console.log('res 22');
    console.log(b);
    res(b);
    // }, 2000);
  });
}

function doSomethingElse(b) {
  return new Promise((res, rej) => {
    // setTimeout(() => {
    console.log('res 33');
    console.log(b);
    res(b);
    //  }, 1000);
  });
}

//=-----------=------------=------------=------------=

Promise.reject('a')
  .catch((p) => p + 'b') //ab
  .catch((p) => p + 'с')
  .then((p) => p + 'd') //abd
  .finally((p) => p + 'e')
  .then((p) => console.log(p));

console.log('f');

Promise.reject('start')
  .finally((val) => {
    console.log('finally-1', val); //fin 1 und
    return 'one';
  })
  .catch((val) => {
    console.log('catch-2', val); // catch 2 start
  })
  .finally((val) => {
    console.log('finally-3', val); //fin 3 und
    return 'three';
  })
  .then((val) => {
    console.log('then-4', val); // then-4 und
    return 'four';
  })
  .finally((val) => {
    console.log('finally-5', val); // fin 5 und
  })
  .then((val) => console.log('result', val)); // res four

//=-----------=------------=------------=------------=

  var f = function() {
  this.x = 5;
  (function() {
      this.x = 3;
  })();
  console.log(this.x);
};

var obj = {
  x: 4, 
  m: function() {
    console.log(this.x);
  }
};


f();
new f();
obj.m();
new obj.m();
f.call(f);
obj.m.call(f);

//=-----------=------------=------------=------------=

function foo() {
  const x = 10;
  return {
    x: 20,
    bar: () => {
      console.log(this.x) //und
    },
    bah: function () {
      console.log(this.x) // 20
    },
    baz() {
      console.log(this.x) // 20
    }
  }
}

const obj1 = foo();
obj1.bar();
obj1.bah.call({x: 30});
obj1.baz();

//=-----------=------------=------------=------------=

function Book(name, author) {
  this.name = name;
  this.author = author;
  return this;
}

function Foo(Cclass, name, author) {
  return Cclass.call({}, name, author);
}

const foo = Foo(Book, 'name', 'auth');
console.log(foo);
```
