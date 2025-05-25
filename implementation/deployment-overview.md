# Deployment Overview

## Overzicht

Deze applicatie bestaat uit meerdere microservices, elk met hun eigen Docker-image, Kubernetes Deployment en Service. Voor de Frontend heb ik Vite gebruikt en die draait mee in Docker.

Elke service is afzonderlijk gecontaineriseerd en gedeployed in Kubernetes. De toegang verloopt via `kubectl port-forward` of een Ingress-configuratie met `kubectl port-forward -n ingress-nginx service/ingress-nginx-controller 8080:80`.

---

## Microservices

### 1. Deal Service

- **Bestand**: `k8s/deal-service.yaml`
- **Endpoint**: `/deals`
- **Dummy data**: Database met deals en prijzen
- **Port-forward voorbeeld**: `kubectl port-forward svc/deal-service 3004:80`

### 2. Game Service

- **Bestand**: `k8s/game-service.yaml`
- **Endpoint**: `/games`
- **Dummy data**: JSON-lijst met games: titels, genre, rating & more
- **Port-forward voorbeeld**: `kubectl port-forward svc/game-service 3001:80`

### 3. Platform Service

- **Bestand**: `k8s/platform-service.yaml`
- **Endpoint**: `/platforms`
- **Dummy data**: Database met platformen
- **Port-forward voorbeeld**: `kubectl port-forward svc/platform-service 3002:80`

### 4. User Service

- **Bestand**: `k8s/user-service.yaml`
- **Endpoint**: `/users`
- **Dummy data**: Database met gebruikers
- **Port-forward voorbeeld**: `kubectl port-forward svc/user-service 3003:80`

---

## Database

- **Image**: `postgres:latest`
- **Deployment bestand**: `k8s/deployment-db.yaml`
- **Service bestand**: `k8s/service-db.yaml`
- **Toegangspoort**: 5432
- **Gebruikt door**: `deal-service`, `user-service`, `platform-service`

---

## Toegang via Ingress

Er is een Ingress-resource voorzien waarmee alle microservices bereikbaar zijn via verschillende paden op één domein/poort.

Bijvoorbeeld:

- `/deals` → `deal-service`
- `/games` → `game-service`
- `/platforms` → `platform-service`
- `/users` → `user-service`

Ingress-bestand: `k8s/ingress.yaml`

---

## Opstartvolgorde

1. Database-laag (automatisch)

- PostgreSQL voor db-deployment
- MySQL voor service-specifieke databases (deals-db, platforms-db, users-db)

2. Microservices (deal, game, platform, user)
3. Ingress-controller
4. Frontend via Docker Compose

---

## Status controleren

- `kubectl get pods`
- `kubectl get services`
- `kubectl describe ingress`
