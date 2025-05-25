# Deze sectie maakt deel uit van de technische implementatie

# Observability in mijn microservices

Ik zorg ervoor dat elke service makkelijk te controleren is, met logging en healthchecks.

## 1. Logging (via `console.log`, `console.error`, en `console.warn`)

- **`console.log()`**
  -> Voor gewone info zoals "Service running on port 3000"

- **`console.error()`**
  -> Voor fouten, zoals als iets misgaat met de database of externe API's:

  ```js
  console.error("Error fetching games with deals:", error);
  ```

- **`console.warn()`**
  -> Voor waarschuwingen die geen crash veroorzaken, zoals wanneer er geen deals zijn gevonden:

  ```js
  console.warn(`Geen deals gevonden voor game ${gameId}`);
  ```

## 2. Healthcheck via /health endpoint

Elke service heeft een eenvoudige endpoint om te zien of die nog werkt:

```js
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});
```

- Deze endpoint wordt gebruikt door monitoringtools of Kubernetes om te checken of de service nog "gezond" is.

## Optioneel

- Morgan gebruiken om automatisch alle HTTP-aanvragen te loggen.
- Elastic Stack gebruiken om logingegevens te analyseren.
- Extra: Gebruik maken van Zipkin voor tracing.
