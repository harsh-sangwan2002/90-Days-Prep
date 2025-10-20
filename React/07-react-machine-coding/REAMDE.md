# React Class: Introduction to useRef Hook

This repository contains notes and insights from a React class session focused on the **`useRef` hook**, its practical applications, and performance optimization techniques using refs in React applications.

---

## Overview of useRef

The **useRef** hook is a flexible utility in React for:

- Accessing and interacting with **DOM elements** directly.
- Persisting **values across renders** without causing additional render cycles.

It is particularly useful when a component needs a **stable reference** to a value or DOM node but does not require UI updates on every change.

---

## How useRef Works

### Creating a Reference

- Initialize a ref with `useRef(initialValue)`.
- Returns a **mutable object** with a `current` property that can hold any value.

### Persisting Values

- Unlike state, updates to `ref.current` **do not trigger re-renders**, making refs ideal for storing values across renders.

### Accessing DOM Elements

- Assign the ref to a DOM node using the `ref` attribute in JSX.
- Enables direct DOM manipulations without affecting the rendering pipeline.

---

## Practical Examples

### Focus Input Component

- `useRef` can be used to programmatically focus input elements without triggering re-renders.
- Useful for forms, modals, or interactive components that require direct DOM access.

### Timer / Stopwatch Component

- Refs can store **interval IDs** for timers to maintain persistence across renders.
- Allows stopping or clearing intervals without affecting state-driven re-renders.

---

## State vs useRef

| Use Case                             | useState | useRef |
| ------------------------------------ | -------- | ------ |
| Track and react to changes           | ✅       | ❌     |
| Avoid unnecessary renders            | ❌       | ✅     |
| Capture input values on submit       | ❌       | ✅     |
| Store DOM elements or mutable values | ❌       | ✅     |

---

## Custom Hooks

- Custom hooks encapsulate reusable logic, improving **code modularity** and **maintainability**.
- They can combine hooks like `useState`, `useEffect`, and `useRef` into reusable functions.
- Encouraged for creating **clean, scalable code**.

---

## Key Takeaways

1. **useRef** is essential for accessing DOM elements and storing persistent values without re-rendering.
2. Understand when to use **state vs refs** for optimal performance.
3. **Timers and intervals** are best managed using refs to avoid unnecessary renders.
4. Custom hooks allow **modular, reusable logic**, enhancing developer productivity.

---

## Conclusion

The session highlighted practical skills in React for:

- Efficient DOM handling using `useRef`.
- Differentiating scenarios where state or refs are appropriate.
- Implementing modular and reusable code through custom hooks.

These skills form a **foundation for advanced React development** and performance-optimized applications.
