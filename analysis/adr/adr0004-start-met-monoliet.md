# ADR-0004: Start met Monolithische Architectuur

## Status: Accepted

## Context

Een monolithische applicatie is eenvoudiger te bouwen en debuggen in de beginfase. Daarom beginnen we in onze analyse met het ontwerp van één applicatie waarin alle onderdelen samen draaien.

## Beslissing

Voor de initiële analyse werken we in een monolithisch denkmodel, terwijl de implementatie microservices volgt.

## Consequenties

- De logica is initieel eenvoudiger te ontwerpen als één geheel.
- Voor de implementatie schakelen we snel over naar microservices voor betere schaalbaarheid.
