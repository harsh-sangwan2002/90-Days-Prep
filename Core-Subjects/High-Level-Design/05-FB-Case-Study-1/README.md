# 📚 Comprehensive Revision Notes: Facebook Newsfeed System Caching & Data Management

## 1️⃣ Introduction to Caching

**Definition:**  
Caching is a technique to store copies of data in a **temporary storage area** so that future requests can be served faster.

**Types of Caching:**

- **Client-Side Caching**: Browser-level storage for assets like images, CSS, and scripts.
- **CDNs (Content Delivery Networks)**: Distribute static assets globally to reduce latency.
- **Local Cache**: Stored on the application server, close to where it is needed.
- **Global Cache**: Distributed cache shared across multiple servers.

---

## 2️⃣ Optimizing Facebook's Newsfeed

### Requirements

- Shows **only recent posts** (typically from the last 24 hours).
- Old posts are not fetched or displayed.

### Data Flow

1. User creates a post → request hits the **application server**.
2. Post is stored in the **database**.
3. A copy is saved in the **global cache**.
4. Retrieval from cache greatly reduces network latency.

---

## 3️⃣ Database Operations & Sharding

### Sharding

- **Definition:** Distributing data across multiple database machines for scalability.
- **Sharding Key:** Often `user_id` to determine the database node.

### Query Types

- **Single Shard Query:** Fetching from one shard (e.g., getting user profile data).
- **Inter-Shard Query:** Aggregating data from multiple shards (e.g., generating the newsfeed).

---

## 4️⃣ Cache Invalidation & Consistency

### Stale Data

- Data in cache can become outdated.
- **TTL (Time To Live)** ensures regular refresh.

### Eventual Consistency

- Updates propagate asynchronously.
- Cache may temporarily serve outdated data before syncing.

---

## 5️⃣ Scaling Challenges

- **Bandwidth Usage:** High fetch rates to shards consume more bandwidth.
- **Load Balancing:** Use consistent hashing to evenly distribute load.
- **Auto-Scaling:** Dynamically allocate resources to handle traffic spikes.

---

## 6️⃣ Storage Strategies for Non-Relational Data

- **Media Content:**  
  Store only **links** in the database, with actual media in **cloud storage** (e.g., AWS S3).
- **CDN Caching:**  
  Serve images/videos quickly without repeatedly hitting the database.

---

## 🏁 Conclusion

Facebook’s Newsfeed caching and data management strategies enable:

- **Fast data access** via distributed caches
- **Freshness of data** using TTL & invalidation
- **Scalability** with sharding & auto-scaling
- **Efficiency** through CDNs & cloud storage

**Next Steps in Learning:**

- Designing distributed storage systems (e.g., Amazon S3)
- Exploring SQL vs. NoSQL database trade-offs
```