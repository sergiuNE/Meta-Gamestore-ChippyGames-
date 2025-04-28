# Kubernetes Deployment Structuur

We deployen onze applicatie in Kubernetes met:

- **Deployment-app.yaml**: De applicatie zelf.
- **Service-app.yaml**: Een service voor interne toegang.
- **ConfigMap-app.yaml**: Om externe configuratie op te slaan.

Voor de database voorzien we een aparte Deployment en Service.
