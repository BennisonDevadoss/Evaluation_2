"use strict";

let start = 1;
let end = 200;
let count = 0;
let last_number, i, j;
for (i = start; i <= end; i++) {
    // console.log(i);
    j = i;
    let length = j.toString().length;
    // console.log(length);

    for (let k = 1; k <= length; k++) {
        last_number = j % 10;
        if (last_number == 0) {
            count += 1;

        }

        j = Math.floor(j / 10);
        // j = last_number;
    }

}


console.log(count); 