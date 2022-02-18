"use strict";

let prime1 = [];
let l = 0;
let m = 0;
let k, i, j;
function prime(number) {
    for (i = 2; i <= number; i++) {
        k = 2;
        for (j = k; j <= i; j++) {

            if (i % j === 0) {
                if (i === 2) {
                    prime1[m] = i;
                    // console.log(prime1[m]);
                    break;
                }
                l++
                break;
            }

            if (j === i - 1) {
                if (i % j != 0) {
                    m++;
                    prime1[m] = i;
                    // console.log(prime1[m]);
                    break;
                }
            }
        }
        ++k;
    }
}

prime(200);
console.log(prime1.toString());

// Another example to Prime Number
/*
let j = 2;
let a = 200;
let string = "";
for (let i = 2; i < a; i++) {
    for (let j = 2; j < i; j++) {
        let b = i % j;
        if (b == 0) {
            break;

        }
        if (j === i - 1) {
            string += i + ",";

        }
    }
}
console.log(string); 
*/