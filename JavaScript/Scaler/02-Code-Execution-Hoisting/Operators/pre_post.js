var b = 1;
var a = b++;
console.log(a, b); // 1, 2

var c = 0;
console.log(c); // 3
console.log(c++ + ++c + c++); // 4