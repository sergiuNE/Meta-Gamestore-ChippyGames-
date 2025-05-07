FROM node:20-alpine

WORKDIR /app

# Kopieer package.json en package-lock.json (of yarn.lock)
COPY package*.json ./

# Installeer dependencies
RUN npm install

# Kopieer de rest van de code
COPY . .

EXPOSE 5173

# Voor development met Vite (expliciet host instellen voor toegang van buitenaf)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]