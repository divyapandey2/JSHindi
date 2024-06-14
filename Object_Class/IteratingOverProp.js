// Creating an object
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Iterating over properties using for...in loop
for (let key in person) {
    console.log(key + ": " + person[key]);
}
  /*Output
name: John
age: 30
city: New York
*/