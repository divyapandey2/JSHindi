//map: Creates a new array populated with the results of calling a provided function on every element in the calling array.


let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function(number) {
    return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]