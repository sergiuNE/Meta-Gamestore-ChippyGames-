const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Geen token meegegeven" });

  jwt.verify(token, "SECRET_KEY", (err, user) => {
    if (err) return res.status(403).json({ error: "Ongeldige token" });
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
