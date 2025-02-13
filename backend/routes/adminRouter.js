import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

// Hardcoded Admin Credentials
const ADMIN_EMAIL = "admin@123";
const ADMIN_PASSWORD = "admin@123";

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ message: "Admin Logged In", token });
  } else {
    res.status(401).json({ message: "Invalid Credentials" });
  }
});

export default router;
