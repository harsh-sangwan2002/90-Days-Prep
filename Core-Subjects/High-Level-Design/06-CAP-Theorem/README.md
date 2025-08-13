# 📚 Distributed Systems & CAP Theorem — Revision Notes

## 📝 Overview

These notes summarize key concepts from the class on **Distributed Systems**, with a focus on:

- **Sharding**
- **Replication**
- **Quorum-Based Approaches**
- **CAP Theorem**

---

## 1️⃣ Sharding

**Definition:**  
Sharding is the process of distributing data across multiple machines (or database nodes) to handle large-scale datasets that cannot fit on a single machine.

**Key Concepts:**

- **Sharding Key:** Attribute used to determine which shard stores the data.  
  _Example:_ On Facebook, `user_id` could be the sharding key.
- **Properties of Shards:**
  - **Mutually Exclusive:** No duplicate data across shards.
  - **Collectively Exhaustive:** All shards combined represent the complete dataset.

**Example:**  
Facebook may shard user data by `user_id` so that each user’s profile exists on exactly one shard.

---

## 2️⃣ Replication & Consistency

**Master-Slave Architecture:**

- **Master Node:** Handles all write operations.
- **Slave Nodes:** Handle read operations.
- Improves **read scalability** and avoids a single point of failure.  
  _Example:_ YouTube’s read-heavy workload benefits from this model.

**Consistency Considerations:**

- Ensures **uniform and up-to-date data** across replicas.
- Strong consistency often increases **latency** since writes must propagate to all nodes.

---

## 3️⃣ Quorum-Based Approach

**Goal:** Balance **performance** and **data safety**.

**Mechanism:**

- A write is considered **successful** if acknowledgments are received from a subset of nodes (quorum), not all.
- Configurable thresholds for read/write acknowledgments.

**Example:**  
If a system has 5 replicas, a write might succeed if at least 3 replicas acknowledge it.

---

## 4️⃣ CAP Theorem

**Definition:**  
A distributed system **cannot simultaneously guarantee**:

1. **Consistency (C):** Every read returns the most recent write.
2. **Availability (A):** Every request gets a response (even if stale).
3. **Partition Tolerance (P):** The system operates despite network partitions.

**Trade-Offs:**

- Due to inevitable network partitions, systems must choose between:
  - **CP:** Consistency + Partition Tolerance (e.g., Banking systems)
  - **AP:** Availability + Partition Tolerance (e.g., DNS services)
  - **CA:** Consistency + Availability (rare in distributed systems; only possible without partitions)

**Real-World Examples:**

- Banking transactions → CP (accuracy is critical)
- Social media feeds → AP (availability prioritized over strict consistency)

---

## 5️⃣ Availability & Network Partition Tolerance

**Availability:**

- System responds to all requests, though data might not be the latest.

**Network Partition:**

- Communication breakdown between system components.
- Mitigation: Redundant nodes, replication strategies.

---

## 🏁 Conclusion

To design **scalable and robust distributed systems**, one must:

- Choose an appropriate **sharding strategy**.
- Decide on **replication models**.
- Understand **CAP trade-offs** to align system behavior with business needs.

These principles are essential in modern large-scale applications such as **Facebook, YouTube, and financial systems**.
```