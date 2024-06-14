//Prior to the introduction of ES6 classes, JavaScript commonly used constructor functions to mimic class-like behavior
function Person (name,age) { 
    this.name=name;
    this.age=age;

}
//create a constructor function to define an object "template" and then create new instances of that object using the new keyword.
//creating an instance of  Person

let person1=new Person("Divya",23);
console.log(person1.name);


//ES6 Classes
//Certainly! In JavaScript, you can create objects using ES6 classes, which are essentially 
//syntactical sugar over the prototype-based inheritance model. 
//Here's an example of how you can create an object using a class:
class Person {

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  // Creating instances
  let person1 = new Person("Alice", 30);
  let person2 = new Person("Bob", 25);
  
  // Using the shared method
  person1.introduce(); // Outputs: Hello, my name is Alice and I'm 30 years old.
  person2.introduce(); // Outputs: Hello, my name is Bob and I'm 25 years old.
  
//Yes, you can use prototype and class together in JavaScript. In fact, when you define a class in JavaScript, 
//behind the scenes, it's still using prototypes for inheritance.