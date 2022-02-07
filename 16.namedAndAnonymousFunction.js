// Named function
function namedFunction() {
    let a = 5;
    let b = 8;
    console.log(a * b);
}
namedFunction();


// Without named function
let withoutNamedFunction = function (a, b) {
    console.log(a * b);
}

withoutNamedFunction(5, 3);


// we can invoke this function immediatly. 
(function () {
    console.log("hello world")
})();


// we can pass this function as an argument to the another function. 
let anonymous = function () {
    console.log("Bennison");
}

function named(fun) {
    fun();
}
named(anonymous); 