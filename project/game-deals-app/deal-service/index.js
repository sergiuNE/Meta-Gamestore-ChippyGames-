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

app.get("/deals", async (req, res) => {
  try {
    const [rows] = await retryQuery(() => pool.query("SELECT * FROM deals"));

    res.json(rows);
  } catch (err) {
    console.error("Fout bij ophalen van deals:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Deal service running on port ${PORT}`);
});
