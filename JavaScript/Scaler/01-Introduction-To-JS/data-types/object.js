var obj1 = {
    0: "0",
    "0": "zero"
}
console.log(obj1);

var obj2 = {
    "0": "zero",
    0: "0"
}
console.log(obj2);

var city = "Bangalore";
obj1[city] = "City"
obj1[obj2] = "a";
obj1[obj1] = "b";
obj1[Symbol('123')] = "symbol";
obj1[Symbol('123')] = "symbol2";
obj1[[1, 2]] = "array";
obj1[[2, 3]] = "array2";
console.log(obj1);