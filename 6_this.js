// Function this; 

function This() {
    return this;   // this will return the global property beacuse this function is inside the global scope. 

}

This();

let a = 10

// print output using this keyword in normal function
function fun() {
    let b = 5;
    console.log(global.a);
}
fun();

console.log(fun() === global);

// this keyword in class; 

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('Hi! My name is ' + this.name);
    }
}

var john = new Person('John Doe');
var bennison = new Person("Bennison Devadoss");
john.greet();
bennison.greet(); 