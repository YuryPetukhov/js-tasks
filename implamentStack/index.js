class MyStack {
  constructor() {
    this.queue = [];
    this.size = 0;
  }
  push(el) {
    this.queue[size] = el;
    this.size++;
  }

  pop() {
    const lastElement = this.queue[this.size];

    this.queue.length = this.queue.length - 1;
    this.size--;

    return lastElement;
  }

  top() {
    return this.queue[size];
  }

  empty() {
    return !this.size;
  }
}

const stack = new MyStack();
