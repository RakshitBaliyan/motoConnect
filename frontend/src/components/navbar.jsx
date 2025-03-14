import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedName = localStorage.getItem("loggedInUser");

    if (token) {
      setIsLoggedIn(true);
      setUsername(storedName || "User");
    } else {
      setIsLoggedIn(false);
      setUsername("");
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token"); 
    setTimeout(() => {
      navigate("/");
    }, 2000);
    // Remove username from local storage
    setIsLoggedIn(false);
      
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-300 text-black">
      <Link to="/" className="text-xl font-bold">MotoConnect</Link>

      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <span>Welcome, {username}</span>
          <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
        </div>
      ) : location.pathname !== "/signup" && location.pathname !== "/login" ? (
        <div className="flex gap-4">
          <Link to="/login" className="bg-blue-500 px-4 py-2 rounded">Login</Link>
          <Link to="/signup" className="bg-green-500 px-4 py-2 rounded">Signup</Link>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
