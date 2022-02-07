// An anonymouse function doesn't have any name.
// we can't call that function without name. 
// Because that function can be initialized to a variable. then only the function can be called. 

let function1 = function (a, b) {
    console.log(a * b);
}
function1(1, 2);

// ..... Usage of Anonymous function
// 1. Passing anonymous function to the other function as its arguments. 
let c;

let function2 = function (a, b) {
    return a * b;
}

function multiply(fun) {
    c = fun(4, 5);
}

multiply(function2);
console.log(c);


// 2. we can execute the function immediatly. 
(function () {
    console.log("Hello World")
})(); 
