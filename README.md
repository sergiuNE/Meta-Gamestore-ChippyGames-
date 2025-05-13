# GameHub Meta

A smart game comparison platform where gamers can:

- Find and compare game prices across digital and physical stores
- Track their game collection (manual entry or automatic sync with Steam, Epic, etc.)
- Get alerts when games drop to their target price
- Discover upcoming game releases
- Get personalized game recommendations

> Created for the ICT Architecture course project – featuring both a traditional single-system design and a modern multi-service implementation using Kubernetes.

---

## Main Features

- 🎮 Filter by platforms and stores (PC, PlayStation, Xbox, Nintendo)
- 💿 Find deals for physical games (discs and cartridges)
- 🔜 Browse upcoming game releases
- 🎬 Game details with screenshots, trailers, review scores and playtime info
- 📸 Media uploads from both publishers and community members (with moderation)
- 📚 Import your game collection automatically or manage it manually
- ⭐ Rate any game (whether you own it or not)
- 📊 Track price history across all stores and regions
- 🔔 Set price alerts for games on your wishlist
- 👍 Get game suggestions based on what you already like
- 💰 Funding tracker showing affiliate income and user donations
- ⚡ Keep working even when some game stores are down
- 🏷️ Highlight big sales events across different stores

---

## Project Structure

This project explores two different ways to build the system:

### Traditional Single-System Approach (Design Only)

- Proposed style: **Layered** or **Modular** single system
- Benefits: Easier to set up, test, and launch quickly

### 🔹 Multi-Service Approach (With Working Kubernetes Demo)

- Separate smaller systems for:
  - Game Database
  - Price Tracking
  - User Accounts & Login
  - Game Recommendations
  - Alerts
  - Content Moderation
- Includes:
  - ✅ Basic Node.js services
  - ✅ Simple test APIs with sample data
  - ✅ Kubernetes setup files
  - ✅ Login, monitoring, and failure recovery

---

## ⚙️ Technologies Used

- `Node.js` + `Express` (for building the services)
- `Kubernetes` (for running the multi-service demo)
- `Mermaid.js` (for creating diagrams)
- `Markdown` (for documentation)
- `MySQL` (for data storage)
- Optional: `Redis`, `MongoDB`, `PostgreSQL`, `Prometheus`, `Keycloak`

---

## Key Design Decisions

- **Main System Qualities** (detailed in full report):

  - Handles growth well
  - Stays available when parts fail
  - Easy to update and improve

- 📝 5+ Architecture Decision Records including:
  - Microservices Architecture
  - Kubernetes for Orchestration
  - CI/CD Pipeline Implementation
  - Starting with a Monolithic Approach
  - Database Selection (PostgreSQL)

---

## 🚀 Running the Demo (Kubernetes)

> Each service provides a basic API that returns sample data.

1. Download the project
2. Set up `kubectl` and `minikube` or connect to your Kubernetes cluster
3. Apply the setup files:
   ```bash
   kubectl apply -f k8s/
   ```

## Creator

Built by Neagu Sergiu, ICT Architecture student – AP Hogeschool
