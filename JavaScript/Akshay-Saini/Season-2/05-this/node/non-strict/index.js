// global space
console.log(this); // {}

// If the value if this value is undefined/null JS will replace it with window
function fn() {
    console.log(this);
}
// fn(); // Object

const obj = {
    a: 10,
    x: function () {
        console.log(this);
        function fn() {
            console.log(this);
        }
        fn(); // Object

        const inner = () => {
            console.log(this);
        }
        inner(); // obj
    },
    y: () => {
        console.log(this);
    }
}
// obj.x(); // obj
// obj.y(); // {}