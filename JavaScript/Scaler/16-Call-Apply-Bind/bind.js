var obj1 = {
    name: "Ashi",
    fullName: function (prefix) {
        console.log(`${prefix} ${this.name}`);
    }
}
obj1.fullName("Mr."); // Mr. Ashi

var obj2 = {
    name: "Ashi2"
}
const bindedFn = obj1.fullName.bind(obj2, "Ms.");
bindedFn(); // Ms. Ashi2