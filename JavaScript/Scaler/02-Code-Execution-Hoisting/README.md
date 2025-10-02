## JavaScript Operators

### Types of Operators

**1. Arithmetic Operators**
+, -, \*, /, ++, --, %

**2. Assignment Operators**
=, +=, -=, \*=, /=, %=

**3. Comparison Operators**
==, ===, !=, !==, >, <, >=, <=

- **Strict vs Loose Equality**

  - `===` checks value and type
  - `==` performs type coercion

**4. Logical Operators**
&&, ||, !

**5. Bitwise Operators**
Operate on bits (not detailed)

**6. Type Operators**
`typeof` returns type of variable/expression

### Use Cases of Operators

- Arithmetic in e-commerce: Adding products (+), calculating discounts (-), computing total prices (\*)

---

## Functions in JavaScript

### Function Declaration

```javascript
function add(a, b) {
  return a + b;
}
```

### Named vs Anonymous Functions

- **Named Function:** Has a specific name for reuse
- **Anonymous Function:** No name, often assigned to variables or passed as arguments

### Arrow Functions

```javascript
const add = (a, b) => a + b;
```

### Function Expressions

```javascript
const add = function (a, b) {
  return a + b;
};
```

### Higher-order Functions

- Functions that take other functions as arguments or return them

```javascript
arr.forEach(function (item) {
  console.log(item);
});
```

### Context and Hoisting

- **Execution Context:** Environment where code runs (global/function)
- **Hoisting:** Declarations moved to top before execution
- **Temporal Dead Zone:** `let` and `const` not accessible before initialization

---

## Practical Exercises

- **Array Manipulation:** `splice`, `slice` for removing/replacing items
- **Callbacks & Closures:** Function within a function, returning a function

---

## Analogies and Examples

- Operators → Grocery shopping math
- Functions → Recipes for making tea, each tea type as different function

---

**These notes cover foundational JavaScript operators and functions, essential for building any web application.**
