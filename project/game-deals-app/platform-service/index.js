const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
const PORT = 3002;

app.use(cors());

app.get("/platforms", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT name FROM tbl_platform");
    res.json(rows);
  } catch (err) {
    console.error("Fout bij ophalen platforms:", err);
    res.status(500).json({ error: "Interne serverfout" });
  }
});

app.listen(PORT, () => {
  console.log(`Platform service draait op poort ${PORT}`);
});
