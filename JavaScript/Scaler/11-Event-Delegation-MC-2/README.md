# Nested Comment System using Event Delegation

## Introduction

In this session, the focus was on understanding the concept of **event delegation** and applying it to build a **nested comment system**. This project demonstrates how to efficiently manage user interactions by minimizing the number of event listeners, thereby improving performance.

## Core Concepts

### 1. Event Delegation

Event delegation is a technique that uses a single event listener to handle events on multiple child elements by leveraging **event bubbling**. Instead of attaching separate listeners to each element, we attach one to a common parent, making the code more efficient and maintainable.

When an event occurs on an element, it triggers first on the target element and then bubbles up through its ancestors in the DOM hierarchy.

### 2. Difference Between `e.target` and `e.currentTarget`

- **e.target:** The element that originally triggered the event (the actual clicked element).
- **e.currentTarget:** The element on which the event handler is currently attached.

Understanding this difference is crucial when a single parent handles events for multiple children.

## Building a Nested Comment System

### Overview

The system allows users to post comments, reply to existing comments, and display replies in a **hierarchical structure**, forming a nested commenting interface.

### Implementation Steps

#### 1. HTML Structure

The structure consists of a container that holds all comments. Each comment can contain nested replies and a form for adding new comments.

#### 2. JavaScript Logic

- **Event Delegation:**
  A single event listener is attached to the parent comment container to manage clicks on reply buttons or comment interactions.
- **Dynamic Comment Creation:**
  Comments and replies are created dynamically using JavaScript functions.
- **Recursive Rendering:**
  A recursive approach is used to display nested replies, ensuring scalability as comments grow deeper.

#### 3. CSS for Visual Hierarchy

CSS is used to visually represent the hierarchy of comments. Indentation and styling clearly distinguish parent comments from nested replies.

#### 4. Display Management

Logic is added to expand or collapse comment threads by toggling visibility (e.g., hiding replies under a comment).
When a user clicks “Reply,” a new input field dynamically appears below the respective comment.

## Conclusion

The **Nested Comment System** effectively demonstrates how **event delegation** and **recursion** can work together to create dynamic, scalable, and performance-optimized user interfaces.
This approach ensures minimal use of event listeners, efficient DOM manipulation, and smooth user interaction — key elements of modern web application design.
