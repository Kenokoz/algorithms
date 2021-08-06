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
  .catch(p => p + 'b')
  .catch(p => p + 'с')
  .then(p => p + 'd')
  .finally(p => p + 'e')
  .then(p => console.log(p));
// abd

setTimeout(() => console.log(1), 0);

const p = Promise.resolve()
  .then(() => console.log(2))
  .finally(() => console.log(3));

console.log(4);

p.then(() => console.log(5));

const p2 = new Promise(resolve => {
  console.log(6);
  resolve();
}).then(() => console.log(7));

// 4 6 2 7 3 5 1
```

---

```javascript
setTimeout(() => console.log('a'));

Promise.resolve()
  .then(first => {
    console.log(first);
    return 'b';
  })
  .then(
    Promise.resolve().then(second => {
      console.log(second);
      return 'c';
    })
  )
  .then(third => console.log(third));

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
