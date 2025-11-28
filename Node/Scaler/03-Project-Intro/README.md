# Revision Notes: Introduction to MongoDB and CRUD Operations

## Overview of Databases

### Why We Need a Database

Databases provide persistent data storage and enable efficient search, retrieval, and updates. They ensure data integrity through validation rules and improve performance using indexing, which speeds up querying and filtering.

### SQL vs NoSQL Databases

SQL databases use fixed schemas with structured tables, suitable for predictable and relational data.  
NoSQL databases like MongoDB offer schema flexibility and store data as JSON-like documents, making them ideal for dynamic applications requiring adaptable data models.

## Introducing MongoDB

### Key Characteristics

MongoDB is a NoSQL, document-based, open-source database that stores records in collections as documents. Internally it stores data in BSON format, which supports efficient operations and richer data types.

### Using Mongoose

Mongoose is an ODM that provides schema definitions and a structured approach to interacting with MongoDB. It simplifies database operations by allowing developers to work with JSON-like models instead of raw BSON documents.

## Setting Up MongoDB

### MongoDB Atlas

Students created their databases using MongoDB Atlas, a cloud platform for hosting MongoDB clusters. It provides quick setup, secure access, and easy integration with applications.

### Connecting with Mongoose

The class demonstrated connecting an Express server to MongoDB using Mongoose, enabling students to integrate server routes with database operations in their projects.

## CRUD Operations in MongoDB

### Create

Introduced the concept of adding new documents to a collection using Mongoose models. Students learned how to structure data and create routes for adding new entries.

### Read

Covered methods to fetch data from MongoDB, including retrieving all documents and querying specific items using filters or parameters.

### Update

Explained updating existing documents using Mongoose update methods, with emphasis on retrieving updated data and ensuring proper options are used for accurate results.

### Delete

Demonstrated how to remove documents from the database using built-in deletion methods, showcasing efficient data removal and cleanup.

## MVC Architecture

### Model

Defines schema structures and represents the data layer responsible for interacting with the database.

### View

Represents the presentation layer, responsible for displaying data to users.

### Controller

Handles incoming requests, contains logic for processing data, and orchestrates interactions between models and views.

## Conclusion

The class provided a complete walkthrough of MongoDB fundamentals, CRUD operations, and structuring applications using MVC principles. Students were encouraged to replicate all class exercises on their own systems to reinforce learning and build hands-on experience.
