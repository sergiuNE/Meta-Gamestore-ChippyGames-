# Karakteristieken van het Systeem

## Algemene Eigenschappen

### 1. Snelheid (Performance)

Omdat prijzen en kortingen vaak veranderen en we gegevens ophalen van externe winkels, moet het systeem snel kunnen reageren.

### 2. Beschikbaarheid (Availability)

Gebruikers verwachten dat het systeem altijd werkt. Als een winkel tijdelijk offline is (bijv. Steam of Amazon), moet ons systeem blijven draaien en eventueel tijdelijke oplossingen gebruiken.

### 3. Schaalbaarheid (Scalability)

Wanneer het aantal gebruikers, winkels of games groeit, moet het systeem mee kunnen groeien zonder traag of instabiel te worden.

### 4. Onderhoudbaarheid (Maintainability)

Elke service moet apart aangepast kunnen worden zonder dat andere onderdelen kapot gaan. Dit maakt het eenvoudiger om fouten op te lossen of nieuwe functies toe te voegen.

### 5. Beveiliging (Security)

- Gebruikersgegevens zoals wachtwoorden, collecties en voorkeuren moeten veilig worden opgeslagen en verstuurd.
- Bescherming tegen injection.
- Cooldown na drie mislukte inlogpogingen.
- Alle communicatie verloopt via HTTPS (in productie).

---

# Driving Characteristics (belangrijkste 3)

## 1. **Live bijwerken van gegevens**

## Categorie: Performance

→ Kortingen kunnen snel veranderen. Daarom moet ons systeem bijna live updates kunnen doen, met hulp van snelle opslag (caching) van eerder opgehaalde data en optimalisaties.

## 2. **Blijft werken bij externe storingen**

## Categorie: Resilience (valt onder Availability en Reliability)

→ Als een externe winkel offline is, mag onze app niet stoppen. We gebruiken technieken zoals:

- Retries (opnieuw proberen)
- Fallbacks (tijdelijke vervanging)
- Circuit breakers (automatisch stoppen bij herhaalde fouten)

## 3. **Personalisatie & Aanbevelingen**

## Categorie: User Experience / Intelligence / Performance

→ Gebruikers moeten relevante deals en games zien op basis van hun voorkeuren. Daarvoor gebruiken we gebruikersdata en slimme algoritmes.
