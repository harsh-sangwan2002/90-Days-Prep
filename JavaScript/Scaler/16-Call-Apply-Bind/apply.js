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
obj1.fullName.apply(obj2, ["Ms."]); // Ms. Ashi2