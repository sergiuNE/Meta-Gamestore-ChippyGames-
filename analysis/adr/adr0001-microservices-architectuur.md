# ADR-0001: Microservices Architectuur

## Status: Accepted

## Context

Ons systeem heeft veel verschillende onderdelen (zoals deals, platformen, users...) die elk apart kunnen evolueren. Omdat we willen dat het systeem schaalbaar, betrouwbaar en makkelijk onderhoudbaar is, is het handig om deze onderdelen los van elkaar te bouwen.

## Beslissing

We kiezen voor een microservices architectuur. Elk onderdeel van het systeem wordt een aparte service.

## Consequenties

- Elke service kan apart ontwikkeld, getest en geschaald worden.
- Fouten in één service brengen minder snel het hele systeem in gevaar.
- We moeten goed nadenken over communicatie tussen services (API’s, foutafhandeling...).
