# Revision Notes: Types of NoSQL Databases

## Introduction

This session explored the categories of NoSQL databases, focusing on their architectures, use cases, and limitations. We studied **document databases**, **key-value stores**, and **column family databases**, along with practical considerations like sharding, replication, and indexing.

---

## 1. Types of NoSQL Databases

### 1.1 Document Databases

**Characteristics:**

- Store data in document format (JSON, BSON).
- Handle semi-structured and nested data.
- Support sharding for horizontal scaling (default: document ID; custom keys also possible).

**Examples:**

- **MongoDB** – provides local indexing and sharding.
- **CouchDB / Couchbase** – designed for scalability and consistency.

**Limitations:**

- Not ideal for aggregate queries spanning multiple documents.

---

### 1.2 Key-Value Stores

**Characteristics:**

- Data stored as simple key-value pairs (like HashMaps).
- Extremely fast for reads/writes.
- Keys and values have soft size limits for efficiency.

**Examples:**

- **Redis** – distributed in-memory cache with replication and persistence.

**Use Cases:**

- Caching frequently accessed data.
- Session management.
- Real-time leaderboards in gaming.

---

### 1.3 Column Family Databases

**Characteristics:**

- Store data by columns instead of rows.
- Efficient for large datasets and analytic queries.
- Optimized with **LSM trees** for write performance and storage efficiency.

**Examples:**

- **Cassandra** – high availability and scalability in distributed systems.
- **HBase** – used for large-scale analytics and time-series data.

**Use Cases:**

- Time-series data.
- Column-specific queries and updates.
- Large-scale analytics.

---

## 2. Practical Considerations

**Sharding & Replication:**

- **Sharding** – splits data across servers for horizontal scaling.
- **Replication** – duplicates data for high availability and fault tolerance.

**Indexing:**

- Critical for query optimization.
- Varies across databases (e.g., MongoDB supports field-level local indexing).

**Data Storage & Efficiency:**

- Column family databases use **LSM trees** to improve write performance and optimize disk usage.

---

## Conclusion

Each NoSQL type has unique strengths:

- **Document databases** → versatile queries, nested data.
- **Key-value stores** → speed and simplicity for caching/real-time apps.
- **Column family databases** → large-scale analytics and time-series storage.

Choosing the right type depends on the application’s scalability, query patterns, and data structure needs.

---