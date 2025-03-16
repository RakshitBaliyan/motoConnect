import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SponsorshipDetails = () => {
  const { id } = useParams();
  const [sponsorship, setSponsorship] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://motoconnect.onrender.com/api/get-sponsorships/${id}`)
      .then((res) => res.json())
      .then((data) => setSponsorship(data))
      .catch((err) => console.error("Error fetching sponsorship details:", err));
  }, [id]);

  const handleApply = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login to apply for this sponsorship.");
      return;
    }

    // Handle application logic here
    alert("Application submitted successfully!");
  };

  if (!sponsorship) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold">{sponsorship.companyName}</h2>
      <p className="text-lg text-gray-700 mt-2">{sponsorship.productName}</p>
      <p className="mt-4">{sponsorship.description}</p>
      <p className="text-blue-600 font-medium mt-4">Budget: {sponsorship.budget}</p>
      <p className="text-gray-600 mt-2">Contact: {sponsorship.companyEmail}</p>

      <button
        onClick={handleApply}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Apply for Sponsorship
      </button>
    </div>
  );
};

export default SponsorshipDetails;
