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