const express = require("express");
const router = express.Router();
const Sponsorship = require("../models/Adds"); // Import the model

// ✅ GET API to fetch all sponsorships (Separate API)
router.get("/get-sponsorships", async (req, res) => {
  try {
    const sponsorships = await Sponsorship.find(); // Fetch all sponsorships from DB
    res.status(200).json(sponsorships);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sponsorships" });
  }
});

module.exports = router;
