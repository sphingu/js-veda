// for..in 
// used to iterate over iterable objects
// iterating over their values instead of their properties

// Array
for (let value of ['a', 'b', 'c']) {
  console.log(value); // a, b, c (array values)
}

// String
for (let value of 'str') {
  console.log(value); // s, t, r (string values)
}

// Object
for (let value of { a: 11, b: 22, c: 33 }) {
  console.log(value); // TypeError (not iterable)
}

// Set
for (let value of new Set(['a', 'b'])) {
  console.log(value); // a, b (Set values)
}

