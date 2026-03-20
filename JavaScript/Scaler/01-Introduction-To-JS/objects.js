var obj = {
    0: "0",
    "0": "zero"
}
console.log(obj);

var obj2 = {
    0: "zero",
    "0": "0"
}
console.log(obj2);

var obj3 = {
    name: "Harsh",
    name: "Sangwan"
}
console.log(obj3);

var obj4 = {
    1: true,
}
console.log(obj4);
console.log(obj4[1]);
console.log(obj4['1']);

var c = "city", g = {};
obj4[c] = "Bangalore";
obj4[g] = "Object"
console.log(obj4);