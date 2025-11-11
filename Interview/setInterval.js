let count = 0;

function cb() {

    count++;

    if (count === 5)
        clearInterval(intervalID);

    console.log("Hello World");
}
// let intervalID = setInterval(cb, 1000);

function mySetInterval(cb, delay) {

    let obj = {
        flag: true,
    }

    function helper() {
        if (obj.flag) {
            cb();
            setTimeout(helper, delay);
        }
    }

    setTimeout(helper, delay);
    return obj;
}

function myClearInterval(obj) {
    obj.flag = false;
}

let myInterval = mySetInterval(() => {
    console.log("My Hello World");
}, 1000);

setTimeout(() => {
    myClearInterval(myInterval);
}, 5000);