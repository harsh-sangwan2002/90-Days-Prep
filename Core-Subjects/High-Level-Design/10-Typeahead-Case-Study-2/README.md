# Comprehensive Revision Notes: Typeahead System Design

## 1. Introduction to Typeahead Systems

- **Definition**: A Typeahead system (a.k.a. Autocomplete) provides real-time query suggestions as a user types.
- **Examples**: Search engines (Google, Bing), e-commerce sites (Amazon), streaming platforms (YouTube, Netflix).
- **Key Goal**: Deliver **relevant suggestions** with **low latency** (<100ms) at **scale**.

---

## 2. Core Concepts in System Design

### Minimum Viable Product (MVP)

- Return suggestions based on:

  - Query frequency (most searched terms).
  - Pre-computed top-N suggestions for common prefixes.

- Ensure low latency for smooth user experience.

### Scale Estimation

- Estimate **Queries Per Second (QPS)**.
- Data growth: millions–billions of terms.
- Consider **read-heavy** vs **write-heavy** workloads.

### Trade-offs

- **High Availability > Strong Consistency**:

  - Users prefer fast results even if slightly stale.

- **Eventual Consistency**:

  - Updates (new terms or frequencies) may take time to propagate across shards/replicas.

### Sharding

- **Why**: Distribute load across machines.
- **Methods**:

  - Prefix-based sharding (all queries starting with `ab*` go to one shard).
  - Hash-based sharding for balancing uneven prefix distribution.

---

## 3. Data Structure Approaches

### (A) Trie Approach

- **Structure**: Tree where each node represents a character.
- **Features**:

  - Store word frequency at terminal nodes.
  - Traverse prefix path → explore subtree for completions.

- **Advantages**: Fast prefix lookups.
- **Drawbacks**:

  - High memory usage (each node stores children map).
  - Difficult to shard (trie is hierarchical, not evenly distributable).

### (B) HashMap / Key-Value Store Approach

- **Idea**: Store precomputed suggestions for each prefix.
- **Data Model**:

  - `FrequencyMap`: term → frequency.
  - `TopKSuggestionsMap`: prefix → list of top-k terms.

- **Advantages**:

  - Easy to shard (prefix → shard using consistent hashing).
  - Many KV stores (e.g., Redis, DynamoDB) provide built-in replication + sharding.

- **Trade-off**: Higher storage (prefix explosion, since each prefix stores top-k).

---

## 4. System Characteristics

### Latency & Availability

- Must serve results **within \~50–100ms**.
- Eventual consistency helps balance speed vs. correctness.

### Query Handling

- **Read Queries**: Much more frequent (user typing triggers queries every keystroke).
- **Write Queries**: Updating term frequencies, adding new queries.
- System is generally **read-heavy** but should efficiently handle frequent updates.

---

## 5. Deployment & Infrastructure

### Capacity & Sizing

- Estimate:

  - **Daily Active Users (DAUs)** × avg queries/user.
  - Storage = raw search data + replica copies.

- Plan for scaling over multiple years.

### Redundancy

- Use replication for fault tolerance.
- Load balancing across shards.

### Precomputation

- Periodically recompute **Top-K prefix suggestions** offline (batch jobs using MapReduce/Spark).
- Push updates into KV store for fast online lookups.

---

## 6. Advanced Optimizations

- **Caching**: Popular prefixes cached in-memory (Redis, Memcached).
- **Personalization**: Tailor suggestions per user using history or location.
- **Ranking**: Machine learning models for relevance ranking beyond frequency.
- **Logging & Feedback**: Track suggestion clicks to refine ranking.

---

## 7. Conclusion

- A **Typeahead system** balances **performance, scalability, and reliability**.
- **Trie** provides efficient lookups but is hard to scale.
- **HashMap/KV store** is more scalable and widely used in production.
- Prioritize **availability + low latency**, with **eventual consistency** acceptable.
- Precomputation, sharding, and caching are key to handling **large-scale, real-time workloads**.

---
