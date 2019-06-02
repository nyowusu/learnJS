/**
 * Function:
 * Scope
 * var - variables declared with var are hoisted to the top of its scope
 *       therefore accessible everywhere within the scope
 */

var a = 2;

foo();

// this function foo is hoisted to the top of this global scope so it can be called above.
function foo() {
    a = 5;

    console.log(a);

    // this variable a is limited to the scope of the function foo
    // if this declaration is concelled, the global "a" will be changed
    var a; // this is hoisted to the top of the function foo

}

console.log(a);