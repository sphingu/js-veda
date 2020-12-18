// forEach()
// method of the Array prototype
// allow to iterate over the elements of an array
// it can access both the value and the index of each element while iterating.

['a', 'b', 'c'].forEach(value => console.log(value));
// a, b, c (array values)

['a', 'b', 'c'].forEach((value, index) => console.log(index));
// 0, 1, 2 (array indexes)