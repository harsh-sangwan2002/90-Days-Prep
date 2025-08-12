# System Design Class — Caching & Consistent Hashing

## 📌 Overview

In this class, we explored:

- **Consistent Hashing** — for balanced data distribution in distributed systems
- **Caching** — for faster data retrieval and reduced latency

These concepts are fundamental in **scalable system design** and are widely used in real-world high-performance architectures.

---

## 🔄 Consistent Hashing

### **Definition**

A technique to **distribute data across multiple servers** so that:

- Adding/removing a server **minimally affects key mapping**
- Load remains balanced across servers

---

### **Implementation Steps**

1. **Hash Functions**

   - `HS` — hashes server IDs
   - `HU` — hashes user/request IDs
   - Values mapped into a fixed range (e.g., via modulo operation)

2. **Logical Ring**

   - Servers and requests are **plotted on a ring** using hash values
   - Requests are assigned to the **next clockwise server** from their hash position

3. **Load Balancing**

   - All servers should handle approximately equal traffic
   - Balance improves as **number of servers increases**

4. **Server Failure**
   - Load from a failed server is **redirected** to the next available server
   - Minimal data movement required

---

## ⚡ Caching

### **Definition**

Caching stores **copies of frequently accessed data** in a **faster storage layer**, reducing data retrieval time and improving performance.

---

### **Types of Caching**

1. **Client-Side Caching**

   - Data stored on the client device
   - Example: mobile apps caching images locally

2. **In-Browser Caching**

   - Browser stores static assets & DNS records
   - Reduces repeated network lookups

3. **CDN (Content Delivery Network)**

   - Distributes static content from geographically closer servers
   - Examples: **Akamai, Cloudflare, FBCDN (Facebook)**

4. **Local vs Global Caching**
   - **Local Caching** — on the application server to reduce DB hits
   - **Global Caching** — distributed cache systems like **Redis, Memcached**

---

### **Challenges with Caching**

#### **1. Data Staleness**

- Cache may be outdated if the source of truth changes  
  **Solutions:**
- **TTL (Time to Live)** — expire old cache automatically
- **Write Strategies**:
  - **Write Through** — write to cache + DB at the same time
  - **Write Back** — write to cache, then asynchronously to DB
  - **Write Around** — write directly to DB, skip cache initially

#### **2. Cache Eviction**

- When cache is full, older data is removed  
  **Policies:**
- **FIFO** — First In First Out
- **LRU** — Least Recently Used
- **LIFO** — Last In First Out
- **MRU** — Most Recently Used

---

## 📝 Conclusion

- **Consistent Hashing** ensures efficient load distribution with minimal disruption during scaling or failures.
- **Caching** accelerates data access, reduces load on backend systems, and enhances user experience.
- Together, they are **cornerstones of scalable, high-performance system architecture**.

**Next Steps:**  
We will dive deeper into **advanced caching strategies and implementations** in upcoming classes.
```
