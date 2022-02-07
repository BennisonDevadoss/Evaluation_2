// find the property of scope
console.log(this);
//check the scope where we in.

let object = { a: 1, b: 2, c: 3, fun: () => { console.log(this) } };
object.fun();


// arrow function takes global objects. 
// But the normal function scope is based on curly braces. 

//for example: 

let object1 = { a: 1, b: 2, func: function () { console.log(this) } };
object1.func();

