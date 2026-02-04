// Function bundled with lexical environment forms a closure
function x() {
    var a = 10;
    function y() {
        var b = 100;
        console.log(a);

        function z() {
            console.log(b);
        }
        z();
    }
    y();
}
x();

/*
Use cases of closures - 
    1. Module Design Patterns
    2. Currying
    3. Functions like once
    4. Memoization
    5. Mantaining state in async world
    6. setTimeout
    7. Iterators
    ...
*/