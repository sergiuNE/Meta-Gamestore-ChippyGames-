
---

## 2. `deployment-overview.md`

```markdown
# Deployment Overzicht

Ons systeem wordt gedeployed op Kubernetes en bestaat uit:

- **API Gateway** (Nginx Ingress Controller)
- **Services**:
  - AuthService
  - GameCatalogService
  - DealAggregatorService
  - CollectionService
- **Database**:
  - PostgreSQL StatefulSet

### Simplified Overview

```mermaid
graph TD
    Ingress[Nginx Ingress Controller]
    AuthService[AuthService Deployment]
    GameService[GameCatalogService Deployment]
    DealService[DealAggregatorService Deployment]
    CollectionService[CollectionService Deployment]
    DB[(PostgreSQL StatefulSet)]

    Ingress --> AuthService
    Ingress --> GameService
    Ingress --> DealService
    Ingress --> CollectionService
    AuthService --> DB
    GameService --> DB
    DealService --> DB
    CollectionService --> DB
