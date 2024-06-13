/*//Prior to the introduction of ES6 classes, JavaScript commonly used constructor functions to mimic class-like behavior
function Person (name,age) { 
    this.name=name;
    this.age=age;

}
//create a constructor function to define an object "template" and then create new instances of that object using the new keyword.
//creating an instance of  Person

let person1=new Person("Divya",23);
console.log(person1.name);

*/
//ES6 Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
}

// Creating an instance of Person
let person1 = new Person("John", 30);
console.log(person1.greet()); // Output: Hello, my name is John and I'm 30 years old.
