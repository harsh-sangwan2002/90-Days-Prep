## Introduction to JavaScript

### What is JavaScript?

JavaScript is a scripting language used to create dynamic and interactive content on the web. It enables web applications and websites to respond to user actions without reloading the page.

### How JavaScript Works in a Browser

- JavaScript can run in the browser's console.
- Open DevTools → Console Tab in Chrome to execute JavaScript commands directly.

### The JavaScript Engine

| Browser | Engine       |
| ------- | ------------ |
| Chrome  | V8           |
| Firefox | SpiderMonkey |

### External JavaScript Files

<script src="path/to/file.js"></script>

## Node.js

Node.js is an open-source, cross-platform JavaScript runtime for server-side execution.
It allows running JavaScript outside of browsers.
Download Node.js from [https://nodejs.org](https://nodejs.org)

## JavaScript Variables

### Declaring Variables

| Keyword | Re-declaration | Re-initialization | Scope    |
| ------- | -------------- | ----------------- | -------- |
| var     | Yes            | Yes               | Function |
| let     | No             | Yes               | Block    |
| const   | No             | No                | Block    |

### Dynamic Typing

- JavaScript is dynamically typed.
- Variables can hold any data type, and type can change during execution.

## Data Types in JavaScript

### Primitive Datatypes

- Number
- String
- Boolean
- Undefined
- Null
- Symbol

### Reference Datatypes

- Objects
- Arrays

## Functions in JavaScript

function greet(name) {
return `Hello, ${name}!`;
}

## Arrays in JavaScript

### Basics

let arr = [1, 2, 3];

### Operations

arr[0]
arr[3] = "new";

### Methods

arr.push(item)
arr.pop()
arr.shift()
arr.unshift(item)

## JavaScript Objects

### Creating Objects

let user = new Object()
let anotherUser = {}

### Accessing Object Data

user.name
user['name']

### Dynamic Properties

- Object keys are strings.
- Non-string keys are coerced to strings automatically.

## Best Practices in JavaScript Development

- Understand data types, operators, functions, and loops before development.
- Write algorithms in JavaScript to execute logic in browsers.
- Core algorithm knowledge helps transition to other languages.