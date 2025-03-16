import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddSponsorship = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    productName: "",
    description: "",
    companyEmail: "",
    budgetRange: "",
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://motoconnect.onrender.com/api/sponsorships", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add sponsorship");
      }

      setMessage("Sponsorship added successfully!");
      setError(null);
      setFormData({ companyName: "", productName: "", description: "", companyEmail: "", budgetRange: "" });
      
      setTimeout(() => {
        navigate("/sponsorships");
      }, 1000);
      
    } catch (err) {
      setError(err.message);
      setMessage(null);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 mb-6 border-2">
      <h2 className="text-2xl font-semibold mb-4">Add Sponsorship</h2>
      {message && <p className="text-green-600">{message}</p>}
      {error && <p className="text-red-600">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="companyEmail"
          placeholder="Company Email"
          value={formData.companyEmail}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="budgetRange"
          placeholder="Budget Range"
          value={formData.budgetRange}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Submit Sponsorship
        </button>
      </form>
    </div>
  );
};

export default AddSponsorship;
