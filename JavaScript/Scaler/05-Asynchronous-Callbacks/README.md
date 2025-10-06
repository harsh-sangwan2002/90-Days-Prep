## Introduction

This session explored **JavaScript's asynchronous programming model**, the **event loop mechanism**, and how these concepts apply in **Node.js**. Below are the key ideas and examples discussed.

---

## JavaScript Asynchronous Programming

### Synchronous vs Asynchronous

**Synchronous Programming**

- Operations block further execution until completed.
- Example: Waiting for one task to finish before starting the next.
- **Analogy:** Standing in line at a coffee shop until your order is ready.

**Asynchronous Programming**

- Operations occur independently of the main thread, allowing other tasks to continue.
- **Analogy:** Ordering coffee and doing other tasks until notified that it’s ready.

---

## Callback Functions and `setTimeout`

**Callback Function:**
A function passed as an argument and executed **after** another function completes.

**`setTimeout`:**
Executes a callback after a delay without blocking the main thread.

```javascript
console.log("Start");

setTimeout(function () {
  console.log("Hello");
}, 2000);

console.log("End");
```

**Output:**

```
Start
End
Hello (after 2 seconds)
```

This shows that `setTimeout` is **non-blocking**, allowing the program to continue running.

---

## Event Loop

### Components of the Event Loop

- **Call Stack:** Executes code line by line (main thread).
- **Callback Queue:** Holds callback functions waiting to be executed.
- **Web/Node APIs:** Handle async operations like timers, HTTP requests, or file reads.
- **Event Loop:** Monitors the call stack and queue, pushing callbacks into the stack when it’s empty.

### Execution Flow

When `setTimeout` or another async operation is invoked:

1. The operation is handled by **Web/Node APIs**.
2. The main thread continues executing other code.
3. After completion, the callback is placed in the **callback queue**.
4. The **event loop** pushes it to the call stack once it’s clear.

---

## Asynchronous Code in Node.js

### Using File System (`fs`) Module

Example of asynchronous file reading:

```javascript
const fs = require("fs");

console.log("Before");

fs.readFile("f1.txt", (err, data) => {
  if (err) {
    console.error("An error occurred:", err);
    return;
  }
  console.log("This is File 1 data -> " + data);
});

console.log("After");
```

**Output:**

```
Before
After
This is File 1 data -> [file content]
```

- The `readFile` operation is non-blocking.
- Node.js continues execution and logs file data once reading completes.

---

## Concurrent and Serial Operations

### Concurrency

- Node.js handles **multiple I/O operations** efficiently.
- Although Node.js runs on a **single thread**, async behavior enables multiple tasks to start without waiting for previous ones to finish.

### Serial Operations

- Some tasks must run in sequence.
- Handled via **nested callbacks** or **Promises** to maintain order.

---

## Conclusion

Understanding asynchronous programming is essential to writing **efficient, non-blocking JavaScript**, especially in **Node.js** environments.
This session covered:

- The **event loop** mechanism
- **Concurrency** in Node.js
- **Callbacks** and asynchronous file operations

Next, we’ll explore **Promises** — a more structured way to handle asynchronous operations and avoid **callback hell**.
