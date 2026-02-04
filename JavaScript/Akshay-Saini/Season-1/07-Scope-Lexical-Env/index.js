function a() {
    console.log(b);

    function c() {
        console.log(b);
    }
    c();
}

var b = 10;
a();

// Lexical means hirerachy
// Leixcal environment is the local memory and it's parent lexical environment