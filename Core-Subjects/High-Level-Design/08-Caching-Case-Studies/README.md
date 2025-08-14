# 🚀 Cache Management & Database Consistency — Revision Notes

## 📝 Introduction

This session covered **cache strategies**, **data consistency approaches**, and **optimizations** for high-performance systems, particularly in environments like coding platforms (e.g., Scaler).

---

## 1️⃣ Immediate Consistency & Latency

- **Immediate Consistency:**
  - Ensures every read reflects the **latest update** instantly.
  - Essential for **live contests** or real-time feedback.
  - **Trade-off:** Higher latency for the first read after update (may bypass cache and fetch from storage like S3).

---

## 2️⃣ Cache Strategies

### **Global vs Local Cache**

| Feature  | Global Cache                      | Local Cache                         |
| -------- | --------------------------------- | ----------------------------------- |
| Location | Central/shared across servers     | Stored individually on each server  |
| Pros     | Consistent view for all servers   | Reduced network bandwidth usage     |
| Cons     | High bandwidth usage on retrieval | Possible redundancy & inconsistency |

### **Caching Mechanisms**

- **When to avoid distributed cache (e.g., Redis):** If dataset fits in each server's RAM → simpler, faster.
- **Large File Handling:** Store big inputs/outputs efficiently to minimize cache miss latency.
- **Server Disk Caching:** Cost-effective & practical for large but infrequently accessed files.

---

## 3️⃣ Cache Invalidation & Refresh

- **Cache Invalidation:** Required when source data changes to prevent stale reads.
- **Common Strategies:**
  - **TTL (Time-to-Live):** Expire cache after set time.
  - **Write-through:** Write to cache and DB simultaneously.
  - **Write-behind:** Write to cache first, update DB later.
- **S3 for Storage:**
  - Cost-effective for large files.
  - Not ideal for frequent direct reads (good for occasional cache misses).

---

## 4️⃣ Estimations & Load Management

### **Traffic Estimations**

- Predict submissions/sec & leaderboard requests/sec.
- Use data to decide scaling strategies.

### **Load Balancing**

- **Stateless Balancing:**
  - Better distribution, no central dependency.
  - Trade-off: higher data redundancy.
- **Stateful Balancing:**
  - More control, but single-point dependencies possible.

### **Resource Optimization**

- Separate **judging** and **leaderboard computation** into different services.
- Use scalable resources to prevent overload during spikes.

---

## 🏁 Conclusion

- Balance **immediate consistency** with **performance** to avoid unnecessary latency.
- Choose the **right cache strategy** (global/local) based on **network costs** and **consistency requirements**.
- Plan for **cache invalidations**, **storage solutions**, and **load distribution** for resilience in dynamic, high-frequency systems.

```

```
