# 📘 React Class Revision Notes

## 🔍 Topic: Introduction to `useRef` Hook

---

## 📖 Overview

The `useRef` hook is a versatile utility in React used to:

- Access and manipulate DOM elements directly.
- Persist values across re-renders **without** causing re-renders.

It's perfect for:

- Handling timers, intervals, and external libraries.
- Avoiding unnecessary state updates for values that don’t affect rendering.

---

## 🛠 How `useRef` Works

### ✅ Creating a Reference

```js
const myRef = useRef(initialValue);
```

````

Returns a mutable object: `{ current: initialValue }`.

### ✅ Persisting Values Across Renders

- Updates to `.current` do **not** trigger re-renders.
- Ideal for storing data like interval IDs, scroll positions, etc.

### ✅ Accessing DOM Elements

```jsx
<input ref={myRef} />
```

Allows direct interaction like `myRef.current.focus()`.

---

## ✏️ Example: Focusing an Input

```jsx
import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

---

## ⏱ Example: Timer with `useRef`

```jsx
import React, { useRef, useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop Timer
      </button>
    </div>
  );
}
```

---

## 🔐 useState vs useRef in Forms

| Feature      | `useState`         | `useRef`                 |
| ------------ | ------------------ | ------------------------ |
| Re-rendering | Triggers re-render | Does not re-render       |
| Use case     | Dynamic UI update  | Static read-only capture |
| Best for     | Controlled inputs  | Uncontrolled form fields |

---

## ⏱ Stopwatch Component

- Timer logic managed via `useState`.
- Interval ID and control logic stored using `useRef`.
- Reusable time conversion functions modularized.

---

## 🔄 Custom Hooks

Encapsulate shared logic into reusable functions.

### Benefits:

- Cleaner components
- Improved maintainability
- Promotes separation of concerns

---

## 🧠 Conclusion

This session covered:

- Practical applications of `useRef`
- DOM manipulation, timers, and form handling
- When to use `useState` vs `useRef`
- The role of custom hooks in clean code

**Mastering `useRef` is key for building efficient and performant React apps.**

---

## 📎 Related Hooks

- `useState` – for state that causes re-render
- `useEffect` – for side-effects and lifecycle
- `useMemo` / `useCallback` – for memoization
````
