
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value){
    this.head = new Node(value)
      this.tail = this.head;
      this.length = 1;
  }

    append(item) {
      const newNode = new Node(item);
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

  printList(){
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, item){
    if (index>=this.length) {
      return this.append(item)
    }
    const newNode = {
        value: item,
        next: null
      }
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList()

  }

  traverseToIndex(index){
    let counter=0;
    let currentNode= this.head;
    while(counter!== index){
      currentNode = currentNode.next;
      counter= counter+1;
    }
    return currentNode
  }

  remove(index){
    const leader = this.traverseToIndex(index-1);
    const leader_neighbor = this.traverseToIndex(index+1);
    leader.next = leader_neighbor;
    this.length--;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
// console.log(myLinkedList);
myLinkedList.prepend(2);
// console.log(myLinkedList);
myLinkedList.printList();
myLinkedList.insert(2,99);
myLinkedList.printList();
myLinkedList.insert(20,99);
myLinkedList.remove(2);
myLinkedList.printList();