const express = require("express");
const router = express.Router();
const { postSponsorship } = require("../controllers/SponsorshipController");


router.post("/", postSponsorship);

module.exports = router;