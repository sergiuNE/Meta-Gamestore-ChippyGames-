const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
app.use(cors());

const games = [
  {
    id: 1,
    title: "Elden Ring",
    platforms: ["PC", "PlayStation 8", "PlayStation 5", "Xbox", "Nintendo"],
    genre: "Action",
    rating: 5,
    //price: "60.00€",
    //sale: "20%",
    saleFrom: "Amazon",
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

app.listen(PORT, () => {
  console.log(`Game service running on port ${PORT}`);
});
