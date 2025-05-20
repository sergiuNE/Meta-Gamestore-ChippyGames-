const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const axios = require("axios");

app.use(cors());

const games = [
  {
    id: 1,
    title: "Elden Ring",
    platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox", "Nintendo"],
    genre: "Action",
    rating: 5,
    //price: "60.00€",
    //sale: "20%",
    saleFrom: "Steam",
  },
  {
    id: 2,
    title: "Grand Theft Auto V",
    platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox", "Nintendo"],
    genre: "Action",
    rating: 4,
    //price: "45.00€",
    //sale: "25%",
    saleFrom: "MediaMarkt",
  },
];

app.get("/games", (req, res) => {
  const { title = "", platform = "" } = req.query;

  const filteredGames = games.filter((game) => {
    const matchesTitle = game.title.toLowerCase().includes(title.toLowerCase());
    const matchesPlatform =
      platform === "" || game.platforms.includes(platform);
    return matchesTitle && matchesPlatform;
  });

  res.json(filteredGames);
});

const DEAL_SERVICE_URL =
  process.env.DEAL_SERVICE_URL || "http://deal-service:80";

async function getDealsForGame(gameId) {
  try {
    const url = `${DEAL_SERVICE_URL}/deals?gameId=${gameId}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching deals for game ${gameId}:`, error.message);
    return [];
  }
}

// Games with deals endpoint
app.get("/games-with-deals", async (req, res) => {
  try {
    // Clone the games array
    const gamesWithDeals = JSON.parse(JSON.stringify(games));

    // Add deals to each game
    for (let game of gamesWithDeals) {
      const deals = await getDealsForGame(game.id);
      game.deals = deals;
    }

    res.json(gamesWithDeals);
  } catch (error) {
    console.error("Error fetching games with deals:", error);
    res.status(500).json({
      error: "Failed to fetch games with deals",
      message: error.message,
    });
  }
});

// Health
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

//Root
app.get("/", (req, res) => {
  res.send("Game Service is running!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Game service running on port ${PORT}`);
});
