class A {
	constructor() {
		this.a = 'a';
	}
}

class B extends A {}

const test = new B();
console.log('test', test);
