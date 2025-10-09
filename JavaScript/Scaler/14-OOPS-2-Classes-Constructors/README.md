## Introduction to OOP

Object-Oriented Programming (OOP) in JavaScript organizes code into reusable structures called **objects**, representing real-world entities with **properties** (data) and **methods** (actions).
It promotes modular, maintainable, and scalable code design.

### Core OOP Concepts

- **Classes and Objects**:
  A _class_ is a blueprint for creating objects. An _object_ is an instance of a class.

- **Encapsulation**:
  Bundles data and methods operating on that data together, restricting direct access to internal details.

- **Inheritance**:
  Enables one class to derive properties and methods from another class.

- **Polymorphism**:
  Allows different classes to share a common interface while having different implementations.

---

## Constructors and Classes

### Constructor

A **constructor** is a special method used for initializing new objects within a class. It sets initial property values when an instance is created.

### Creating and Using Classes

Classes in JavaScript (introduced in ES6) are syntactic sugar over prototypical inheritance. Instances are created using the `new` keyword.

### Benefits of Class Syntax

- Clear, readable structure similar to other OOP languages.
- Encourages code reuse and organization.
- Class declarations are not hoisted (unlike functions).

---

## Inheritance

Inheritance allows a subclass to extend a parent class, reusing and enhancing its behavior.

- Achieved using the `extends` keyword.
- The `super` keyword calls the parent class constructor, essential for initializing inherited properties.

**Benefits:**

- Promotes code reusability and reduces redundancy.
- Enables specialization of parent classes into more specific child classes.

---

## Prototypes and Prototypical Inheritance

JavaScript uses **prototypical inheritance** — each object inherits properties and methods from another object (its prototype).

- Every function has a `prototype` property.
- Each object internally references its `[[Prototype]]` (commonly accessed via `__proto__`).

### Benefits

- **Memory Efficiency**: Shared methods avoid duplication across instances.
- **Dynamic Extension**: Existing objects can gain new behaviors at runtime.

---

## Encapsulation and Private Properties

Encapsulation hides internal object details and exposes only necessary parts of an interface.

### Private Fields

- Introduced using a `#` prefix within classes.
- Accessible only inside the class, enforcing true privacy.

### Other Encapsulation Patterns

- Naming conventions (e.g., using `_propertyName`) or closures for simulating private members in older JavaScript versions.

---

## Analogies and Real-World Examples

- **Car Example**:
  A `Car` class can define properties like `model`, `color`, and `price`. A `SportsCar` subclass can extend it with additional features like `maxSpeed`.

- **Gujia Mold Analogy**:
  Classes are like molds, and objects are sweets made from those molds — each object follows the same structure but can hold unique values.

---

## Summary

OOP in JavaScript emphasizes:

- **Classes** for structure and reusability.
- **Inheritance** for extending behavior.
- **Encapsulation** for data protection.
- **Prototypes** for efficient memory usage.

Mastering these principles helps build clean, modular, and scalable web applications.

---
