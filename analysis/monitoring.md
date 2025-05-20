# Dit document hoort bij de implementatiefase

# Monitoring Overzicht

## Gebruikte tools:

- **Prometheus**: haalt cijfers (metrics) op van mijn services
- **Grafana**: toont de cijfers in mooie grafieken en dashboards
- **Alertmanager**: stuurt waarschuwingen bij problemen

## Wat we monitoren:

- Hoe snel de API reageert
- Foutmeldingen van de services (zoals 500-fouten)
- Of de externe winkels (bijv. Steam, Amazon...) bereikbaar zijn
- Hoe snel de database reageert
- Geheugen- en CPU-gebruik per container

## Opmerking

Deze tools (Prometheus, Grafana...) zijn optioneel en vooral handig als je in productie draait. Ze geven een goed beeld van hoe je systeem het doet en kunnen je automatisch waarschuwen bij problemen.

---
