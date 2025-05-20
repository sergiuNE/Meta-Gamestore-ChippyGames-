# ADR-0004: Start met Monolithische Architectuur

## Status: Accepted

## Context

Een monolithische applicatie is eenvoudiger te bouwen en debuggen in de beginfase. Daarom beginnen we in onze analyse met het ontwerp van één applicatie waarin alle onderdelen samen draaien.

## Beslissing

Voor het analyseren en begrijpen van de logische structuur starten we met een monolithische layered architecture. In onze implementatie splitsen we de onderdelen wel meteen op in afzonderlijke services.

## Consequenties

- De logica is initieel eenvoudiger te ontwerpen als één geheel.
- Voor de implementatie schakelen we snel over naar microservices voor betere schaalbaarheid.
