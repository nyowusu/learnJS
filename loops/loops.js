"use strict";

for (var index = 0; index < 20; index++)
    console.log(index);

console.log(typeof(index));
console.log(index);
console.log()
console.log("now do while")

/**
 * do while
 * executes the block at least once 
 */
let i = 0;
do {
    i++;
    console.log(i);
} while (i < 5);

console.log()
console.log("now while")

/**
 * executes if the conditions evaluates to true
 * 
 */

let p = 0;
while (p < 10) {
    console.log(p);
    p++;
}