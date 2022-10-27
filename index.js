class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

 

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
    } 
   
  

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    }
    throw new Error('OutOfBounds');
  }

  max() {
    if (this.items.length > 0) {
      let highest = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (highest < this.items[i]) {
          highest = this.items[i];
        }
      }
      return highest;
    }
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    }
    if (this.items.length >0){
      return this.items[0];
    }
   
  
  }


  sum() {}

  avg() {}
}

module.exports = SortedList;
