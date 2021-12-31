// memoization
// uses a cache to store results, so that subsequent call of time consuming functions do not perform the same task another time.
class MyClass {
  constructor(data) {
    this.data = data;
    // set non-empty value for second last item in array of object
    this.data[this.data.length - 2] = { value: 'Non-empty' };
  }

  getFirstNonEmptyItem() {
    return this.data.find(v => Boolean(v.value));
  }

  getFirstNonEmptyItemMemo() {
    if (!this.firstNonEmptyItem) {
      this.firstNonEmptyItem = this.data.find(v => Boolean(v.value));
    }
    return this.firstNonEmptyItem;
  }
}

const obj = new MyClass(Array(5000).fill({ value: null }));

console.time('non-memoized');
for (let i = 0; i < 100; i++) {
  obj.getFirstNonEmptyItem();   // ~ 5.32ms 
}
console.timeEnd('non-memoized');

console.time('memoized');
for (let i = 0; i < 100; i++) {
  obj.getFirstNonEmptyItemMemo();   // ~ 0.18ms
}
console.timeEnd('memoized');
