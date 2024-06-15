// creating object using object literal
/*let person ={
  name:"Nikhil",
  age:25,
  city:"Bhagalpur",
  greet:function (){
    return "Hello, my name is " + this.name + " and I'm " + this.age + " years old" +" from " + this.city 
   }
  }
   console.log(person.greet())
*/
//creating object constructor
function Person(name, age, city) {
  this.name = name;
    this.age = age;
    this.city = city;
    this.greet = function () {
      return ('Hello, my name is ' + this.name + " and I'm " + this.age + ' years old ' +'from ' +this.city +' working as ' +this.job );
    };
}
let person1 = new Person('Nikhil', 24,'Bhagalpur');
let person2 = new Person('Divya', 23,'Muzaffarpur');
//delete Person.city, 
//addition,
person1.job='Developer';
person2.job='Developer';

console.log(person1.greet());
console.log(person2.greet());

// object with prototype 
//In JavaScript, the prototype property is a fundamental concept related to 
//object-oriented programming. Every JavaScript function has a prototype property,
// which is empty by default. You can use this property to add properties and methods to all objects created with that function as a constructor.
//Prototypes are used for inheritance in JavaScript,you can attach properties and methods to the prototype object, which will be shared among all instances created from that constructor or class.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return 'Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.';
};

let person1 = new Person('Ankita', 26);
let person2 = new Person('Nikhil', 24);
let person3 = new Person('Divya', 23);
let person4 = new Person('Shivangi', 23);


console.log(person1.greet()); 
console.log(person2.greet()); 
console.log(person3.greet()); 
console.log(person4.greet()); 