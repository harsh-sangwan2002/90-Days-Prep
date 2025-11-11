let count = 0;

function cb() {

    count++;

    if (count === 5)
        clearInterval(intervalID);

    console.log("Hello World");
}
let intervalID = setInterval(cb, 1000);