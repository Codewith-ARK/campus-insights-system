// /pages/api/auth.js

import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function handler(req, res) {
  if (req.method === "POST" && req.body.username && req.body.password) {
    const { username, password } = req.body;
    // Fake login check - replace with your own validation logic
    if (username === "a_rehman_k" && password === "test123+") {
      const accessToken = jwt.sign({ username }, JWT_SECRET, { expiresIn: "15m" });
      const refreshToken = jwt.sign({ username }, JWT_SECRET, { expiresIn: "7d" });
      return res.status(200).json({ access: accessToken, refresh: refreshToken });
    }
    return res.status(401).json({ error: "Invalid credentials" });
  }
  if (req.method === "POST" && req.body.refresh) {
    try {
      const { refresh } = req.body;
      const decoded = jwt.verify(refresh, JWT_SECRET);
      const newAccessToken = jwt.sign({ username: decoded.username }, JWT_SECRET, { expiresIn: "15m" });
      return res.status(200).json({ access: newAccessToken });
    } catch (err) {
      return res.status(401).json({ error: "Invalid refresh token" });
    }
  }
  return res.status(405).json({ error: "Method not allowed" });
}

export default handler;
