# System Design Class — Kafka: Delivery Guarantees, Sharding & Replication

## 📌 Agenda Overview

These notes cover **key Kafka concepts**:

- Delivery Guarantees
- Sharding (Partitioning)
- Replication
- Consumer Groups
- Kafka’s Key Features

---

## 📦 Delivery Guarantees in Kafka

Kafka provides three types of delivery semantics:

### 1. **At Most Once**

- Messages delivered **no more than once**
- Possible **message loss**, but **no duplicates**
- ✅ Best for: cases where duplicates are unacceptable but some loss is tolerable  
  _Example: Marketing email notifications_

---

### 2. **At Least Once**

- Every message delivered **at least once**
- Possible **duplicates** if offsets are not managed carefully
- ✅ Best for: critical use cases where **data loss is unacceptable**  
  _Example: Financial transactions_

---

### 3. **Exactly Once**

- Ensures **no message is lost** and **no duplicates**
- Requires **extra coordination** (e.g., Kafka Streams, idempotent producers, transactional writes)
- ✅ Best for: scenarios requiring **strong correctness guarantees**  
  _Example: Payment systems, inventory management_

---

## 🔀 Sharding in Kafka

Kafka uses **partitioning** to handle large data streams efficiently.

- **Partitioning**

  - A topic is split into **multiple partitions**
  - Each partition can be stored on a different machine
  - Enables **parallelism & high availability**

- **Load Balancing**
  - Messages assigned to partitions using a **key + hashing function**
  - Ensures even distribution of data across partitions

---

## 📑 Replication in Kafka

Replication ensures **fault tolerance & durability**.

- **Replication Strategy**

  - Each partition is **replicated across multiple brokers**
  - If one broker fails, replicas provide backup

- **Leader-Follower Model**
  - **Leader (master):** Handles all reads & writes
  - **Followers (slaves):** Replicate data from the leader
  - Provides **high availability**

---

## 👥 Consumer Groups

- **Definition**

  - A group of consumers collaborating to consume data from a topic
  - Each partition in a topic → consumed by **only one consumer** within the group

- **Load Distribution**

  - Kafka balances partitions across consumers
  - If consumers > partitions → extra consumers remain **idle**

- **Message Ordering**
  - Guaranteed **within a partition**
  - Not guaranteed **across partitions**

---

## 🚀 Apache Kafka’s Key Features

- **High Throughput & Low Latency**

  - Efficient partitioned architecture → supports millions of messages/sec

- **Durability**

  - Data persistence via **replication** ensures no data loss

- **Scalability**
  - Horizontally scalable → add brokers & partitions with no downtime

---

## 📝 Conclusion

- Kafka provides **flexible delivery guarantees** for different use cases
- **Sharding (partitioning)** enables parallelism & efficient scaling
- **Replication** ensures fault tolerance and durability
- **Consumer groups** allow distributed consumption with load balancing

Kafka’s combination of **high throughput, low latency, durability, and scalability** makes it a cornerstone of modern **distributed data streaming systems**.

```

---
```
