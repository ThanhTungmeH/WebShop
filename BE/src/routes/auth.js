const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get( "/google",
  passport.authenticate("google", { scope: ["profile", "email"],prompt: "select_account" })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {

  const token = jwt.sign(
  {
    id: req.user.id,
    role: req.user.role || "user",
    email: req.user.email
  },
  process.env.JWT_SECRET,
  { expiresIn: "7d" }
);
     // Redirect ve FE de FE luu token + user va render UI
    const feUrl ="http://localhost:5173";
    const userEncoded = encodeURIComponent(JSON.stringify(req.user));
    const tokenEncoded = encodeURIComponent(token);
  return res.redirect(`${feUrl}/?token=${tokenEncoded}&user=${userEncoded}`);
  }
);

module.exports = router;