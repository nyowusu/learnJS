// var a;
// console.log(typeof (a));

// a = "hello"
// console.log(typeof (a));

// a = 42
// console.log(typeof (a));

// a = true;
// console.log(typeof (a));

// a = null;
// console.log(typeof (a));

// a = undefined;
// console.log(typeof (a));

// a = {
//     b: "c"
// }
// console.log(typeof (a));

/**
 * Objects:- {key: value} pairs
 */

// var obj = {
//     a: "Hello World",
//     b: 42,
//     4: true,
//     c: {
//         d: "Letter D",
//         e: "Letter E"
//     }
// }

// var a = "a";

// console.log(obj[4]);
// console.log(obj.a);
// console.log(obj["b"]);
// console.log(obj.c);
// console.log(obj.c.e);
// console.log(obj["c"].e);
// console.log(obj.c["e"]);
// console.log(obj["c"]["e"]);
// console.log(obj[a]);
// console.log(typeof (obj));
// console.log();
// console.log();

// /**
//  * Arrays:- is an object that holds values numerically indexed starting from position 0.
//  */

// var arr = [
//     "hello world",
//     42,
//     true
// ];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(typeof (arr));

/**
 * function:- an object subtype
 */
// function foo() {
//     return 42;
// }

// foo.bar = "hello world";

// console.log(foo);
// console.log(typeof (foo));
// console.log(typeof (foo()));
// console.log(typeof (foo.bar));
// console.log(foo.bar);

// console.log(typeof (Symbol()));

/**
 * null:- checking for
 * when converted to boolean its falsy
 */
// var ba = null;

// if (!ba && (typeof (ba) === "object")) {
//     console.log(true);
//     console.log(Boolean(ba)); // this shows its falsy
// }

/**
 * undefined vs undeclared
 *  undefined :- variable declared but not given a value in the current accessible scope
 *  undeclared :- variable has not been declared at all in the current accessible scope
 */

var a;
console.log(a);
//console.log(q); // error message: ReferenceError: q is not defined (meaning undeclared)
console.log(typeof (q));

var myobj = {};

console.log(typeof (myobj.prop))