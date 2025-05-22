# Architectuuroverzicht

## Fase 1: Monolithische Architectuur

We beginnen met een **laag-voor-laag (layered) monolithische architectuur**, die bestaat uit:

- **Presentatielaag**: webinterface en mobiele clients.
- **Business Logic Layer**: bevat regels voor collecties, aanbevelingen, prijslogica...
- **Integration Layer**: communicatie met externe APIs (Steam, Epic...), authenticatie...
- **Persistence Layer**: toegang tot relationele databases (MySQL) met games, deals, users...

### Waarom?

- Snelle opstart en eerste versie bouwen.
- Minder infrastructuur nodig in het begin.
- Eenvoudiger te testen en fouten op te lossen.

Deze structuur maakt het later makkelijker om over te stappen naar microservices, omdat de onderdelen nu al logisch gescheiden zijn.

---

## Van Logische naar Fysieke Architectuur

### Monolithisch Model (Layered Architecture)

```mermaid
flowchart TD
    Client[Browser/Mobile]
    Nginx[Nginx Reverse Proxy]
    Monolith[(Node.js)]
    DB[(MySQL Database)]

    Client --> Nginx --> Monolith --> DB
```

### Mapping Uitleg

In het begin zitten alle onderdelen (UI, logica en data) samen in één Node.js-applicatie. Alles draait in één codebase, op één server of container. Alleen de database is apart.

In de microservices-versie splitsen we elk onderdeel op in een aparte service (bijv. gebruikers, games, deals...). Elk draait in zijn eigen ‘Pod’ in Kubernetes. Een Pod is een soort ‘doos’ waarin een applicatie draait binnen Kubernetes.

## Microservices Architectuur

Onderstaande tekening toont de microservices-architectuur. Deze bestaat uit een API Gateway, aparte backendservices en koppelingen met externe diensten (zoals game stores).

```mermaid
flowchart TD
    subgraph Client Side
        Client[(Browser/Mobile)]
    end

    subgraph Kubernetes Cluster
        Ingress[Ingress Controller]
       subgraph Services
            Game[Game Service]
            Deal[Deal Service]
            Platform[Platform Service]
            User[User Service]
        end

        subgraph Databases
            GamesDB[(games-db - MySQL)]
            DealsDB[(deals-db - MySQL)]
            PlatformsDB[(platforms-db - MySQL)]
            UsersDB[(users-db - MySQL)]
        end
    end

    %% Ingress routing
    Client --> Ingress
    Ingress --> Game
    Ingress --> Deal
    Ingress --> Platform
    Ingress --> User

    %% Service to DB connections
    Game --> GamesDB
    Deal --> DealsDB
    Platform --> PlatformsDB
    User --> UsersDB
```

## Voor- en Nadelen van Microservices

### Voordelen

- Makkelijk schaalbaar: We kunnen delen van de applicatie apart groter maken als dat nodig is, zonder de hele app aan te passen.
- Teams kunnen los van elkaar werken: Elk team kan aan zijn eigen onderdeel werken en het ook apart online zetten.
- Vrijheid in technologie: Elk onderdeel mag zijn eigen programmeertaal of database gebruiken als dat beter past.

### Nadelen

- Meer onderdelen: We hebben veel losse stukjes software die goed met elkaar moeten samenwerken, dat is moeilijker dan één geheel.
- Fouten opsporen is lastiger: Als er iets misgaat, is het moeilijker om te vinden waar precies.
- Meer werk voor DevOps: Dingen zoals het online zetten, updaten en beheren van de onderdelen zijn complexer.

## Fysieke Architectuur (Microservices)

In dit model draait elke service in een aparte Docker-container binnen een Kubernetes-cluster.

Elke microservice wordt apart gedeployed (uitgerold) met een eigen configuratie en communicatiekanaal. We gebruiken een Ingress Controller om verkeer van buitenaf (bijv. chippygames.com) naar de juiste service te sturen.

De database draait ook als een aparte container (Pod) in het cluster.

De CI/CD pipeline met GitHub Actions zorgt ervoor dat bij elke wijziging automatisch een nieuwe versie wordt gebouwd, geüpload naar Docker Hub, en (later configureren) gedeployed naar Kubernetes.

## Waarom dit werkt

- Elke service kan apart worden aangepast of herstart zonder dat het hele systeem stopt.
- Kubernetes controleert automatisch of alles nog werkt (met health checks).
- Het systeem is beter bestand tegen fouten en groeit makkelijk mee.

## Monitoring, Authenticatie en Resilience

De microservicesarchitectuur ondersteunt:

- **Monitoring** via `/health` endpoints en Prometheus. In deze demo is dit geïmplementeerd op de Game Service. Zie `monitoring.md` voor details.
- **Authenticatie** via een aparte `auth-service` met JWT-tokens. Routes kunnen beveiligd worden met middleware. Meer uitleg staat in `authentication.md`.

- **Resilience** dankzij Kubernetes (herstart bij falen), retries (bij tijdelijke netwerkfouten) en fallback-mechanismen (zoals een lege lijst als een externe service faalt). Details in `resilience.md`.
