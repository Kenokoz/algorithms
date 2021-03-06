class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.length;
  }

  dequeue() {
    if (!this.length) return null;
    const poppedNode = this.first;
    if (this.length === 1) {
      this.last = null;
    }
    this.first = poppedNode.next;
    this.length--;
    return poppedNode.val;
  }
}

const queue = new Queue();

queue.enqueue('1');
queue.enqueue('2');
queue.enqueue('3');
queue.enqueue('4');
queue.enqueue('5');

console.log(queue);
