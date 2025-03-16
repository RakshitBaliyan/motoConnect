const mongoose = require("mongoose");

const sponsorshipSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  productName: { type: String, required: true },
  description: { type: String, required: true },
  companyEmail: { type: String, required: true },
  budgetRange: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Sponsorship = mongoose.models.Sponsorship || mongoose.model('Sponsorship', sponsorshipSchema);
module.exports = Sponsorship;