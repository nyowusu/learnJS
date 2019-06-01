function one() {
    var a = 1;
    console.log(a);
}

function two() {
    var a = 2;
    console.log(a);
}

function nestedScope() {
    var a = 1;

    function inner() {
        var b = 2;
        var ans = a + b;
        console.log("From inner:" + ans);
    }

    inner();
    console.log("From nested: " + a);

}

var a = 3;

one();
two();
console.log(a);
nestedScope();