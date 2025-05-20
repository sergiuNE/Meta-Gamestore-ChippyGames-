# ADR-0003: CI/CD Pipelines (Continuous Integration/Deployment)

## Status: Accepted

## Context

We willen dat nieuwe versies van onze software automatisch gebouwd en gepubliceerd worden.

## Beslissing

We bouwen een CI/CD pipeline met GitHub Actions. Het bestand `deploy.yml` heeft de inhoud van hoe we CI/CD deployen naar Docker Hub. Bij elke push naar **main** worden de applicaties gebouwd en geüpload naar Docker Hub.
We plannen om later ook automatisch te deployen naar Kubernetes, maar dat lukt nu niet met een lokaal cluster. (`kubernetes.docker.internal`)

Een oplossing hiervoor is het gebruik van een **extern Kubernetes-cluster**, zoals Google Kubernetes Engine (GKE). Deze cluster vereist een betalende setup, daaron hebben we besloten om **de CI/CD pipeline op te zetten tot en met Docker Hub**, en de Kubernetes-deploy stap te behouden als documentatie.

## Consequenties

- De pipeline voert automatisch builds en Docker-pushes uit bij elke push naar `main`.
- De Kubernetes-deploy stap is voorbereid, maar wordt (nog) niet uitgevoerd in CI/CD.
- Indien later een extern cluster beschikbaar wordt, kan de pipeline eenvoudig worden uitgebreid.
