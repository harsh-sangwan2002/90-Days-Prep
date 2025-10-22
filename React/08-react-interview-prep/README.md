<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
### 🧠 **Definition**

`useRef` is a React Hook that lets you store a **mutable value** that persists across renders **without causing a re-render** when it changes.

---

### ⚙️ **How it Works**

- When you create a ref using `useRef`, React gives you an object with a `.current` property.
- This `.current` value can hold anything — a DOM element, a timer ID, or any piece of data you want to remember between renders.
- Unlike state, changing `.current` **does not trigger re-rendering**.

---

### 📦 **Common Use Cases**

| Use Case                              | Description                                                                                                          |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Accessing DOM elements**            | Used to directly access or manipulate a DOM element (like focusing an input).                                        |
| **Storing values without re-renders** | Holds mutable values that need to persist but shouldn’t trigger UI updates (like storing previous values or timers). |
| **Keeping previous state values**     | Useful to compare current and previous state or props.                                                               |
| **Performance optimizations**         | Can be used to cache values that don’t need to cause re-renders.                                                     |

---

### ⚖️ **Key Points**

| Concept                          | Explanation                                                                |
| -------------------------------- | -------------------------------------------------------------------------- |
| **Persistent value**             | The value inside `.current` stays the same between renders.                |
| **No re-render**                 | Updating `.current` does not cause the component to render again.          |
| **DOM reference**                | Often used to interact with DOM nodes in React (like focus, scroll, etc.). |
| **Doesn’t rebuild on re-render** | The same ref object is used for the entire component lifetime.             |
>>>>>>> d102f26edf5096a40fc5dc2ce6735561a97a614b
