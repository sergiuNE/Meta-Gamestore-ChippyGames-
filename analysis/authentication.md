# Authenticatie Overzicht

## Werking:

- Gebruiker logt in met e-mail en wachtwoord
- Na succesvolle login wordt een **JWT token** teruggestuurd
- Bij elke API-aanvraag stuurt de gebruiker het token mee

## Rollen:

- **Gebruiker**: basis toegang
- **Curator**: extra rechten voor het cureren van content
- **Admin**: beheer van platform en gebruikers

## Security Best Practices:

- Tokens expireren na 1 uur
- Refresh tokens worden opgeslagen in veilige HTTP-only cookies

---
