var obj1 = {
    name: "Ashi",
    fullName: function (prefix) {
        console.log(`${prefix} ${this.name}`);
    }
}
obj1.fullName("Mr."); // Mr. Ashi

Function.prototype.bind = function (context, ...args) {

    let fn = this;

    return function (...args2) {
        fn.call(context, ...args, ...args2);
    }
}

var obj2 = {
    name: "Ashi2"
}
const bindedFn = obj1.fullName.bind(obj2, "Ms.");
bindedFn(); // Ms. Ashi2