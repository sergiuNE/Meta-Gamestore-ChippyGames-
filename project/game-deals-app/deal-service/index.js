const express = require("express");
const cors = require("cors");
const pool = require("./db");
const authenticateToken = require("./middleware/auth");

const app = express();
const PORT = 3004;

app.use(cors());
app.use(express.json());

async function retryQuery(queryFn, retries = 3, delay = 500) {
  for (let i = 0; i < retries; i++) {
    try {
      return await queryFn();
    } catch (err) {
      if (i === retries - 1) throw err;
      console.warn(`Retrying query... (${i + 1})`);
      await new Promise((res) => setTimeout(res, delay));
    }
  }
}

app.get(
  "/deals",
  /*authenticateToken,*/ async (req, res) => {
    try {
      const { gameId } = req.query;

      let query = "SELECT * FROM deals";
      let values = [];

      if (gameId !== undefined) {
        const parsedGameId = parseInt(gameId, 10);
        if (!Number.isInteger(parsedGameId)) {
          return res.status(400).json({ error: "Invalid gameId" });
        }

        query += " WHERE gameId = ?";
        values.push(parsedGameId);

        console.log("Querying deals for gameId:", parsedGameId);
      }

      const [rows] = await retryQuery(() => pool.query(query, values));
      res.json(rows);
    } catch (err) {
      console.error("Fout bij ophalen van deals:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

app.get(
  "/deals/:id",
  /*authenticateToken,*/ async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const [rows] = await pool.query("SELECT * FROM deals WHERE id = ?", [id]);

      if (rows.length === 0) {
        return res.status(404).json({ error: "Deal not found" });
      }

      res.json(rows);
    } catch (err) {
      console.error("Fout bij ophalen van deal:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.send("Deal Service is running!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Deal service running on port ${PORT}`);
});
