## Introduction

This session covered **lexical scope** and **closures**, two key concepts that define how JavaScript handles variable accessibility and function execution. Understanding these is vital for mastering JavaScript’s behavior and execution context.

---

## Lexical Scope

### Definition

Lexical scope determines the **accessibility of variables** based on their position in the code.
A **child (nested) function** can access variables from its **parent scope**, but not the other way around.

### Key Points

- **Parent-Child Hierarchy:**
  A nested function has access to variables in its outer function(s).
  This forms a **scope chain**, linking inner scopes to outer ones up to the global level.
  Access does not flow from parent to child.

### Example

```javascript
var a = 20;

function parent() {
  console.log(a); // 20

  function child() {
    console.log(a); // 20

    function child2() {
      console.log(a); // 20
    }
    child2();
  }
  child();
}

parent();
```

All nested functions can access variable `a` through the **scope chain**.

---

## Closures

### Definition

A **closure** is a function **bundled with its lexical scope**, allowing it to access variables from its parent scope **even after the parent function has executed**.

### Core Concept

When a function is **returned from another function**, it **retains access** to variables in the environment it was created in.
This retention forms a closure.

### Example

```javascript
function parent() {
  var a = 10;
  function child() {
    console.log(a);
  }
  return child;
}

let functionReceived = parent();
functionReceived(); // Output: 10
```

Here, `functionReceived` retains access to `a` even after `parent()` has completed — this is a **closure** in action.

### Garbage Collection

JavaScript automatically clears variables and functions **not referenced** by any closure to free up memory.

---

## Contextual Concepts

### Execution Context

- The **environment** where JavaScript code executes.
- Determines available variables, functions, and the value of `this`.

### Dead Zone

- Variables declared with **let** and **const** cannot be accessed **before their declaration**.
- This is known as the **Temporal Dead Zone (TDZ)**.

---

## Analogies and Exercises

### Analogy

Lexical scope is like having **access to your parent’s house (variables)** but not your **child’s house**.

### Exercise

Learners practiced **memoization** using closures — creating functions that **remember** previously computed results for efficiency.

---

## Conclusion

Lexical scope and closures are **core JavaScript concepts** that control how and when variables are accessed.
Mastering them leads to a deeper understanding of **execution context, memory management,** and **predictable code behavior** in complex applications.
