# ADR-0003: CI/CD Pipelines

## Context

We willen continu kunnen deployen zonder manuele tussenkomst.

## Beslissing

We implementeren een CI/CD pipeline met GitHub Actions. Het bestand `deploy.yml` heeft de inhoud van hoe we CI/CD deployen naar DockerHub.
Het doel was om ook automatisch naar Kubernetes te deployen. Dit bleek echter niet mogelijk via een lokaal cluster (`kubernetes.docker.internal`) binnen GitHub Actions, omdat deze omgeving geen toegang heeft tot lokale netwerken.

Een oplossing hiervoor is het gebruik van een **extern Kubernetes-cluster**, zoals Google Kubernetes Engine (GKE). Aangezien deze clusters een betalende setup vereisen of buiten scope vallen, hebben we besloten om **de CI/CD pipeline op te zetten tot en met Docker Hub**, en de Kubernetes-deploy stap te behouden als documentatie van intentie.

## Consequenties

- De pipeline voert automatisch builds en Docker-pushes uit bij elke push naar `main`.
- De Kubernetes-deploy stap is voorbereid, maar wordt (nog) niet uitgevoerd in CI/CD.
- Indien later een extern cluster beschikbaar wordt, kan de pipeline eenvoudig worden uitgebreid.
