class MyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  push(value) {
    this.first.push(value);
    return this;
  }

  pop() {
    if (!this.last.length ===0) {
      const length = this.first.length;
          for (let i = 0; i < length; i++) {
            this.last.push(this.first.pop());
          }
    }
    this.last.pop();
    return this;
  }

  peek() {
    if (this.last.length ===0) {
    const length = this.first.length;
        for (let i = 0; i < length; i++) {
          this.last.push(this.first.pop());
        }
    }
    return this.last[this.last.length-1];
  }

empty() {
  if(this.first.length ===0 && this.last.length ===0){
    return true
  }
  else {
    return false
  }
}

}

const myQueue = new MyQueue();
myQueue.push('Joy');
myQueue.push('Matt');
myQueue.push('Pavel');
myQueue.peek();
myQueue.pop();
myQueue.pop();
myQueue.peek()
