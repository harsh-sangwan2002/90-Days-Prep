# IMDB App Development and React Router

## Overview

This project involves building an IMDB (Internet Movie Database) clone using **React**, **React Router**, and **Tailwind CSS**. The app enables users to explore trending movies, create a watchlist, and sort or filter movies based on ratings. The session focused on developing this application while learning about client-side routing and responsive UI design.

---

## Introduction

The IMDB App replicates core movie database functionalities, emphasizing dynamic navigation and reusable components. Using React for the frontend, React Router for routing, and Tailwind CSS for design ensures fast development and a modern, clean interface.

---

## Setting Up the Application

1. **Initialize the Project**: The setup began by creating a new React project using Vite for faster builds and hot reloading.
2. **Install Dependencies**:

   - **React Router**: Used for implementing client-side routing to manage different pages without reloading.
   - **Tailwind CSS**: Integrated for styling, chosen for its utility-first approach and responsive design system.

---

## React Router Configuration

### Installation and Setup

- React Router was added to manage internal navigation.
- The application was wrapped with a **BrowserRouter** to enable route management.

### Defining Routes

- Three main routes were created: **Home**, **Movie List**, and **Movie Details**.
- Internal navigation was achieved using React Router’s navigation components, ensuring smooth transitions without full page reloads.

### Dynamic Routing and 404 Handling

- Dynamic parameters were introduced to display specific movie details based on the selected movie.
- A fallback route was created to handle undefined URLs, showing a custom “Page Not Found” screen.

### React Router Hooks

- The session also explained the use of the History API for programmatic navigation, enhancing user experience and app flow control.

---

## Tailwind CSS Integration

### Configuration

- Tailwind was configured by initializing the setup and defining source paths for style directives.
- This setup ensured global access to Tailwind’s styling utilities throughout the project.

### Styling the UI

- Components were styled using Tailwind’s classes to ensure a cohesive, responsive design.
- Common elements like headers and navigation bars were kept consistent across pages.

---

## Practical Implementation

- Participants built functional UI components and applied routing concepts in practice.
- Emphasis was placed on debugging techniques, reading documentation, and developing problem-solving independence while working on modern web technologies.

Here’s your **clean, ready-to-use revision note content** for your React IMDb Pagination project (plain text, no extra formatting or markdown):

---

Revision Notes: React Application with Movie Fetch and Pagination

This document serves as a comprehensive guide to the class discussion on creating a React application that fetches movie data and implements pagination. The lesson focused on React Hooks and features including state management, component lifecycle, and pagination logic.

Table of Contents

1. Application Overview

2. Using useEffect for Data Fetching

3. The Infinite Loop Problem

4. Component Breakdown

5. Handling Pagination

6. Application Overview
   The goal of the project is to create an IMDb clone that displays trending movies using an API. Key features include viewing a list of trending movies, implementing a dynamic pagination system, and using React for client-side rendering. The application is styled using Tailwind CSS, which was set up in a previous class.

7. Using useEffect for Data Fetching
   The class emphasized the use of the useEffect Hook to fetch data from an API when the component mounts. The discussion illustrated how to use fetch to retrieve data, handle promises with .then, and dynamically update state with API results.

Key Points:

- useEffect executes after the first render and whenever the dependencies in the array change.
- An empty dependency array makes it run only once, similar to componentDidMount.

3. The Infinite Loop Problem
   An important issue discussed was the infinite loop that can occur when setting state inside useEffect.
   Reason: Setting state within useEffect can trigger a re-render, causing useEffect to re-execute repeatedly.
   Solution: Use proper dependencies and conditions to prevent continuous re-renders.

4. Component Breakdown
   The application was divided into smaller components for better modularity and reusability.

- Movie Component: Renders individual movie details such as title, poster, and rating.
- Movie List Component: Manages movie data and renders multiple Movie components using map().

5. Handling Pagination
   Pagination was a key part of the project. A fixed threshold controlled how many pages to show at once. The logic handled both dynamic starting points and edge cases (beginning and end of page range).

Steps in Pagination Logic:

- Calculate the starting page based on the current page and threshold.
- Adjust pagination dynamically to handle edges smoothly.
- Implement click handlers to navigate between pages using state updates.

Conclusion
The session provided valuable insights into building a React IMDb clone with dynamic movie fetching and robust pagination. It covered common issues like infinite render loops and emphasized writing modular, maintainable React applications using hooks and clean component structures.

Here’s the complete **plain-text version** of your revision notes on **Prop Drilling and Context API in React**, ready to copy or include in your project documentation:

---

Revision Notes: Prop Drilling and Context API in React

Agenda of the Lecture
Implementation of Sorting, Searching, and Filtering based on movie genres.
Understanding Prop Drilling.
Introduction to Context API.
Using useContext Hook.
Integrating Context API into the Project.

Core Concepts Explained

Prop Drilling
Prop drilling refers to passing data from a parent component to deeply nested child components through multiple intermediate layers. This occurs when data from a top-level component needs to reach a component far down in the hierarchy.

Example Scenario
If Component A (Grandparent) needs to share data with Component E (Grandchild) through Component B and Component C, the data must be passed through each intermediate component, even if they do not use it. This process is inefficient and makes the code less maintainable.

Context API
The Context API provides a solution to prop drilling by allowing data to be shared directly across components without passing it through intermediate ones. It is primarily used for global state management and can store shared data such as user authentication details, theme settings, or watchlists.

