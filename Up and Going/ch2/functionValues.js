"use strict";

/**
 * functions can be passed as values to other functions and return as values by other functions
 * it is the reference of the function being declared that is passed to or returned from another.
 *
 * a function value is considered as a function expression
 */

/**
 * extremely common
 */
var foo = function () {
    console.log("first function expression");
} // this is an anonymous function expression because it has no name

/**
 * named function expressions are generally more preferable
 */
var x = function bar() {
    console.log("Name function expression the preferred option");
} // this is a name function expression

var iife_function = (function IIFE() {
    console.log("hello :- Immediately Invoked Function Expression");
    return 42;
})();

console.log(iife_function);