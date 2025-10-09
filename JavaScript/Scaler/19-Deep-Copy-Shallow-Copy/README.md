# 📘 JavaScript: Memory Management, Shallow and Deep Copies

## 🧠 Overview

This session explained how JavaScript manages memory for different data types and explored the differences between **primitive** and **reference** types. It also covered how to create **shallow** and **deep copies** of objects to avoid unintended data mutations.

---

## 💾 Memory Management in JavaScript

### 🔹 Primitive Data Types

Primitive types include **Number**, **String**, **Boolean**, **Null**, and **Undefined**.

- They are **stored in the stack**, meaning the variable directly contains the value.
- Copying a primitive variable creates an **independent copy**.
- Changing one variable does **not affect** another.

Example:
Assigning one variable to another copies the value, not the reference.

---

### 🔸 Reference Data Types

Reference types include **Objects**, **Arrays**, and **Functions**.

- They are **stored in the heap**, and the variable holds a **reference** (or pointer) to that memory location.
- Copying an object or array copies only the **reference**, not the actual data.
- Changing the new variable **also changes** the original.

This behavior often causes **unintentional side effects** if data is shared.

---

## 🔍 Shallow Copy vs. Deep Copy

### 🧩 Shallow Copy

A **shallow copy** creates a new object that copies only the top-level properties.
If the original object has **nested objects**, they are still referenced, not copied.
So, changing nested data in the copy **also affects** the original.

Common ways to create shallow copies:

- Using the **spread operator** `{ ...obj }`
- Using **Object.assign({}, obj)**

Use shallow copies when you are sure there are **no nested structures** or when you **intentionally want** to share nested data.

---

### 🧬 Deep Copy

A **deep copy** duplicates everything, including nested objects, ensuring full independence between copies.
Any change made to the new object **does not affect** the original.

Common deep copy techniques:

- Using **JSON.stringify()** and **JSON.parse()**
- Writing a **recursive deepClone function** that checks for arrays and objects before copying.

Use deep copies when maintaining **immutability** is crucial (e.g., in React state management).

---

## ⚙️ Summary

| Type         | Storage | Copies Value or Reference | Example                           | Impact on Original   |
| ------------ | ------- | ------------------------- | --------------------------------- | -------------------- |
| Primitive    | Stack   | Value                     | `let x = 10`                      | No change            |
| Reference    | Heap    | Reference                 | `let y = { a: 1 }`                | Changes reflected    |
| Shallow Copy | Heap    | Top-level only            | `{ ...obj }`                      | Nested values shared |
| Deep Copy    | Heap    | Full data copy            | `JSON.parse(JSON.stringify(obj))` | Fully independent    |

---

## 🧠 Key Takeaways

- **Primitive types** store actual values, while **reference types** store memory references.
- **Shallow copies** share nested references, **deep copies** fully duplicate objects.
- Deep cloning ensures **data integrity** and helps maintain **state immutability** in modern apps.
- Choose the right copying method based on the **depth** of your data and whether **shared references** are acceptable.

---