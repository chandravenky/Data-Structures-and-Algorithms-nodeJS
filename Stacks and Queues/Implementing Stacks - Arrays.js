class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }

  push(value){
    const new_stack_element = new Node(value);
    if(this.length ===0){
      this.top = new_stack_element;
      this.bottom = new_stack_element;
    } else { 
      const holdingPointer = this.top;
      this.top = new_stack_element;
      this.top.next = holdingPointer;
    }
      this.length ++;
      return this;
    }
    

  pop(){
    if(this.length ===0){
      return undefined;
    }
    if (this.top === this.bottom){
      this.bottom = null;
    }
    const holdingPointer = this.top.next;
    this.top = holdingPointer;
    this.length--
    return this;

  }
  //isEmpty
}

const myStack = new Stack();
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.pop();
myStack.pop();
