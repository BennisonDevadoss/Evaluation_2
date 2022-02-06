let array = [];

let f = function () { console.log("Hi I am in Function Block") };

function Fun(func) {
    // func();
    if (typeof func === "function") {
        func();
    }
}

Fun(f);

