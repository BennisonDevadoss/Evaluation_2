// call by value
let a = 100;
let b;
b = a;
console.log(b);   // 100
b = b + 1;
console.log(b);  // 101

console.log(a) // 100;

//call by reference object
let array = [1, 2, 3, 4, 5];
let duplicate = array;
duplicate[0] = 500;
console.log(duplicate);  //500, 2, 3, 4, 5

console.log(array);   //500, 2, 3, 4, 5

// call by reference in object
let object = { id: 1, name: "Bennison" };
let duplicate_object;
duplicate_object = object;

duplicate_object.name = "devadoss";

console.log(object.name);
console.log(duplicate_object.name);

//call by reference for function

function fun() {
    console.log("Bennison Devadoss");
}

let fun1 = fun;
fun1();


