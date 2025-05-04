const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Laat verzoeken toe vanuit je frontend

app.get("/platforms", (req, res) => {
  res.json(["PC", "Playstation", "Xbox", "Nintendo"]);
});

app.listen(PORT, () => {
  console.log(`Platform service running on port ${PORT}`);
});
