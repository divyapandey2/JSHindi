filter: Creates a new array with all elements that pass the test implemented by the provided function.

javascript
Copy code
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]