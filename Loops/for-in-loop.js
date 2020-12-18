// for..in 
// used to iterate over all enumerable properties of an object (including inherited enumerable properties) 

// Array
for (let prop in ['a', 'b', 'c']) {
  console.log(prop); // 0, 1, 2 (array indexes)
}

// String
for (let prop in 'str') {
  console.log(prop); // 0, 1, 2 (string indexes)
}

// Object
for (let prop in { a: 11, b: 22, c: 33 }) {
  console.log(prop); // a, b, c (object property names)
}

// Set
for (let prop in new Set(['a', 'b'])) {
  console.log(prop); // undefined (no enumerable properties)
}

