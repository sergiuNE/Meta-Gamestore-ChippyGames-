# Architectuuroverzicht

## Fase 1: Monolithische Architectuur

We starten met een **Layered Monolithic Architecture**, bestaande uit:

- **Presentation Layer**: UI en routing
- **Application Layer**: Business logica
- **Data Layer**: Repositories en DB access

### Reden:

- Snelle prototyping
- Minder overhead in beginfase
- Eenvoudig te debuggen en te deployen

Deze stijl maakt migratie naar microservices later eenvoudiger omdat de modules nu al logisch gescheiden zijn.

---

## Mapping van Logische naar Fysieke Architectuur

### Monolithisch

```mermaid
graph TD
    Client[Client (Browser/Mobile)]
    WebServer[Web Server]
    AppServer[Application Server]
    DB[(Database)]

    Client --> WebServer
    WebServer --> AppServer
    AppServer --> DB
```

## Microservices Architectuur

Onderstaande weergave toont de microservice-architectuur inclusief de API Gateway en de belangrijkste subsystemen.

graph TD
Client[Client (Browser/Mobile)]
APIGateway[API Gateway]
AuthService[Authentication Service]
UserService[User Preferences Service]
GameService[Game Catalog Service]
PriceService[Price Tracker Service]
NotificationService[Notification Service]
RecommendationService[Recommendation Engine]
CollectionService[Game Collection Service]
MediaService[Media Management Service]
CuratorService[Curator Dashboard]
StoreAPIService[Store API Integrations]
DB[(Database)]

    Client --> APIGateway
    APIGateway --> AuthService
    APIGateway --> UserService
    APIGateway --> GameService
    APIGateway --> PriceService
    APIGateway --> NotificationService
    APIGateway --> RecommendationService
    APIGateway --> CollectionService
    APIGateway --> MediaService
    APIGateway --> CuratorService
    GameService --> StoreAPIService
    PriceService --> StoreAPIService

    AuthService --> DB
    UserService --> DB
    GameService --> DB
    PriceService --> DB
    NotificationService --> DB
    RecommendationService --> DB
    CollectionService --> DB
    MediaService --> DB
    CuratorService --> DB
