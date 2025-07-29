# 🧠 React Revision Notes: Components, Lifecycle, and Core Concepts

---

## 📘 Introduction

This guide covers the **fundamentals of React**, including:

- Class-based and Functional Components
- Lifecycle Methods
- React Hooks
- Higher-Order Components (HOCs)
- Virtual DOM and Reconciliation

---

## 🧱 Class-Based Components

### ✅ Definition

Class components are ES6 classes that extend `React.Component`. They support state and lifecycle methods.

### 🧩 Basic Structure

```jsx
import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;
```
````

### 🌀 Lifecycle Methods

| Method                   | Purpose                                              |
| ------------------------ | ---------------------------------------------------- |
| `constructor()`          | Initialize state and bind methods                    |
| `componentDidMount()`    | Runs after component is mounted (good for API calls) |
| `componentDidUpdate()`   | Runs after component updates (DOM interaction)       |
| `componentWillUnmount()` | Cleanup before component is removed                  |

### 🧠 State Management

```jsx
constructor(props) {
  super(props);
  this.state = { count: 0 };
}

this.setState({ count: this.state.count + 1 });
```

---

## ⚛️ Functional Components & Hooks

### ✅ Definition

Simple JavaScript functions returning JSX.

### 🪝 React Hooks

| Hook        | Use Case                                      |
| ----------- | --------------------------------------------- |
| `useState`  | Adds state to functional components           |
| `useEffect` | Handles side effects (like lifecycle methods) |

### 📦 Example with `useState` & `useEffect`

```jsx
import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTodos(["Learn React", "Read a book"]);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>My To-Do List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={() => setTodos([...todos, newTodo])}>Add To-Do</button>
    </div>
  );
};

export default TodoList;
```

---

## 🧬 Higher-Order Components (HOCs)

### 🧾 Definition

A **Higher-Order Component** is a function that takes a component and returns a new one with added functionality.

### 💡 Example: `withLoading`

```jsx
const withLoading = (WrappedComponent) => {
  return class extends React.Component {
    state = { isLoading: true };

    componentDidMount() {
      setTimeout(() => this.setState({ isLoading: false }), 2000);
    }

    render() {
      if (this.state.isLoading) return <div>Loading...</div>;
      return <WrappedComponent {...this.props} />;
    }
  };
};
```

### ✅ Benefits

- Reuse component logic
- Clean separation of concerns

---

## 🪞 Virtual DOM & Reconciliation

### 🧍 Real DOM vs. Virtual DOM

- **Real DOM**: Direct representation of the UI, expensive to manipulate.
- **Virtual DOM**: Lightweight JS object, faster and more efficient updates.

### 🔁 How React Updates Efficiently

1. **Diffing**: Compare old and new virtual DOM trees.
2. **Minimal Updates**: Apply the least number of changes to the real DOM.
3. **Key Props**: Help React identify elements during list rendering.

---

## 🧾 Conclusion

Mastering:

- React components (class & functional)
- Lifecycle methods
- Hooks (`useState`, `useEffect`)
- HOCs
- Virtual DOM

...is essential for **building scalable, performant** React applications.

> Modern React favors functional components with hooks, but understanding the class-based model and advanced patterns like HOCs is still valuable.

---

## 🔗 Related Topics

- React Router
- Context API
- useRef, useMemo, useCallback
- Custom Hooks