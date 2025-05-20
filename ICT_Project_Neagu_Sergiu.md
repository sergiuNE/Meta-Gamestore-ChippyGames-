# Architectural Decision Record's

# ADR-0001: Microservices Architectuur





# Resilience Mechanismen

Ons systeem moet blijven werken, ook als externe winkels (zoals Steam of Amazon) tijdelijk offline zijn. Daarom gebruiken we deze technieken:

## Circuit Breakers

Als een externe API te vaak faalt, schakelt het systeem tijdelijk over op een ‘open’ status. Dan worden nieuwe verzoeken niet meer verstuurd naar de falende bron, om verdere problemen te voorkomen.

## Retries

Als een verzoek tijdelijk mislukt (bijv. door een netwerkfout), probeert het systeem het automatisch nog een paar keer opnieuw.

## Fallback

Als iets blijft mislukken, tonen we een tijdelijke vervanging. Bijvoorbeeld:

- Oude (gecachete) prijzen
- Een melding dat data tijdelijk niet beschikbaar is




# Observability in mijn microservices

Voor observability heb ik per service gezorgd voor logging en healthchecks:

---

## 1. Logging via `console.log`, `console.error`, en `console.warn`

- **`console.log()`** gebruik ik voor algemene meldingen zoals opstartinformatie (bijv. `Service running on port...`).

- **`console.error()`** wordt gebruikt bij fouten zoals netwerkproblemen of databasefouten. Dit helpt om snel te zien waar het probleem zit:

  ```js
  console.error("Error fetching games with deals:", error);
  ```

- **`console.warn()`** gebruik ik om mogelijke issues aan te geven die niet meteen fataal zijn, zoals wanneer een bepaalde game geen deals heeft:
  ```js
  console.warn(`Geen deals gevonden voor game ${gameId}`);
  ```

## 2. /health endpoint

- Elke service bevat een eenvoudig healthcheck endpoint:

```js
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});
```

- Deze endpoint kan gebruikt worden door een load balancer of monitoring tool om te checken of de service live en bereikbaar is.

## Optioneel

- Morgan gebruiken voor automatisch loggen van HTTP requests.
- Toevoegen van Metrics en tracing.
