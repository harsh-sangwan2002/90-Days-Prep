# 🚀 Class 10: Testing and Deployment in React Applications

Welcome to the **Class 10** session focused on mastering **Testing and Deployment** in React applications. This hands-on class covered the lifecycle of building, testing, and deploying a **Counter App**, providing learners with industry-relevant practices in modern frontend development.

---

## 📝 Class Agenda

- ✅ Introduction to Testing and Deployment
- ⚙️ Tool Setup: Vite, Jest, React Testing Library
- 🛠️ Unit Testing the Counter App
- 🚀 Manual & Continuous Deployment
- 🧪 Overview of End-to-End Testing

---

## 📌 Key Takeaways

### 🔍 Introduction to Testing & Deployment

- **Testing** ensures application functionality matches expectations.
- **Deployment** pushes the tested application to a live/production environment.
- Covered **CI/CD (Continuous Integration/Deployment)** principles — auto-deploy on GitHub changes.

---

## ⚙️ Setup and Tools

- **Vite**: Lightning-fast dev server and build tool.
- **React Testing Library & Jest**: For writing and executing unit tests.
- **Deployment Tools**: Netlify (for CI/CD), GitHub (version control).

---

## 💻 Practical Walkthrough: Counter App

### 🏗️ Initial Setup

A basic React app was scaffolded using Vite:

```bash
npm create vite@latest counter-app --template react
cd counter-app
npm install
npm run dev
```

---

## 🧪 Unit Testing with Jest & React Testing Library

Each component includes a dedicated test file like `Counter.test.js`.

### ✅ Test Scenarios

#### 1. Initial State Verification

```js
test("renders initial count as 0", () => {
  render(<Counter />);
  const countText = screen.getByText("Count is 0");
  expect(countText).toBeInTheDocument();
});
```

#### 2. Increment Functionality

```js
test("increments counter", () => {
  render(<Counter />);
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);
  expect(screen.getByText("Count is 1")).toBeInTheDocument();
});
```

#### 3. Prevent Decrement Below Zero

```js
test("decrement does not go below 0", () => {
  render(<Counter />);
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);
  expect(screen.getByText("Count is 0")).toBeInTheDocument();
});
```

---

## 🚀 Deployment

### 🧰 Manual Deployment

1. Build the production-ready app:

   ```bash
   npm run build
   ```

2. Deploy contents of the `dist/` folder to your hosting platform.

### 🔁 Continuous Deployment (CI/CD)

- Integrated GitHub with **Netlify** for auto-deployments on code push.
- Streamlined workflow ensures code is tested and deployed seamlessly.

---

## 🧪 End-to-End Testing (Advanced)

- Introduction to **Playwright** for full-app automated UI testing.
- Simulates real user actions across components/pages.

---

## 🎯 Conclusion

This session equipped learners with essential tools and workflows to:

- Write **reliable, component-level tests**.
- Perform **manual and automated deployments**.
- Adopt **CI/CD best practices**.
- Gain awareness of **end-to-end testing tools**.

With this knowledge, you’re prepared to build production-grade React apps with confidence and precision. ✅

---
