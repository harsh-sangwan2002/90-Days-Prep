console.log(x); // ReferenceError: Cannot access 'x' before initialization

// Cannot be re-declared and re-assigned
const x = 12;
const y; // SyntaxError: Missing initializer in const declaration

console.log(x);