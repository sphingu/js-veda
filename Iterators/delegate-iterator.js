// delegate the iteration to an existing iterator

class SpecialList {
  constructor(data) {
    this.data = data;
  }

  // this make class object iterable
  // WHY: it need to work with return [1,2,3]; as it does for values() method 
  [Symbol.iterator]() {
    return this.data[Symbol.iterator]();  // delegated iteration to data's iterator
  }

  values() {
    return this.data
      .filter(i => i.complete)
      .map(i => i.value)
    [Symbol.iterator]();  // here, we are delegating iteration to filtered array of values
  }
}

const myList = new SpecialList([
  { complete: true, value: 'Lorem ipsum' },
  { complete: true, value: 'dolor sit amet' },
  { complete: false },
  { complete: true, value: 'adipiscing elit' }
]);

for (let item of myList) {
  console.log(item);  // The exact data passed to the SpecialList constructor above
}

for (let item of myList.values()) {
  console.log(item);  // 'Lorem ipsum', 'dolor sit amet', 'adipiscing elit'
}