Applying Context API

Creating Context
Create a context object using React.createContext(). This object holds the global state accessible throughout the component tree.

Providing Context
Wrap the main component tree with the Provider of the created context. The Provider accepts a value prop that defines the data or state to be shared with all child components.

Consuming Context
Use the useContext hook in any child component to access data from the nearest Provider without passing props manually.

Example: Movie Watchlist Feature with Sorting and Searching

Sorting Movies
Sorting functionality allows movies in the watchlist to be arranged based on ratings. Two main functions are used:

- Ascending Sort: Sorts movies from lowest to highest rating.
- Descending Sort: Sorts movies from highest to lowest rating.
  After sorting, a new array is created to trigger re-rendering of the updated list.

Searching Movies
The search feature filters the displayed movie list dynamically as the user types into the input field. It uses a state variable to track the current search term and filters the movie titles in real-time.

Integrating Context API for State Management
In projects where multiple components such as Home and Watchlist need to share and update the same data, Context API helps maintain a centralized state. By wrapping the application in a context provider, all components gain access to shared states and functions without prop drilling.

This approach improves scalability, code readability, and reduces bugs caused by inconsistent data flow.

Conclusion
The Context API in React simplifies state sharing across components and eliminates the need for deep prop drilling. It enhances maintainability, improves component communication, and provides a cleaner structure for managing global state.

By integrating Context with features like sorting and searching, developers can create more dynamic and maintainable applications.

Here’s your **README.md** content for the topic **“Redux and State Management in React”** written in plain text (no code snippets, ready for Markdown file use):

# ⚛️ React and Redux – Revision Notes

### 🗓️ Agenda

- Understanding the integration between **React components** and **Redux** for state management
- Implementing a **Watchlist** feature using React and Redux
- Managing application state with a **global Redux store**
- Persisting data using **Local Storage** in React applications

---

## 🧠 Introduction to Redux Integration

**Redux** is a predictable state container often used with **React** to handle global application state efficiently.  
Unlike local component states, Redux centralizes state management, ensuring consistency and scalability across the app.

By maintaining a **global store**, Redux eliminates **prop drilling**, allowing any component to access or update shared data seamlessly.

---

## 🧩 Key Concepts

### 🏬 Store

A single, immutable **object tree** that represents the entire state of the application. It acts as the single source of truth.

### 📦 Action

An object that describes an **event** or change in the application.  
Actions are the **only way** to trigger a state update.

### ⚙️ Reducer

A **pure function** that determines how the next state is calculated based on the current state and the action received.

### 🚀 Dispatch

A method used to **send actions** to the store.  
Dispatching actions describes _what happened_ and triggers corresponding updates through reducers.

---

## 🛒 Analogy

Think of Redux as a **shopping complex**:

- 🏬 **Global Store:** Holds all the goods (application data)
- 👷 **Actions:** Employees who update the inventory
- ⚙️ **Reducers:** Protocols or rules defining how updates are made
- 📢 **State Updates:** Instantly reflected across all departments (components)

This analogy illustrates how Redux ensures consistent and predictable state changes across your entire app.

---

## 🏗️ Project Structure Overview

The session focused on integrating Redux into a React project by implementing a **Watchlist** feature with persistent data storage.

### 🔹 Steps Overview

1. **Define State Variables**

   - Initialize the `watchList` state and synchronize it with local storage using React’s lifecycle methods.

2. **Handle State with Redux**

   - Replace context-based state management with Redux for better scalability.
   - Pass generic component data through props for **dynamic** and **decoupled** handling.
   - Use the Redux store for centralized read/write access to shared state.

3. **Update Components**

   - Modify components like `WatchList` to rely on the global Redux store instead of local state.
   - Maintain data in **generic structures** to support multiple data types dynamically.

4. **Use of Local Storage**

   - Store watchlist data locally for **persistence** across browser sessions.
   - Automatically sync local data with Redux to restore state after reloads.

5. **Fetch Data from APIs**
   - Integrate live data from the **TMDB API** using Axios.
   - Populate Redux-managed components dynamically for an interactive UI.

---

## 🎬 Watchlist Feature Implementation

The Watchlist feature demonstrated:

- Moving movie data management from local state to **Redux**.
- Displaying, adding, and removing movies from the global watchlist.
- Synchronizing Redux state with **Local Storage** to ensure persistence.
- Maintaining clean separation between **UI components** and **business logic**.

This approach improves maintainability, scalability, and performance in data-heavy React applications.

---

## 🧾 Concepts in Practice

| Concept                       | Purpose                     | Benefit                                    |
| ----------------------------- | --------------------------- | ------------------------------------------ |
| **Redux Store**               | Centralized state container | Predictable and consistent state           |
| **Actions**                   | Define "what happened"      | Simplifies communication across components |
| **Reducers**                  | Define "how state changes"  | Pure and testable logic                    |
| **Local Storage**             | Persist state locally       | Data retention after reload                |
| **useDispatch / useSelector** | Hooks for Redux interaction | Simplifies data flow and updates           |

---

## 🏁 Conclusion

This class provided an in-depth understanding of **React + Redux integration** for modern web applications.  
By combining **Redux state management** with **local storage persistence**, developers can create highly scalable, reliable, and maintainable React apps.

The **Watchlist** implementation served as a practical example of applying these principles — showcasing real-world use cases like API data fetching, state synchronization, and modular architecture.
