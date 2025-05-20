# ADR-0002: Kubernetes voor Orchestratie

## Status: Accepted

## Context

We willen onze microservices automatisch kunnen beheren: opstarten, schalen, opnieuw opstarten bij fouten en makkelijk configureren.

## Beslissing

We gebruiken Kubernetes als orchestratieplatform.

## Consequenties

- Kubernetes zorgt voor hoge beschikbaarheid en automatische updates.
- We kunnen declaratieve configuraties gebruiken via YAML-bestanden.
- De infrastructuur wordt technischer en vereist meer kennis om goed te beheren.
- Kubernetes werkt goed samen met CI/CD pipelines.
