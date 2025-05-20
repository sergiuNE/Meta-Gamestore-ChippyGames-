# Dit document hoort bij de implementatiefase

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
