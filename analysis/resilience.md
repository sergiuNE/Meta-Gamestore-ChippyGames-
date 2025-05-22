# Deze sectie maakt deel uit van de technische implementatie

# Resilience Mechanismen

Ons systeem moet blijven werken, ook als externe winkels (zoals Steam of Amazon) tijdelijk offline zijn. Daarom gebruiken we deze technieken:

## Retries

Als een verzoek tijdelijk mislukt (bijv. door een netwerkfout), probeert het systeem het automatisch nog een paar keer opnieuw.

Voorbeeldconfiguratie in Game Service:

```js
axiosRetry(axios, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (error) => {
    return axiosRetry.isNetworkError(error) || error.response?.status >= 500;
  },
});
```

## Fallback

Als een externe API zoals de Deal Service niet reageert, gebruiken we een fallback response (zoals een lege lijst). Dit voorkomt dat de hele applicatie crasht:

```js
return []; // fallback als deals niet opgehaald kunnen worden
```
