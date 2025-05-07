const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
const PORT = 3004;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Deal Service is running!");
});

app.get("/deals", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM deals");
    res.json(rows);
  } catch (err) {
    console.error("Fout bij ophalen van deals:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Deal service running on port ${PORT}`);
});
