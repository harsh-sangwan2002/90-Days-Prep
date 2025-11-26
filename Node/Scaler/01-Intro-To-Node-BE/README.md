# Node.js Revision Notes

## Introduction

Node.js is a JavaScript runtime built on Chrome’s V8 engine. It allows developers to run JavaScript on the server, enabling fast, scalable, and event-driven backend applications. It is widely used for APIs, microservices, real-time applications, and full-stack development.

## Key Features of Node.js

- **Asynchronous & Non-Blocking I/O**  
  Designed for high-performance, event-driven systems that handle many requests simultaneously.
- **Single-Threaded Event Loop**  
  Uses a single thread to manage multiple concurrent operations efficiently through callbacks, promises, and async/await.
- **Fast Execution**  
  Powered by Google’s V8 engine, making JavaScript execution extremely fast.
- **Scalability**  
  Ideal for microservices, APIs, and systems requiring massive concurrency.
- **Large Package Ecosystem**  
  NPM provides millions of open-source packages to accelerate development.

## Node.js Architecture

- **Event Loop** handles asynchronous tasks and manages phases such as timers, I/O callbacks, idle/prepare, polling, check, and close callbacks.
- **Worker Threads** handle CPU-intensive tasks without blocking the main thread.
- **Libuv** provides thread pool, async I/O, and cross-platform compatibility.

## Common Use Cases

- REST APIs and backend services
- Real-time apps (chats, notifications)
- Streaming services
- Microservices architectures
- Command-line tools
- IoT and event-driven systems

## Modules in Node.js

- **Built-in Modules** like fs, http, path, crypto, events.
- **CommonJS Module System** using `require` and `module.exports`.
- **ES Modules** using `import` and `export`.

## NPM (Node Package Manager)

- Manages dependencies and project libraries.
- Supports semantic versioning, scripts, and global or local installation.
- `package.json` holds metadata, dependencies, and scripts.

## Express.js Overview

- Minimal framework for building backend applications.
- Provides routing, middleware, error handling, and HTTP utilities.
- Simplifies API development and integrates well with databases.

## Asynchronous Programming Concepts

- **Callbacks**: Traditional async style but can cause callback hell.
- **Promises**: Cleaner async handling with .then() chaining.
- **Async/Await**: Most modern, readable approach for async flows.

## Error Handling

- Use try/catch for async/await.
- Centralized error middleware with Express.
- Avoid unhandled promise rejections and uncaught exceptions.

## Node.js with Databases

- Works well with SQL and NoSQL databases.
- Common drivers and ORMs include Sequelize, Prisma, Mongoose, MySQL, PostgreSQL clients.

## Security Best Practices

- Always validate and sanitize inputs.
- Store secrets in environment variables.
- Use HTTPS and secure headers.
- Avoid blocking the event loop with heavy computations.

## Deployment & Scaling

- Use PM2 or Docker for managing processes.
- Horizontal scaling with clusters or load balancers.
- Environment variables for configuration.

## Conclusion

Node.js is a powerful environment for building fast, scalable, and modern backend applications. Understanding its architecture, async behavior, and ecosystem enables developers to design efficient and reliable server-side systems.