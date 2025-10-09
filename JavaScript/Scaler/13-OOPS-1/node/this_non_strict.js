console.log(this); // {}

function test() {
    console.log(this); // global object
}
test();

const obj = {
    name: "Scaler",
    test: function () {
        console.log(this); // obj
        function inner() {
            console.log(this); // global object
        }
        inner();
    }
}
obj.test();

const obj2 = {
    name: "Jane"
}
obj2.test = obj.test;
obj2.test(); // obj2