// not recommanded approach of memoize function
const memoize = fn => new Proxy(fn, {
  cache: new Map(),
  apply(target, thisArg, argsList) {
    let cacheKey = argsList.toString();

    if (!this.cache.has(cacheKey)) {
      this.cache.set(cacheKey, target.apply(thisArg, argsList));
    }

    return this.cache.get(cacheKey);
  }
});

// Usage
const fibonacci = n => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
const memoFibonacci = memoize(fibonacci);

for (let i = 0; i < 100; i++) {
  fibonacci(30);  // ~ 800ms
}

for (let i = 0; i < 100; i++) {
  memoFibonacci(30);  // ~ 8ms
}

