// Object literal
const obj = {};

// Function constructor
function MyObject() {
    this.property = 'value';
}
const obj2 = new MyObject();

// Class syntax
class MyClass {
    constructor() {
        this.classProperty = 'classValue';
    }
}
const obj4 = new MyClass();

// Object.create
const proto = { protoProperty: 'protoValue' };
const obj3 = Object.create(proto);
console.log(obj3);
console.log(obj3.protoProperty);
// Cannot access properties with Object.keys() if they are inherited