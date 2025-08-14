# 📚 SQL & NoSQL Databases — Revision Notes

## 📝 Introduction

Efficient data management is critical in modern software engineering.  
Databases are core components for **storing** and **retrieving** data in applications.

---

## 1️⃣ SQL Databases

**Definition:**  
Relational databases that use **Structured Query Language (SQL)** for defining and manipulating data, with **well-defined schemas**.

**ACID Properties:**

1. **Atomicity:** All-or-nothing transactions.
2. **Consistency:** Data remains valid before and after a transaction.
3. **Isolation:** Concurrent transactions behave as if executed sequentially.
4. **Durability:** Committed transactions survive system failures.

---

## 2️⃣ NoSQL Databases

**Definition:**  
Non-relational databases that store and retrieve data in **models other than tabular relations** (e.g., key-value, document, graph).

**BASE Properties:**

1. **Basically Available:** Guarantees data availability (response may be success or failure).
2. **Soft State:** Data state may change over time without input.
3. **Eventual Consistency:** System becomes consistent over time if no updates occur.

---

## 3️⃣ Key Differences

| Feature           | SQL                                | NoSQL                                       |
| ----------------- | ---------------------------------- | ------------------------------------------- |
| **Schema**        | Fixed, predefined                  | Flexible, dynamic                           |
| **Data Modeling** | Normalization (reduces redundancy) | Denormalization (improves read performance) |
| **Scalability**   | Vertical scaling (bigger servers)  | Horizontal scaling (more servers)           |
| **Transactions**  | Strong consistency (ACID)          | Eventual consistency (BASE)                 |
| **Sharding**      | Manual, complex                    | Built-in support                            |

---

## 4️⃣ Key Challenges

### Schema Design

- **SQL:** Fixed schema — harder to handle varied datasets.
- **NoSQL:** Flexible schema — better for unstructured/semi-structured data.

### Transaction Management

- **SQL:** Prioritizes strong consistency.
- **NoSQL:** Often sacrifices strong consistency for availability & partition tolerance.

---

## 5️⃣ Choosing the Right Database

**When to Use SQL:**

- Data is **structured** and requires **strict consistency**.
- ACID transactions are critical.
- Scaling beyond a single machine is **not a primary requirement**.

**When to Use NoSQL:**

- Handling **large volumes** of unstructured/semi-structured data.
- High scalability is required.
- Can tolerate **eventual consistency**.

---

## 6️⃣ Practical Examples

### Sharding & Performance

- **SQL:** Sharding is complex, requires significant effort.
- **NoSQL:** Built-in sharding makes scaling simpler.

### Use Cases

- **Banking System:** SQL — strong consistency and atomicity required.
- **IRCTC (Ticket Booking):** NoSQL — can handle partition tolerance and eventual consistency.

---

## 🏁 Conclusion

Choosing between **SQL** and **NoSQL** depends on:

- **Data structure**
- **Scalability needs**
- **Consistency requirements**
- **System tolerance for stale data**

Both have trade-offs, and hybrid approaches are common in large-scale applications.
```