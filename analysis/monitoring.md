# Deze sectie maakt deel uit van de technische implementatie

# Monitoring Overzicht

## Gebruikte tools:

- **Prometheus**: Verzamelt runtime-metrics van de game-service
- **Alertmanager**: Stuurt waarschuwingen bij problemen

## Wat we monitoren (momenteel enkel voor de Game Service):

- Beschikbaarheid van de Game Service via `/health` endpoint  
  (wordt ook gebruikt door observability/Kubernetes)
- Basis-metrics via Prometheus, zoals:
  - Uptime van de Game Service
  - Eventuele errors in de Game Service
- Integriteit van externe API’s:
  - Fallback logging bij falende externe services (zoals Deal Service)

## Opmerking

Voor deze demo zijn metrics enkel geïmplementeerd op de Game Service. In een productieomgeving zouden wij dit uitbreiden naar alle services — bijvoorbeeld via een Prometheus sidecar of door dezelfde code in elk servicebestand op te nemen.
