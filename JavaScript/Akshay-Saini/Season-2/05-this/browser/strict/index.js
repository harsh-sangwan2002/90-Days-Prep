"use strict"

// global space
console.log(this); // window

// If the value if this value is undefined/null JS will replace it with window
function fn() {
    console.log(this);
}
// fn(); // undefined
// window.fn(); // window

const obj = {
    a: 10,
    x: function () {
        console.log(this);
        function fn() {
            console.log(this);
        }
        fn(); // undefined

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
// obj.y(); // window