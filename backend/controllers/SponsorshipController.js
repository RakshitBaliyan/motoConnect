const Sponsorship = require("../models/sponsership");

const postSponsorship = async (req, res) => {
  try {
    const { companyName, productName, description, companyEmail, budgetRange } = req.body;
    if (!companyName || !productName || !description || !companyEmail || !budgetRange) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const sponsorship = new Sponsorship({
      companyName,
      productName,
      description,
      companyEmail,
      budgetRange
    });

    await sponsorship.save();
    res.status(201).json({ message: "Sponsorship posted successfully", sponsorship });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = { postSponsorship };