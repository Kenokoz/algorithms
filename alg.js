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
