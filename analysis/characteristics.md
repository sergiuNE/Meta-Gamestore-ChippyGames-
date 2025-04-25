# Karakteristieken van het systeem

## Algemene Karakteristieken

### 1. Performantie

Aangezien de data (kortingen, prijzen, aanbevelingen) van veel externe winkels komt en real-time updates vereist zijn, moet het systeem vlot reageren. Performantie is cruciaal voor een goede gebruikerservaring.

### 2. Beschikbaarheid

Omdat we afhankelijk zijn van externe winkels (Steam, Amazon, GOG...) en gebruikers notificaties verwachten, moet ons systeem **hoog beschikbaar** zijn. Fallbacks bij offline stores zijn noodzakelijk.

### 3. Schaalbaarheid

Het platform moet kunnen meegroeien naarmate er meer gebruikers, winkels of platforms bijkomen.

### 4. Onderhoudbaarheid

Componenten moeten afzonderlijk kunnen worden aangepast of vervangen zonder het volledige systeem te verstoren.

### 5. Beveiliging

Gebruikersdata (inloggegevens, collecties, aanbevelingen) moeten veilig worden opgeslagen en uitgewisseld.

---

# Driving Characteristics (belangrijkste 3)

## 1. **Realtime updaten van gegevens** (Performantie)

→ Deals kunnen snel verlopen, dus onze meta-winkel moet zo goed als live kunnen updaten. Daarom is performantie en caching een cruciale prioriteit.

## 2. **Resilience bij externe afhankelijkheden**

→ Als Amazon of de PlayStation Store tijdelijk offline is, mag onze applicatie niet crashen. Dus **resilience** (circuit breakers, retries, fallback) wordt een sleutelkarakteristiek.

## 3. **Personalisatie & Aanbevelingen**

→ Gebruikers moeten relevante aanbevelingen krijgen op basis van hun collectie. Dit vraagt **goede data-integratie** en **gebruikerscontext**.
