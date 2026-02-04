/*
JS engine creates functions and variables in window object
*/
function fn() {
    var a = 10;
    console.log(window.a); // undefined
    console.log(a); // 10
}
fn();