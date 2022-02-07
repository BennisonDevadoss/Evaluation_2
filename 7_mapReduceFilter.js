//Array.map
const array = [{ id: 1, name: "Karthik" }, { id: 2, name: "Manoj" }, { id: 3, name: "Sabarish" }];

let newArray = [];
let upper = function (value) {
    newArray.push(value.name.toUpperCase());
}

array.map(upper)
console.log(newArray);
//...............................................................................................................................


//Array.reduce()
let arr = [1, 2, 3, 4, 5];
let fun = function (a, b) {
    return a * b;
}
let total = arr.reduce(fun)
console.log(total);
//................................................................................................................................

//Array.filter

let arr2 = [1, 2, 3, 4, 5, 6, 7, 19, 20, 40, 50];
let fun1 = function (a) {
    return a > 10
}
let newArr = arr2.filter(fun1);

console.log(newArr);
//................................................................................................................................
