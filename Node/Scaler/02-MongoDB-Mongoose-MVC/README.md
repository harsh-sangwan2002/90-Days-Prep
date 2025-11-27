# Node.js, HTTP Server, Middleware, and MongoDB — Class Notes

## Creating a Server Using the HTTP Module

The HTTP module in Node.js allows you to create a basic web server capable of receiving requests and sending responses. A server is typically created by importing the HTTP module, initializing a server instance, and defining how the server responds to different requests using the request and response objects. The server sends output using methods that write data to the response stream and then closes the response when finished.

## Handling Different Types of Requests

A Node.js server commonly handles multiple HTTP methods:

- GET requests are used to retrieve data or access a webpage.
- POST requests send new data to the server, often from forms or APIs.
- PUT requests update existing data stored on the server.
- DELETE requests remove existing resources.
  Each method is used to interact with server-side data in different ways.

## Express.js — Simplifying Server Development

Express is a popular framework for building servers and APIs in Node.js. After installing Express, an application instance is created to define routes for different endpoints. Express provides built-in features for routing, request handling, and application structure, making server development faster and easier compared to using the raw HTTP module.

## Middlewares in Express.js

Middlewares are functions that execute during the request-response lifecycle. They can read or modify the request and response objects, terminate the request early, or pass control to the next middleware. Middlewares are used for parsing request bodies, logging, authentication, error handling, and controlling application flow. They are a core concept in Express-based applications.

## Introduction to MongoDB and Mongoose

MongoDB is a NoSQL document database that stores data as JSON-like documents inside collections. Mongoose is an ODM library that provides structure and validation through schemas and exposes models for performing CRUD operations. A schema defines the shape of documents, while models allow interactions such as creating, reading, updating, and deleting records in MongoDB.

## Connecting to MongoDB

To work with MongoDB in Node.js, Mongoose is installed and used to establish a database connection via a URI string. Mongoose handles configuration options internally and ensures stable communication with the database server.

## Schemas and Models

A schema acts as a blueprint for documents stored in a MongoDB collection. Once a schema is created, a model is generated from it, and the model provides the interface needed for all database operations.

## Node Modules and NPM Management

NPM is used to manage dependencies in Node.js projects. Regular dependencies are needed at runtime, while devDependencies are used only during development. The node_modules directory is excluded from version control using a gitignore file to prevent unnecessary repository bloat.

## Summary

These notes cover essential backend concepts: creating servers with the HTTP module, simplifying development with Express, using middleware for request handling, and integrating MongoDB via Mongoose for database operations. Together, these tools form the core of modern Node.js backend development.