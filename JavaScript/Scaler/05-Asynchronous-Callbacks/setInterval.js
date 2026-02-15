let count = 0;

function cb(_) {
    count++;

    if (count == 6)
        clearInterval(intervalId);

    else
        console.log("Hi ", count);
}
let intervalId = setInterval(cb, 1000);