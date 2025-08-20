# Revision Notes: Designing a Messenger Application

## Introduction

This class explored the **system design and technical considerations** for creating a scalable messenger application. The goal is to design a system that is **reliable, low-latency, and capable of handling large-scale data**, while providing smooth user experience.

---

## Key Concepts

### Basic Requirements

- **Send & Receive Messages**: Core functionality for message exchange.
- **Real-Time Communication**: Ultra-low latency for seamless interactions.
- **Message History**: Persistent storage allowing users to access old conversations.
- **Multi-format Support**: Text, emojis, media, attachments.
- **Conversation Management**: Access to recent and ongoing conversations.

---

## Design Challenges & Solutions

### Consistency vs Availability

- Messenger apps prioritize **high consistency** → messages must be delivered reliably and without duplication.

### Sharding Strategy

1. **UserID-based Sharding**

   - All conversations for a user stored on the same shard.
   - Simpler to fetch a user’s chat history.

2. **ConversationID-based Sharding**

   - All messages of a conversation stored on one shard.
   - Reduces cross-shard communication (“intrashard” operation).

### Handling Large Data Volumes

- Popular apps handle **petabytes of data** daily.
- **Caching is critical**:

  - Use **write-through cache** → writes go to both DB & cache.
  - Ensures consistency while reducing read latency.

---

## APIs & Operations

- **SendMessage(senderId, recipientId, text, messageId)**

  - Sends a message.
  - Must be **idempotent** (unique `messageId` avoids duplication).

- **GetConversations(userId, offset, limit)**

  - Retrieves recent conversations (supports pagination).

- **GetMessages(userId, conversationId, offset, limit)**

  - Fetches messages in a conversation.

### Idempotency

- Prevents duplicate messages.
- Achieved using **unique messageId per message**.

---

## Caching Strategy

- Cache **recent messages & conversations** for quick access.
- **Write-through caching** ensures:

  - Strong consistency.
  - No stale data during live chats.

---

## Database Considerations

- **Database Selection**:

  - NoSQL systems (e.g., HBase, Cassandra) → suitable for **write-heavy** operations and scale.

- **Data Distribution & Sharding**:

  - Sharding needed for high throughput and low latency.
  - Should align with access patterns (user-based or conversation-based).

---

## Additional Features (Secondary in Initial Design)

- **Read Receipts**
- **Typing Indicators**
- **Presence (Online/Offline Status)**
- **Group Messaging**

---

## Conclusion

Designing a messenger app involves:

- **Balancing consistency and availability**.
- **Efficient sharding strategies** to handle scale.
- **Caching for performance** with write-through consistency.
- **Choosing appropriate databases** (NoSQL) for high-volume writes.

By implementing these design principles, a messenger application can **scale reliably, maintain low latency, and support billions of users effectively**.

---
