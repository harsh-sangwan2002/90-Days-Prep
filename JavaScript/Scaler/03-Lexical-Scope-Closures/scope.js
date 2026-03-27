function global() {
    var g = "global";
    console.log(g, o, i); // ReferenceError

    function outer() {
        var o = "outer";
        console.log(g, o, i);

        function inner() {
            var i = "inner";
            console.log(g, o, i);
        }
        inner();
    }
    outer();
}
// global();

function global() {
    var g = "global";
    console.log(g);

    function outer() {
        var o = "outer";
        console.log(g, o);

        function inner() {
            var i = "inner";
            console.log(g, o, i);
        }
        inner();
    }
    outer();
}
// global();

function isHoliday(date) {
    var holidays = ["25/12/2025"];
    var res = ''

    if (holidays.includes(date)) {
        var logData = "Yes! It's a holiday"
        res = 'Yes';
    }

    console.log(holidays, res, logData);
    res = 'No';
    return res;
}
isHoliday("25/12/2025");

function isHoliday(date) {
    let holidays = ["25/12/2025"];
    let res = ''

    if (holidays.includes(date)) {
        let logData = "Yes! It's a holiday"
        res = 'Yes';
    }
    else {
        res = 'No';
    }

    // console.log(holidays, res, logData);
    return res;
}