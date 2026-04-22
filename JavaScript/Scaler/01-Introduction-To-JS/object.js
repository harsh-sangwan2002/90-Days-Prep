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

var arr = [1, 2];
obj[arr] = 'array';
obj['1,2'] = 'array2'

var x = Symbol('123');
console.log(x == Symbol('123'));
obj[x] = 'symbol';
obj[x] = 'symbol2';

obj[obj] = 'object';
obj[obj2] = 'object2';

console.log(obj);