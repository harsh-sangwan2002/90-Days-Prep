# 📘 Higher Order Functions in JavaScript

This document explains the concept of higher-order functions in JavaScript — functions that can take other functions as arguments or return them as results. It includes their purpose, working, and real-world applications.

---

## 🚀 Overview

Higher-order functions are a key part of functional programming in JavaScript.
They allow cleaner, reusable, and more readable code by abstracting repetitive logic.
The main higher-order functions discussed here are forEach, map, filter, and reduce.

---

## 📚 Concepts Covered

### 1. forEach

The forEach method iterates over each element of an array and executes a given function once for every element.
It does not return a new array but is used to perform side effects like printing or modifying data.
A polyfill can be created by looping over the array and executing the callback function for each item.

---

### 2. map

The map method creates a new array by applying a function to each element of the original array.
It returns the transformed array and does not modify the original array.
A polyfill would loop through all elements, apply the callback, and store the result in a new array.

---

### 3. filter

The filter method returns a new array with only the elements that satisfy a given condition.
It tests each element using a callback function and includes it in the output only if the callback returns true.
A polyfill for filter would check each element and push it to the result array if it passes the test.

---

### 4. reduce

The reduce method executes a reducer function on each element of the array, resulting in a single accumulated value.
It is often used to calculate sums, averages, or to transform an array into an object or another data structure.
A polyfill would maintain an accumulator, iterate through the array, and continuously update the accumulated result.

---

## 💼 Real-World Example — Transactions Aggregation

A common example of using higher-order functions is processing a list of transactions.
Using reduce, the total transaction amount can be computed.
It can also be used to group transactions by date or by customer ID.
forEach and map can help format or modify transaction details, and filter can extract specific records.

---

## 🧠 Key Takeaways

- Higher-order functions make JavaScript code more modular and maintainable.
- Polyfills help in understanding how these built-in methods work internally.
- They encourage the use of functional programming principles like immutability and pure functions.

---

## 🛠️ How to Practice

1. Create sample arrays and practice using forEach, map, filter, and reduce on them.
2. Try writing polyfills manually to deepen understanding.
3. Apply these methods in small projects like expense trackers, movie lists, or task managers.
