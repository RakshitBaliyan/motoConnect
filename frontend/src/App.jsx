import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Sponsorships from "./pages/Sponsorships";
import AddSponsorship from "./pages/AddSponsorship";
import SponsorshipDetails from "./pages/SponsorshipDetails";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sponsorships" element={<Sponsorships/>}/>
        <Route path="/add-sponsorship" element={< AddSponsorship />}/>
        <Route path="/get-sponsorships/:id" element={<SponsorshipDetails />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
