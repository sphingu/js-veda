const memoize = fn => {
  const cache = new Map();

  const cached = function (val) {
    return cache.has(val)
      ? cache.get(val)
      : cache.set(val, fn.call(this, val)) && cache.get(val);
  };

  cached.cache = cache;
  return cached;
};


// Usage
const myFunction = (val) => {
  return new Promise(res => setTimeout(() => res(val), 2000));
}

const myFunctionWithMemo = memoize(myFunction);

console.time('firstTime')
myFunctionWithMemo('one').then(() => {
  console.timeEnd('firstTime'); // take 2 second for execution

  console.time('secondTime');
  myFunctionWithMemo('one').then(() => console.timeEnd('secondTime'));  // will complete execution immediately
});
