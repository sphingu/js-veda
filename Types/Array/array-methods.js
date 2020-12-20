const arr = [1, 2, 3];

// Array.prototype.map()
// - create new array by applying the provided transformation to each element of original array

const double = (x) => x * 2;
arr.map(double); // [2, 4, 6]

// Array.prototype.filter()
// - create new array by using filtering function to keep only elements that return true based on that function

const isOdd = (x) => x % 2 === 1;
arr.filter(isOdd); // [1, 3]

// Array.prototype.reduce()
// - creates an output value of any type depending on reducer function and initial value.

const sum = (x, y) => x + y;
arr.reduce(sum, 0); // 6

const increment = (x, y) => [...x, x[x.lenght - 1] + y];
arr.reduce(increment, [0]); // [0, 1, 3, 6]

// Array.prototype.find()
// returns the first element for which a matcher function returns true

arr.find(isOdd);    // 1