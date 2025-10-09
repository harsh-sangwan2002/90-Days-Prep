// Question - 1
const obj = {
    value: 42,
    printValue: function () {
        function inner() {
            console.log(this.value);
        }
        inner.call(this); // 42
        inner(); // undefined
    }
}
// obj.printValue();

// Question - 2
const obj2 = {
    value: 42,
    getValue: function () {
        return function () {
            console.log(this.value);
        }
    }
}
const fn = obj2.getValue();
// fn.call(obj2); // 42

// Question - 3
const obj3 = {
    value: 99,
    printValue: function () {
        const inner = () => {
            console.log(this.value); // undefined
        }
        setTimeout(inner, 1000); // 99
        // inner();
    }
}
obj3.printValue();