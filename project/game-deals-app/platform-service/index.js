const express = require("express");
const cors = require("cors");
const pool = require("./db");
const authenticateToken = require("./middleware/auth");

const app = express();
const PORT = 3002;

app.use(cors());

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
  "/platforms",
  /*authenticateToken,*/ async (req, res) => {
    try {
      const [rows] = await retryQuery(() =>
        pool.query("SELECT name FROM tbl_platform")
      );

      res.json(rows);
    } catch (err) {
      console.error("Fout bij ophalen platforms:", err);
      res.status(500).json({ error: "Interne serverfout" });
    }
  }
);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.send("Platform Service is running!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Platform service draait op poort ${PORT}`);
});
