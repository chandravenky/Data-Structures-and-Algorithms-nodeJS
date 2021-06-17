class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value){
    const new_queue_element = new Node(value);
    if(this.length ===0){
      this.first = new_queue_element;
      this.last = new_queue_element;

    } else {
      this.last.next = new_queue_element;
      this.last = new_queue_element;
    }
    this.length++;
    return this;
  }
  dequeue(){
    if(this.length ===0){
      return undefined;
    }
    if (this.first === this.last){
      this.last = null;
    }
    const holdingPointer = this.first.next;
    this.first = holdingPointer;
    this.length--
    return this;
  }
}

const myQueue = new Queue();

myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(5);
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();