//Constructor in JS, used as a function that creates a new instance of this object
// with the properties passed into it

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Creating an instance of the Person constructor
var person1 = new Person("John", 30);

// Accessing the properties of the person object
console.log("Name: " + person1.name);
console.log("Age: " + person1.age);