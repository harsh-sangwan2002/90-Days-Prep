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
