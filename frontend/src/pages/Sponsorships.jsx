import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sponsorships = () => {
  const [sponsorships, setSponsorships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSponsorships = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/get-sponsorships"); // ✅ Using the new API
        const data = await response.json();
        setSponsorships(data); // Store in state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching sponsorships:", error);
        setLoading(false);
      }
    };

    fetchSponsorships();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Available Sponsorships</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : sponsorships.length === 0 ? (
        <p className="text-center text-gray-500">No sponsorships available</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sponsorships.map((sponsorship) => (
            <Link key={sponsorship._id} to={`/get-sponsorships/${sponsorship._id}`}>
            <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">{sponsorship.companyName}</h3>
              <p className="text-gray-600 mt-1"><strong>Product:</strong> {sponsorship.productName}</p>
              <p className="text-gray-700 mt-1"><strong>Budget:</strong> {sponsorship.budgetRange}</p>
            </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sponsorships;
