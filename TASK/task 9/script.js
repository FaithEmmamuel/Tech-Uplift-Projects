'use strict!'

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

let arr = [3,4,6,7,8,10];

console.log(sumArray(arr));