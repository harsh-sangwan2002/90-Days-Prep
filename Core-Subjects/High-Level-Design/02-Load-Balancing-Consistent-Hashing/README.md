# System Design Class — Load Balancing & Scaling

## 📌 Introduction

In this class, we explored **essential system design concepts** with a focus on:

- **Load balancing techniques**
- **Vertical and horizontal scaling**
- **Managing distributed systems**

We continued from the previous class, emphasizing **how to scale systems** and **efficiently distribute user requests** to maintain performance and reliability.

---

## ⚙️ Scaling Approaches

### **Vertical Scaling**

Upgrading a single machine’s hardware (e.g., adding RAM, CPU, or storage) to improve performance.

**Pros:**

- Simpler to implement
- No need to change application code

**Cons:**

- **Single Point of Failure** — if the server goes down, the entire application stops.
- **Hardware Limits** — physical constraints on how much can be upgraded.

---

### **Horizontal Scaling**

Adding more machines to distribute the load across multiple servers.

**Pros:**

- Better fault tolerance
- Easier to handle high traffic

**Cons:**

- Requires distributed system architecture
- More complex to manage

---

## 🔄 Load Balancing

A **load balancer** distributes incoming traffic across multiple servers to:

- Prevent any single server from becoming overloaded
- Improve availability and performance

### **Load Balancing Algorithms**

1. **Random Load Balancing**

   - Requests are assigned randomly to available servers.
   - **Stateless** — distribution does not depend on previous requests.

2. **Round Robin Load Balancing**

   - Requests are distributed sequentially to each server in turn.
   - Cycles back to the first server after the last.

3. **Consistent Hashing**
   - Uses a hash function to determine the server.
   - Minimizes reassignments when servers are added or removed.

---

## 🧠 Stateless vs Stateful Load Balancing

| Type          | Description                                            | Pros                            | Cons                         |
| ------------- | ------------------------------------------------------ | ------------------------------- | ---------------------------- |
| **Stateless** | Each request handled independently, no session memory. | Easier to scale, simpler design | No request context preserved |
| **Stateful**  | Requests from the same client go to the same server.   | Preserves session context       | Harder to scale and failover |

---

## ⚠️ Additional Concepts

- **Cascading Failures:**  
  When one server fails, its load shifts to others, potentially causing chain failures.

- **DNS as a Load Balancer:**  
  DNS can distribute requests across multiple IP addresses for the same domain.

---

## 📝 Summary

This class covered:

- The **differences between vertical and horizontal scaling**
- **Core load balancing strategies**
- **Algorithm choices** for load distribution
- The **trade-offs between stateless and stateful balancing**
- Handling **cascading failures** and using **DNS for load balancing**

By mastering these concepts, engineers can design **resilient, scalable systems** that efficiently handle large volumes of traffic.

```

```
