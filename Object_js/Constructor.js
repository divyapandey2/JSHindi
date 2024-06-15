function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return "Hello, my name is " + this.name + " and I'm " + this.age + " years old.";
    };
}

let person1 = new Person("John", 30);
console.log(person1.greet())
