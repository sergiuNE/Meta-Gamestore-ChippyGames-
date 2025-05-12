const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
const PORT = 3003;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("User Service is running!");
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

// Dummy user list uit database
app.get("/users", async (req, res) => {
  try {
    const [rows] = await retryQuery(() => pool.query("SELECT * FROM users"));
    res.json(rows);
  } catch (err) {
    console.error("Fout bij ophalen gebruikers:", err);
    res.status(500).json({ error: "Interne serverfout" });
  }
});

// Simpele fake login
app.post("/auth", async (req, res) => {
  const { mail, password } = req.body;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE mail = ? AND password = ?",
      [mail, password]
    );

    if (rows.length > 0) {
      res.json({
        success: true,
        message: "Ingelogd als gebruiker.",
        user: rows[0],
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Ongeldige gebruikersnaam of wachtwoord.",
      });
    }
  } catch (err) {
    console.error("Login fout:", err);
    res.status(500).json({ error: "Serverfout bij inloggen" });
  }
});

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
