var obj = {
    0: "0",
    "0": "zero"
}
console.log(obj);

obj = {
    "0": "zero",
    0: "0",
}
console.log(obj);

var obj2 = {
    firstName: "Harsh",
    lastName: "Sangwan",
    true: 1,
    null: undefined,
    undefined: 2,
    '[1, 2]': 'array'
}
var c = "city"
obj2[c] = "Bangalore";
obj2[obj] = 123;
console.log(obj2);
console.log(obj2[true]); // 1
console.log(obj2[null]); // undefined
console.log(obj2[undefined]); // 2
console.log(obj2['[1, 2]']); // array