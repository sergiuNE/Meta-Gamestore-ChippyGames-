# GameHub Meta

A smart game comparison platform where gamers can:

* Find and compare game prices across digital and physical stores
* Track their game collection (manual entry or automatic sync with Steam, Epic, etc.)
* Get alerts when games drop to their target price
* Discover upcoming game releases
* Get personalized game recommendations

Created for the ICT Architecture course project – featuring both a traditional single-system design and a modern multi-service implementation using Kubernetes.

---

## Main Features

* Filter by platforms and stores (PC, PlayStation, Xbox, Nintendo)
* Find deals for physical games (discs and cartridges)
* Browse upcoming game releases
* Game details with screenshots, trailers, review scores and playtime info
* Media uploads from both publishers and community members (with moderation)
* Import your game collection automatically or manage it manually
* Rate any game (whether you own it or not)
* Track price history across all stores and regions
* Set price alerts for games on your wishlist
* Get game suggestions based on what you already like
* Funding tracker showing affiliate income and user donations
* Keep working even when some game stores are down
* Highlight big sales events across different stores

---

## Project Structure

This project explores two different ways to build the system:

### Traditional Single-System Approach (Design Only)

* Proposed style: Layered or modular monolith
* Benefits: Easier to set up, test, and launch quickly

### Multi-Service Approach (Kubernetes Demo)

The system is split into multiple services:

* Game Database Service
* Price Tracking Service
* User Accounts & Login Service
* Game Recommendation Service
* Alerts Service
* Content Moderation Service

Includes:

* Basic Node.js + Express services
* Simple test APIs with sample data
* Kubernetes deployment files
* Login, monitoring, and failure recovery

---

## Technologies Used

* Node.js + Express (backend services)
* Kubernetes (container orchestration)
* Docker + Docker Compose (local development)
* MySQL (data storage per service)
* Ingress NGINX (routing)
* Postman (API testing)
* Optional: Redis, MongoDB, PostgreSQL, Prometheus, Keycloak
* Markdown (documentation)

---

## Key Architecture Decisions

Main system qualities:

* Scales efficiently under load
* Remains available during service failures
* Supports easy updates and deployment
* Modular microservice design

Architecture Decision Records include:

* Microservices Architecture
* Kubernetes for Orchestration
* CI/CD Pipeline Design
* Initial Monolithic Approach (comparison)
* Database Selection (MySQL / relational focus)

---

## Running the Project

### 1. Local Docker Setup

Inside `game-deals-app`:

```bash
docker compose up --build
```

To stop:

```bash
docker compose down
```

---

### 2. Kubernetes Setup

Apply all Kubernetes configurations:

```bash
kubectl apply -f k8s/
```

Check running resources:

```bash
kubectl get pods
kubectl get services
kubectl get deployments
```

---

## Ingress Setup & Testing

Start ingress port forwarding:

```bash
kubectl port-forward -n ingress-nginx service/ingress-nginx-controller 8080:80
```

---

## Access Services

### NodePort access:

* [http://localhost:30001/games](http://localhost:30001/games)
* [http://localhost:30002/platforms](http://localhost:30002/platforms)
* [http://localhost:30003/users](http://localhost:30003/users)
* [http://localhost:30004/deals](http://localhost:30004/deals)

---

### Domain-based access:

* [http://game.chippygames.com:30001/games](http://game.chippygames.com:30001/games)
* [http://platform.chippygames.com:30002/platforms](http://platform.chippygames.com:30002/platforms)
* [http://user.chippygames.com:30003/users](http://user.chippygames.com:30003/users)
* [http://deal.chippygames.com:30004/deals](http://deal.chippygames.com:30004/deals)

---

### Ingress access:

* [http://game.chippygames.com/games](http://game.chippygames.com/games)
* [http://platform.chippygames.com/platforms](http://platform.chippygames.com/platforms)
* [http://user.chippygames.com/users](http://user.chippygames.com/users)
* [http://deal.chippygames.com/deals](http://deal.chippygames.com/deals)

---

### Cross-service example:

* [http://game.chippygames.com/games-with-deals](http://game.chippygames.com/games-with-deals)

---

## Verification Commands

Check ingress:

```bash
kubectl get ingress
kubectl describe ingress
```

Check pods:

```bash
kubectl get pods
```

Check services:

```bash
kubectl get svc
```

---

## Database Setup in Kubernetes

Each service has its own database pod and service:

* deals-db
* platforms-db
* users-db

All databases:

* Are running as separate pods
* Have their own Kubernetes service
* Listen on MySQL port **3306**

---

### Verify databases:

```bash
kubectl get pods
kubectl get svc
```

---

### Service-to-Database Connection

Each service connects using Kubernetes DNS:

* `deals-db`
* `platforms-db`
* `users-db`

These match the Kubernetes service names directly.

---

## Live Database Logging

Check service logs:

```bash
kubectl logs deployment/deal-service
```

---

## Updating Services

### Rebuild a service:

```bash
docker build -t game-deals-app-game-service .
```

### Apply changes:

```bash
kubectl delete deployment game-service
kubectl apply -f game-service.yaml
```

---

## Testing

### Postman example:

```
GET http://localhost:3004/deals
```

---

## Ingress Status

Check if ingress is active:

```bash
kubectl get ingress
```

---

## Creator

Built by Neagu Sergiu
ICT Architecture student – AP Hogeschool
