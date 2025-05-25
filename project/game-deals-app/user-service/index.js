const express = require("express");
const cors = require("cors");
const pool = require("./db");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3003;

app.use(cors());
app.use(express.json());

async function retryQuery(queryFn, retries = 3, delay = 500) { //Retries
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

// POST /auth - fake login
app.post("/auth", async (req, res) => {
  const { mail, password } = req.body;

  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE mail = ?", [
      mail,
    ]);

    if (rows.length === 0) {
      return res
        .status(401)
        .json({
          success: false,
          message: "Ongeldige gebruikersnaam of wachtwoord.",
        });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({
          success: false,
          message: "Ongeldige gebruikersnaam of wachtwoord.",
        });
    }

    //in producte secret key in een .env of secret config zetten
    const token = jwt.sign({ id: user.id, email: user.mail }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.json({
      success: true,
      message: "Ingelogd.",
      token,
      user: { id: user.id, mail: user.mail }, // Beperk info
    });
  } catch (err) {
    console.error("Login fout:", err);
    res.status(500).json({ error: "Serverfout bij inloggen" });
  }
});

// Health
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.send("User Service is running!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`User service running on port ${PORT}`);
});
