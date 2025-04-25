# Logische componenten

We combineren de _actor/action_ en _workflow approach_:

## Actors:

- Bezoeker (Niet ingelogd)
- Ingelogde gebruiker
- Curator
- Winkel API’s (Amazon, Steam, etc.)
- Admin

## Componenten:

- Auth & User Management
- Game Catalogus
- Deals Aggregator
- Store Connectors (scrapers / API clients)
- Curatie Module
- Collection Manager
- Aanbevelingensysteem
- Notificatie Service
- Analytics (Affiliate + Cost Recovery)
- Admin dashboard

## Workflow (voorbeeld):

1. User logt in → personalisatie geladen
2. User bekijkt game → catalogus + deal data samengevoegd
3. User voegt toe aan collectie → aanbevelingen aangepast
4. Notificatie-service monitort prijzen

## Diagram

```mermaid
graph TD
    UI[User Interface]
    Auth[Auth & User Management]
    Catalog[Game Catalogus]
    Deals[Deals Aggregator]
    Connectors[Store Connectors]
    Curatie[Curatie Module]
    Collectie[Collection Manager]
    Aanbevelingen[Aanbevelingensysteem]
    Notificatie[Notificatie Service]
    Analytics[Analytics]
    Admin[Admin Dashboard]
    DB[(Database)]

    UI --> Auth
    UI --> Catalog
    UI --> Deals
    UI --> Curatie
    UI --> Collectie
    UI --> Aanbevelingen
    UI --> Notificatie
    UI --> Analytics
    UI --> Admin

    Deals --> Connectors
    Catalog --> Connectors
    Auth --> DB
    Catalog --> DB
    Deals --> DB
    Curatie --> DB
    Collectie --> DB
    Aanbevelingen --> DB
    Notificatie --> DB
    Analytics --> DB
    Admin --> DB
```
