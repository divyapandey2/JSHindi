//1.Object.keys()
let car={
    make: 'Toyota',
    model: 'Camry',
    year: 2022
}
const keys = Object.keys(car);
console.log(keys); 
//keys=[make,model,year]

//2.Object.values():
let car={
    make: 'Toyota',
    model: 'Camry',
    year: 2022
}
const values = Object.values(car);
console.log(values); 
//values=["Toyota","Camry",2022]

//3.Object.entries():
let car={
    make: 'Toyota',
    model: 'Camry',
    year: 2022
}
const values = Object.values(car);
console.log(values); 
// Output: [["make", "Toyota"], ["model", "Camry"], ["year", 2022]]\

//4.Object.assign():
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const mergedObject = Object.assign(target, source);
console.log(mergedObject);  // Output: { a: 1, b: 4, c: 5 }

//5.Object.getOwnPropertyNames()
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022
};

const propertyNames = Object.getOwnPropertyNames(car);
console.log(propertyNames);  
// Output: ["make", "model", "year"]
