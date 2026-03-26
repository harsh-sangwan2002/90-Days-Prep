var obj = {
    0: "0",
    "0": "zero"
}
console.log(obj);

var obj2 = {
    "0": "zero",
    0: "0"
}
console.log(obj2);

var obj3 = {
    firstName: "Harsh",
    "firstName": "Harsh"
}
console.log(obj3);

var arr = [1, 2];
console.log(String(arr));

obj3[arr] = "Array";
obj3[obj3] = "Object";
obj3[arr] = "Array2"
console.log(obj3);