class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item;
    this.length = this.length +1
    return this.length
  }

  pop(item){
    const lastItem = this.data[this.length -1];
    delete this.data[this.length-1];
    this.length = this.length -1;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);

  }
  shiftItems(index) {
    for (let i=index; i<this.length -1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length = this.length -1;
  }
}

const newArray = new MyArray();
newArray.push('hi');
console.log(newArray);
newArray.push('hello');
console.log(newArray);
newArray.push('heyy');
console.log(newArray);
// newArray.pop();
newArray.shiftItems(1);
console.log(newArray);