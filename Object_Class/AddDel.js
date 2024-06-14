// Creating an object
let person = {
    name: "John",
    age: 30
  };
  
  // Adding a new property
  person.city = "New York";
  
  console.log(person); // { name: 'John', age: 30, city: 'New York' }
  
  // Deleting a property
  delete person.age;
  
  console.log(person); // { name: 'John', city: 'New York' }
  