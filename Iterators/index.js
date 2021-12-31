// Introduce in ES6
// used to loop over a sequence of values (usually some sort of collection)

// - must implement next() method that return object in the form of { value, done }
// - where value is the next value in iteration sequence
// - and done is boolean determining if the sequence has already been consumed

class LinkedList {
  constructor(data) {
    this.data = data;
  }

  firstItem() {
    return this.data.find((i) => i.head);
  }

  findById(id) {
    return this.data.find((i) => i.id === id);
  }

  [Symbol.iterator]() {
    let currentItem = { linkedItem: this.firstItem().id };
    return {
      next: () => {
        currentItem = this.findById(currentItem.linkedItem);
        if (currentItem) {
          return { value: currentItem.value, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}

const myList = new LinkedList([
  { id: 'A1', value: 'First', linkedItem: 'A3', head: true },
  { id: 'A2', value: 'Third', linkedItem: 'A0', head: false },
  { id: 'A0', value: 'Last', linkedItem: null, head: false },
  { id: 'A3', value: 'Second', linkedItem: 'A2', head: false },
]);

for (let item of myList) {
  console.log(item); // First, Second, Third, Last
}
