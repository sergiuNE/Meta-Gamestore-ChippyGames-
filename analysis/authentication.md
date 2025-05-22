# Deze sectie maakt deel uit van de technische implementatie

# Authenticatie Overzicht

## Werking van het authenticatieproces

- Een gebruiker logt in met e-mail en wachtwoord via de `user-service`.
- Bij succesvolle login ontvangt de gebruiker een **JWT-token** (JSON Web Token), dat fungeert als digitale toegangssleutel.
- De client stuurt dit token bij elke API-aanvraag mee in de `Authorization` header:  
  `Authorization: Bearer <token>`.
- Andere services controleren dit token met middleware (`authenticateToken`).

## Rollen in het systeem

- **Gebruiker**: kan zoeken, collecties maken, deals bekijken.
- **Curator**: kan extra content beheren, zoals media of aanbevelingen.
- **Admin**: heeft toegang tot beheerfuncties en gebruikersbeheer.

## Beveiligingsmaatregelen

- Tokens verlopen na 1 uur (`expiresIn: "1h"`).
- Wachtwoorden worden veilig opgeslagen met `bcrypt` hashing.
- Refresh tokens kunnen in een echte productieomgeving opgeslagen worden in **HTTP-only cookies**. (nu nog niet geïmplementeerd)
- De `SECRET_KEY` voor JWT moet in productie worden opgeslagen in een `.env` bestand of secrets-manager.

## Middleware Implementatie

Elke service (zoals Game, Deal en Platform Service) heeft een eigen `auth.js` middleware:

```js
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Geen token meegegeven" });

  jwt.verify(token, "SECRET_KEY", (err, user) => {
    if (err) return res.status(403).json({ error: "Ongeldige token" });
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
```
