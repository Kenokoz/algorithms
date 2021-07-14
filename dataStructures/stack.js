class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.size) return null;
    const poppedNode = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = poppedNode.next;
    this.size--;
    return poppedNode;
  }
}

const stack = new Stack();

stack.push('1');
stack.push('2');
stack.push('3');
stack.push('4');

console.log(stack);
