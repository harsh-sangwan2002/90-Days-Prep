// Function Statement aka Function Declaration
function a() {
    console.log("a called");
}
a();

// Function expression aka Anonymous function
var b = function () {
    console.log("b called");
}
b();

// Named function expression
var c = function xyz() {
    console.log(xyz);
    console.log(c);
}
c();

// First Class Functions - Functions are treated like variables, they can be passed as an argument or can be returned

// Arrow functions
const d = (name) => {
    console.log(name);
}
d("Harsh");