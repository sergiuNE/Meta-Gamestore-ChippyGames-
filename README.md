# GameHub Meta

A smart meta-store for gamers to:

- Compare game prices across digital & physical stores
- Manage their game collection (manual & auto-sync with Steam, Epic, etc.)
- Get price-drop alerts
- Browse curated upcoming releases
- Receive game recommendations based on their preferences

> Developed as part of the ICT Architecture course – featuring both a monolithic design proposal and a microservices-based Kubernetes proof-of-concept.

---

## Features

- 🕹️ Platform & Store filtering (PC, PlayStation, Xbox, Nintendo)
- 💿 Support for physical media deals (e.g. Amazon, Bol)
- 🔮 “Coming Soon” section for near-future releases
- 📷 Game details with screenshots, trailers, metascore & playtime
- 📤 Community & publisher-submitted media (moderated)
- 📚 Auto-import & manual game collection management
- ⭐ Ratings for all users (collection or not)
- 📉 Regional price history tracking
- 🔔 Custom price alerts for any game
- 🎯 Smart recommendations from your collection & ratings
- 💸 Revenue tracking from affiliate links & donations
- 🔁 Resilience to store outages
- 🔥 Highlighted store-wide promotions

---

## Architecture Overview

This project explores two architectural models:

### Monolithic Architecture (Design Only)

- Proposed style: **Layered Monolith** or **Modular Monolith**
- Use case: Simpler deployment, easier to debug, good for MVP

### 🔹 Microservices Architecture (With Kubernetes PoC)

- Separate services for:
  - Game Catalog
  - Price Tracker
  - User Profile & Auth
  - Recommendations
  - Notifications
  - Curator Panel
- Uses:
  - ✅ Node.js placeholders
  - ✅ Dummy JSON APIs
  - ✅ Kubernetes deployment configs
  - ✅ Auth, monitoring, resilience setups

---

## ⚙️ Technologies & Tools

- `Node.js` + `Express` (for microservices)
- `Kubernetes` (PoC deployment)
- `Mermaid.js` (architecture diagrams)
- `Markdown` (reporting)
- `MySQL` (databases)
- Optional: `Redis`, `MongoDB`, `PostgreSQL`, `Prometheus`, `Keycloak`

---

## ICT Architecture Highlights

- **Driving Characteristics** (see full report):

  - Scalability
  - Availability
  - Maintainability

- 📄 5+ ADRs covering:
  - Service design
  - Auth strategy
  - Monitoring & recovery
  - Platform boundaries
  - Monolith vs microservice trade-offs

---

## 🚀 Running the PoC (Kubernetes)

> Each microservice is self-contained and exposes a REST API with dummy JSON.

1. Clone the repo
2. Install `kubectl` and `minikube` or connect to your cluster
3. Apply deployment files:
   ```bash
   kubectl apply -f k8s/
   ```

## Author

Developed by Neagu Sergiu, student of ICT Architecture – AP Hogeschool
