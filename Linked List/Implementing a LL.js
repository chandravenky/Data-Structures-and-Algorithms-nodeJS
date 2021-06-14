
class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
      }
      this.tail = this.head;
      this.length = 1;
  }

    append(item) {
      const newNode = {
        value: item,
        next:null
      }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++
    return this;
  }

  prepend(item) {
      const newNode = {
        value: item,
        next:this.head
      }
    this.head = newNode
    this.length++
    return this;
  }

}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList)
myLinkedList.prepend(2);
console.log(myLinkedList)

