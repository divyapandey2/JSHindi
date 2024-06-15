//reduce Method
//The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It iterates through the array from left to right, applying the function against an accumulator (initial value) and each element.

Syntax:

array.reduce(callback[, initialValue])


//Example
let numbers = [1, 2, 3, 4, 5];

// Example 1: Summing all elements
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

// Example 2: Flattening an array of arrays
let flattened = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattened); // Output: [0, 1, 2, 3, 4, 5]

