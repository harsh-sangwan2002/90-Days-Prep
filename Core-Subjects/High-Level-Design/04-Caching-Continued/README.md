# Caching in Software Systems

## 📌 Introduction

In this session, we explored **various aspects of caching** in software systems, its role in improving performance, and the challenges that come with it.  
The focus was on:

- Understanding different **caching layers**
- Strategies for **cache invalidation**
- Differences between **global** and **local** caches

---

## 🧠 Key Concepts Discussed

### 1. Basic Understanding of Caching

**Definition:**  
Caching is the process of storing copies of data in **temporary storage** to reduce latency and avoid repeated access to slower storage layers like databases.

**Caching Layers:**

- **Client-Side Caching**: Implemented on the client or browser side.
- **Server-Side Caching (Local Cache)**: Specific to a single application server.
- **Global Cache**: Shared across multiple application servers; ideal for widely accessed, common data.  
  _Example:_ Celebrity posts in a news feed.

---

### 2. Cache Invalidation

- **TTL (Time To Live):**  
  Sets a time limit for cache data before it expires.
- **Cache Staleness:**  
  Occurs when cache data is not updated in sync with the database.

---

### 3. Writing Strategies to Cache

- **Write Through**:  
  Write to both cache and database simultaneously. Ensures consistency but may add latency.
- **Write Back**:  
  Write to cache first, then asynchronously to the database. High performance, but may risk inconsistency.
- **Write Around**:  
  Skip cache for new writes; cache is updated only on reads.

---

### 4. Cache Eviction Policies

Because cache storage is limited, old data must be removed:

- **LRU (Least Recently Used):** Remove least recently accessed items.
- **LFU (Least Frequently Used):** Remove least frequently accessed items.
- **FIFO (First In First Out):** Remove the oldest items regardless of usage.

---

### 5. Advantages & Challenges of Caching

**✅ Advantages:**

- Faster data retrieval
- Reduced database load

**⚠️ Challenges:**

- Cache invalidation complexity
- Handling cache misses
- Keeping cache in sync with database

---

### 6. Case Studies

- **Global Cache Example:**  
  Storing Stack Overflow homepage questions to avoid repeated DB queries.
- **Data Consistency Challenge:**  
  Live score updates require a balance between performance and accuracy.

---

## 🏁 Conclusion

Caching is a powerful technique in system design for improving performance.  
We covered:

- Caching strategies
- Invalidation methods
- Eviction policies  
  The next step will be **designing a caching system for a Facebook News Feed** scenario.

---

## 📚 References

These notes serve as a **revision guide** for system design topics involving caching and performance optimization.
```