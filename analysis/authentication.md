# Dit document hoort bij de implementatiefase

# Authenticatie Overzicht

## Werking:

- Een gebruiker logt in met e-mail en wachtwoord.
- Na een geslaagde login krijgt de gebruiker een **JWT-token (JSON Web Token)** (een soort digitale sleutel).
- Bij elke aanvraag naar de API wordt dat token meegestuurd in de headers.

## Rollen in het systeem

- **Gebruiker**: kan zoeken, collecties maken, deals bekijken...
- **Curator**: kan extra content beheren, zoals media of aanbevelingen.
- **Admin**: heeft toegang tot beheerfuncties en gebruikersbeheer.

## Beveiliging

- Tokens verlopen na 1 uur, zodat ze niet te lang bruikbaar blijven.
- Refresh tokens worden veilig opgeslagen in cookies die niet toegankelijk zijn voor JavaScript (HTTP-only).

---
