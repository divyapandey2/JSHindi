//JavaScript is a prototype-based language, which means that objects can inherit properties 
//and methods from other objects. You can extend the functionality of objects using prototypes.
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    return "Hello, my name is " + this.name + " and I'm " + this.age + " years old.";
  };
  
  let person1 = new Person("John", 30);
  console.log(person1.greet())
 // In this example, the greet method is added to the Person prototype, 
 // making it accessible to all instances of Person.